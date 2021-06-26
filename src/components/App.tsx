import React, { ReactElement } from "react";
import { I18nextProvider } from "react-i18next";

import Target from "./Target";
import i18n from "../i18n";

interface Props {
    title: string;
    tooltip: ReactElement;
}

const AppComponent = ({ title, tooltip }: Props): JSX.Element => (
    <I18nextProvider i18n={i18n}>
        {tooltip && <Target title={title} tooltip={tooltip} />}
    </I18nextProvider>
);

export default AppComponent;
