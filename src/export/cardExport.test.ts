import { describe, expect, it } from "vitest";
import { getPdfPageGeometry } from "./cardExport";

describe("print PDF geometry", () => {
  it("includes 3mm bleed and outer crop-mark margin by default", () => {
    const geometry = getPdfPageGeometry();
    expect(geometry.imageWidth).toBe(69.5);
    expect(geometry.imageHeight).toBe(94.9);
    expect(geometry.pageWidth).toBe(79.5);
    expect(geometry.pageHeight).toBe(104.9);
    expect(geometry.trimX).toBe(8);
    expect(geometry.trimY).toBe(8);
  });

  it("supports a trim-only PDF without crop marks", () => {
    const geometry = getPdfPageGeometry({ bleedMm: 0, cropMarks: false });
    expect(geometry.pageWidth).toBe(63.5);
    expect(geometry.pageHeight).toBe(88.9);
    expect(geometry.marginMm).toBe(0);
  });

  it("clamps bleed to the supported maximum", () => {
    expect(getPdfPageGeometry({ bleedMm: 9 }).bleedMm).toBe(5);
  });
});
