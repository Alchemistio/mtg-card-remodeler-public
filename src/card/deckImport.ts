import { normalizeScryfallCard, type Card, type ScryfallCard } from "./model";

export type DeckBoard = "main" | "commander" | "sideboard" | "companion" | "maybeboard" | "tokens";
export interface DeckLine {
  id: string;
  name: string;
  quantity: number;
  board: DeckBoard;
  set?: string;
  collectorNumber?: string;
  language?: string;
}
export interface ImportedDeck {
  name: string;
  source?: string;
  lines: DeckLine[];
}
export interface ResolvedDeckLine extends DeckLine {
  card?: Card;
  error?: string;
}
const makeId = () => `deck-line:${Math.random().toString(36).slice(2, 10)}`;

export function parseDecklist(input: string): ImportedDeck {
  const lines: DeckLine[] = [];
  let board: DeckBoard = "main";
  const sections: Array<[RegExp, DeckBoard]> = [
    [/^(sideboard|side board)$/i, "sideboard"],
    [/^(commander|commanders)$/i, "commander"],
    [/^(companion|companions)$/i, "companion"],
    [/^(maybeboard|maybe board)$/i, "maybeboard"],
    [/^(tokens?)$/i, "tokens"],
    [/^(mainboard|main deck|deck)$/i, "main"]
  ];
  for (const raw of input.split(/\r?\n/)) {
    const value = raw.trim();
    if (!value || value.startsWith("#") || value.startsWith("//")) continue;
    const section = sections.find(([pattern]) => pattern.test(value.replace(/:$/, "")));
    if (section) { board = section[1]; continue; }
    const match = value.match(/^(\d+)\s*x?\s+(.+?)(?:\s+\(([a-z0-9]{2,6})\)\s*(\S+))?(?:\s+\[.*\])?$/i);
    if (!match) continue;
    const [, quantity, rawName, set, collectorNumber] = match;
    const suffix = rawName.match(/\s+(?:lang|language|l):([a-z]{2,3})$/i);
    const name = (suffix ? rawName.slice(0, suffix.index) : rawName).trim();
    if (!name) continue;
    const language = suffix?.[1]?.toLowerCase();
    lines.push({ id: makeId(), name, quantity: Math.max(1, Math.min(999, Number(quantity))), board, set: set?.toLowerCase(), collectorNumber, language });
  }
  return { name: "Deck importé", lines };
}

function extractDeckId(value: string, host: "moxfield" | "archidekt"): string {
  const url = new URL(value);
  const match = host === "moxfield"
    ? url.pathname.match(/\/decks\/([A-Za-z0-9_-]+)/i)
    : url.pathname.match(/\/decks\/(\d+)/i);
  if (!match) throw new Error("Impossible de lire l'identifiant de ce deck.");
  return match[1];
}

function normalizeMoxfield(payload: any): ImportedDeck {
  const lines: DeckLine[] = [];
  const addBoard = (board: any, type: DeckBoard) => {
    if (!board || typeof board !== "object") return;
    for (const [key, entry] of Object.entries(board) as Array<[string, any]>) {
      const card = entry?.card ?? entry;
      const name = card?.name ?? entry?.name ?? key;
      const quantity = Number(entry?.quantity ?? entry?.count ?? 1);
      if (name && Number.isFinite(quantity) && quantity > 0) lines.push({
        id: makeId(), name, quantity, board: type,
        set: card?.set ?? card?.setCode,
        collectorNumber: card?.cn ?? card?.collector_number,
        language: card?.language
      });
    }
  };
  addBoard(payload.commanders, "commander");
  addBoard(payload.companions, "companion");
  addBoard(payload.mainboard, "main");
  addBoard(payload.sideboard, "sideboard");
  addBoard(payload.maybeboard, "maybeboard");
  return { name: payload.name || "Deck Moxfield", source: "Moxfield", lines };
}

