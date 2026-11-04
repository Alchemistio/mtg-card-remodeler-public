import { z } from "zod";
import { CardSchema, type Card } from "./model";

export const CardOverridesSchema = z.object({
  name: z.string().optional(),
  manaCost: z.string().optional(),
  typeLine: z.string().optional(),
  oracleText: z.string().optional(),
  flavorText: z.string().optional(),
  power: z.string().optional(),
  toughness: z.string().optional(),
  loyalty: z.string().optional(),
  imageUrl: z.string().url().optional(),
  framePreset: z.string().optional(),
  fontFamily: z.string().optional(),
  fontSize: z.number().min(6).max(48).optional(),
  lineHeight: z.number().min(0.8).max(2).optional()
});

export const CardProjectSchema = z.object({
  id: z.string(),
  sourceCardId: z.string(),
  sourceSnapshot: CardSchema,
  overrides: CardOverridesSchema.default({}),
  createdAt: z.string(),
  updatedAt: z.string()
});

export type CardOverrides = z.infer<typeof CardOverridesSchema>;
export type CardProject = z.infer<typeof CardProjectSchema>;

/**
 * Resolve a display card without modifying the original Scryfall snapshot.
 * Undefined override values are ignored; explicit empty strings remain valid.
 */
export function applyCardOverrides(card: Card, overrides: CardOverrides): Card {
  const resolved = { ...card };
  for (const [key, value] of Object.entries(overrides)) {
    if (value !== undefined && key in resolved && key !== "framePreset" && key !== "fontFamily" && key !== "fontSize" && key !== "lineHeight") {
      Object.assign(resolved, { [key]: value });
    }
  }
  return CardSchema.parse(resolved);
}

export function createCardProject(card: Card, overrides: CardOverrides = {}): CardProject {
  const now = new Date().toISOString();
  return CardProjectSchema.parse({
    id: `project:${card.id}`,
    sourceCardId: card.id,
    sourceSnapshot: card,
    overrides,
    createdAt: now,
    updatedAt: now
  });
}
