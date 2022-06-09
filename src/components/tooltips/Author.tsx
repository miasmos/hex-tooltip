import React from "react";
import { useTranslation } from "react-i18next";
import { AddonModel, Rarity } from "@stephenpoole/deadbydaylight";
import Tooltip from "./Tooltip";
import ClassName from "../../util/className";

interface Props extends Pick<AddonModel, "name" | "description" | "flavor" | "image"> {
    showImage?: boolean;
}

const AuthorTooltip = ({
    name,
    description,
    flavor,
    image,
    showImage = false,
}: Props): JSX.Element => {
    const { t } = useTranslation();
    const rarityClass = ClassName.rarity(Rarity.Event);
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
                    <p className="tooltip-subtitle">{t("creator")}</p>
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
export default AuthorTooltip;
