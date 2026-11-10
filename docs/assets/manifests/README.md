# Inventaires techniques des sources Assets

Ces fichiers CSV constituent l'inventaire exhaustif des cinq collections sources situées sous `Assets/`. Ils ne représentent pas la bibliothèque runtime normalisée.

Snapshot : branche `main`, inventaire effectué le 2026-11-10. Les sources sont restées inchangées pendant la création des documents.

Colonnes : `path,size_bytes,git_blob_sha,extension`. Les chemins sont relatifs à la racine du dépôt. Le SHA est l'identifiant Git du blob, pas un checksum SHA-256.

| Collection | Fichiers | Volume (Mo) | Fichiers CSV |
|---|---:|---:|---|
| Full-Magic-Pack-main | 34 441 | 934,66 | [01](./full-magic-pack-main-01.csv) · [02](./full-magic-pack-main-02.csv) · [03](./full-magic-pack-main-03.csv) · [04](./full-magic-pack-main-04.csv) · [05](./full-magic-pack-main-05.csv) · [06](./full-magic-pack-main-06.csv) · [07](./full-magic-pack-main-07.csv) · [08](./full-magic-pack-main-08.csv) |
| Big Pack | 1 996 | 441,74 | [CSV](./big-pack-01.csv) |
| MtgCard Builder | 610 | 375,04 | [CSV](./mtgcard-builder-01.csv) |
| MANA | 314 | 2,24 | [CSV](./mana-01.csv) |
| Fonts | 10 | 0,57 | [CSV](./fonts-01.csv) |

Total : **37 371 fichiers** et environ **1,754 Go**. Les deux fichiers de documentation présents sous `Assets/METADATA` ne font pas partie des cinq collections et sont exclus.

Ne supprimez pas les chemins ayant un SHA identique sans vérifier l'autonomie et les dépendances des packages MSE. Pour les ressources runtime, se reporter au schéma défini dans [ASSETS_REFERENCE.md](../ASSETS_REFERENCE.md) et n'intégrer que des ressources validées visuellement et juridiquement.
