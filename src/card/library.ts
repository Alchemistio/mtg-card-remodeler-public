import { CardSchema, type Card } from "./model";

const DB_NAME = "mtg-card-remodeller";
const STORE = "cards";
const FALLBACK_KEY = "mtg-card-remodeller:cards";

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
