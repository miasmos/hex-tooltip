import React, { ReactElement, FC } from "react";
import { I18nextProvider } from "react-i18next";

import Target from "./Target";
import i18n from "../i18n";

interface Props {
    tooltip: (show: boolean) => ReactElement | undefined;
    base: string | Element | FC;
    tooltipOnly: boolean;
}

const AppComponent = ({ tooltip, base, tooltipOnly = false }: Props): JSX.Element => {
    const Tooltip = tooltipOnly ? tooltip(true) : null;
    return (
        <I18nextProvider i18n={i18n}>
            {tooltip && (tooltipOnly ? Tooltip : <Target base={base} tooltip={tooltip} />)}
        </I18nextProvider>
    );
};

export default AppComponent;
