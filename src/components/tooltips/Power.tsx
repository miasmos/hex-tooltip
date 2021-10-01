import React from "react";
import { useTranslation } from "react-i18next";
import { PowerModel } from "@stephenpoole/deadbydaylight";
import Tooltip from "./Tooltip";

interface Props extends Pick<PowerModel, "name" | "description" | "image"> {
    showImage?: boolean;
}

const PowerTooltip = ({ name, description, image, showImage = false }: Props): JSX.Element => {
    const { t } = useTranslation();
    const subtitle = t("powerSubtitle");

    return (
        <Tooltip className="power-tooltip">
            {showImage && (
                <div className="tooltip-image">
                    <img src={image} alt={name} />
                </div>
            )}
            <div className="tooltip-banner">
                <div className="tooltip-title-left">
                    <h2 className="tooltip-title">{name}</h2>
                    <p className="tooltip-subtitle">{subtitle}</p>
                </div>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text" dangerouslySetInnerHTML={{ __html: description }} />
                <div className="tooltip-gradient" />
            </div>
        </Tooltip>
    );
};

export default PowerTooltip;
