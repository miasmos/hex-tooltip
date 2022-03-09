import React from "react";
import { OfferingModel } from "@moonswelle/deadbydaylight";
import ClassName from "../../util/className";
import Tooltip from "./Tooltip";

interface Props
    extends Pick<OfferingModel, "rarity" | "name" | "description" | "flavor" | "image"> {
    showImage?: boolean;
    showGradient?: boolean;
    subtitle: string;
}

const OfferingTooltipBase = ({
    rarity: rarityNum,
    name,
    description,
    flavor,
    image,
    showImage = false,
    subtitle,
    showGradient = false,
}: Props): JSX.Element => {
    const rarity = ClassName.rarity(rarityNum);

    return (
        <Tooltip className="offering-tooltip">
            {showImage && (
                <div className="tooltip-image">
                    <img src={image} alt={name} />
                </div>
            )}
            <div className={`tooltip-banner ${rarity}`}>
                <div className="tooltip-title-left">
                    <h2 className="tooltip-title">{name}</h2>
                    <p className="tooltip-subtitle">{subtitle}</p>
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

export default OfferingTooltipBase;
export { Props as OfferingTooltipBaseProps };
