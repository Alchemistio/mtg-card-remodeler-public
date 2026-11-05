import { CardSchema, type Card } from "./model";
import { CardProjectSchema, type CardProject } from "./customization";

const DB_NAME = "mtg-card-remodeller";
const STORE = "cards";
const PROJECT_STORE = "projects";
const CACHE_STORE = "scryfallCache";
const FALLBACK_KEY = "mtg-card-remodeller:cards";
const PROJECT_FALLBACK_KEY = "mtg-card-remodeller:projects";
const CACHE_FALLBACK_KEY = "mtg-card-remodeller:scryfall-cache";
const TAURI_DATABASE = "sqlite:cards.db";

type TauriSqlDatabase = {
  select<T>(query: string, values?: unknown[]): Promise<T>;
  execute(query: string, values?: unknown[]): Promise<{ rowsAffected: number }>;
};

let tauriDbPromise: Promise<TauriSqlDatabase | null> | null = null;

function isTauriRuntime(): boolean {
  return typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;
}

async function getTauriDatabase(): Promise<TauriSqlDatabase | null> {
  if (!isTauriRuntime()) return null;
  if (!tauriDbPromise) {
    tauriDbPromise = import("@tauri-apps/plugin-sql")
      .then(async module => module.default.load(TAURI_DATABASE) as Promise<TauriSqlDatabase>)
      .catch(() => null);
  }
  return tauriDbPromise;
}

function openDatabase(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === "undefined") return Promise.resolve(null);
  return new Promise(resolve => {
    const request = indexedDB.open(DB_NAME, 3);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "id" });
      if (!db.objectStoreNames.contains(PROJECT_STORE)) db.createObjectStore(PROJECT_STORE, { keyPath: "id" });
      if (!db.objectStoreNames.contains(CACHE_STORE)) db.createObjectStore(CACHE_STORE, { keyPath: "key" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

function readFallback<T>(key: string, parse: (value: unknown) => T): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as unknown[]).map(parse) : [];
  } catch { return []; }
}

function writeFallback<T>(key: string, values: T[]): void {
  localStorage.setItem(key, JSON.stringify(values));
}

export async function listSavedCards(): Promise<Card[]> {
  const sql = await getTauriDatabase();
  if (sql) {
    const rows = await sql.select<Array<{ payload: string }>>("SELECT payload FROM cards ORDER BY name COLLATE NOCASE");
    return rows.map(row => CardSchema.parse(JSON.parse(row.payload)));
  }
  const db = await openDatabase();
  if (!db) return readFallback(FALLBACK_KEY, item => CardSchema.parse(item));
  return new Promise(resolve => {
    const request = db.transaction(STORE, "readonly").objectStore(STORE).getAll();
    request.onsuccess = () => resolve((request.result as unknown[]).map(item => CardSchema.parse(item)));
    request.onerror = () => resolve(readFallback(FALLBACK_KEY, item => CardSchema.parse(item)));
  });
}

export async function saveCard(card: Card): Promise<void> {
  const valid = CardSchema.parse(card);
  const sql = await getTauriDatabase();
  if (sql) {
    await sql.execute(
      "INSERT INTO cards (id, name, payload, updated_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) ON CONFLICT(id) DO UPDATE SET name = excluded.name, payload = excluded.payload, updated_at = CURRENT_TIMESTAMP",
      [valid.id, valid.name, JSON.stringify(valid)]
    );
    return;
  }
  const db = await openDatabase();
  if (!db) {
    const cards = readFallback(FALLBACK_KEY, item => CardSchema.parse(item)).filter(item => item.id !== valid.id);
    writeFallback(FALLBACK_KEY, [...cards, valid]);
    return;
  }
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE, "readwrite");
    transaction.objectStore(STORE).put(valid);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

export async function listProjects(): Promise<CardProject[]> {
  const sql = await getTauriDatabase();
  if (sql) {
    const rows = await sql.select<Array<{ payload: string }>>("SELECT payload FROM projects ORDER BY updated_at DESC");
    return rows.map(row => CardProjectSchema.parse(JSON.parse(row.payload)));
  }
  const db = await openDatabase();
  if (!db) return readFallback(PROJECT_FALLBACK_KEY, item => CardProjectSchema.parse(item));
  return new Promise(resolve => {
    const request = db.transaction(PROJECT_STORE, "readonly").objectStore(PROJECT_STORE).getAll();
    request.onsuccess = () => resolve((request.result as unknown[]).map(item => CardProjectSchema.parse(item)));
    request.onerror = () => resolve(readFallback(PROJECT_FALLBACK_KEY, item => CardProjectSchema.parse(item)));
  });
}

