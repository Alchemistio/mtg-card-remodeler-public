CREATE TABLE IF NOT EXISTS scryfall_cache (
  cache_key TEXT PRIMARY KEY NOT NULL,
  payload TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_scryfall_cache_expiry ON scryfall_cache(expires_at);
