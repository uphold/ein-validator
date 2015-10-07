# Employer Identification Number (EIN)

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

This modules allows you to check if a number is a valid.

## Installation

Choose your preferred method:

* npm: `npm install --save is-valid-ein`
* Download: [is-valid-ein](https://github.com/seegno/is-valid-ein)

## Usage

*NOTE:* The input number **must not** be formated to `xxx-xxxxxx`.

> Check if number is valid.

```js
import isValidEin from 'is-valid-ein';

isValidEin('xxxxxxxxx');
```

> Mask the number.

```js
import { mask } from 'is-valid-ein';

mask('xxxxxxxxx');
```

## Running tests

```sh
npm test
```

[npm-image]: https://img.shields.io/npm/v/is-valid-ein.svg?style=flat-square
[npm-url]: https://npmjs.org/package/is-valid-ein
[travis-image]: https://img.shields.io/travis/seegno/is-valid-ein.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/is-valid-ein
