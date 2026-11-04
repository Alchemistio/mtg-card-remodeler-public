import { CardSchema, type Card } from "./model";

const DB_NAME = "mtg-card-remodeller";
const STORE = "cards";
const FALLBACK_KEY = "mtg-card-remodeller:cards";
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
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

function readFallback(): Card[] {
  try {
    const raw = localStorage.getItem(FALLBACK_KEY);
    return raw ? (JSON.parse(raw) as unknown[]).map(item => CardSchema.parse(item)) : [];
  } catch { return []; }
}

export async function listSavedCards(): Promise<Card[]> {
  const sql = await getTauriDatabase();
  if (sql) {
    const rows = await sql.select<Array<{ payload: string }>>("SELECT payload FROM cards ORDER BY name COLLATE NOCASE");
    return rows.map(row => CardSchema.parse(JSON.parse(row.payload)));
  }
  const db = await openDatabase();
  if (!db) return readFallback();
  return new Promise(resolve => {
    const request = db.transaction(STORE, "readonly").objectStore(STORE).getAll();
    request.onsuccess = () => resolve((request.result as unknown[]).map(item => CardSchema.parse(item)));
    request.onerror = () => resolve(readFallback());
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
    const cards = readFallback().filter(item => item.id !== valid.id);
    localStorage.setItem(FALLBACK_KEY, JSON.stringify([...cards, valid]));
    return;
  }
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE, "readwrite");
    transaction.objectStore(STORE).put(valid);
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
    localStorage.setItem(FALLBACK_KEY, JSON.stringify(readFallback().filter(card => card.id !== id)));
    return;
  }
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE, "readwrite");
    transaction.objectStore(STORE).delete(id);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}
