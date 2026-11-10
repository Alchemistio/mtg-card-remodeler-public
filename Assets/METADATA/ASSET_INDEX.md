# Index des collections d'assets

> Index des sources actuellement présentes dans `Assets/`. Les descriptions de contenu sont basées sur l'arborescence Git et les formats observés. Une collection indexée n'est pas automatiquement validée pour intégration ou redistribution.

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

Contenu structurel relevé dans `data/` :

| Type de package | Nombre de dossiers |
|---|---:|
| `.mse-style` | 371 |
| `.mse-include` | 32 |
| `.mse-symbol-font` | 76 |
| `.mse-locale` | 13 |
| `.mse-game` | 7 |
| `.mse-export-template` | 22 |

**Rôle probable :** cadres de cartes, composants graphiques, glyphes, règles de jeu MSE, localisations et exports.

**À inspecter :** fichiers de configuration de styles, dépendances `.mse-include`, ressources graphiques référencées, polices, scripts et conditions de licence. Préserver les packages MSE comme unités autonomes.

## SRC-002 — Big Pack

**Chemin :** `Assets/Big Pack/`

**Contenu recensé :** styles de cartes, cadres alternatifs/historiques, composants et ressources de grande taille (dont fichiers PFI).

**Rôle probable :** compléter la couverture des cadres et conserver les variantes absentes de Full-Magic-Pack.

**À inspecter :** contenu et format réel des PFI, versions des styles, doublons visuels et dépendances de packages.

## SRC-003 — MtgCard Builder

**Chemin :** `Assets/MtgCard Builder/`

| Sous-collection | Fichiers | Rôle |
|---|---:|---|
| `Archive/` | 23 | Archives ZIP à inventorier individuellement |
| `Regular/` | 459 | Ressources graphiques de cartes et composants |
| `Token/` | 128 | Ressources dédiées aux tokens |

**Familles identifiées dans les noms/archives :** Battle, Class, Cases, Prototype, Rooms, Stations, Spree, Lands, Attraction, Legend Crown et Holo Stamps.

**À inspecter :** noms génériques `asset N.png/svg`, 11 pages HTML repérées dans la collection, contenu des ZIP, dimensions, transparences, qualité et droits d'utilisation.

## SRC-004 — MANA

**Chemin :** `Assets/MANA/`

| Sous-collection | Rôle |
|---|---|
| `Flat/` | Symboles mana en style plein |
| `Circleless/` | Symboles sans cercle |
| `Shifted/` | Variantes de glyphes/symboles |
| `SVG/` | Symboles vectoriels |

**Couverture attendue :** couleurs W/U/B/R/G, incolore, coûts génériques, hybrides, phyrexians et symboles spéciaux.

**À inspecter :** nomenclature réelle des glyphes, variantes couvertes, dimensions, viewBox, alignement optique et licence. Ne pas fusionner les styles sans règle visuelle.

## SRC-005 — Fonts

**Chemin :** `Assets/Fonts/`

Dix fichiers de polices sont recensés. Les noms observés incluent notamment Magic Symbols 2011, MagicSymbols2008, Matrix, Matrix Bold Small Caps, MPlantin, MPlantin Italic, PLA et Relay Medium.

**À inspecter :** famille interne, nom PostScript, poids, style, tables de caractères, glyphes mana, licence, droits d'incorporation et redistribution.

## Index fonctionnel cible

| ID | Famille de production | Sources candidates |
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

## Règles d'utilisation de l'index

- Les volumes sont indicatifs et peuvent changer avec la branche.
- Les familles fonctionnelles sont des destinations proposées, pas un inventaire exhaustif des assets individuels.
- Le statut d'une ressource doit être vérifié dans `assets.manifest.json`.
- Ne pas intégrer ni redistribuer une ressource sur la seule base de sa présence dans ce dépôt.
- Mettre à jour cet index après toute extraction, conversion ou décision de licence.
