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
- Aperçu haute fidélité via le moteur React/SVG `mtg-card` pour les cartes classiques, Sagas, planeswalkers et Aventures ; moteur SVG local conservé pour les compositions non encore couvertes.
- Ajustement typographique automatique par mesure de débordement pour le moteur local et les cadres FeSens pris en charge.
- Diagnostic visible des débordements, sans troncature silencieuse.
- Personnalisation en direct du nom, du type, des règles, de la force/endurance, du cadre et de la taille de police.
- Projets personnalisés séparés des données source.
- Bibliothèque locale : SQLite dans Tauri, IndexedDB dans le navigateur, repli localStorage.
- Export SVG/PNG/PDF ; PDF avec fond perdu configurable (0/3/5 mm) et traits de coupe. Les cartes FeSens sont exportées à partir d’une capture haute résolution du composant.
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

- Les cadres FeSens sont réutilisés via le paquet npm `mtg-card` (MIT déclaré en amont) ; ils restent soumis aux conditions et attributions de leurs sources graphiques.
- Les cadres FeSens couvrent classique, Saga, planeswalker et Aventure. Les layouts split, bataille, classe, prototype et certains cas particuliers utilisent encore le moteur SVG de secours.
- Les exports SVG des cadres FeSens encapsulent un rendu PNG haute résolution ; ils ne constituent pas encore un document entièrement vectoriel éditable.
- Les profils d’impression CMJN/ICC, fonds perdus spécifiques aux imprimeurs et repères de sécurité restent à développer.
- Les polices Beleren/Merriweather/Source Sans Pro et les droits de redistribution des éléments issus du fichier Figma source doivent être validés avant une distribution publique.
- Les tests automatisés ne remplacent pas encore une validation visuelle sur un corpus de cartes réel et varié.
- La CI vérifie le shell Tauri sous Linux ; les packages finaux Windows/macOS restent à construire sur leurs plateformes respectives.

Voir [docs/ROADMAP.md](docs/ROADMAP.md) pour la suite.

## Propriété intellectuelle

Les données de cartes sont récupérées depuis Scryfall. Les illustrations, noms et marques Magic: The Gathering restent la propriété de leurs ayants droit. Ce projet est indépendant et n'est ni affilié à ni approuvé par Wizards of the Coast. Respecter les conditions d'utilisation de Scryfall et les politiques applicables aux contenus de fans.

## Licence

Le code propre au projet ne dispose pas encore d’une licence de redistribution. Les dépendances tierces conservent leurs licences respectives ; voir [docs/THIRD_PARTY_NOTICES.md](docs/THIRD_PARTY_NOTICES.md).
