# Lanceur autonome d'audit des assets

## Windows — utilisation recommandée

Double-cliquer sur `run_asset_audit.bat` (ou lancer `python run_asset_audit.py`).

1. Une fenêtre permet de choisir le dossier de travail.
2. Le lanceur crée un environnement Python isolé dans ce dossier.
3. Il installe automatiquement Pillow et CairoSVG dans cet environnement temporaire.
4. Il exécute le catalogue sur le dossier source `Assets/` du dépôt.
5. Il supprime l'environnement temporaire, y compris les dépendances installées.
6. Il conserve les résultats dans `<dossier choisi>/catalog/`.

Le catalogue comprend `assets.catalog.json`, `assets.catalog.csv` et `contact-sheets/`.
Le dossier choisi doit être situé en dehors de `Assets/` afin que les résultats ne soient pas réinventoriés comme sources.

## Prérequis

- Python 3.10 ou supérieur doit être installé une fois sur l'ordinateur.
- Une connexion Internet est nécessaire pendant l'installation temporaire des dépendances.
- L'utilisateur doit disposer des droits d'écriture dans le dossier choisi.

Le lanceur ne tente jamais d'installer ou de désinstaller Python lui-même. Il ne modifie pas l'installation Python globale, les packages d'autres projets, ni les fichiers source. Si l'audit échoue ou est interrompu normalement, le nettoyage de l'environnement temporaire est exécuté. En cas d'arrêt forcé de l'ordinateur ou de fermeture brutale du processus, le dossier `.asset-audit-runtime` peut subsister ; il peut alors être supprimé manuellement sans toucher aux résultats `catalog/`.

## Mode avancé

Le générateur existant peut toujours être lancé directement avec ses options `--root` et `--out`, si les dépendances sont déjà disponibles dans l'environnement Python utilisé.
