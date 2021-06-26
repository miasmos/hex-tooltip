import { Difficulty, ModifierType, PlayerType, Rarity } from "@stephenpoole/deadbydaylight";

class ClassName {
    static rarity(value: Rarity): string {
        switch (value) {
            case Rarity.Common:
                return "common";
            case Rarity.Uncommon:
                return "uncommon";
            case Rarity.Rare:
                return "rare";
            case Rarity.VeryRare:
                return "very-rare";
            case Rarity.UltraRare:
                return "ultra-rare";
            case Rarity.Event:
                return "event";
            default:
                return "";
        }
    }

    static type(value: PlayerType): string {
        switch (value) {
            case PlayerType.Killer:
                return "killer";
            case PlayerType.Survivor:
                return "survivor";
            default:
                return "";
        }
    }

    static difficulty(key: Difficulty): string {
        switch (key) {
            case Difficulty.Easy:
                return "easy";
            case Difficulty.Intermediate:
                return "intermediate";
            case Difficulty.Hard:
                return "hard";
            default:
                return "";
        }
    }

    static modifierType(value: ModifierType): string {
        switch (value) {
            case ModifierType.Addon:
                return "addon";
            case ModifierType.Item:
                return "item";
            case ModifierType.Offering:
                return "offering";
            case ModifierType.Perk:
                return "perk";
            case ModifierType.Player:
                return "player";
            case ModifierType.Power:
                return "power";
            default:
                return "none";
        }
    }
}

export default ClassName;
