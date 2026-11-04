import { describe, expect, it } from "vitest";
import { normalizeScryfallCard } from "./model";

describe("normalizeScryfallCard", () => {
  it("maps Scryfall fields to the application model", () => {
    const card = normalizeScryfallCard({
      id: "abc", name: "Carte test", lang: "fr", cmc: 2, mana_cost: "{1}{G}",
      type_line: "Créature : bête", oracle_text: "Piétinement", colors: ["G"],
      color_identity: ["G"], power: "2", toughness: "2", rarity: "common",
      set: "tst", collector_number: "001", layout: "normal"
    });
    expect(card.name).toBe("Carte test");
    expect(card.manaCost).toBe("{1}{G}");
    expect(card.language).toBe("fr");
  });
  it("preserves both faces when Scryfall supplies them", () => {
    const card = normalizeScryfallCard({
      id: "dfc", name: "Avant // Arrière", layout: "transform",
      card_faces: [
        { name: "Avant", type_line: "Créature", oracle_text: "Recto" },
        { name: "Arrière", type_line: "Créature", oracle_text: "Verso" }
      ]
    });
    expect(card.faces?.map(face => face.name)).toEqual(["Avant", "Arrière"]);
  });
});
