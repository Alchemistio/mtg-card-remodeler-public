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

Chiffres issus de l'arbre Git récursif observé sur la branche main pendant l'audit ; volumes arrondis, susceptibles d'évoluer. Total indicatif : 37 371 fichiers et environ 1,75 Go.

### 3.1 Full-Magic-Pack

L'arbre contient notamment 371 dossiers `.mse-style`, 32 `.mse-include`, 76 `.mse-symbol-font`, 13 `.mse-locale`, 7 `.mse-game` et 22 `.mse-export-template`. Les packages sont des unités MSE avec leurs conventions et dépendances. Ne pas déplacer isolément leurs fichiers internes sans comprendre les références relatives.

### 3.2 Big Pack

Collection de styles et composants MSE/graphismes historiques ou alternatifs. À comparer à Full-Magic-Pack pour la couverture unique et les variantes réellement absentes. Conserver les fichiers sources tant que les dépendances ne sont pas établies.

### 3.3 MtgCard Builder

Sous-ensembles recensés : `Archive/`, `Regular/`, `Token/`. Les noms génériques de type `asset N.png/svg` exigent une identification visuelle avant renommage. Des pages HTML récupérées et des archives ZIP doivent être contrôlées séparément. Les dossiers explicites `Regular Frame`, `EnchantmentFrame Nyx` et `Mana Symbol` sont des pistes de classement, pas des validations visuelles.

### 3.4 MANA

Sous-ensembles : `Flat/`, `Circleless/`, `Shifted/`, `SVG/`. Dans `SVG/`, six fichiers ont été confirmés : `Blanc.svg`, `Bleu.svg`, `Noir.svg`, `Rouge.svg`, `Vert.svg`, `Less.svg`. Leur racine SVG déclare un viewBox commun `0 0 82.56 82.56`. Il s'agit d'une constatation structurelle ; le rendu visuel et l'alignement optique restent à examiner. `Flat/` expose des noms de symboles tels que `mana_w`, `mana_u`, `mana_b`, `mana_r`, `mana_g`, `mana_c`, des hybrides (ex. `mana_bg`) et des variantes phyrexian (ex. `mana_phy*`). Ne pas présumer que chaque variante existe dans chaque style. Choisir une famille cohérente par rendu plutôt que fusionner aveuglément les styles.

### 3.5 Fonts

Dix fichiers de polices recensés. La présence dans le dépôt ne prouve pas le droit d'incorporation, de modification ou de redistribution. Toute intégration distribuée exige une vérification de licence et d'attribution.

## 4. Décisions d'architecture

1. **SOURCE immuable** : conserver les collections originales et leur arborescence. Ne pas déplacer les sources actuelles.
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

## 7. Génération du catalogue visuel

Script ajouté : [`scripts/assets/build_asset_catalog.py`](../scripts/assets/build_asset_catalog.py).

Depuis la racine du dépôt :

```bash
python -m pip install Pillow CairoSVG
python scripts/assets/build_asset_catalog.py --root Assets --out /tmp/mtg-assets-catalog
```

Le script produit un catalogue JSON, un CSV et des planches de contact raster ; il extrait dimensions et mode alpha des images, viewBox/dimensions des SVG, hash SHA-256 et métadonnées de ZIP (sans extraction). Les catégories sont heuristiques, les licences restent en attente et les planches nécessitent une revue humaine. Il fonctionne en lecture seule et n'écrit que dans le répertoire `--out`. Pillow est requis pour les images raster ; CairoSVG permet le rendu des vignettes SVG.

## 8. Correspondance avec le code actuel

- `src/assets/manifest.ts` : registre TypeScript historique à réconcilier avec le manifeste et les vrais fichiers.
- `src/assets/framePresets.ts` : palettes couleur actuellement utilisées par le renderer local.
- `src/card/renderer.ts` : renderer SVG local ; utilise les palettes et des symboles mana rendus en SVG texte/cercle provisoires.
- `docs/ARCHITECTURE.md` : principes de rendu vectoriel, séparation des données et assets.
- `docs/THIRD_PARTY_NOTICES.md` : point de vigilance déjà identifié sur FeSens/MTG Card Designer ; les droits des sources MSE, MTGCard Builder, polices et symboles doivent être examinés séparément.

## 9. Index et historique

- Checklist opérationnelle : [ASSET_AUDIT_CHECKLIST.md](./ASSET_AUDIT_CHECKLIST.md)
- Rapport de réalisation : [ASSET_AUDIT_REPORT.md](./ASSET_AUDIT_REPORT.md)
- Index des collections : [ASSET_INDEX.md](../Assets/METADATA/ASSET_INDEX.md)
- Manifeste : [assets.manifest.json](../Assets/METADATA/assets.manifest.json)

