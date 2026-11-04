import { describe, expect, it } from "vitest";
import { tokenizeRulesText } from "./symbols";

describe("tokenizeRulesText", () => {
  it("separates rules text, mana symbols and line breaks", () => {
    expect(tokenizeRulesText("Ajoutez {G}.\nPiétinement")).toEqual([
      { kind: "text", value: "Ajoutez " }, { kind: "symbol", value: "G" },
      { kind: "text", value: "." }, { kind: "newline", value: "\n" },
      { kind: "text", value: "Piétinement" }
    ]);
  });
});