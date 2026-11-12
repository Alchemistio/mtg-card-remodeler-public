#!/usr/bin/env python3
"""Interactive, self-cleaning launcher for the MTG asset audit.

Requires Python 3.10+ already installed. Third-party packages are installed into
a temporary virtual environment inside the selected workspace and removed when
the audit exits. Generated reports remain in <workspace>/catalog.
"""
from __future__ import annotations

import os
import shutil
import subprocess
import sys
import venv
from pathlib import Path


def choose_workspace() -> Path | None:
    """Use a native folder picker when Tk is available, otherwise ask in console."""
    try:
        import tkinter as tk
        from tkinter import filedialog

        root = tk.Tk()
        root.withdraw()
        root.attributes("-topmost", True)
        selected = filedialog.askdirectory(title="Choisir le dossier de travail de l'audit MTG")
        root.destroy()
        if selected:
            return Path(selected).expanduser().resolve()
    except Exception:
        pass

    print("\nChoisissez un dossier de travail pour les résultats et fichiers temporaires.")
    raw = input("Chemin du dossier (vide pour annuler) : ").strip().strip('"')
    return Path(raw).expanduser().resolve() if raw else None


def main() -> int:
    repo_root = Path(__file__).resolve().parents[2]
    asset_root = repo_root / "Assets"
    generator = Path(__file__).resolve().with_name("build_asset_catalog.py")
    if not asset_root.is_dir():
        print(f"ERREUR : dossier Assets introuvable : {asset_root}")
        return 2
    if sys.version_info < (3, 10):
        print("Python 3.10 ou supérieur est requis. Installez Python une seule fois, puis relancez.")
        return 2

    workspace = choose_workspace()
    if workspace is None:
        print("Opération annulée.")
        return 1
    workspace.mkdir(parents=True, exist_ok=True)

    # Never let the output or temporary environment become part of the source scan.
    try:
        workspace.relative_to(asset_root.resolve())
    except ValueError:
        pass
    else:
        print("ERREUR : choisissez un dossier de travail situé hors de Assets/.")
        return 2

    output = workspace / "catalog"
    runtime = workspace / ".asset-audit-runtime"
    if runtime.exists():
        shutil.rmtree(runtime)

    requirements = ["Pillow", "CairoSVG"]
    try:
        print(f"\nDossier de travail : {workspace}")
        print(f"Résultats conservés dans : {output}")
        print("\n[1/3] Création d'un environnement Python temporaire…")
        venv.EnvBuilder(with_pip=True, clear=True).create(runtime)
        if os.name == "nt":
            python = runtime / "Scripts" / "python.exe"
        else:
            python = runtime / "bin" / "python"

        print("[2/3] Installation des dépendances dans cet environnement isolé…")
        subprocess.run([str(python), "-m", "pip", "install", "--disable-pip-version-check", *requirements], check=True)

        print("[3/3] Génération du catalogue et des planches de contact…")
        subprocess.run(
            [str(python), str(generator), "--root", str(asset_root), "--out", str(output)],
            cwd=repo_root,
            check=True,
        )
        print("\nAudit terminé. Les résultats sont conservés dans :")
        print(output)
        return 0
    except subprocess.CalledProcessError as exc:
        print(f"\nERREUR : une étape a échoué (code {exc.returncode}).")
        return exc.returncode or 1
    except Exception as exc:
        print(f"\nERREUR : {exc}")
        return 1
    finally:
        if runtime.exists():
            print("\nNettoyage de l'environnement temporaire et désinstallation des dépendances…")
            shutil.rmtree(runtime, ignore_errors=True)
            print("Nettoyage terminé. Python et les logiciels déjà installés sur votre ordinateur n'ont pas été modifiés.")


if __name__ == "__main__":
    raise SystemExit(main())
