import { describe, expect, it } from "vitest";
import { parseCsvDecklist, parseDecklist } from "./deckImport";

describe("decklist parser", () => {
  it("parses quantities, set/collector references and board sections", () => {
    const deck = parseDecklist("4 Lightning Bolt (lea) 161\n1 Sol Ring\n\nSideboard\n2 Negate");
    expect(deck.lines).toHaveLength(3);
    expect(deck.lines[0]).toMatchObject({ quantity: 4, name: "Lightning Bolt", set: "lea", collectorNumber: "161", board: "main" });
    expect(deck.lines[2]).toMatchObject({ quantity: 2, name: "Negate", board: "sideboard" });
  });
  it("supports Arena-style x quantities and language suffixes", () => {
    const deck = parseDecklist("1x Sol Ring\n2 Counterspell lang:fr");
    expect(deck.lines[0].quantity).toBe(1);
    expect(deck.lines[1]).toMatchObject({ name: "Counterspell", language: "fr", quantity: 2 });
  });
});

describe("CSV decklist parser", () => { it("supports quoted names, set codes and quantities", () => { const deck = parseCsvDecklist('Quantity,Name,Set,Collector Number,Board\n2,"Urza, Lord High Artificer",mh1,75,Mainboard\n1,Sol Ring,cmm,392,Commander'); expect(deck.lines).toHaveLength(2); expect(deck.lines[0]).toMatchObject({ quantity: 2, name: "Urza, Lord High Artificer", set: "mh1", collectorNumber: "75", board: "main" }); expect(deck.lines[1]).toMatchObject({ quantity: 1, name: "Sol Ring", board: "commander" }); }); it("rejects unclosed quoted fields", () => { expect(() => parseCsvDecklist('Quantity,Name\n1,"Unclosed')).toThrow(/guillemet non fermé/); }); });
