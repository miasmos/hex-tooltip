import DeadByDaylight, {
    PerkModel,
    Language,
    ModifierType,
    AnyModel,
} from "@stephenpoole/deadbydaylight/all";

class Dbd {
    static toModel(text: string, language = Language.English): AnyModel | undefined {
        const regex = new RegExp(/\s([1-3]{1})$/g);
        const [, tier] = regex.exec(text) || [];
        const input = tier ? text.substring(0, text.lastIndexOf(" ")) : text;
        const dbd = DeadByDaylight(language);
        const model = dbd.get(input);

        if (tier && model?.modifier === ModifierType.Perk) {
            (model as PerkModel).setTier(Number(tier));
        }

        return model;
    }
}

export default Dbd;
