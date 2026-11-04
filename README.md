# MTG Card Remodeller

Atelier indépendant de reconstruction et de personnalisation de cartes Magic: The Gathering.

## Démarrage web

Prérequis : Node.js 20+ et npm.

```bash
npm install
npm run dev
```

Contrôles :

```bash
npm test
npm run build
```

## Application desktop

Prérequis supplémentaires : Rust stable, Cargo et les dépendances système Tauri 2.

```bash
npm run tauri:dev
npm run tauri:build
```

Voir [docs/DESKTOP.md](docs/DESKTOP.md).

## Fonctionnalités implémentées

- Recherche Scryfall avec filtre français par défaut.
- Modèle interne Zod conservant les données brutes Scryfall et les faces multiples.
- Interface responsive en français.
- Aperçu vectoriel SVG au format 750 × 1050.
- Ajustement automatique du texte par mesure Canvas et recherche dichotomique de taille.
- Diagnostic visible des débordements, sans troncature silencieuse.
- Personnalisation en direct du nom, du type, des règles, de la force/endurance, du cadre et de la taille de police.
- Projets personnalisés séparés des données source.
- Bibliothèque locale : SQLite dans Tauri, IndexedDB dans le navigateur, repli localStorage.
- Export SVG autonome (illustrations intégrées), PNG 3× (2250 × 3150) et PDF au format 63,5 × 88,9 mm.
- Registre de layouts, presets de cadres et manifeste d'assets.
- Tests Vitest et workflow GitHub Actions pour tests, build web et vérification Tauri/Rust.

## Architecture

```text
src/
  assets/
    manifest.ts          # Inventaire des ressources locales
    framePresets.ts      # Presets de cadres
  card/
    model.ts             # Modèle interne et normalisation Scryfall
    customization.ts     # Projets et surcharges utilisateur
    scryfall.ts          # Client API et recherche française
    symbols.ts           # Tokenisation des symboles de règles
    typography.ts        # Mesure et ajustement typographique
    layouts.ts           # Registre des layouts
    renderer.ts          # Génération SVG
    library.ts           # Persistance SQLite / IndexedDB
  export/
    cardExport.ts        # Exports SVG, PNG et PDF
  App.tsx                # Interface de l'atelier
  styles.css             # Thème responsive
src-tauri/
  src/main.rs            # Shell Tauri et migrations SQLite
  migrations/            # Schéma de base de données
docs/
  ARCHITECTURE.md
  DESKTOP.md
  EXPORTS.md
  ROADMAP.md
```

## Limites connues et prochaines étapes

- Le rendu est une base graphique originale, pas une reproduction exacte des cadres officiels.
- Les layouts Saga et planeswalker disposent d'éléments spécifiques initiaux ; Aventure, split, bataille et les autres familles demandent encore leurs compositions complètes.
- Les symboles de mana sont reconnus, mais le jeu final de glyphes vectoriels doit encore être intégré.
- L'export PDF n'intègre pas encore de fond perdu ni de traits de coupe.
- Les assets finaux (cadres, textures, polices et glyphes) doivent être ajoutés avec leurs licences et attributions.
- Les tests automatisés ne remplacent pas encore une validation visuelle sur un corpus de cartes réel et varié.
- La CI vérifie le shell Tauri sous Linux ; les packages finaux Windows/macOS restent à construire sur leurs plateformes respectives.

Voir [docs/ROADMAP.md](docs/ROADMAP.md) pour la suite.

## Propriété intellectuelle

Les données de cartes sont récupérées depuis Scryfall. Les illustrations, noms et marques Magic: The Gathering restent la propriété de leurs ayants droit. Ce projet est indépendant et n'est ni affilié à ni approuvé par Wizards of the Coast. Respecter les conditions d'utilisation de Scryfall et les politiques applicables aux contenus de fans.

## Licence

Aucune licence de redistribution du code n'est définie à ce stade. Une licence explicite devra être ajoutée avant toute réutilisation externe.
