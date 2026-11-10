#!/usr/bin/env python3
"""Build a read-only asset catalogue and contact sheets for MTG Card Remodeler.

Usage:
  python scripts/assets/build_asset_catalog.py --root Assets --out /tmp/mtg-assets-catalog

The script never renames, moves, edits, or deletes source files. Pillow is required
for raster dimensions/contact sheets. SVG dimensions/viewBox are read with the
standard library; SVG thumbnails are rendered only when CairoSVG is installed.
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import math
import re
import sys
import zipfile
from collections import Counter, defaultdict
from pathlib import Path
from xml.etree import ElementTree as ET

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp", ".tif", ".tiff"}
VECTOR_EXTS = {".svg"}
ARCHIVE_EXTS = {".zip"}
FONT_EXTS = {".ttf", ".otf", ".woff", ".woff2"}
TEXT_EXTS = {".mse-style", ".mse-include", ".mse-symbol-font", ".mse-game", ".mse-locale", ".mse-export-template", ".html", ".css", ".json", ".txt"}


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def svg_info(path: Path) -> dict:
    result = {"width": None, "height": None, "viewBox": None, "svgParseError": None}
    try:
        root = ET.parse(path).getroot()
        for key in ("viewBox", "viewbox"):
            if root.attrib.get(key):
                result["viewBox"] = root.attrib[key]
                break
        for key in ("width", "height"):
            raw = root.attrib.get(key)
            if raw:
                match = re.match(r"^\s*([0-9.]+)", raw)
                result[key] = float(match.group(1)) if match else raw
        if (result["width"] is None or result["height"] is None) and result["viewBox"]:
            nums = re.split(r"[ ,]+", result["viewBox"].strip())
            if len(nums) == 4:
                result["width"] = result["width"] or float(nums[2])
                result["height"] = result["height"] or float(nums[3])
    except Exception as exc:
        result["svgParseError"] = str(exc)
    return result


def classify(path: Path, root: Path) -> str:
    rel = path.relative_to(root).as_posix().lower()
    parts = rel.split("/")
    if "mana" in rel or "symbol" in rel:
        return "Symbols"
    if "token" in parts or "/token" in rel:
        return "Tokens"
    if any(word in rel for word in ("frame", "border", "showcase", "borderless", "nyx")):
        return "Frames"
    if path.suffix.lower() in FONT_EXTS:
        return "Fonts"
    if path.suffix.lower() in IMAGE_EXTS | VECTOR_EXTS:
        return "Components (unclassified)"
    return "Other / source package"


def make_contact_sheets(records: list[dict], out: Path, root: Path, per_sheet: int, thumb: tuple[int, int]) -> list[dict]:
    try:
        from PIL import Image, ImageDraw
    except ImportError:
        print("Pillow unavailable: raster contact sheets skipped.", file=sys.stderr)
        return []
    try:
        import cairosvg
    except ImportError:
        cairosvg = None

    candidates = [r for r in records if Path(r["sourcePath"]).suffix.lower() in IMAGE_EXTS | VECTOR_EXTS]
    results = []
    for category in sorted({r["candidateCategory"] for r in candidates}):
        group = [r for r in candidates if r["candidateCategory"] == category]
        for sheet_index in range(math.ceil(len(group) / per_sheet)):
            batch = group[sheet_index * per_sheet:(sheet_index + 1) * per_sheet]
            cols = 5
            cell_w, cell_h = thumb[0] + 24, thumb[1] + 54
            rows = math.ceil(len(batch) / cols)
            sheet = Image.new("RGB", (cols * cell_w, rows * cell_h), "white")
            draw = ImageDraw.Draw(sheet)
            for i, record in enumerate(batch):
                src = root / record["sourcePath"]
                img = None
                try:
                    if src.suffix.lower() == ".svg":
                        if cairosvg is None:
                            continue
                        png = cairosvg.svg2png(url=str(src), output_width=thumb[0], output_height=thumb[1])
                        from io import BytesIO
                        img = Image.open(BytesIO(png)).convert("RGBA")
                    else:
                        img = Image.open(src).convert("RGBA")
                    img.thumbnail(thumb)
                    x = (i % cols) * cell_w + (cell_w - img.width) // 2
                    y = (i // cols) * cell_h + 6
                    sheet.paste(img, (x, y), img)
                    label = Path(record["sourcePath"]).name
                    draw.text(((i % cols) * cell_w + 6, (i // cols) * cell_h + thumb[1] + 12), label[:34], fill="black")
                    draw.text(((i % cols) * cell_w + 6, (i // cols) * cell_h + thumb[1] + 29), f'{record.get("width")} × {record.get("height")}', fill="gray")
                except Exception as exc:
                    record["thumbnailError"] = str(exc)
            safe = re.sub(r"[^a-z0-9]+", "-", category.lower()).strip("-")
            target = out / "contact-sheets" / f"{safe}-{sheet_index + 1:03d}.jpg"
            target.parent.mkdir(parents=True, exist_ok=True)
            sheet.save(target, quality=88)
            results.append({"category": category, "path": target.as_posix(), "items": len(batch)})
    return results


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path("Assets"))
    parser.add_argument("--out", type=Path, default=Path("asset-catalog-output"))
    parser.add_argument("--sheet-size", type=int, default=50)
    parser.add_argument("--thumb-width", type=int, default=180)
    parser.add_argument("--thumb-height", type=int, default=220)
    args = parser.parse_args()
    root = args.root.resolve()
    out = args.out.resolve()
    if not root.is_dir():
        parser.error(f"Asset root does not exist: {root}")
    out.mkdir(parents=True, exist_ok=True)

    records = []
    extensions = Counter()
    duplicate_map = defaultdict(list)
    archives = []
    for path in sorted(p for p in root.rglob("*") if p.is_file()):
        ext = path.suffix.lower() or "[no extension]"
        extensions[ext] += 1
        rel = path.relative_to(root).as_posix()
        record = {
            "sourcePath": rel,
            "name": path.name,
            "format": ext,
            "sizeBytes": path.stat().st_size,
            "sha256": sha256(path),
            "candidateCategory": classify(path, root),
            "status": "needs-visual-review" if ext in IMAGE_EXTS | VECTOR_EXTS else "source-only",
            "licenseStatus": "pending-review",
        }
        if ext in IMAGE_EXTS:
            try:
                from PIL import Image
                with Image.open(path) as image:
                    record.update({"width": image.width, "height": image.height, "mode": image.mode, "hasAlpha": "A" in image.getbands()})
            except ImportError:
                record["metadataNote"] = "Install Pillow to inspect raster dimensions."
            except Exception as exc:
                record["imageReadError"] = str(exc)
        elif ext in VECTOR_EXTS:
            record.update(svg_info(path))
        elif ext in ARCHIVE_EXTS:
            try:
                with zipfile.ZipFile(path) as archive:
                    members = archive.infolist()
                    record["archive"] = {"memberCount": len(members), "uncompressedBytes": sum(x.file_size for x in members), "sampleMembers": [x.filename for x in members[:20]]}
            except Exception as exc:
                record["archiveError"] = str(exc)
            archives.append(record)
        records.append(record)
        duplicate_map[record["sha256"]].append(rel)

    sheets = make_contact_sheets(records, out, root, args.sheet_size, (args.thumb_width, args.thumb_height))
    duplicates = [{"sha256": key, "paths": paths} for key, paths in duplicate_map.items() if len(paths) > 1]
    summary = {
        "generatedBy": "scripts/assets/build_asset_catalog.py",
        "root": str(root),
        "fileCount": len(records),
        "extensions": dict(sorted(extensions.items())),
        "candidateCategories": dict(Counter(r["candidateCategory"] for r in records)),
        "duplicateGroups": len(duplicates),
        "duplicatePaths": sum(len(x["paths"]) for x in duplicates),
        "archiveCount": len(archives),
        "contactSheets": sheets,
        "limitations": [
            "Category assignment is heuristic and must be reviewed.",
            "Visual inspection is not automated; contact sheets are review aids only.",
            "License status is never inferred from file presence.",
            "ZIP member listings are not extracted.",
            "Source files are never modified.",
        ],
    }
    (out / "assets.catalog.json").write_text(json.dumps({"summary": summary, "assets": records, "duplicates": duplicates}, ensure_ascii=False, indent=2), encoding="utf-8")
    with (out / "assets.catalog.csv").open("w", newline="", encoding="utf-8-sig") as stream:
        fields = ["sourcePath", "name", "format", "sizeBytes", "width", "height", "viewBox", "sha256", "candidateCategory", "status", "licenseStatus"]
        writer = csv.DictWriter(stream, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(records)
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
