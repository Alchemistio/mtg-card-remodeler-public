# Index des collections d'assets

> Index des sources présentes dans `Assets/`. Les descriptions structurelles ne valent pas validation visuelle, technique ou juridique.

## Vue d'ensemble

| ID | Collection | Fichiers | Volume indicatif | Rôle |
|---|---|---:|---:|---|
| SRC-001 | [Full-Magic-Pack-main](../Full-Magic-Pack-main/) | 34 441 | 934,7 Mo | Bibliothèque de styles et packages MSE |
| SRC-002 | [Big Pack](../Big%20Pack/) | 1 996 | 441,7 Mo | Styles et ressources historiques/alternatives |
| SRC-003 | [MtgCard Builder](../MtgCard%20Builder/) | 610 | 375 Mo | Ressources graphiques, Regular, Token et archives |
| SRC-004 | [MANA](../MANA/) | 314 | 2,2 Mo | Symboles de mana et fontes |
| SRC-005 | [Fonts](../Fonts/) | 10 | 0,57 Mo | Polices et ressources typographiques |

## SRC-001 — Full-Magic-Pack-main

**Chemin :** `Assets/Full-Magic-Pack-main/`

| Type de package | Nombre |
|---|---:|
| `.mse-style` | 371 |
| `.mse-include` | 32 |
| `.mse-symbol-font` | 76 |
| `.mse-locale` | 13 |
| `.mse-game` | 7 |
| `.mse-export-template` | 22 |

Rôle probable : cadres de cartes, composants graphiques, glyphes, règles MSE, localisations et exports. Préserver les packages comme unités autonomes et examiner leurs dépendances.

## SRC-002 — Big Pack

**Chemin :** `Assets/Big Pack/`

Styles de cartes, cadres alternatifs/historiques, composants et ressources volumineuses (dont PFI). À comparer à Full-Magic-Pack pour repérer les variantes uniques. Le format et les dépendances des PFI restent à identifier.

## SRC-003 — MtgCard Builder

**Chemin :** `Assets/MtgCard Builder/`

| Sous-collection | Fichiers | Rôle |
|---|---:|---|
| `Archive/` | 23 | Archives ZIP à inventorier |
| `Regular/` | 459 | Ressources graphiques de cartes et composants |
| `Token/` | 128 | Ressources dédiées aux tokens |

Sous-dossiers repérés dans `Regular/` : `Regular Frame/`, `EnchantmentFrame Nyx/`, `Mana Symbol/`. Familles repérées dans les noms/archives : Battle, Class, Cases, Prototype, Rooms, Stations, Spree, Lands, Attraction, Legend Crown et Holo Stamps. Les fichiers `asset N.png/svg` exigent une revue visuelle avant identification. Les 11 fichiers HTML et les ZIP doivent être contrôlés séparément.

## SRC-004 — MANA

**Chemin :** `Assets/MANA/`

| Sous-collection | Rôle / constat |
|---|---|
| `Flat/` | PNG de symboles mana nommés, incluant couleurs, incolore, hybrides, phyrexians et spéciaux |
| `Circleless/` | Variantes sans cercle |
| `Shifted/` | Variantes de glyphes/symboles |
| `SVG/` | Six SVG : Blanc, Bleu, Noir, Rouge, Vert, Less |

Les six SVG de `SVG/` déclarent un viewBox commun `0 0 82.56 82.56`. Cela confirme une cohérence de canevas, pas une identité visuelle ou un alignement optique. Vérifier couverture et homogénéité de chaque sous-collection avant sélection.

## SRC-005 — Fonts

**Chemin :** `Assets/Fonts/`

Dix fichiers de polices. Les noms observés incluent Magic Symbols 2011, MagicSymbols2008, Matrix, Matrix Bold Small Caps, MPlantin, PLA et Relay Medium. Vérifier famille interne, poids, glyphes, licence, droits d'incorporation et redistribution.

## Index fonctionnel cible

| ID | Famille | Sources candidates |
|---|---|---|
| FRM-001 | Cadres classiques | Full-Magic-Pack, Big Pack |
| FRM-002 | Cadres modernes / M15 | Full-Magic-Pack, Big Pack |
| FRM-003 | Showcase / borderless / full-art | Full-Magic-Pack, MtgCard Builder |
| FRM-004 | Cadres spéciaux (Saga, Battle, Class, etc.) | Full-Magic-Pack, MtgCard Builder |
| CMP-001 | Bordures, couronnes, masques | Full-Magic-Pack, MtgCard Builder |
| CMP-002 | Textures et fonds | Full-Magic-Pack, Big Pack |
| CMP-003 | Filigranes, tampons et ornements | Full-Magic-Pack, Big Pack |
| SYM-001 | Mana standard | MANA, Full-Magic-Pack |
| SYM-002 | Mana hybride / phyrexian | MANA, Full-Magic-Pack |
| SYM-003 | Symboles de types, loyauté, compteurs | Full-Magic-Pack, MtgCard Builder |
| TOK-001 | Tokens et cadres de tokens | MtgCard Builder, Full-Magic-Pack |
| FNT-001 | Typographie de carte | Fonts, Big Pack, Full-Magic-Pack |

## Outil d'inventaire détaillé

Le script [`build_asset_catalog.py`](../../scripts/assets/build_asset_catalog.py) génère localement les métadonnées de chaque fichier et les planches de contact. Voir [la référence d'audit](../../docs/ASSET_AUDIT_REFERENCE.md#7-génération-du-catalogue-visuel) pour la commande.

## Règles d'utilisation

- Les volumes sont indicatifs et peuvent évoluer.
- Les familles fonctionnelles sont des destinations proposées, pas un inventaire exhaustif.
- Le statut d'une ressource doit être vérifié dans `assets.manifest.json`.
- Ne pas intégrer ni redistribuer une ressource sur la seule base de sa présence dans ce dépôt.
- Mettre à jour cet index après toute extraction, conversion ou décision de licence.


## Inventaires individuels

Le manifeste et les inventaires par fichier couvrent désormais les 37 371 fichiers des cinq collections source. Les inventaires sont répartis ainsi :
- Full-Magic-Pack : dix parties, 34 441 fiches.
- Big Pack : 1 996 fiches.
- MtgCard Builder : 610 fiches.
- MANA : 314 fiches.
- Fonts : 10 fiches.

Voir `assets.manifest.json` et les fichiers `inventory-*.json`. Les catégories restent heuristiques et les statuts de licence en attente. Les Git blob SHA ne remplacent pas le SHA-256 du contenu.
