import React from "react";
import { useTranslation } from "react-i18next";
import { OfferingModel } from "@stephenpoole/deadbydaylight";
import ClassName from "../../util/className";
import Tooltip from "./Tooltip";

type Props = Pick<OfferingModel, "rarity" | "name" | "description" | "flavor">;

const OfferingTooltip = ({ rarity: rarityNum, name, description, flavor }: Props): JSX.Element => {
    const { t } = useTranslation();
    const rarity = ClassName.rarity(rarityNum);
    const subtitle = t("offeringSubtitle", { rarity });

    return (
        <Tooltip className="offering-tooltip">
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
                <div className="tooltip-gradient" />
            </div>
        </Tooltip>
    );
};

export default OfferingTooltip;
