# MTG Card Remodeller

Atelier indépendant de reconstruction et de personnalisation de cartes Magic: The Gathering.

## Démarrage

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

## Fonctionnalités actuellement implémentées

- Recherche de cartes via l'API Scryfall, avec filtre français par défaut.
- Normalisation des cartes dans un modèle interne validé par Zod.
- Conservation des données multi-faces Scryfall (recto/verso).
- Interface responsive en français.
- Aperçu vectoriel SVG au format 750 × 1050.
- Ajustement automatique de la taille de police et retour à la ligne en fonction de la zone disponible.
- Diagnostic visuel lorsque le texte ne peut toujours pas tenir à la taille minimale.
- Bibliothèque locale basée sur IndexedDB (avec repli localStorage).
- Export SVG, PNG haute définition (3×) et PDF au format physique 63,5 × 88,9 mm.
- Tests unitaires du modèle, du moteur typographique, du tokeniseur, des layouts et du rendu SVG.
- Workflow GitHub Actions pour les tests et la compilation.

## Architecture

```text
src/
  card/
    model.ts             # Modèle interne et normalisation Scryfall
    scryfall.ts          # Client API et recherche française
    symbols.ts           # Tokenisation des symboles de règles
    typography.ts        # Mesure, retour à la ligne et ajustement du texte
    layouts.ts           # Registre des familles de layouts
    renderer.ts          # Génération SVG
    library.ts           # Persistance locale IndexedDB
  export/
    cardExport.ts        # Exports SVG indirects, PNG et PDF
  App.tsx                # Interface de l'atelier
  styles.css             # Thème responsive
docs/
  ARCHITECTURE.md
  EXPORTS.md
  ROADMAP.md
```

## Limites connues

- Le rendu actuel est une base graphique originale et expérimentale, pas une reproduction exacte des cadres officiels.
- Les styles Saga, Aventure, planeswalker et les autres familles nécessitent encore leurs compositions spécifiques.
- Les symboles de règles sont reconnus mais leur rendu vectoriel dédié doit être finalisé.
- L'export PDF actuel ne comporte pas encore de fond perdu ni de traits de coupe.
- L'export d'illustrations distantes dépend des autorisations CORS de leur serveur.
- IndexedDB est utilisé dans le prototype web ; SQLite sera intégré dans la version desktop Tauri.
- Les assets graphiques finaux (cadres, textures, polices, glyphes) devront être intégrés dans le respect des droits applicables.

## Feuille de route

Voir [docs/ROADMAP.md](docs/ROADMAP.md).

## Propriété intellectuelle

Les données de cartes sont récupérées depuis Scryfall. Les illustrations, noms et marques Magic: The Gathering restent la propriété de leurs ayants droit. Ce projet est indépendant et n'est ni affilié à ni approuvé par Wizards of the Coast. Respecter les conditions d'utilisation de Scryfall et les politiques applicables aux contenus de fans.

## Licence

Aucune licence de redistribution du code n'est définie à ce stade. Une licence explicite devra être ajoutée avant toute réutilisation externe.
