# Référence permanente — audit et gouvernance des assets

> Référence de travail pour MTG Card Remodeler. Mise à jour : 2026-11-10. Dépôt : `Alchemistio/mtg-card-remodeler-public`, branche `main`.

## 1. Objectif

Transformer le répertoire historique `Assets/` en un patrimoine graphique traçable, classifié et exploitable par l'application, sans détruire ni altérer les sources originales. Ce document sert de point d'entrée pour retrouver les décisions, contraintes et résultats de l'audit.

## 2. Contexte applicatif vérifié

- Application React 18, TypeScript, Vite, Tauri 2 ; validation Zod et tests Vitest.
- Données de cartes issues de Scryfall, normalisées dans un modèle interne.
- Rendu : dépendance `mtg-card` (FeSens) pour plusieurs familles de cartes ; moteur SVG local de secours.
- Le renderer local `src/card/renderer.ts` utilise `src/assets/framePresets.ts` pour ses palettes, et non les fichiers du dossier racine `Assets/`.
- `src/assets/manifest.ts` définit actuellement six chemins `assets/frames/*.svg` et des fonctions de recherche/validation, mais les six fichiers ne sont pas présents à ces emplacements dans l'arborescence vérifiée. L'usage du registre dans le flux de rendu reste à démontrer.
- `docs/ARCHITECTURE.md` décrit un manifeste local et l'inventaire de licences comme cible ; `docs/ROADMAP.md` prévoit un registre unifié (cadres, textures, symboles, polices, masques).

## 3. Inventaire source de référence

Le répertoire est nommé `Assets/` (A majuscule). Les cinq collections de premier niveau recensées :

| ID | Chemin source | Fichiers | Volume indicatif | Contenu dominant |
|---|---|---:|---:|---|
| SRC-001 | `Assets/Full-Magic-Pack-main/` | 34 441 | 934,7 Mo | Packages MSE : styles, includes, jeux, polices, symboles, locales, exports |
| SRC-002 | `Assets/Big Pack/` | 1 996 | 441,7 Mo | Styles historiques/alternatifs, composants et fichiers volumineux |
| SRC-003 | `Assets/MtgCard Builder/` | 610 | 375 Mo | Ressources Regular, Token et archives |
| SRC-004 | `Assets/MANA/` | 314 | 2,2 Mo | Variantes de symboles mana PNG/SVG et fontes |
| SRC-005 | `Assets/Fonts/` | 10 | 0,57 Mo | Polices et fontes associées |
 
Chiffres issus de l'arbre Git récursif observé sur la branche main pendant l'audit ; les volumes sont arrondis et peuvent évoluer. Le total indicatif est d'environ 37 371 fichiers et 1,75 Go. Les extensions et contenus internes des archives ne constituent pas à eux seuls une preuve de compatibilité avec le renderer.

### 3.1 Full-Magic-Pack

L'arbre contient notamment 371 dossiers `.mse-style`, 32 `.mse-include`, 76 `.mse-symbol-font`, 13 `.mse-locale`, 7 `.mse-game` et 22 `.mse-export-template`. Les packages sont des unités MSE avec leurs conventions et dépendances. Ne pas déplacer isolément leurs fichiers internes sans comprendre les références relatives.

### 3.2 Big Pack

Collection de styles et composants MSE/graphismes historiques ou alternatifs. À comparer à Full-Magic-Pack pour la couverture unique et les variantes réellement absentes. Conserver les fichiers sources tant que les dépendances ne sont pas établies.

### 3.3 MtgCard Builder

Sous-ensembles recensés : `Archive/`, `Regular/`, `Token/`. Les noms génériques de type `asset N.png/svg` exigent une identification visuelle avant renommage. Des pages HTML récupérées et des archives ZIP doivent être contrôlées séparément. Ne pas assimiler automatiquement les ZIP à des ressources prêtes à intégrer.

### 3.4 MANA

