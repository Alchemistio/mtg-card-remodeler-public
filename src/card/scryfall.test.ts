import { afterEach, describe, expect, it, vi } from "vitest";
import { searchCards } from "./scryfall";

afterEach(() => vi.unstubAllGlobals());

describe("Scryfall search cache", () => {
  it("reuses a recent search result without another network request", async () => {
    const raw = {
      id: "00000000-0000-4000-8000-000000000001",
      name: "Créature de cache",
      mana_cost: "{1}{G}",
      type_line: "Créature — Elfe",
      oracle_text: "Piétinement",
      colors: ["G"],
      color_identity: ["G"],
      power: "2",
      toughness: "2",
      rarity: "common",
      set: "tst",
      collector_number: "001",
      lang: "fr"
    };
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ data: [raw] })
    });
    vi.stubGlobal("fetch", fetchMock);

    const query = `cache-test-${Date.now()}`;
    const first = await searchCards(query);
    const second = await searchCards(query);

    expect(first[0].name).toBe("Créature de cache");
    expect(second[0].id).toBe(first[0].id);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
