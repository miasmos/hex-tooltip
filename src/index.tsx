import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import {
    AddonModel,
    ItemModel,
    ModifierType,
    OfferingModel,
    PerkModel,
    PlayerModel,
    PowerModel,
} from "@stephenpoole/deadbydaylight";
import PerkTooltip from "./components/tooltips/Perk";
import AddonTooltip from "./components/tooltips/Addon";
import ItemTooltip from "./components/tooltips/Item";
import OfferingTooltip from "./components/tooltips/Offering";
import PowerTooltip from "./components/tooltips/Power";
import PlayerTooltip from "./components/tooltips/Player";
import App from "./components/App";
import Dbd from "./util/dbd";
import { DbdModel } from "./types";

const mount = (model: DbdModel, element: HTMLElement | Element): void => {
    let tooltip: ReactElement | undefined;
    switch (model.modifier) {
        case ModifierType.Addon: {
            const { rarity, name, description, flavor, owner } = model as AddonModel;
            tooltip = (
                <AddonTooltip
                    rarity={rarity}
                    name={name}
                    description={description}
                    flavor={flavor}
                    owner={owner}
                />
            );
            break;
        }
        case ModifierType.Perk: {
            const { rarity, name, description, flavor, owner, tier } = model as PerkModel;
            tooltip = (
                <PerkTooltip
                    rarity={rarity}
                    name={name}
                    description={description}
                    flavor={flavor}
                    owner={owner}
                    tier={tier}
                />
            );
            break;
        }
        case ModifierType.Item: {
            const { rarity, name, description, flavor } = model as ItemModel;
            tooltip = (
                <ItemTooltip
                    rarity={rarity}
                    name={name}
                    description={description}
                    flavor={flavor}
                />
            );
            break;
        }
        case ModifierType.Player: {
            const { name, description, difficulty } = model as PlayerModel;
            tooltip = (
                <PlayerTooltip name={name} description={description} difficulty={difficulty} />
            );
            break;
        }
        case ModifierType.Power: {
            const { name, description } = model as PowerModel;
            tooltip = <PowerTooltip name={name} description={description} />;
            break;
        }
        case ModifierType.Offering: {
            const { rarity, name, description, flavor } = model as OfferingModel;
            tooltip = (
                <OfferingTooltip
                    rarity={rarity}
                    name={name}
                    description={description}
                    flavor={flavor}
                />
            );
            break;
        }
        default:
        // noop
    }

    if (!tooltip) {
        return;
    }

    ReactDOM.render(<App title={`[[${model.name}]]`} tooltip={tooltip} />, element);
};

const parse = (target: HTMLElement): void => {
    const className = target.getAttribute("class");
    const wasMounted = className && className.includes("hex-tooltip");

    if (wasMounted) {
        return;
    }

    const text = target.innerHTML;
    if (!text) {
        return;
    }

    const parts = text.split(/(\[\[[a-zA-Z0-9:\-\s]*\]\])/g);
    const regex = new RegExp(/^\[\[([a-zA-Z0-9:\-\s]*)\]\]$/g);
    const mounts: [DbdModel, string][] = [];
    const elements = parts.map(text => {
        const [, rootText] = regex.exec(text) || [];

        if (rootText) {
            const model = Dbd.toModel(rootText);

            if (model) {
                const className = `hex-tooltip-${Math.random().toString(16).substring(2)}`;
                const span = `<span class="${className}"></span>`;
                mounts.push([model, className]);
                return span.toString();
            }
            return rootText;
        }
        return text;
    });

    if (mounts.length > 0) {
        target.innerHTML = elements.join("");
        mounts.forEach(([model, className]) => {
            const elements = document.getElementsByClassName(className);
            if (elements[0]) {
                mount(model, elements[0]);
            }
        });
    }
};

export default parse;
export {
    App as HexTooltipApp,
    Dbd as DeadByDaylight,
    AddonModel,
    ItemModel,
    ModifierType,
    OfferingModel,
    PerkModel,
    PlayerModel,
    PowerModel,
};
