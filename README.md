# Hex: Tooltip

[![npm version](https://badge.fury.io/js/%40stephenpoole%2Fhex-tooltip.svg)](https://badge.fury.io/js/%40stephenpoole%2Fhex-tooltip)
[![Known Vulnerabilities](https://snyk.io/test/github/stephenpoole/hex-tooltip/badge.svg)](https://snyk.io/test/github/stephenpoole/hex-tooltip)
[![Build Status](https://travis-ci.com/stephenpoole/hex-tooltip.svg?branch=master)](https://travis-ci.com/stephenpoole/hex-tooltip)
[![codecov](https://codecov.io/gh/stephenpoole/hex-tooltip/branch/master/graph/badge.svg?token=lTWudhhmb0)](https://codecov.io/gh/stephenpoole/hex-tooltip)
![last commit](https://img.shields.io/github/last-commit/stephenpoole/hex-tooltip)
![issues](https://img.shields.io/github/issues/stephenpoole/hex-tooltip)

Tooltips for Dead by Daylight anywhere on the web.

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

## Usage

In the browser globally

1. Insert the script tag in your html head:

```html
<script src="https://cdn.jsdelivr.net/npm/@stephenpoole/hex-tooltip/hex.tooltip.js"></script>
```

2. Instantiate and grab some data:

```javascript
(async () => {
    const { Language, Killer } = DeadByDaylight;
    const dbd = DeadByDaylight.Client();
    const nurse = dbd.killer(Killer.Nurse);
    console.log(nurse);
})();
```

In the browser with webpack

1. Import `hex-tooltip` into your application:

```javascript
import Dbd from "@stephenpoole/hex-tooltip";
```

2. Instantiate and grab some data:

```javascript
import Dbd, { Language, Killer } from "@stephenpoole/hex-tooltip";

(async () => {
    const dbd = Dbd();
    const nurse = dbd.killer(Killer.Nurse);
    console.log(nurse);
})();
```

## Documentation

You'll find the type documentation here:
[Documentation](https://stephenpoole.github.io/hex-tooltip)

## License

MIT License

Copyright (c) 2021 Stephen Poole

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
