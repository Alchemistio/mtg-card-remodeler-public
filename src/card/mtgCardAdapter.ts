import type { MtgCardProps } from "mtg-card";
import type { Card, CardFace } from "./model";
import type { CardOverrides } from "./customization";

const FRENCH_SAGA_REMINDER = "(Au moment où cette saga arrive et après votre étape de pioche, ajoutez un marqueur « sapience ». Sacrifiez-la après le chapitre III.)";

function manaSymbols(cost: string): string[] {
  return [...cost.matchAll(/\\{([^{}]+)\\}/g)].map(match => match[1]);
}

function rarityValue(rarity: string): string | undefined {
  return ["common", "uncommon", "rare", "mythic"].includes(rarity) ? rarity : undefined;
}

function faceValue<T extends keyof CardFace>(
  face: CardFace | undefined,
  card: Card,
  key: T
): CardFace[T] | Card[T] {
  return face?.[key] ?? card[key as keyof Card] as CardFace[T] | Card[T];
}

function baseProps(card: Card, face: CardFace | undefined, overrides: CardOverrides) {
  const typeLine = overrides.typeLine ?? faceValue(face, card, "typeLine") as string;
  const manaCost = overrides.manaCost ?? faceValue(face, card, "manaCost") as string;
  return {
    cardName: overrides.name ?? faceValue(face, card, "name") as string,
    manaCost: manaSymbols(manaCost),
    cardArt: overrides.imageUrl ?? faceValue(face, card, "imageUrl") as string | undefined,
    typeLine,
    legendary: /\\bLegendary\\b|\\bLégendaire\\b/i.test(typeLine),
    cardNumber: card.collectorNumber,
    rarity: rarityValue(card.rarity),
    setCode: card.set.toUpperCase(),
    language: card.language.toUpperCase(),
    artist: face?.artist ?? card.artist,
    year: card.releasedAt?.slice(0, 4)
  };
}

function parsePlaneswalkerAbilities(text: string): { cost: string; text: string }[] {
  const abilities: { cost: string; text: string }[] = [];
  for (const line of text.split(/\\r?\\n/)) {
    const match = line.match(/^([+\\-−]?\\d+)\\s*:\\s*(.*)$/);
    if (match) abilities.push({ cost: match[1], text: match[2] });
    else if (line.trim() && abilities.length) abilities[abilities.length - 1].text += `\\n${line}`;
  }
  return abilities;
}

function parseSaga(text: string): { chapters: { numerals: string; text: string }[]; reminderText?: string } {
  const chapters: { numerals: string; text: string }[] = [];
  let reminderText: string | undefined;
  const chapterPattern = /^(I{1,3}|IV|V|VI{0,3}|IX|X|[0-9]+)\\s*[—–-]\\s*(.*)$/;
  for (const line of text.split(/\\r?\\n/)) {
    const chapter = line.match(chapterPattern);
    if (chapter) chapters.push({ numerals: chapter[1], text: chapter[2] });
    else if (/^\\s*\\(.*\\)\\s*$/.test(line)) reminderText = line.trim();
    else if (chapters.length && line.trim()) chapters[chapters.length - 1].text += `\\n${line}`;
  }
  return { chapters, reminderText: reminderText ?? FRENCH_SAGA_REMINDER };
}

function standardFrame(typeLine: string, oracleText: string): "standard" | "vehicle" | "mutate" | "land" {
  if (/\\bLand\\b|\\bTerrain\\b/i.test(typeLine)) return "land";
  if (/\\bVehicle\\b|\\bVéhicule\\b/i.test(typeLine)) return "vehicle";
  if (/\\bMutate\\b|\\bMutation\\b/i.test(oracleText)) return "mutate";
  return "standard";
}

/**
 * Maps the normalized Scryfall model to FeSens' MIT-licensed MTG card renderer.
 * Unsupported compositions deliberately return null and keep the local SVG fallback.
 */
export function toFeSensProps(card: Card, faceIndex = 0, overrides: CardOverrides = {}): MtgCardProps | null {
  if (overrides.framePreset || ["split", "battle", "class", "meld", "planar", "scheme", "vanguard", "token"].includes(card.layout)) return null;

  if (card.layout === "adventure") {
    const adventureFace = card.faces?.find(face => /\\bAdventure\\b|\\bAventure\\b/i.test(face.typeLine));
    const creatureFace = card.faces?.find(face => face !== adventureFace) ?? card.faces?.[0];
    if (!adventureFace || !creatureFace) return null;
    const creatureBase = baseProps(card, creatureFace, overrides);
    return {
      ...creatureBase,
      frame: "adventure",
      rulesText: overrides.oracleText ?? creatureFace.oracleText,
      flavorText: overrides.flavorText ?? creatureFace.flavorText,
      power: overrides.power ?? creatureFace.power,
      toughness: overrides.toughness ?? creatureFace.toughness,
      adventureName: adventureFace.name,
      adventureManaCost: manaSymbols(adventureFace.manaCost),
      adventureTypeLine: adventureFace.typeLine,
      adventureRulesText: adventureFace.oracleText
    };
  }

  const face = card.faces?.[faceIndex];
  const base = baseProps(card, face, overrides);
  const oracleText = overrides.oracleText ?? faceValue(face, card, "oracleText") as string;
  if (card.layout === "planeswalker") {
    const loyaltyAbilities = parsePlaneswalkerAbilities(oracleText);
    if (!loyaltyAbilities.length) return null;
    return {
      ...base,
      frame: "planeswalker",
      loyaltyAbilities,
      startingLoyalty: overrides.loyalty ?? face?.loyalty ?? card.loyalty ?? "0"
    };
  }

  if (card.layout === "saga") {
    const saga = parseSaga(oracleText);
    if (!saga.chapters.length) return null;
    return { ...base, frame: "saga", chapters: saga.chapters, reminderText: saga.reminderText };
  }

  const typeLine = base.typeLine;
  const manaCost = overrides.manaCost ?? faceValue(face, card, "manaCost") as string;
  return {
    ...base,
    frame: standardFrame(typeLine, oracleText),
    rulesText: oracleText,
    flavorText: overrides.flavorText ?? faceValue(face, card, "flavorText") as string | undefined,
    power: overrides.power ?? faceValue(face, card, "power") as string | undefined,
    toughness: overrides.toughness ?? faceValue(face, card, "toughness") as string | undefined,
    landSymbol: /\\bBasic Land\\b|\\bTerrain de base\\b/i.test(typeLine)
      ? (manaSymbols(manaCost)[0] ?? ({ Plains: "W", Plaine: "W", Island: "U", Île: "U", Swamp: "B", Marais: "B", Mountain: "R", Montagne: "R", Forest: "G", Forêt: "G" } as Record<string, string>)[typeLine.split(/[—–-]/).at(-1)?.trim() ?? ""])
      : undefined
  };
}
