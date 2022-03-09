/* eslint-disable indent */
import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import * as DeadByDaylight from "@moonswelle/deadbydaylight";
import {
    AddonModel,
    ItemModel,
    Language,
    ModifierType,
    OfferingModel,
    PerkModel,
    PlayerModel,
    PowerModel,
    AnyModel,
} from "@moonswelle/deadbydaylight";
import unescape from "lodash/unescape";
import PerkTooltip from "./components/tooltips/Perk";
import AddonTooltip from "./components/tooltips/Addon";
import ItemTooltip from "./components/tooltips/Item";
import OfferingTooltip from "./components/tooltips/Offering";
import PowerTooltip from "./components/tooltips/Power";
import PlayerTooltip from "./components/tooltips/Player";
import AuthorTooltip from "./components/tooltips/Author";
import PerkTooltipBase from "./components/tooltips/PerkBase";
import AddonTooltipBase from "./components/tooltips/AddonBase";
import ItemTooltipBase from "./components/tooltips/ItemBase";
import OfferingTooltipBase from "./components/tooltips/OfferingBase";
import PowerTooltipBase from "./components/tooltips/PowerBase";
import PlayerTooltipBase from "./components/tooltips/PlayerBase";
import Translation from "./util/translation";
import ClassName from "./util/className";
import App, { AppNoHoverComponent } from "./components/App";
import DbdUtil from "./util/dbd";
import { AuthorModel } from "./types";

const getTooltip =
    (model: AnyModel): (() => ReactElement | undefined) =>
    (isTooltipVisible = false) => {
        let tooltip: ReactElement | undefined;

        if (model.index === "NNEHL") {
            const typedModel = model as unknown as AuthorModel;
            const { name, description, flavor, image } = typedModel;
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
                const typedModel = model as unknown as AddonModel;
                const { rarity, name, description, flavor, owner, type } = typedModel;
                tooltip = (
                    <AddonTooltip
                        rarity={rarity}
                        name={name}
                        description={description}
                        flavor={flavor}
                        owner={owner}
                        type={type}
                        image={typedModel.imageUrl()}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Perk: {
                const typedModel = model as unknown as PerkModel;
                const { rarity, name, description, flavor, owner, tier } = typedModel;
                tooltip = (
                    <PerkTooltip
                        rarity={rarity}
                        name={name}
                        description={description}
                        flavor={flavor}
                        owner={owner}
                        tier={tier}
                        image={typedModel.imageUrl()}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Item: {
                const typedModel = model as unknown as ItemModel;
                const { rarity, name, description, flavor } = typedModel;
                tooltip = (
                    <ItemTooltip
                        rarity={rarity}
                        name={name}
                        description={description}
                        flavor={flavor}
                        image={typedModel.imageUrl()}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Player: {
                const typedModel = model as unknown as PlayerModel;
                const { name, description, difficulty } = typedModel;
                tooltip = (
                    <PlayerTooltip
                        name={name}
                        description={description}
                        difficulty={difficulty}
                        image={typedModel.imageUrl()}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Power: {
                const typedModel = model as PowerModel;
                const { name, description } = typedModel;
                tooltip = (
                    <PowerTooltip
                        name={name}
                        description={description}
                        image={typedModel.imageUrl()}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            case ModifierType.Offering: {
                const typedModel = model as OfferingModel;
                const { rarity, name, description, flavor } = typedModel;
                tooltip = (
                    <OfferingTooltip
                        rarity={rarity}
                        name={name}
                        description={description}
                        flavor={flavor}
                        image={typedModel.imageUrl()}
                        showImage={isTooltipVisible}
                    />
                );
                break;
            }
            default:
            // noop
        }

        return tooltip;
    };

const mount = (
    name: string,
    tooltip: () => ReactElement | undefined,
    element: HTMLElement | Element,
    tooltipOnly = false
) => {
    if (tooltipOnly) {
        ReactDOM.render(<AppNoHoverComponent tooltip={tooltip} />, element);
    } else {
        ReactDOM.render(<App title={`[[${name}]]`} tooltip={tooltip} />, element);
    }
};

const userLanguage = (): Language => {
    const docLang = document.documentElement.lang.toLowerCase();
    if (docLang) {
        return docLang as Language;
    }

    const navLang = navigator.language;
    if (navLang) {
        return navLang.substring(0, 2).toLowerCase() as Language;
    }
    return Language.English;
};

const parse = (target: HTMLElement, language?: Language, tooltipOnly = false): void => {
    const className = target.getAttribute("class");
    const wasMounted = className && className.includes("hex-tooltip");
    const newLanguage = language || userLanguage();

    if (wasMounted) {
        return;
    }

    const text = target.innerHTML;
    if (!text) {
        return;
    }

    const parts = text.split(/(\[\[[^<>]*?\]\])/g);
    const regex = new RegExp(/^\[\[([^<>]*?)\]\]$/g);
    const mounts: [AnyModel, string][] = [];
    const elements = parts.map(text => {
        const [, rootText] = regex.exec(text) || [];

        let model: AnyModel | undefined;
        if (rootText) {
            model = DbdUtil.toModel(unescape(rootText), newLanguage);
        }

        if (model) {
            const className = `hex-tooltip-${Math.random().toString(16).substring(2)}`;
            const span = `<span class="${className}"></span>`;
            mounts.push([model, className]);
            return span.toString();
        }

        return rootText || text;
    });

    if (mounts.length > 0) {
        target.innerHTML = elements.join("");
        mounts.forEach(([model, className]) => {
            const elements = document.getElementsByClassName(className);
            if (elements[0]) {
                const tooltip = getTooltip(model);
                if (tooltip) {
                    mount(model.name, tooltip, elements[0], tooltipOnly);
                }
            }
        });
    }
};

const toModel = DbdUtil.toModel;

export default parse;
export {
    parse,
    toModel,
    App as HexTooltipApp,
    DeadByDaylight,
    AddonModel,
    ItemModel,
    ModifierType,
    OfferingModel,
    PerkModel,
    PlayerModel,
    PowerModel,
    PerkTooltip,
    AddonTooltip,
    ItemTooltip,
    OfferingTooltip,
    PowerTooltip,
    PlayerTooltip,
    AuthorTooltip,
    PerkTooltipBase,
    AddonTooltipBase,
    ItemTooltipBase,
    OfferingTooltipBase,
    PowerTooltipBase,
    PlayerTooltipBase,
    Translation,
    ClassName,
};
