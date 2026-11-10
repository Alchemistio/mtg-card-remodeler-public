# Source inventory manifests

These CSV files are exhaustive Git metadata inventories for the five source collections at repository root. They do not represent the curated/runtime asset library.

Reference commit: `2ada6c1342a61763a849cd869937dfad6245e220` (2026-11-10).

Columns: `path,size_bytes,git_blob_sha,extension`. Paths are repository-relative. SHA is Git's blob SHA (not a SHA-256 checksum).

| Collection | Files | Shards |
|---|---:|---|
| Full-Magic-Pack-main | 0 |  |
| Big Pack | 0 |  |
| MtgCard Builder | 0 |  |
| MANA | 0 |  |
| Fonts | 0 |  |

Do not remove identical SHA paths without checking package-level dependencies. For runtime integration, use the schema in [ASSETS_REFERENCE.md](../ASSETS_REFERENCE.md) and populate only visually and legally approved assets.
