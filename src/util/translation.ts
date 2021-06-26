import { Difficulty, Rarity } from "@stephenpoole/deadbydaylight";

class Translation {
    static rarity(key: Rarity): string {
        switch (key) {
            case Rarity.Common:
                return "common";
            case Rarity.Uncommon:
                return "uncommon";
            case Rarity.Rare:
                return "rare";
            case Rarity.VeryRare:
                return "veryRare";
            case Rarity.UltraRare:
                return "ultraRare";
            case Rarity.Event:
                return "event";
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
}

export default Translation;
