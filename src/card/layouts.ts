export type CardLayout = "normal" | "split" | "flip" | "transform" | "modal_dfc" | "adventure" | "saga" | "planeswalker" | "class" | "prototype" | "battle";

export interface CardLayoutDefinition {
  id: CardLayout;
  label: string;
  faceCount: 1 | 2;
  rulesPanel: "standard" | "split" | "saga" | "planeswalker" | "adventure";
  hasPowerToughness: boolean;
  hasLoyalty: boolean;
}

const DEFINITIONS: Record<CardLayout, CardLayoutDefinition> = {
  normal: { id: "normal", label: "Classique", faceCount: 1, rulesPanel: "standard", hasPowerToughness: true, hasLoyalty: false },
  split: { id: "split", label: "Fractionnée", faceCount: 1, rulesPanel: "split", hasPowerToughness: false, hasLoyalty: false },
  flip: { id: "flip", label: "Inversée", faceCount: 1, rulesPanel: "standard", hasPowerToughness: true, hasLoyalty: false },
  transform: { id: "transform", label: "Transformable", faceCount: 2, rulesPanel: "standard", hasPowerToughness: true, hasLoyalty: false },
  modal_dfc: { id: "modal_dfc", label: "Recto-verso modal", faceCount: 2, rulesPanel: "standard", hasPowerToughness: true, hasLoyalty: false },
  adventure: { id: "adventure", label: "Aventure", faceCount: 1, rulesPanel: "adventure", hasPowerToughness: true, hasLoyalty: false },
  saga: { id: "saga", label: "Saga", faceCount: 1, rulesPanel: "saga", hasPowerToughness: false, hasLoyalty: false },
  planeswalker: { id: "planeswalker", label: "Planeswalker", faceCount: 1, rulesPanel: "planeswalker", hasPowerToughness: false, hasLoyalty: true },
  class: { id: "class", label: "Classe", faceCount: 1, rulesPanel: "standard", hasPowerToughness: false, hasLoyalty: false },
  prototype: { id: "prototype", label: "Prototype", faceCount: 1, rulesPanel: "standard", hasPowerToughness: true, hasLoyalty: false },
  battle: { id: "battle", label: "Bataille", faceCount: 1, rulesPanel: "standard", hasPowerToughness: false, hasLoyalty: false }
};

export function getLayoutDefinition(layout: string): CardLayoutDefinition {
  return DEFINITIONS[layout as CardLayout] ?? DEFINITIONS.normal;
}

export function isDoubleFaced(layout: string): boolean {
  return getLayoutDefinition(layout).faceCount === 2;
}
