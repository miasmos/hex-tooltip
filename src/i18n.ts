import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as resources from "./locales";

i18n.use(initReactI18next).init({
    resources: Object.entries(resources).reduce((prev, [key, value]) => {
        prev[key] = { translation: value };
        return prev;
    }, {}),
    lng: "en",
    keySeparator: false,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
