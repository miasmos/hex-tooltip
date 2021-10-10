import React, { ReactElement } from "react";
import { I18nextProvider } from "react-i18next";

import Target from "./Target";
import i18n from "../i18n";

interface Props {
    title?: string;
    tooltip: (show: boolean) => ReactElement | undefined;
}

const AppComponent = ({ title, tooltip }: Props): JSX.Element => (
    <I18nextProvider i18n={i18n}>
        {tooltip && <Target title={title!} tooltip={tooltip} />}
    </I18nextProvider>
);

const AppNoHoverComponent = ({ tooltip }: Props): JSX.Element => {
    const Tooltip = tooltip(true);
    return <I18nextProvider i18n={i18n}>{Tooltip}</I18nextProvider>;
};

export { AppNoHoverComponent };
export default AppComponent;
