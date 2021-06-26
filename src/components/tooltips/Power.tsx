import React from "react";
import { useTranslation } from "react-i18next";
import { PowerModel } from "@stephenpoole/deadbydaylight";
import Tooltip from "./Tooltip";

type Props = Pick<PowerModel, "name" | "description">;

const PowerTooltip = ({ name, description }: Props): JSX.Element => {
    const { t } = useTranslation();
    const subtitle = t("powerSubtitle");

    return (
        <Tooltip className="power-tooltip">
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
