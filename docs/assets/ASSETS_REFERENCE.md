# Référence de travail — audit et bibliothèque Assets

- Dépôt : https://github.com/Alchemistio/mtg-card-remodeler-public
- Branche inspectée : `main`
- Commit de référence de l'inventaire : `2ada6c1342a61763a849cd869937dfad6245e220`
- Date de l'audit : 2026-11-10
- Périmètre : cinq collections à la racine du dépôt (`Full-Magic-Pack-main`, `Big Pack`, `MtgCard Builder`, `MANA`, `Fonts`). Attention : ce ne sont pas des sous-dossiers d'un dossier racine `Assets/` dans l'arborescence Git observée.

## Mission et règle de vérité
Ce document est la référence persistante pour les travaux futurs sur les ressources graphiques de MTG Card Remodeler. Il distingue systématiquement : (1) inventaire technique prouvé par Git, (2) classification sémantique déduite des noms/structures, (3) validation visuelle et juridique encore à faire. Ne jamais présenter une ressource comme intégrée à l'application tant qu'elle n'est pas copiée dans la bibliothèque de production, référencée par le manifeste runtime et couverte par un test.

## Contexte applicatif
Le projet est une application de remodelage/personnalisation de cartes Magic, avec front-end React/TypeScript, rendu de cartes via une dépendance `mtg-card` et un moteur SVG local, intégrations de données de cartes et fonctions de personnalisation/export. Les assets sources sont un patrimoine de référence, pas des dépendances runtime automatiquement consommées. Les points de raccordement identifiés dans le code sont notamment `src/assets/manifest.ts`, `src/assets/framePresets.ts` et `src/card/renderer.ts`. Vérifier ces fichiers sur la branche courante avant toute modification : leur contenu peut évoluer.

## Inventaire Git de référence
- Fichiers : 37371
- Dossiers : 1772
- Volume total déclaré par Git : 1754249089 octets (1.754 Go décimaux)
- Groupes d'empreintes SHA identiques : 3875
- Chemins concernés par ces groupes : 12299
- Copies supplémentaires théoriques : 337401552 octets (337.4 Mo). Ce chiffre ne prouve pas qu'une suppression est sûre : les packages MSE peuvent devoir rester autonomes.

| Collection | Fichiers | Octets | Mo décimaux |
|---|---:|---:|---:|
| Full-Magic-Pack-main | 34441 | 934658649 | 934.66 |
| Big Pack | 1996 | 441736422 | 441.74 |
| MtgCard Builder | 610 | 375043784 | 375.04 |
| MANA | 314 | 2237378 | 2.24 |
| Fonts | 10 | 572856 | 0.57 |

## Rôle présumé des collections
- **Full-Magic-Pack-main** : collection de packages Magic Set Editor (styles `.mse-style`, includes, symbol fonts, locales, game definitions, export templates et ressources associées). Source majeure pour étudier cadres, variantes et composants. Les formats MSE ne sont pas directement des assets React/SVG.
- **Big Pack** : collection parallèle/complémentaire de ressources de styles et composants, avec fichiers graphiques et formats d'outils tiers. Comparer avec Full Magic avant toute sélection.
- **MtgCard Builder** : ressources de cadres, composants et tokens, avec dossiers Regular, Token et Archive. Noms de fichiers parfois génériques ; inspection visuelle et extraction d'archives requises.
- **MANA** : familles de symboles mana (Flat, Circleless, Shifted, SVG notamment). Candidat à une bibliothèque de symboles normalisée.
- **Fonts** : polices associées à l'univers Magic. Contrôle de licence/redistribution obligatoire avant inclusion dans une build.

## Index fonctionnel cible
- `FRM` : Frames — Classic, Modern, M15, Old Border, Showcase, Borderless, Full Art, Special.
- `CMP` : Components — Borders, Crowns, Masks, Textures, Watermarks, Stamps, overlays.
- `SYM` : Symbols — Mana, Hybrid, Phyrexian, Color indicators, Types, Loyalty, Counters, Special.
- `FNT` : Fonts — card title, rules text, type line, symbols; chaque entrée doit avoir statut de licence.
- `TOK` : Tokens — token frames, token-specific layouts and components.
- `LAY` : Layout/reference packages — Saga, Battle, Class, Prototype, Room, Station, Spree, Split et autres layouts, après vérification du contenu.

## Architecture de rangement cible
```
assets/
  _sources/                 # originaux intacts, non consommés au runtime
    full-magic-pack/
    big-pack/
    mtg-card-builder/
    mana-original/
    fonts-original/
  library/                  # sélection validée et normalisée
    frames/{classic,modern,m15,old-border,showcase,borderless,full-art,special}/
    components/{borders,crowns,masks,textures,watermarks,stamps}/
    symbols/{mana,hybrid,phyrexian,types,loyalty,counters,special}/
    tokens/
    fonts/
  metadata/
    assets.manifest.json
    ASSET_INDEX.md
    ATTRIBUTIONS.md
    ASSET_CHANGELOG.md
```
Ne pas déplacer les collections originales à ce stade. Les sources actuelles sont à la racine ; le schéma ci-dessus est une cible, pas une opération déjà effectuée.

## Schéma recommandé d'une entrée runtime
```json
{
  "id": "FRM-M15-WU-001",
  "name": "M15 white-blue frame",
  "category": "frame",
  "variant": "m15",
  "colors": ["W", "U"],
  "source": {"collection": "Full-Magic-Pack-main", "path": "..."},
  "file": "library/frames/m15/...svg",
  "format": "svg",
  "dimensions": {"width": null, "height": null, "viewBox": null},
  "layouts": ["standard"],
  "license": {"status": "unverified", "reference": null},
  "sha256": "...",
  "status": "candidate"
}
```
Les champs non vérifiés doivent rester `null` ou porter un statut explicite ; ne pas inventer dimensions, compatibilités ou licences.

## Règles de traitement
1. Garder les sources originales intactes et traçables.
2. Ne jamais dédupliquer/supprimer au sein des packages MSE sans vérifier leurs dépendances et leur autonomie.
3. Conserver le chemin source et le SHA pour chaque ressource sélectionnée.
4. Classer par fonction d'abord, puis style/variante/couleur ; pas par provenance seule dans la bibliothèque normalisée.
5. Distinguer `source-only`, `candidate`, `reviewed`, `approved`, `integrated`, `rejected`.
6. Les polices et éléments provenant de tiers restent bloqués pour redistribution tant que les droits ne sont pas vérifiés.
7. Les grosses collections sources ne doivent pas être chargées dans les builds runtime par défaut.
8. Toute intégration doit avoir une entrée runtime, un test de chargement et une validation de rendu.

## État au 2026-11-10
- Inventaire Git et manifestes techniques par collection : générés.
- Documentation de référence et checklist : créées.
- Extraction/normalisation de ressources visuelles : non effectuée, car l'étape de sélection visuelle exhaustive doit précéder cette opération.
- Licences : non validées.
- Intégration runtime : non effectuée.
