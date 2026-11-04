import { describe, expect, it } from "vitest";
import { layoutRulesText, manaColor, renderRulesLayoutSvg } from "./rulesLayout";

describe("rules text symbol layout", () => {
  it("keeps mana and tap symbols as atomic inline units", () => {
    const layout = layoutRulesText("Ajoutez {G}. {T} : piochez une carte.", {
      width: 250, height: 120, maxFontSize: 18, minFontSize: 12
    });
    const symbols = layout.lines.flatMap(line => line.runs).filter(run => run.kind === "symbol");
    expect(symbols.map(symbol => symbol.value)).toEqual(["G", "T"]);
  });

  it("uses color identity for mana symbols", () => {
    expect(manaColor("W")).toBe("#f2e8cf");
    expect(manaColor("U/R")).toBe("#5b9bd5");
  });

  it("renders symbols as vector pips", () => {
    const layout = layoutRulesText("Payez {2}{G}", { width: 300, height: 80 });
    const svg = renderRulesLayoutSvg(layout, 10, 30);
    expect(svg).toContain("<circle");
    expect(svg).toContain(">G</text>");
  });
});
