import { describe, expect, it } from "vitest";
import { applyCardOverrides, createCardProject } from "./customization";
import type { Card } from "./model";

const card: Card = {
  id: "base", name: "Nom source", manaCost: "{1}{G}", cmc: 2, typeLine: "Créature",
  oracleText: "Texte source", colors: ["G"], colorIdentity: ["G"], rarity: "common",
  set: "tst", collectorNumber: "1", language: "fr", layout: "normal", source: "scryfall",
  rawData: { name: "Nom source", original: true }
};

describe("card customization", () => {
  it("applies overrides without mutating the source snapshot", () => {
    const customized = applyCardOverrides(card, { name: "Nom personnalisé", oracleText: "" });
    expect(customized.name).toBe("Nom personnalisé");
    expect(customized.oracleText).toBe("");
    expect(card.name).toBe("Nom source");
    expect(card.rawData).toEqual({ name: "Nom source", original: true });
  });
  it("creates a project with a preserved source snapshot", () => {
    const project = createCardProject(card, { framePreset: "midnight" });
    expect(project.sourceCardId).toBe("base");
    expect(project.sourceSnapshot.name).toBe("Nom source");
  });
});
