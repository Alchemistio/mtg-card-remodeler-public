import { describe, expect, it } from "vitest";
import { toFeSensProps } from "./mtgCardAdapter";
import type { Card } from "./model";

const base: Card = {
  id: "test", name: "Carte test", manaCost: "{1}{G}", cmc: 2, typeLine: "Créature — Elfe",
  oracleText: "Piétinement", colors: ["G"], colorIdentity: ["G"], keywords: [], power: "2",
  toughness: "2", rarity: "rare", set: "tst", collectorNumber: "001", language: "fr",
  layout: "normal", source: "scryfall", releasedAt: "2026-01-01"
};

describe("FeSens renderer adapter", () => {
  it("maps standard Scryfall cards and mana symbols", () => {
    const props = toFeSensProps(base);
    expect(props).toMatchObject({
      frame: "standard", cardName: "Carte test", manaCost: ["1", "G"],
      typeLine: "Créature — Elfe", power: "2", toughness: "2", language: "FR"
    });
  });

  it("maps Saga chapters and keeps French reminder text", () => {
    const saga = { ...base, layout: "saga", typeLine: "Enchantement — saga",
      oracleText: "I — Créez un jeton.\nII — Piochez une carte.\nIII — Détruisez une cible." };
    const props = toFeSensProps(saga);
    expect(props?.frame).toBe("saga");
    if (props?.frame === "saga") {
      expect(props.chapters).toHaveLength(3);
      expect(props.reminderText).toContain("marqueur");
    }
  });

  it("maps planeswalker loyalty abilities", () => {
    const planeswalker = { ...base, layout: "planeswalker", loyalty: "3",
      oracleText: "+1: Piochez une carte.\n−2: Détruisez une créature." };
    const props = toFeSensProps(planeswalker);
    expect(props?.frame).toBe("planeswalker");
    if (props?.frame === "planeswalker") {
      expect(props.loyaltyAbilities.map(ability => ability.cost)).toEqual(["+1", "−2"]);
      expect(props.startingLoyalty).toBe("3");
    }
  });

  it("maps Adventure from its two Scryfall faces", () => {
    const adventure = { ...base, layout: "adventure", name: "Géant // Piétiner", faces: [
      { name: "Géant", manaCost: "{2}{R}", typeLine: "Créature — Géant", oracleText: "Le géant arrive.", power: "4", toughness: "3" },
      { name: "Piétiner", manaCost: "{R}", typeLine: "Éphémère — Aventure", oracleText: "Infligez 2 blessures." }
    ] };
    const props = toFeSensProps(adventure);
    expect(props?.frame).toBe("adventure");
    if (props?.frame === "adventure") {
      expect(props.cardName).toBe("Géant");
      expect(props.adventureName).toBe("Piétiner");
      expect(props.adventureRulesText).toBe("Infligez 2 blessures.");
    }
  });

  it("leaves unsupported split and battle layouts on the local renderer", () => {
    expect(toFeSensProps({ ...base, layout: "split" })).toBeNull();
    expect(toFeSensProps({ ...base, layout: "battle" })).toBeNull();
  });
});
