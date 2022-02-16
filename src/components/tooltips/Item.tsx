import React from "react";
import { useTranslation } from "react-i18next";
import Translation from "../../util/translation";
import ItemTooltipBase, { ItemTooltipBaseProps } from "./ItemBase";

type Props = Omit<ItemTooltipBaseProps, "subtitle">;

const ItemTooltip = ({ rarity: rarityNum, ...props }: Props): JSX.Element => {
    const { t } = useTranslation();
    const rarityKey = Translation.rarity(rarityNum);
    const subtitle = t("itemSubtitle", { rarity: t(rarityKey) });

    return <ItemTooltipBase rarity={rarityNum} subtitle={subtitle} {...props} />;
};

export default ItemTooltip;
