import { describe, expect, it } from "vitest";
import { findAssets, validateAssetPath } from "./manifest";
import { getFramePreset } from "./framePresets";

describe("asset registry", () => {
  it("lists frame assets", () => {
    expect(findAssets("frame").length).toBeGreaterThan(0);
  });
  it("rejects unsafe relative paths", () => {
    expect(validateAssetPath("assets/frames/white.svg")).toBe(true);
    expect(validateAssetPath("../secret.txt")).toBe(false);
    expect(validateAssetPath("/absolute/file")).toBe(false);
  });
  it("selects a multicolor frame for multicolor cards", () => {
    expect(getFramePreset(["W", "U"]).id).toBe("multicolor");
  });
});
