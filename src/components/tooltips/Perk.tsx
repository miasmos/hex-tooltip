import React from "react";
import { useTranslation } from "react-i18next";
import { PerkModel } from "@moonswelle/deadbydaylight";
import Translation from "../../util/translation";
import PerkTooltipBase, { PerkTooltipBaseProps } from "./PerkBase";

type Props = Omit<PerkTooltipBaseProps, "subtitle"> & Pick<PerkModel, "owner">;

const PerkTooltip = ({ rarity: rarityNum, owner, ...props }: Props): JSX.Element => {
    const { t } = useTranslation();
    const rarityKey = Translation.rarity(rarityNum);
    const subtitleKey = owner.isEmpty ? "perkSubtitle" : "perkSubtitle.named";
    const subtitle = t(subtitleKey, {
        rarity: t(rarityKey),
        ...(!owner.isEmpty && { name: owner.name }),
    });

    return <PerkTooltipBase rarity={rarityNum} subtitle={subtitle} {...props} />;
};

export default PerkTooltip;
