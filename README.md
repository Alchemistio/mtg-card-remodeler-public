# MTG Card Remodeller

Application indépendante de reconstruction et de personnalisation de cartes Magic: The Gathering.

## État du projet

**MVP — fondations en cours.** Cette première version propose une recherche de cartes françaises via Scryfall, un modèle interne normalisé, un aperçu SVG expérimental et un export SVG.

## Démarrage

Prérequis : Node.js 20+ et npm.

```bash
npm install
npm run dev
```

Pour vérifier le projet :

```bash
npm test
npm run build
```

## Fonctionnalités présentes

- Recherche Scryfall avec préférence pour les impressions françaises.
- Normalisation des données distantes vers un modèle interne validé avec Zod.
- Tokenisation des symboles de règles (par exemple `{T}`, `{W}`, `{2}`) et des retours à la ligne.
- Premier rendu SVG de carte au format de travail 750 × 1050 px.
- Export du rendu en SVG.

## Architecture actuelle

```text
src/
  card/
    model.ts       # Modèle interne et validation Scryfall
    scryfall.ts    # Client API
    symbols.ts     # Analyse des symboles de règles
    renderer.ts    # Premier rendu SVG
  App.tsx          # Interface MVP
  main.tsx         # Point d'entrée
  styles.css       # Thème de l'atelier
```

## Feuille de route

Voir [docs/ROADMAP.md](docs/ROADMAP.md) pour les étapes détaillées.

## Sources et propriété intellectuelle

Les données de cartes sont récupérées depuis l'API Scryfall. Les illustrations et marques Magic: The Gathering restent la propriété de leurs ayants droit. Ce projet est indépendant et n'est ni affilié à ni approuvé par Wizards of the Coast. Respecter les conditions d'utilisation de Scryfall et les politiques applicables aux contenus de fans.

## Licence

Aucune licence de redistribution du code n'est définie à ce stade. Ajouter une licence explicite avant toute réutilisation externe.
