import React from "react";
import { useTranslation } from "react-i18next";
import Translation from "../../util/translation";
import OfferingTooltipBase, { OfferingTooltipBaseProps } from "./OfferingBase";

type Props = Omit<OfferingTooltipBaseProps, "subtitle">;

const OfferingTooltip = ({ rarity: rarityNum, ...props }: Props): JSX.Element => {
    const { t } = useTranslation();
    const rarityKey = Translation.rarity(rarityNum);
    const subtitle = t("offeringSubtitle", { rarity: t(rarityKey) });

    return <OfferingTooltipBase rarity={rarityNum} subtitle={subtitle} {...props} />;
};

export default OfferingTooltip;