Mettre à jour ces documents ensemble à chaque changement important. Le rapport décrit ce qui a réellement été fait ; la checklist décrit l'état courant ; la présente référence contient les règles durables.


## 10. Inventaire individuel exhaustif (métadonnées Git)

Les cinq collections ont maintenant des enregistrements par fichier, dérivés de l'arbre Git récursif complet : 34 441 Full-Magic-Pack, 1 996 Big Pack, 610 MtgCard Builder, 314 MANA et 10 Fonts, soit 37 371 fichiers. Les données comprennent un ID stable dans l'inventaire, chemin, nom, extension, taille, Git blob SHA, catégorie candidate et statuts de revue.

Fichiers :
- `Assets/METADATA/inventory-full-magic-pack-01.json` à `inventory-full-magic-pack-10.json`
- `Assets/METADATA/inventory-big-pack.json`
- `Assets/METADATA/inventory-mtgcard-builder.json`
- `Assets/METADATA/inventory-mana.json`
- `Assets/METADATA/inventory-fonts.json`

Le Git blob SHA est un SHA-1 d'objet Git, pas un SHA-256 des octets. Les catégories sont déduites des chemins/extensions. Les dimensions, l'apparence, les licences et les compatibilités restent à contrôler.

Un validateur standard-library est disponible : `scripts/assets/validate_asset_inventory.py`. Commande : `python scripts/assets/validate_asset_inventory.py --root .`.

La zone de destination `Assets/LIBRARY/` est créée avec ses critères d'admission ; elle ne contient volontairement encore aucun asset approuvé. Voir `Assets/LIBRARY/README.md`.


## 11. Provenance, licence et dépendances MSE

Registre détaillé : [`Assets/METADATA/PROVENANCE_AND_LICENSE_REVIEW.md`](../Assets/METADATA/PROVENANCE_AND_LICENSE_REVIEW.md).

Constats : un fichier LICENSE MIT a été trouvé pour `magic-m15-bigtext.mse-style` uniquement (Sam Boosalis, 2025). Le README du package partagé `magic-modules.mse-include` documente les dépendances de version 2024-10-01 et un ordre de couches Z essentiel à la conversion. Le README Phyrexian crédite Anuttymous, Savil et des contributeurs MTG Salvation/Fontstruct, mais renvoie à un `license.txt` qui n'est pas présent dans l'arborescence examinée. Les autres familles, polices et sources restent en revue.

La conséquence est importante : la bibliothèque `Assets/LIBRARY/` a ses règles d'admission mais reste vide. Aucun asset non vérifié n'a été copié ou intégré au renderer.


## 12. Exécution locale avec environnement temporaire autogéré

Pour éviter les installations manuelles et laisser l'utilisateur choisir où sont stockés les résultats, le dépôt fournit :
- `scripts/assets/run_asset_audit.bat` : lancement Windows par double-clic ;
- `scripts/assets/run_asset_audit.py` : sélection du dossier, création de l'environnement virtuel, installation temporaire des dépendances, exécution du générateur et nettoyage ;
- `scripts/assets/README.md` : mode d'emploi et prérequis.

Le lanceur installe Pillow et CairoSVG dans `<dossier choisi>/.asset-audit-runtime/`, lance le générateur sur le répertoire source `Assets/`, conserve les résultats dans `<dossier choisi>/catalog/`, puis supprime l'environnement virtuel. Aucune dépendance n'est installée dans le Python global ni dans les autres projets.

**Prérequis non automatisé :** Python 3.10+ doit déjà être présent sur l'ordinateur et une connexion Internet est nécessaire pour télécharger les packages. Le répertoire choisi doit être hors de `Assets/`. Un arrêt brutal de la machine peut empêcher le bloc de nettoyage ; le dossier temporaire restant peut alors être supprimé manuellement. Le lancement et le nettoyage restent à tester sur le poste disposant du clone complet.


## 13. Application d'audit Rust dédiée

Le projet d'application Windows native Rust est suivi séparément dans [`Alchemistio/mtg_card_auditory`](https://github.com/Alchemistio/mtg_card_auditory). Le cahier des charges et l'état d'avancement inter-dépôts sont consignés dans [`ASSET_AUDITOR_INTEGRATION.md`](./ASSET_AUDITOR_INTEGRATION.md). Le premier socle sait explorer un arbre GitHub et télécharger une sélection de blobs dans un workspace ; les analyses locales/visuelles, les licences, les rapports et la livraison finale restent à construire et vérifier. Le dépôt source reste immuable.
