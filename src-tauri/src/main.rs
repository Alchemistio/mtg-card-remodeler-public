#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri_plugin_sql::{Migration, MigrationKind};

fn main() {
    let migrations = vec![
        Migration {
            version: 1,
            description: "create_card_library",
            sql: "CREATE TABLE IF NOT EXISTS cards (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, payload TEXT NOT NULL, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 2,
            description: "create_saved_projects",
            sql: "CREATE TABLE IF NOT EXISTS projects (id TEXT PRIMARY KEY NOT NULL, source_card_id TEXT NOT NULL, payload TEXT NOT NULL, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 3,
            description: "index_projects_by_update_time",
            sql: "CREATE INDEX IF NOT EXISTS idx_projects_updated_at ON projects(updated_at);",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 4,
            description: "create_scryfall_search_cache",
            sql: "CREATE TABLE IF NOT EXISTS scryfall_cache (cache_key TEXT PRIMARY KEY NOT NULL, payload TEXT NOT NULL, expires_at TEXT NOT NULL, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 5,
            description: "index_scryfall_cache_expiry",
            sql: "CREATE INDEX IF NOT EXISTS idx_scryfall_cache_expiry ON scryfall_cache(expires_at);",
            kind: MigrationKind::Up,
        },
    ];

    tauri::Builder::default()
        .plugin(
            tauri_plugin_sql::Builder::default()
                .add_migrations("sqlite:cards.db", migrations)
                .build(),
        )
        .run(tauri::generate_context!())
        .expect("Erreur au démarrage de MTG Card Remodeller");
}
