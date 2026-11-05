# Application desktop Tauri 2

Le projet contient un shell Tauri 2 avec une fenêtre principale, une politique CSP restrictive et le plugin SQL SQLite. L'interface React est partagée entre le navigateur et le desktop.

## Prérequis

- Node.js 20+ et npm.
- Rust stable et Cargo.
- Les dépendances système Tauri/WebView2 (Windows), WebKitGTK (Linux) ou Xcode Command Line Tools (macOS).

## Commandes

```bash
npm install
npm run tauri:dev
npm run tauri:build
```

Le packaging multi-plateforme doit être exécuté sur les runners ou machines de chaque système cible. La CI vérifie les tests et le build Vite, puis exécute `cargo fmt --check` et `cargo check` sous Linux. Les packages installables Windows/macOS/Linux et la signature restent à produire.

## Persistance

- **Desktop Tauri** : SQLite via `tauri-plugin-sql`, base `cards.db`, migrations versionnées pour les tables `cards`, `projects` et `scryfall_cache`.
- **Navigateur** : IndexedDB.
- **Repli** : localStorage lorsque IndexedDB est indisponible.

Les cartes et projets sont stockés sous forme de JSON validé par Zod. Les recherches Scryfall sont mises en cache 12 h avec une date d’expiration. Les modifications visuelles sont conservées dans les projets et non dans le snapshot source.
