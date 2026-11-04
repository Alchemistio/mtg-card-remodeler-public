import { z } from "zod";

export const CardFaceSchema = z.object({
  name: z.string(),
  manaCost: z.string().default(""),
  typeLine: z.string().default(""),
  oracleText: z.string().default(""),
  power: z.string().optional(),
  toughness: z.string().optional(),
  loyalty: z.string().optional(),
  imageUrl: z.string().url().optional()
});

export const CardSchema = z.object({
  id: z.string(),
  name: z.string(),
  manaCost: z.string().default(""),
  cmc: z.number().default(0),
  typeLine: z.string().default(""),
  oracleText: z.string().default(""),
  colors: z.array(z.string()).default([]),
  colorIdentity: z.array(z.string()).default([]),
  power: z.string().optional(),
  toughness: z.string().optional(),
  loyalty: z.string().optional(),
  rarity: z.string().default(""),
  set: z.string().default(""),
  collectorNumber: z.string().default(""),
  language: z.string().default("fr"),
  imageUrl: z.string().url().optional(),
  faces: z.array(CardFaceSchema).optional(),
  layout: z.string().default("normal"),
  source: z.literal("scryfall").default("scryfall")
});

export type CardFace = z.infer<typeof CardFaceSchema>;
export type Card = z.infer<typeof CardSchema>;

export interface ScryfallCard {
  id: string;
  name: string;
  mana_cost?: string;
  cmc?: number;
  type_line?: string;
  oracle_text?: string;
  colors?: string[];
  color_identity?: string[];
  power?: string;
  toughness?: string;
  loyalty?: string;
  rarity?: string;
  set?: string;
  collector_number?: string;
  lang?: string;
  layout?: string;
  image_uris?: { normal?: string; large?: string; png?: string; art_crop?: string };
  card_faces?: Array<{
    name: string; mana_cost?: string; type_line?: string; oracle_text?: string;
    power?: string; toughness?: string; loyalty?: string;
    image_uris?: { normal?: string; large?: string; png?: string; art_crop?: string };
  }>;
}

export function normalizeScryfallCard(raw: ScryfallCard): Card {
  return CardSchema.parse({
    id: raw.id, name: raw.name, manaCost: raw.mana_cost ?? "", cmc: raw.cmc ?? 0,
    typeLine: raw.type_line ?? "", oracleText: raw.oracle_text ?? "",
    colors: raw.colors ?? [], colorIdentity: raw.color_identity ?? [],
    power: raw.power, toughness: raw.toughness, loyalty: raw.loyalty,
    rarity: raw.rarity ?? "", set: raw.set ?? "", collectorNumber: raw.collector_number ?? "",
    language: raw.lang ?? "fr",
    imageUrl: raw.image_uris?.art_crop ?? raw.image_uris?.normal,
    layout: raw.layout ?? "normal",
    faces: raw.card_faces?.map(face => ({
      name: face.name, manaCost: face.mana_cost ?? "", typeLine: face.type_line ?? "",
      oracleText: face.oracle_text ?? "", power: face.power, toughness: face.toughness,
      loyalty: face.loyalty, imageUrl: face.image_uris?.art_crop ?? face.image_uris?.normal
    }))
  });
}