import React from "react";
import { useTranslation } from "react-i18next";
import { PerkModel } from "@stephenpoole/deadbydaylight";
import Tooltip from "./Tooltip";
import Translation from "../../util/translation";
import ClassName from "../../util/className";

import tick1 from "../../../images/tick1.png";
import tick2 from "../../../images/tick2.png";
import tick3 from "../../../images/tick3.png";

type Props = Pick<PerkModel, "rarity" | "name" | "description" | "flavor" | "owner"> &
    Partial<Pick<PerkModel, "tier">>;

const PerkTooltip = ({
    rarity: rarityNum,
    tier = 3,
    name,
    description,
    flavor,
    owner,
}: Props): JSX.Element => {
    const { t } = useTranslation();
    const rarityKey = Translation.rarity(rarityNum);
    const rarityClass = ClassName.rarity(rarityNum);
    const subtitleKey = owner.isEmpty ? "perkSubtitle" : "perkSubtitle.named";
    const subtitle = t(subtitleKey, {
        rarity: t(rarityKey),
        name: owner.name,
    });
    let tick;
    switch (tier) {
        case 1:
            tick = tick1;
            break;
        case 2:
            tick = tick2;
            break;
        default:
            tick = tick3;
            break;
    }

    return (
        <Tooltip className="perk-tooltip">
            <div className={`tooltip-banner tier${tier} ${rarityClass}`}>
                <div className="tooltip-title-left">
                    <h2 className="tooltip-title">{name}</h2>
                    <p className="tooltip-subtitle">{subtitle}</p>
                </div>
                <div className="tooltip-title-right">
                    <div className="ticks">
                        <img className="tick" src={tick} />
                    </div>
                </div>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text" dangerouslySetInnerHTML={{ __html: description }} />
                {!!flavor && <div className="tooltip-flavor">{flavor}</div>}
                <div className="tooltip-gradient" />
            </div>
        </Tooltip>
    );
};

export default PerkTooltip;
