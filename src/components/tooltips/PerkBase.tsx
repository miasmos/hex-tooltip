import React from "react";
import { PerkModel } from "@moonswelle/deadbydaylight";
import Tooltip from "./Tooltip";
import ClassName from "../../util/className";

import tick1 from "../../../images/tick1.png";
import tick2 from "../../../images/tick2.png";
import tick3 from "../../../images/tick3.png";

interface Props
    extends Pick<PerkModel, "rarity" | "name" | "description" | "flavor" | "image">,
        Partial<Pick<PerkModel, "tier">> {
    showImage?: boolean;
    showGradient?: boolean;
    subtitle: string;
}

const PerkTooltipBase = ({
    rarity: rarityNum,
    tier = 3,
    name,
    description,
    flavor,
    image,
    subtitle,
    showImage = false,
    showGradient = false,
}: Props): JSX.Element => {
    const rarityClass = ClassName.rarity(rarityNum);

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
            {showImage && (
                <div className="tooltip-image">
                    <img src={image} alt={name} />
                </div>
            )}
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
                {!!flavor && (
                    <div className="tooltip-flavor" dangerouslySetInnerHTML={{ __html: flavor }} />
                )}
                {showGradient && <div className="tooltip-gradient" />}
            </div>
        </Tooltip>
    );
};

export default PerkTooltipBase;
export { Props as PerkTooltipBaseProps };
