import { normalizeScryfallCard, type Card, type ScryfallCard } from "./model";

const API = "https://api.scryfall.com";

export async function searchCards(query: string, signal?: AbortSignal): Promise<Card[]> {
  const params = new URLSearchParams({ q: query.trim(), lang: "fr", unique: "cards", order: "name" });
  const response = await fetch(`${API}/cards/search?${params}`, {
    signal,
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    if (response.status === 404) return [];
    if (response.status === 429) throw new Error("Scryfall limite temporairement les requêtes. Réessaie dans un instant.");
    throw new Error(`Erreur Scryfall (${response.status}).`);
  }
  const payload = await response.json() as { data: ScryfallCard[] };
  return payload.data.map(normalizeScryfallCard);
}

export async function getCardByName(name: string): Promise<Card | null> {
  const params = new URLSearchParams({ exact: name, lang: "fr" });
  const response = await fetch(`${API}/cards/named?${params}`, { headers: { Accept: "application/json" } });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Impossible de récupérer la carte (${response.status}).`);
  return normalizeScryfallCard(await response.json() as ScryfallCard);
}