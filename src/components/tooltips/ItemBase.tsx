import React from "react";
import { ItemModel } from "@stephenpoole/deadbydaylight";
import Tooltip from "./Tooltip";
import ClassName from "../../util/className";

interface Props extends Pick<ItemModel, "rarity" | "name" | "description" | "flavor" | "image"> {
    showImage?: boolean;
    subtitle: string;
}

const ItemTooltipBase = ({
    rarity: rarityNum,
    name,
    description,
    flavor,
    image,
    showImage = false,
    subtitle,
}: Props): JSX.Element => {
    const rarityClass = ClassName.rarity(rarityNum);

    return (
        <Tooltip className="addon-tooltip">
            {showImage && (
                <div className="tooltip-image">
                    <img src={image} alt={name} />
                </div>
            )}
            <div className={`tooltip-banner ${rarityClass}`}>
                <div className="tooltip-title-left">
                    <h2 className="tooltip-title">{name}</h2>
                    <p className="tooltip-subtitle">{subtitle}</p>
                </div>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text" dangerouslySetInnerHTML={{ __html: description }} />
                {flavor && (
                    <div className="tooltip-flavor" dangerouslySetInnerHTML={{ __html: flavor }} />
                )}
                <div className="tooltip-gradient" />
            </div>
        </Tooltip>
    );
};

export default ItemTooltipBase;
export { Props as ItemTooltipBaseProps };