Sous-ensembles : `Flat/`, `Circleless/`, `Shifted/`, `SVG/`. Variantes de glyphes mana, dont hybrides/phyrexians et symboles particuliers. Choisir une famille cohérente par rendu plutôt que fusionner aveuglément les styles.

### 3.5 Fonts

Dix fichiers de polices recensés. La présence dans le dépôt ne prouve pas le droit d'incorporation, de modification ou de redistribution. Toute intégration distribuée exige une vérification de licence et d'attribution.

## 4. Décisions d'architecture

1. **SOURCE immuable** : conserver les collections originales et leur arborescence sous `Assets/_SOURCE/` uniquement lors d'une migration future planifiée ; tant que cette migration n'est pas validée, ne pas déplacer les sources actuelles.
2. **LIBRARY normalisée** : ne contenir que les ressources identifiées, utiles, techniquement converties si nécessaire, documentées et juridiquement validées.
3. **METADATA** : manifeste machine-readable, index humain, provenance, notices et journal des changements.
4. **Application** : ne charger que les assets approuvés, légers et nécessaires au build. Les archives sources ne doivent pas être incluses dans les bundles web/desktop.
5. **Pas de suppression fondée uniquement sur SHA** : un doublon binaire peut être requis par un package autonome ; conserver les sources et documenter les doublons avant toute déduplication.
6. **Aucun asset n'est déclaré validé** sans vérification du contenu, du format, des dimensions, de la provenance/licence et d'un test de rendu approprié.
7. **Ne pas inventer les licences** : états autorisés : `unknown`, `pending-review`, `verified`, `not-for-redistribution`.

## 5. Taxonomie cible

- `Frames/`: Classic, Modern, M15, Old-Border, Showcase, Borderless, Full-Art, Special.
- `Components/`: Borders, Crowns, Masks, Textures, Watermarks, Stamps.
- `Symbols/`: Mana, Types, Loyalty, Counters, Special.
- `Tokens/`: modèles et éléments de tokens.
- `Fonts/`: fontes avec licence, attribution, famille, poids et style.
- `Metadata/`: manifeste, index, provenance, changelog, notices.

## 6. Schéma d'un asset normalisé

Champs recommandés : `id`, `name`, `kind`, `category`, `variant`, `sourceCollection`, `sourcePath`, `path`, `format`, `width`, `height`, `viewBox`, `sha256`, `licenseStatus`, `licenseText`, `attribution`, `compatibleLayouts`, `status`, `notes`.

Statuts : `source-only`, `needs-visual-review`, `needs-license-review`, `ready-for-conversion`, `normalized`, `integrated`, `rejected`.

## 7. Correspondance avec le code actuel

- `src/assets/manifest.ts` : registre TypeScript historique à réconcilier avec le manifeste et les vrais fichiers.
- `src/assets/framePresets.ts` : palettes couleur actuellement utilisées par le renderer local.
- `src/card/renderer.ts` : renderer SVG local ; utilise les palettes et des symboles mana rendus en SVG texte/cercle provisoires.
- `docs/ARCHITECTURE.md` : principes de rendu vectoriel, séparation des données et assets.
- `docs/THIRD_PARTY_NOTICES.md` : point de vigilance déjà identifié sur FeSens/MTG Card Designer ; les droits des sources MSE, MTGCard Builder, polices et symboles doivent être examinés séparément.

## 8. Index et historique

- Checklist opérationnelle : [ASSET_AUDIT_CHECKLIST.md](./ASSET_AUDIT_CHECKLIST.md)
- Rapport de réalisation : [ASSET_AUDIT_REPORT.md](./ASSET_AUDIT_REPORT.md)
- Manifeste : [../Assets/METADATA/assets.manifest.json](../Assets/METADATA/assets.manifest.json)

Mettre à jour ces documents ensemble à chaque changement important. Le rapport décrit ce qui a réellement été fait ; la checklist décrit l'état courant ; la présente référence contient les règles durables.
