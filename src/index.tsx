/* eslint-disable indent */
import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import * as DeadByDaylight from "@stephenpoole/deadbydaylight";
import {
    AddonModel,
    ItemModel,
    Language,
    ModifierType,
    OfferingModel,
    PerkModel,
    PlayerModel,
    PowerModel,
    MapModel,
    RealmModel,
    AnyModel,
} from "@stephenpoole/deadbydaylight";
import unescape from "lodash/unescape";
import PerkTooltip from "./components/tooltips/Perk";
import AddonTooltip from "./components/tooltips/Addon";
import ItemTooltip from "./components/tooltips/Item";
import OfferingTooltip from "./components/tooltips/Offering";
import PowerTooltip from "./components/tooltips/Power";
import PlayerTooltip from "./components/tooltips/Player";
import App, { AppNoHoverComponent } from "./components/App";
import DbdUtil from "./util/dbd";

const getTooltip =
    (model: AnyModel): (() => ReactElement | undefined) =>
    (isTooltipVisible = false) => {
        let tooltip: ReactElement | undefined;
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
        if (rootText) {
            const model = DbdUtil.toModel(unescape(rootText), newLanguage);

            if (model) {
                const className = `hex-tooltip-${Math.random().toString(16).substring(2)}`;
                const span = `<span class="${className}"></span>`;
                mounts.push([model, className]);
                return span.toString();
            }
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
    MapModel,
    RealmModel,
};
