import React from "react";
import { useTranslation } from "react-i18next";
import PowerTooltipBase, { PowerTooltipBaseProps } from "./PowerBase";

type Props = Omit<PowerTooltipBaseProps, "subtitle">;

const PowerTooltip = (props: Props): JSX.Element => {
    const { t } = useTranslation();
    const subtitle = t("powerSubtitle");

    return <PowerTooltipBase subtitle={subtitle} {...props} />;
};

export default PowerTooltip;
