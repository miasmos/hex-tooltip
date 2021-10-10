/* eslint-disable indent */
import React, { FC, ReactElement } from "react";
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
    AnyModel,
    ItemType,
    Rarity,
} from "@stephenpoole/deadbydaylight";
import Factories from "@stephenpoole/deadbydaylight/lib/factories";
import unescape from "lodash/unescape";
import App from "./components/App";
import DbdUtil from "./util/dbd";

const getTooltip =
    (model: AnyModel): (() => ReactElement | undefined) =>
    (isTooltipVisible = false) =>
        DbdUtil.getTooltip(model, isTooltipVisible);

const mount = (
    base: string | Element | FC,
    tooltip: () => ReactElement | undefined,
    element: HTMLElement | Element,
    tooltipOnly = false
): void => {
    ReactDOM.render(<App base={base} tooltip={tooltip} tooltipOnly={tooltipOnly} />, element);
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
        const lowerRootText = (rootText || "").toLowerCase();
        let model: AnyModel | undefined;

        if (
            lowerRootText === "nnehl" ||
            lowerRootText === "author" ||
            lowerRootText === "creator" ||
            lowerRootText === "credit" ||
            lowerRootText === "maker"
        ) {
            model = new AddonModel({} as Factories, {
                index: "NNEHL",
                owner: undefined,
                id: 42069,
                name: "Nnehl",
                description:
                    'You spend most of your time writing code and drinking caffeine. Typing speed increased by <span class="Highlight1">25%</span>.',
                image: "",
                flavor: '"Are you going outside today?" -Mom',
                type: ItemType.None,
                rarity: Rarity.Event,
            }) as unknown as AnyModel;
        } else if (rootText) {
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
                    mount(`[[${model.name}]]`, tooltip, elements[0], tooltipOnly);
                }
            }
        });
    }
};

const toModel = DbdUtil.toModel;

export default parse;
export {
    parse,
    mount,
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
};
