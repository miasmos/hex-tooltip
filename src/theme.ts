import robotoCondensedLight from "../fonts/robotocondensed-light-webfont.woff2";
import robotoCondensedRegular from "../fonts/robotocondensed-regular-webfont.woff2";
import robotoCondensedBold from "../fonts/robotocondensed-bold-webfont.woff2";
import robotoLight from "../fonts/roboto-light-webfont.woff2";
import robotoBold from "../fonts/roboto-bold-webfont.woff2";

interface Theme {
    font: {
        light: string;
        regular: string;
        bold: string;
        light2: string;
        bold2: string;
    };
}

const theme: Theme = {
    font: {
        light: robotoCondensedLight,
        regular: robotoCondensedRegular,
        bold: robotoCondensedBold,
        light2: robotoLight,
        bold2: robotoBold,
    },
};

export default theme;
