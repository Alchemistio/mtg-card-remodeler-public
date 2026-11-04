import { z } from "zod";

export const CardFaceSchema = z.object({
  name: z.string(),
  manaCost: z.string().default(""),
  typeLine: z.string().default(""),
  oracleText: z.string().default(""),
  flavorText: z.string().optional(),
  artist: z.string().optional(),
  power: z.string().optional(),
  toughness: z.string().optional(),
  loyalty: z.string().optional(),
  defense: z.string().optional(),
  imageUrl: z.string().url().optional()
});

export const CardSchema = z.object({
  id: z.string(),
  oracleId: z.string().optional(),
  name: z.string(),
  manaCost: z.string().default(""),
  cmc: z.number().default(0),
  typeLine: z.string().default(""),
  oracleText: z.string().default(""),
  flavorText: z.string().optional(),
  artist: z.string().optional(),
  colors: z.array(z.string()).default([]),
  colorIdentity: z.array(z.string()).default([]),
  power: z.string().optional(),
  toughness: z.string().optional(),
  loyalty: z.string().optional(),
  defense: z.string().optional(),
  rarity: z.string().default(""),
  set: z.string().default(""),
  setName: z.string().optional(),
  collectorNumber: z.string().default(""),
  language: z.string().default("fr"),
  releasedAt: z.string().optional(),
  scryfallUri: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
  borderColor: z.string().optional(),
  frame: z.string().optional(),
  watermark: z.string().optional(),
  promo: z.boolean().optional(),
  keywords: z.array(z.string()).default([]),
  faces: z.array(CardFaceSchema).optional(),
  layout: z.string().default("normal"),
  rawData: z.unknown().optional(),
  source: z.literal("scryfall").default("scryfall")
});

export type CardFace = z.infer<typeof CardFaceSchema>;
export type Card = z.infer<typeof CardSchema>;

export interface ScryfallCard {
  id: string;
  oracle_id?: string;
  name: string;
  mana_cost?: string;
  cmc?: number;
  type_line?: string;
  oracle_text?: string;
  flavor_text?: string;
  artist?: string;
  colors?: string[];
  color_identity?: string[];
  power?: string;
  toughness?: string;
  loyalty?: string;
  defense?: string;
  rarity?: string;
  set?: string;
  set_name?: string;
  collector_number?: string;
  lang?: string;
  released_at?: string;
  scryfall_uri?: string;
  border_color?: string;
  frame?: string;
  watermark?: string;
  promo?: boolean;
  keywords?: string[];
  layout?: string;
  image_uris?: { normal?: string; large?: string; png?: string; art_crop?: string };
  card_faces?: Array<{
    name: string; mana_cost?: string; type_line?: string; oracle_text?: string;
    flavor_text?: string; artist?: string; power?: string; toughness?: string; loyalty?: string; defense?: string;
    image_uris?: { normal?: string; large?: string; png?: string; art_crop?: string };
  }>;
  [key: string]: unknown;
}

export function normalizeScryfallCard(raw: ScryfallCard): Card {
  return CardSchema.parse({
    id: raw.id, oracleId: raw.oracle_id, name: raw.name,
    manaCost: raw.mana_cost ?? "", cmc: raw.cmc ?? 0,
    typeLine: raw.type_line ?? "", oracleText: raw.oracle_text ?? "",
    flavorText: raw.flavor_text, artist: raw.artist,
    colors: raw.colors ?? [], colorIdentity: raw.color_identity ?? [],
    power: raw.power, toughness: raw.toughness, loyalty: raw.loyalty, defense: raw.defense,
    rarity: raw.rarity ?? "", set: raw.set ?? "", setName: raw.set_name,
    collectorNumber: raw.collector_number ?? "", language: raw.lang ?? "fr",
    releasedAt: raw.released_at, scryfallUri: raw.scryfall_uri,
    borderColor: raw.border_color, frame: raw.frame, watermark: raw.watermark,
    promo: raw.promo, keywords: raw.keywords ?? [],
    imageUrl: raw.image_uris?.art_crop ?? raw.image_uris?.normal,
    layout: raw.layout ?? "normal",
    faces: raw.card_faces?.map(face => ({
      name: face.name, manaCost: face.mana_cost ?? "", typeLine: face.type_line ?? "",
      oracleText: face.oracle_text ?? "", flavorText: face.flavor_text, artist: face.artist,
      power: face.power, toughness: face.toughness, loyalty: face.loyalty, defense: face.defense,
      imageUrl: face.image_uris?.art_crop ?? face.image_uris?.normal
    })),
    rawData: raw
  });
}
