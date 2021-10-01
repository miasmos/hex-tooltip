import DeadByDaylight, {
    PlayerModel,
    PowerModel,
    PerkModel,
    AddonModel,
    OfferingModel,
    ItemModel,
    Language,
} from "@stephenpoole/deadbydaylight/all";
import { DbdModel } from "../types";

class Dbd {
    static toModel(text: string, language = Language.English): DbdModel | undefined {
        const regex = new RegExp(/\s([1-3]{1})$/g);
        const [, tier] = regex.exec(text) || [];
        const input = tier ? text.substring(0, text.lastIndexOf(" ")) : text;
        const dbd = DeadByDaylight(language);
        const perk = dbd.perk(input) as PerkModel;

        if (!perk.isEmpty) {
            if (tier) {
                perk.setTier(Number(tier));
            }
            return perk;
        }

        const addon = dbd.addon(input) as AddonModel;
        if (!addon.isEmpty) {
            return addon;
        }

        const item = dbd.item(input);
        if (!item.isEmpty) {
            return item as ItemModel;
        }

        const offering = dbd.offering(input) as OfferingModel;
        if (!offering.isEmpty) {
            return offering;
        }

        const killer = dbd.killer(input) as PlayerModel;
        if (!killer.isEmpty) {
            return killer;
        }

        const survivor = dbd.survivor(input) as PlayerModel;
        if (!survivor.isEmpty) {
            return survivor;
        }

        const power = dbd.power(input) as PowerModel;
        if (!power.isEmpty) {
            return power;
        }

        return undefined;
    }
}

export default Dbd;
