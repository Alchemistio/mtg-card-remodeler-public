#!/usr/bin/env python3
"""Validate the checked-in source-file inventories (stdlib only).

Usage:
  python scripts/assets/validate_asset_inventory.py
  python scripts/assets/validate_asset_inventory.py --root .
"""
from __future__ import annotations
import argparse, json, re, sys
from pathlib import Path

INVENTORY_DIR = Path("Assets/METADATA")
PATTERN = "inventory-*.json"
SHA_RE = re.compile(r"^[0-9a-f]{40}$")
VALID_STATUSES = {"source-only", "needs-visual-review", "needs-license-review", "ready-for-conversion", "normalized", "integrated", "rejected"}

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=None, help="Optional repository root; also verifies that each source path exists.")
    args = parser.parse_args()
    base = args.root.resolve() if args.root else Path.cwd()
    directory = base / INVENTORY_DIR
    paths = sorted(directory.glob(PATTERN))
    errors = []
    ids, source_paths = set(), set()
    total = 0
    for inventory_path in paths:
        try:
            payload = json.loads(inventory_path.read_text(encoding="utf-8"))
        except Exception as exc:
            errors.append(f"{inventory_path}: invalid JSON: {exc}")
            continue
        if payload.get("schemaVersion") != "1.0.0":
            errors.append(f"{inventory_path}: unsupported schemaVersion")
        if payload.get("manifestType") != "per-file-source-inventory":
            errors.append(f"{inventory_path}: unexpected manifestType")
        records = payload.get("records")
        if not isinstance(records, list):
            errors.append(f"{inventory_path}: records must be an array")
            continue
        if payload.get("fileCount") != len(records):
            errors.append(f"{inventory_path}: fileCount does not match records length")
        for record in records:
            total += 1
            for field in ("id", "sourcePath", "gitBlobSha", "candidateKind", "status", "licenseStatus"):
                if not record.get(field):
                    errors.append(f"{inventory_path}: record missing {field}")
            rid = record.get("id")
            path = record.get("sourcePath")
            if rid in ids:
                errors.append(f"duplicate asset id: {rid}")
            ids.add(rid)
            if path in source_paths:
                errors.append(f"duplicate source path: {path}")
            source_paths.add(path)
            if not SHA_RE.fullmatch(record.get("gitBlobSha", "")):
                errors.append(f"{inventory_path}: invalid Git blob SHA for {path}")
            if record.get("status") not in VALID_STATUSES:
                errors.append(f"{inventory_path}: invalid status for {path}")
            if record.get("licenseStatus") not in {"unknown", "pending-review", "verified", "not-for-redistribution"}:
                errors.append(f"{inventory_path}: invalid licenseStatus for {path}")
            if args.root and path and not (base / path).is_file():
                errors.append(f"missing source file: {path}")
    print(json.dumps({"inventoryFiles": len(paths), "records": total, "uniqueIds": len(ids), "uniqueSourcePaths": len(source_paths), "errors": errors}, indent=2))
    return 1 if errors else 0

if __name__ == "__main__":
    raise SystemExit(main())