export async function saveProject(project: CardProject): Promise<void> {
  const valid = CardProjectSchema.parse(project);
  const sql = await getTauriDatabase();
  if (sql) {
    await sql.execute(
      "INSERT INTO projects (id, source_card_id, payload, updated_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) ON CONFLICT(id) DO UPDATE SET source_card_id = excluded.source_card_id, payload = excluded.payload, updated_at = CURRENT_TIMESTAMP",
      [valid.id, valid.sourceCardId, JSON.stringify(valid)]
    );
    return;
  }
  const db = await openDatabase();
  if (!db) {
    const projects = readFallback(PROJECT_FALLBACK_KEY, item => CardProjectSchema.parse(item)).filter(item => item.id !== valid.id);
    writeFallback(PROJECT_FALLBACK_KEY, [...projects, valid]);
    return;
  }
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(PROJECT_STORE, "readwrite");
    transaction.objectStore(PROJECT_STORE).put(valid);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

export async function removeSavedCard(id: string): Promise<void> {
  const sql = await getTauriDatabase();
  if (sql) {
    await sql.execute("DELETE FROM cards WHERE id = $1", [id]);
    return;
  }
  const db = await openDatabase();
  if (!db) {
    writeFallback(FALLBACK_KEY, readFallback(FALLBACK_KEY, item => CardSchema.parse(item)).filter(card => card.id !== id));
    return;
  }
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE, "readwrite");
    transaction.objectStore(STORE).delete(id);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

export async function getCachedSearch(key: string): Promise<Card[] | null> {
  const now = new Date().toISOString();
  const sql = await getTauriDatabase();
  if (sql) {
    const rows = await sql.select<Array<{ payload: string }>>(
      "SELECT payload FROM scryfall_cache WHERE cache_key = $1 AND expires_at > $2",
      [key, now]
    );
    if (!rows.length) return null;
    try {
      const parsed = JSON.parse(rows[0].payload) as unknown[];
      return parsed.map(item => CardSchema.parse(item));
    } catch { return null; }
  }

  const db = await openDatabase();
  if (!db) {
    try {
      const entries = JSON.parse(localStorage.getItem(CACHE_FALLBACK_KEY) ?? "{}") as Record<string, { payload: unknown[]; expiresAt: number }>;
      const entry = entries[key];
      if (!entry || entry.expiresAt <= Date.now()) return null;
      return entry.payload.map(item => CardSchema.parse(item));
    } catch { return null; }
  }

  return new Promise(resolve => {
    const request = db.transaction(CACHE_STORE, "readonly").objectStore(CACHE_STORE).get(key);
    request.onsuccess = () => {
      const entry = request.result as { payload: unknown[]; expiresAt: number } | undefined;
      if (!entry || entry.expiresAt <= Date.now()) { resolve(null); return; }
      try { resolve(entry.payload.map(item => CardSchema.parse(item))); }
      catch { resolve(null); }
    };
    request.onerror = () => resolve(null);
  });
}

export async function saveCachedSearch(key: string, cards: Card[], ttlMs = 12 * 60 * 60 * 1000): Promise<void> {
  const valid = cards.map(card => CardSchema.parse(card));
  const expiresAt = Date.now() + ttlMs;
  const sql = await getTauriDatabase();
  if (sql) {
    await sql.execute(
      "INSERT INTO scryfall_cache (cache_key, payload, expires_at, updated_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) ON CONFLICT(cache_key) DO UPDATE SET payload = excluded.payload, expires_at = excluded.expires_at, updated_at = CURRENT_TIMESTAMP",
      [key, JSON.stringify(valid), new Date(expiresAt).toISOString()]
    );
    return;
  }

  const db = await openDatabase();
  if (!db) {
    try {
      const entries = JSON.parse(localStorage.getItem(CACHE_FALLBACK_KEY) ?? "{}") as Record<string, unknown>;
      entries[key] = { key, payload: valid, expiresAt };
      localStorage.setItem(CACHE_FALLBACK_KEY, JSON.stringify(entries));
    } catch { /* Cache is an optimization; storage failure must not block card search. */ }
    return;
  }

  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(CACHE_STORE, "readwrite");
    transaction.objectStore(CACHE_STORE).put({ key, payload: valid, expiresAt });
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}
