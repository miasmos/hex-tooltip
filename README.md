<img src="https://hextooltip.com/logo.svg" width="100" height="100">

# Hex: Tooltip

[![npm version](https://badge.fury.io/js/%40stephenpoole%2Fhex-tooltip.svg)](https://badge.fury.io/js/%40stephenpoole%2Fhex-tooltip)
[![Known Vulnerabilities](https://snyk.io/test/github/stephenpoole/hex-tooltip/badge.svg)](https://snyk.io/test/github/stephenpoole/hex-tooltip)
[![Build Status](https://travis-ci.com/stephenpoole/hex-tooltip.svg?branch=master)](https://travis-ci.com/stephenpoole/hex-tooltip)
[![codecov](https://codecov.io/gh/stephenpoole/hex-tooltip/branch/master/graph/badge.svg?token=lTWudhhmb0)](https://codecov.io/gh/stephenpoole/hex-tooltip)
![last commit](https://img.shields.io/github/last-commit/stephenpoole/hex-tooltip)
![issues](https://img.shields.io/github/issues/stephenpoole/hex-tooltip)

Tooltips for Dead by Daylight anywhere on the web.

<img src="https://hextooltip.com/ruin.jpg" >

## Getting Started

Install `hex-tooltip` and save to your package.json in one easy step.

With npm:

```bash
npm install @stephenpoole/hex-tooltip
```

With yarn:

```bash
yarn add @stephenpoole/hex-tooltip
```

## Support

To support the development of Hex: Tooltip, head over to [hextooltip.com](https://hextooltip.com) and click the Donate button. Any donations are greatly appreciated.

## Usage

In the browser globally

1. Insert the script tag in your html head:

```html
<script src="https://cdn.jsdelivr.net/npm/@stephenpoole/hex-tooltip/dist/hex.tooltip.js"></script>
```

2. Pass an HTMLElement containing a tooltip tag:
   [Try it out](https://codepen.io/stephenpoole/pen/bGRJqNe)

```html
<div id="hex-tooltip"><span class="hex-tooltip-959f26b8824a7"></span></div>
```

```javascript
HexTooltip.parse(document.getElementById("hex-tooltip"));
```

In the browser with webpack

1. Import `hex-tooltip` into your application:

```javascript
import HexTooltip from "@stephenpoole/hex-tooltip";
```

2. Pass an HTMLElement containing a tooltip tag:

```javascript
HexTooltip.parse(document.getElementById("hex-tooltip"));
```

2a. or mount it in your React application

```javascript
import HexTooltip, { HexTooltipApp, PerkTooltip, PerkModel, DeadByDaylight } from "@stephenpoole/hex-tooltip";

const model = HexTooltip.toModel("Hex: Ruin");
const { rarity, name, description, flavor, owner } = model as PerkModel;

<HexTooltipApp
    title="<span class="hex-tooltip-d9d3e49cb23dd"></span>"
    tooltip={
        <PerkTooltip
            rarity={rarity}
            name={name}
            description={description}
            flavor={flavor}
            owner={owner}
            tier={tier}
        />
    }
/>
```

## Documentation

You'll find the type documentation here:
[Documentation](https://stephenpoole.github.io/hex-tooltip/modules.html)

## License

MIT
