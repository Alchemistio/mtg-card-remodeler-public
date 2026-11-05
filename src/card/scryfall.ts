import { normalizeScryfallCard, type Card, type ScryfallCard } from "./model";
import { getCachedSearch, saveCachedSearch } from "./library";

const API = "https://api.scryfall.com";
const CACHE_TTL = 12 * 60 * 60 * 1000;\nconst memoryCache = new Map<string, { expiresAt: number; cards: Card[] }>();\n\nconst HEADERS = {
  Accept: "application/json",
  "User-Agent": "MTGCardRemodeller/0.2 (independent fan project)"
};

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

  const response = await fetch(`${API}/cards/search?${params}`, { signal, headers: HEADERS });
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

  const response = await fetch(`${API}/cards/${encodeURIComponent(id)}`, { headers: HEADERS });
  if (response.status === 404) return null;
  if (!response.ok) throw await readError(response);
  const card = normalizeScryfallCard(await response.json() as ScryfallCard);
  memoryCache.set(cacheKey, { cards: [card], expiresAt: Date.now() + CACHE_TTL });
  try { await saveCachedSearch(cacheKey, [card], CACHE_TTL); } catch { /* Cache is optional. */ }
  return card;
}
