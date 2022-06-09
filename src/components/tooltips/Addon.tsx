import React from "react";
import { useTranslation } from "react-i18next";
import { AddonModel } from "@stephenpoole/deadbydaylight";
import Translation from "../../util/translation";
import AddonTooltipBase, { AddonTooltipBaseProps } from "./AddonBase";

type Props = Omit<AddonTooltipBaseProps, "subtitle"> & Pick<AddonModel, "type" | "image" | "owner">;

const AddonTooltip = ({ owner, type, rarity: rarityNum, ...props }: Props): JSX.Element => {
    const { t } = useTranslation();
    const rarityKey = Translation.rarity(rarityNum);
    const subtitle = t("addonSubtitle.named", {
        rarity: t(rarityKey),
        name: owner.isEmpty ? t(Translation.item(type)) : owner.power?.name,
    });

    return <AddonTooltipBase subtitle={subtitle} rarity={rarityNum} {...props} />;
};

export default AddonTooltip;
