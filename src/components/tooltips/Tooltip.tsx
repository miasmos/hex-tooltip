import React from "react";
import styled from "styled-components";

import commonBanner from "../../../images/template_banner_common.png";
import uncommonBanner from "../../../images/template_banner_uncommon.png";
import rareBanner from "../../../images/template_banner_rare.png";
import veryRareBanner from "../../../images/template_banner_very_rare.png";
import ultraRareBanner from "../../../images/template_banner_ultra_rare.png";
import eventBanner from "../../../images/template_banner_event.png";

import robotoCondensedLight2 from "../../../fonts/robotocondensed-light-webfont.woff2";
import robotoCondensedRegular2 from "../../../fonts/robotocondensed-regular-webfont.woff2";
import robotoCondensedBold2 from "../../../fonts/robotocondensed-bold-webfont.woff2";
import robotoLight2 from "../../../fonts/roboto-light-webfont.woff2";
import robotoBold2 from "../../../fonts/roboto-bold-webfont.woff2";

import robotoCondensedLight from "../../../fonts/robotocondensed-light-webfont.woff";
import robotoCondensedRegular from "../../../fonts/robotocondensed-regular-webfont.woff";
import robotoCondensedBold from "../../../fonts/robotocondensed-bold-webfont.woff";
import robotoLight from "../../../fonts/roboto-light-webfont.woff";
import robotoBold from "../../../fonts/roboto-bold-webfont.woff";

const Tooltip = styled(({ children, className }) => <div className={className}>{children}</div>)`
    @font-face {
        font-family: "RobotoCondensed";
        src: url(${robotoCondensedBold2}) format("woff2"),
            url(${robotoCondensedBold}) format("woff");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: "RobotoCondensed";
        src: url(${robotoCondensedRegular2}) format("woff2"),
            url(${robotoCondensedRegular}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "RobotoCondensed";
        src: url(${robotoCondensedLight2}) format("woff2"),
            url(${robotoCondensedLight}) format("woff");
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: "Roboto";
        src: url(${robotoLight2}) format("woff2"), url(${robotoLight}) format("woff");
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: "Roboto";
        src: url(${robotoBold2}) format("woff2"), url(${robotoBold}) format("woff");
        font-weight: 700;
        font-style: normal;
    }

    div,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    font-family: "RobotoCondensed", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #fff;
    line-height: 1em;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-content: center;
    opacity: 1;
    position: relative;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 100;
    max-width: 460px;

    .tooltip-banner {
        display: flex;
        justify-content: space-between;
        position: relative;
        background-color: black;
        background-repeat: no-repeat;
        background-image: url(${commonBanner});
        background-position: -40px 0px;
        padding: 20px 21px 13px 21px;
        font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;

        .tooltip-title {
            text-transform: uppercase;
        }

        .tooltip-subtitle {
            text-transform: uppercase;
            font-weight: 100;
            color: #fff;
            opacity: 0.9;
            margin-top: 8px;
        }

        .ticks {
            position: relative;
            margin-right: 4px;
            margin-top: -4px;
        }

        .tick {
            width: 25px;
        }
    }

    .tooltip-banner.uncommon {
        background-image: url(${uncommonBanner});
    }

    .tooltip-banner.rare {
        background-image: url(${rareBanner});
    }

    .tooltip-banner.very-rare {
        background-image: url(${veryRareBanner});
    }

    .tooltip-banner.ultra-rare {
        background-image: url(${ultraRareBanner});
    }

    .tooltip-banner.event {
        background-image: url(${eventBanner});
    }

    .tooltip-body {
        position: relative;
        padding: 20px 19px 27px 19px;
        font-weight: 300;
        background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 100%);
        font-size: 16px;

        .tooltip-text {
            position: relative;
            z-index: 2;
            line-height: 21px;
        }

        .tooltip-flavor {
            font-size: 0.88em;
            font-weight: 300;
            font-style: italic;
            color: #c6bda0;
            z-index: 2;
            margin-top: 20px;
            line-height: 18px;
        }

        .tooltip-gradient {
            position: absolute;
            width: 100%;
            height: 47px;
            top: 100%;
            left: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
            z-index: 1;
        }
    }

    .tooltip-text .highlight1 {
        color: #fed506;
        font-size: 1.4em;
        font-weight: bold;
        margin-top: 1px;
        white-space: nowrap;
    }

    .tooltip-text .highlight2 {
        color: #c55511;
        font-size: 1.4em;
        font-weight: bold;
        white-space: nowrap;
    }

    .tooltip-text .highlight3 {
        color: #d60000;
        font-size: 1.4em;
        font-weight: bold;
        white-space: nowrap;
    }

    .tooltip-text .highlight4 {
        color: #a42afb;
        font-size: 1.4em;
        font-weight: bold;
        white-space: nowrap;
    }

    .tooltip-text li {
        position: relative;
        padding-left: 35px;
        list-style: none;
    }

    .tooltip-text li:before {
        content: " ";
        position: absolute;
        background: #fff;
        top: 11px;
        left: 24px;
        width: 2px;
        height: 2px;
        border-radius: 100px;
    }

    .tooltip-text li br {
        display: block;
        position: relative;
        height: 1px;
    }
    .tooltip-text li br:before {
        content: " ";
        position: absolute;
        background: #fff;
        top: 0px;
        left: 0px;
        width: 4px;
        height: 4px;
        border-radius: 100px;
    }

    .difficulty {
        font-weight: 700;
    }

    .difficulty-intermediate {
        color: #f5d659;
    }

    .difficulty-easy {
        color: #8df349;
    }

    .difficulty-hard {
        color: #f74743;
    }
`;

export default Tooltip;
