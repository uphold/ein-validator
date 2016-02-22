# ein-validator
Validate and mask U.S. Employer Identification Numbers.

## Status
[![npm version][npm-image]][npm-url] [![build status][travis-image]][travis-url]

## Installation
Install the package via `npm`:

```sh
npm install ein-validator --save
```

## Usage

### `isValid(value, [options])`

This method validates if the given value is a valid `Employer Identification Number`.

#### Arguments

1. `value` *(&#42;)*: The value to validate.
2. `[options]` *(Object)*: The options object.
3. `[options.strict=true]` _(boolean|string)_: Whether or not formatting characters such as dashes or spaces should be rejected and if they must be in their precise location.

#### Returns
*(boolean)*:  Returns `true` if `value` is a valid Employer Identification Number, else `false`.

#### Example
```js
isValid({});
// => false

isValid('01-1234567');
// => false

isValid('0112345-67', { strict: false });
// => true

isValid('0112345-67', { strict: 'format' });
// => false

isValid('01-1234567', { strict: 'format' });
// => true

isValid('011234567');
// => true
```
--------------------------------------------------------------------------------

### `mask(value, [options])`

This method will help you protect this sensitive piece of information by obfuscating some digits.

#### Arguments

1. `value` *(&#42;)*: The value to mask.
2. `[options]` *(Object)*: The options object.
3. `[options.strict=true]` _(boolean|string)_: Whether or not formatting characters such as dashes or spaces should be rejected and if they must be in their precise location.

#### Returns
*(string)*: Returns the masked value.

#### Example
```js
mask({});
// Throws an Error.

mask('01-1234567');
// Throws an Error.

mask('0112345-67', { strict: false });
// => X-X-XXX3123

mask('0112345-67', { strict: 'format' });
// Throws an Error.

mask('01-1234567', { strict: 'format' });
// => XXX-XX-3123

mask('011234567');
// => XXXXX4567
```

* * *

## Tests

```sh
npm test
```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## License
MIT

[npm-image]: https://img.shields.io/npm/v/ein-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ein-validator
[travis-image]: https://img.shields.io/travis/seegno/ein-validator.svg?style=flat-square
[travis-url]: https://img.shields.io/travis/seegno/ein-validator.svg?style=flat-square
