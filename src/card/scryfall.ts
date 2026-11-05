import { normalizeScryfallCard, type Card, type ScryfallCard } from "./model";
import { getCachedSearch, saveCachedSearch } from "./library";

const API = "https://api.scryfall.com";
const CACHE_TTL = 12 * 60 * 60 * 1000;
const memoryCache = new Map<string, { expiresAt: number; cards: Card[] }>();

const HEADERS = {
  Accept: "application/json",
  "User-Agent": "MTGCardRemodeller/0.2 (independent fan project)"
};

let requestQueue: Promise<void> = Promise.resolve();
let lastRequestAt = 0;

function wait(milliseconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/** Serialize API calls, keep at least 100 ms between requests, and retry transient rate/server errors. */
async function requestScryfall(url: string, init: RequestInit = {}): Promise<Response> {
  const request = requestQueue.then(async () => {
    const spacing = 100 - (Date.now() - lastRequestAt);
    if (spacing > 0) await wait(spacing);

    for (let attempt = 0; attempt < 3; attempt += 1) {
      const response = await fetch(url, init);
      lastRequestAt = Date.now();
      if (![429, 503].includes(response.status) || attempt === 2) return response;

      const retryAfter = Number(response.headers.get("Retry-After"));
      const fallbackDelay = 1000 * (attempt + 1);
      await wait(Number.isFinite(retryAfter) && retryAfter > 0
        ? Math.min(30_000, retryAfter * 1000)
        : fallbackDelay);
    }
    throw new Error("La requête Scryfall n'a pas pu être terminée.");
  });

  requestQueue = request.then(() => undefined, () => undefined);
  return request;
}

function frenchQuery(query: string): string {
  const trimmed = query.trim();
  return /(^|\s)lang:[a-z]{2}(\s|$)/i.test(trimmed) ? trimmed : `${trimmed} lang:fr`;
}

async function readError(response: Response): Promise<Error> {
  if (response.status === 404) return new Error("Aucune carte correspondante n'a été trouvée.");
  if (response.status === 429) {
    const retry = response.headers.get("Retry-After");
    return new Error(`Limite Scryfall atteinte. Réessaie dans ${retry ? retry + " seconde(s)" : "un instant"}.`);
  }
  try {
    const payload = await response.json() as { details?: string };
    return new Error(payload.details ?? `Erreur Scryfall (${response.status}).`);
  } catch {
    return new Error(`Erreur Scryfall (${response.status}).`);
  }
}

export async function searchCards(query: string, signal?: AbortSignal): Promise<Card[]> {
  if (!query.trim()) return [];
  const params = new URLSearchParams({ q: frenchQuery(query), unique: "cards", order: "name" });
  const cacheKey = `search:${params.toString()}`;
  const memoryEntry = memoryCache.get(cacheKey);
  if (memoryEntry && memoryEntry.expiresAt > Date.now()) return memoryEntry.cards;
  if (memoryEntry) memoryCache.delete(cacheKey);

  const persisted = await getCachedSearch(cacheKey);
  if (persisted) {
    memoryCache.set(cacheKey, { cards: persisted, expiresAt: Date.now() + CACHE_TTL });
    return persisted;
  }

  const response = await requestScryfall(`${API}/cards/search?${params}`, { signal, headers: HEADERS });
  if (!response.ok) {
    if (response.status === 404) return [];
    throw await readError(response);
  }
  const payload = await response.json() as { data: ScryfallCard[] };
  const cards = payload.data.map(normalizeScryfallCard);
  memoryCache.set(cacheKey, { cards, expiresAt: Date.now() + CACHE_TTL });
  try { await saveCachedSearch(cacheKey, cards, CACHE_TTL); } catch { /* Search still works if the cache is unavailable. */ }
  return cards;
}

export async function getCardByName(name: string): Promise<Card | null> {
  const cards = await searchCards(`!"${name.replace(/"/g, "\\\"")}"`);
  return cards[0] ?? null;
}

export async function getCardById(id: string): Promise<Card | null> {
  const cacheKey = `id:${id}`;
  const memoryEntry = memoryCache.get(cacheKey);
  if (memoryEntry && memoryEntry.expiresAt > Date.now()) return memoryEntry.cards[0] ?? null;
  const persisted = await getCachedSearch(cacheKey);
  if (persisted) {
    memoryCache.set(cacheKey, { cards: persisted, expiresAt: Date.now() + CACHE_TTL });
    return persisted[0] ?? null;
  }

  const response = await requestScryfall(`${API}/cards/${encodeURIComponent(id)}`, { headers: HEADERS });
  if (response.status === 404) return null;
  if (!response.ok) throw await readError(response);
  const card = normalizeScryfallCard(await response.json() as ScryfallCard);
  memoryCache.set(cacheKey, { cards: [card], expiresAt: Date.now() + CACHE_TTL });
  try { await saveCachedSearch(cacheKey, [card], CACHE_TTL); } catch { /* Cache is optional. */ }
  return card;
}
