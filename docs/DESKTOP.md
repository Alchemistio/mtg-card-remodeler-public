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

Le packaging multi-plateforme doit être exécuté sur les runners ou machines de chaque système cible. La CI web vérifie les tests et le build Vite ; elle ne compile pas encore la cible Rust.

## Persistance

- **Desktop Tauri** : SQLite via `tauri-plugin-sql`, base `cards.db`, migration initiale et table `cards`.
- **Navigateur** : IndexedDB.
- **Repli** : localStorage lorsque IndexedDB est indisponible.

Les cartes sont stockées sous forme de JSON validé par Zod, avec index SQL sur le nom. Les modifications visuelles à venir devront être stockées dans une colonne de surcharge dédiée plutôt que d'altérer les données sources Scryfall.
