import { describe, expect, it } from "vitest";
import { DEFAULT_PRINT_SETTINGS, getSheetGeometry } from "./printSheet";

describe("print sheet geometry", () => {
  it("fits a standard 3x3 card sheet on A4 with bleed", () => {
    const geometry = getSheetGeometry(DEFAULT_PRINT_SETTINGS);
    expect(geometry.pageWidthMm).toBe(210);
    expect(geometry.pageHeightMm).toBe(297);
    expect(geometry.cardsPerPage).toBe(9);
  });
  it("supports landscape Letter and custom paper sizes", () => {
    const letter = getSheetGeometry({ ...DEFAULT_PRINT_SETTINGS, paper: "Letter", orientation: "landscape", rows: 2 });
    expect(letter.pageWidthMm).toBe(279.4);
    expect(letter.pageHeightMm).toBe(215.9);
    const custom = getSheetGeometry({ ...DEFAULT_PRINT_SETTINGS, paper: "Custom", customWidthMm: 250, customHeightMm: 330 });
    expect(custom.pageWidthMm).toBe(250);
    expect(custom.pageHeightMm).toBe(330);
  });
  it("rejects a grid that does not fit inside the paper margins", () => {
    expect(() => getSheetGeometry({ ...DEFAULT_PRINT_SETTINGS, columns: 5 })).toThrow(/ne tient pas/);
  });
});
