import React, { ReactElement } from "react";
import DeadByDaylight, {
    PerkModel,
    Language,
    ModifierType,
    AnyModel,
    AddonModel,
    ItemModel,
    OfferingModel,
    PlayerModel,
    PowerModel,
} from "@stephenpoole/deadbydaylight/all";
import AddonTooltip from "../components/tooltips/Addon";
import ItemTooltip from "../components/tooltips/Item";
import OfferingTooltip from "../components/tooltips/Offering";
import PerkTooltip from "../components/tooltips/Perk";
import PlayerTooltip from "../components/tooltips/Player";
import PowerTooltip from "../components/tooltips/Power";
import AuthorTooltip from "../components/tooltips/Author";
import { AuthorModel } from "../types";

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

    static getTooltip(model: AnyModel, isTooltipVisible = false): ReactElement | undefined {
        let tooltip: ReactElement | undefined;
        if (model.index === "NNEHL") {
            const { name, description, flavor, image } = model as unknown as AuthorModel;
            return (
                <AuthorTooltip
                    name={name}
                    description={description}
                    flavor={flavor}
                    image={image}
                />
            );
        }

        switch (model.modifier) {
            case ModifierType.Addon: {
                const { rarity, name, description, flavor, owner, type, image } =
                    model as unknown as AddonModel;
                tooltip = (
                    <AddonTooltip
                        rarity={rarity}
                        name={name}
                        description={description}
                        flavor={flavor}
                        owner={owner}
                        type={type}
                        image={image}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Perk: {
                const { rarity, name, description, flavor, owner, tier, image } =
                    model as PerkModel;
                tooltip = (
                    <PerkTooltip
                        rarity={rarity}
                        name={name}
                        description={description}
                        flavor={flavor}
                        owner={owner}
                        tier={tier}
                        image={image}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Item: {
                const { rarity, name, description, flavor, image } = model as ItemModel;
                tooltip = (
                    <ItemTooltip
                        rarity={rarity}
                        name={name}
                        description={description}
                        flavor={flavor}
                        image={image}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Player: {
                const { name, description, difficulty, image } = model as PlayerModel;
                tooltip = (
                    <PlayerTooltip
                        name={name}
                        description={description}
                        difficulty={difficulty}
                        image={image}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Power: {
                const { name, description, image } = model as PowerModel;
                tooltip = (
                    <PowerTooltip
                        name={name}
                        description={description}
                        image={image}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Offering: {
                const { rarity, name, description, flavor, image } = model as OfferingModel;
                tooltip = (
                    <OfferingTooltip
                        rarity={rarity}
                        name={name}
                        description={description}
                        flavor={flavor}
                        image={image}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            default:
            // noop
        }

        return tooltip;
    }
}

export default Dbd;
