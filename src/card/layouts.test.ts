import { describe, expect, it } from "vitest";
import { getLayoutDefinition, isDoubleFaced } from "./layouts";

describe("card layouts", () => {
  it("recognizes double-faced layouts", () => {
    expect(isDoubleFaced("transform")).toBe(true);
    expect(isDoubleFaced("modal_dfc")).toBe(true);
    expect(isDoubleFaced("normal")).toBe(false);
  });
  it("falls back safely for unknown layout values", () => {
    expect(getLayoutDefinition("unknown").id).toBe("normal");
  });
});
