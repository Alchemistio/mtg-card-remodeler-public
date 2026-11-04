import { describe, expect, it } from "vitest";
import { fitText, wrapText } from "./typography";

describe("typography layout", () => {
  it("wraps text into lines within the target width", () => {
    const lines = wrapText("un deux trois quatre", 45, 10, "test", (text, size) => text.length * size * 0.5);
    expect(lines.length).toBeGreaterThan(1);
  });

  it("reduces font size for dense text and reports overflow", () => {
    const result = fitText("un deux trois quatre cinq six sept huit neuf dix", {
      width: 80, height: 24, maxFontSize: 20, minFontSize: 8,
      measure: (text, size) => text.length * size * 0.5
    });
    expect(result.fontSize).toBeLessThan(20);
    expect(result.lines.length).toBeGreaterThan(0);
  });
});
