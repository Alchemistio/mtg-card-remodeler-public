# Application desktop Tauri 2

Le projet contient maintenant le squelette Tauri 2. L'interface React reste la même en mode navigateur et dans l'application desktop.

## Prérequis

- Node.js 20+ et npm.
- Rust stable et Cargo.
- Les dépendances système Tauri/WebView2 (Windows), WebKitGTK (Linux) ou Xcode Command Line Tools (macOS).

## Commandes

Après installation de la CLI Tauri :

```bash
npm run tauri:dev
npm run tauri:build
```

Le packaging multi-plateforme doit être exécuté sur les runners ou machines de chaque système cible. La CI web actuelle ne compile pas encore la cible Rust.

## Persistance

La version navigateur utilise IndexedDB. Le passage à SQLite sera réalisé via le plugin SQL Tauri, avec migrations et tests d'intégrité, avant de considérer l'application desktop comme finalisée.
