import { Difficulty, ItemType, Rarity } from "@moonswelle/deadbydaylight";

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

    static item(key: ItemType): string {
        switch (key) {
            case ItemType.AidKit:
                return "aidKit";
            case ItemType.Firecracker:
                return "firecracker";
            case ItemType.Flashlight:
                return "flashlight";
            case ItemType.Key:
                return "key";
            case ItemType.Map:
                return "map";
            case ItemType.Toolbox:
                return "toolbox";
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
