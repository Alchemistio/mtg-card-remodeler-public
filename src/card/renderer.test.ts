import { describe, expect, it } from "vitest";
import { renderCardSvg } from "./renderer";
import type { Card } from "./model";

const fixture: Card = {
  id: "fixture", name: "Carte <test>", manaCost: "{2}{G}", cmc: 3,
  typeLine: "Créature : bête", oracleText: "Piétinement\nQuand elle arrive, piochez une carte.",
  colors: ["G"], colorIdentity: ["G"], keywords: [], power: "3", toughness: "3",
  rarity: "common", set: "tst", collectorNumber: "001", language: "fr",
  layout: "normal", source: "scryfall"
};

describe("renderCardSvg", () => {
  it("renders a standalone SVG and escapes card text", () => {
    const svg = renderCardSvg(fixture);
    expect(svg).toContain("<svg");
    expect(svg).toContain("Carte &lt;test&gt;");
    expect(svg).toContain("750");
    expect(svg).toContain("Piétinement");
  });
  it("renders the requested face of a double-faced card", () => {
    const doubleFaced = { ...fixture, faces: [
      { name: "Face avant", manaCost: "{G}", typeLine: "Créature", oracleText: "Avant" },
      { name: "Face arrière", manaCost: "", typeLine: "Terrain", oracleText: "Arrière" }
    ] };
    expect(renderCardSvg(doubleFaced, 1)).toContain("Face arrière");
    expect(renderCardSvg(doubleFaced, 1)).toContain("Arrière");
  });
});