function normalizeArchidekt(payload: any): ImportedDeck {
  const lines: DeckLine[] = [];
  const included = new Map<string, boolean>((payload.categories ?? []).map((c: any) => [c.name, c.includedInDeck !== false]));
  for (const entry of payload.cards ?? []) {
    const categories: string[] = entry.categories ?? [];
    if (categories.length && included.size && !categories.some(c => included.get(c) !== false)) continue;
    const name = entry.card?.oracleCard?.name ?? entry.card?.name ?? entry.name;
    const quantity = Number(entry.quantity ?? entry.qty ?? 1);
    if (!name || !Number.isFinite(quantity) || quantity <= 0) continue;
    const category = categories.join(" ").toLowerCase();
    const board: DeckBoard = /commander/.test(category) ? "commander" : /sideboard/.test(category) ? "sideboard" : /maybeboard/.test(category) ? "maybeboard" : /companion/.test(category) ? "companion" : "main";
    const printing = entry.card?.edition ?? entry.card?.set;
    lines.push({ id: makeId(), name, quantity, board, set: printing?.editioncode ?? printing?.code, collectorNumber: entry.card?.collectorNumber });
  }
  return { name: payload.name || "Deck Archidekt", source: "Archidekt", lines };
}

export async function importDeckUrl(value: string, signal?: AbortSignal): Promise<ImportedDeck> {
  const url = new URL(value.trim());
  if (/moxfield\.com$/i.test(url.hostname)) {
    const id = extractDeckId(value, "moxfield");
    const response = await fetch(`https://api2.moxfield.com/v3/decks/all/${encodeURIComponent(id)}`, {
      signal, headers: { Accept: "application/json", "User-Agent": "MTGCardRemodeller/0.3 (personal deck importer)" }
    });
    if (!response.ok) throw new Error(response.status === 403 ? "Moxfield bloque cette requête depuis l'application. Exporte la liste en texte depuis Moxfield puis colle-la ici." : `Import Moxfield impossible (${response.status}).`);
    const deck = normalizeMoxfield(await response.json());
    if (!deck.lines.length) throw new Error("Aucune carte trouvée dans ce deck Moxfield.");
    return deck;
  }
  if (/archidekt\.com$/i.test(url.hostname)) {
    const id = extractDeckId(value, "archidekt");
    const response = await fetch(`https://archidekt.com/api/decks/${id}/`, { signal, headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`Import Archidekt impossible (${response.status}). Tu peux aussi coller la decklist exportée en texte.`);
    const deck = normalizeArchidekt(await response.json());
    if (!deck.lines.length) throw new Error("Aucune carte trouvée dans ce deck Archidekt.");
    return deck;
  }
  throw new Error("Lien non pris en charge. Utilise un lien public Moxfield/Archidekt ou colle une decklist.");
}

async function resolveChunk(lines: DeckLine[], defaultLanguage: string, signal?: AbortSignal): Promise<ResolvedDeckLine[]> {
  const identifiers = lines.map(line => line.set && line.collectorNumber
    ? { set: line.set, collector_number: line.collectorNumber }
    : { name: line.name });
  const response = await fetch("https://api.scryfall.com/cards/collection", {
    method: "POST", signal,
    headers: { Accept: "application/json", "Content-Type": "application/json", "User-Agent": "MTGCardRemodeller/0.3 (personal deck importer)" },
    body: JSON.stringify({ identifiers })
  });
  if (!response.ok) throw new Error(`Scryfall n'a pas pu résoudre le lot de cartes (${response.status}).`);
  const payload = await response.json() as { data: ScryfallCard[]; not_found: Array<Record<string, string>> };
  const cards = payload.data.map(normalizeScryfallCard);
  const byName = new Map(cards.map(card => [card.name.toLowerCase(), card]));
  return lines.map((line, index) => {
    const found = line.set && line.collectorNumber
      ? cards.find(card => card.set === line.set && card.collectorNumber === line.collectorNumber)
      : byName.get(line.name.toLowerCase()) ?? cards.find(card => card.name.toLowerCase() === line.name.toLowerCase());
    if (found) return { ...line, card: found };
    return { ...line, error: "Carte introuvable dans Scryfall. Vérifie le nom, l'édition ou la langue." };
  });
}

export async function resolveDeckLines(lines: DeckLine[], defaultLanguage = "fr", signal?: AbortSignal, onProgress?: (done: number, total: number) => void): Promise<ResolvedDeckLine[]> {
  const result: ResolvedDeckLine[] = [];
  for (let i = 0; i < lines.length; i += 75) {
    if (signal?.aborted) throw new DOMException("Import annulé.", "AbortError");
    const chunk = lines.slice(i, i + 75);
    result.push(...await resolveChunk(chunk, defaultLanguage, signal));
    onProgress?.(Math.min(i + chunk.length, lines.length), lines.length);
    if (i + 75 < lines.length) await new Promise(resolve => setTimeout(resolve, 120));
  }
  return result;
}
