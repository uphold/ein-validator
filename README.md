# ein-validator
Validate and mask a U.S. Employer Identification Number (EIN).

## Status
[![npm version][npm-image]][npm-url] [![build status][travis-image]][travis-url]

## Installation
Install the package via `npm`:

```sh
npm install ein-validator --save
```

## Usage
### `isValid(value)`
This method validates if the given value is a valid `Employer Identification Number`.

#### Arguments
1. `value` _(*)_: The value to validate.

#### Returns
_(boolean)_:  Returns whether the input value is a valid EIN or not.

#### Example

```js
isValid({});
// => false

isValid('0112345-67');
// => false

isValid('01-1234567');
// => true

isValid('011234567');
// => true
```

--------------------------------------------------------------------------------

### `mask(value)`
This method will help you protect this sensitive piece of information by obfuscating some digits.

#### Arguments
1. `value` _(*)_: The value to mask.

#### Returns
_(string)_: Returns the masked value by replacing value certain digits by 'X'.

#### Example

```js
mask({});
// Throws an Error.

mask('0112345-67');
// Throws an Error.

mask('01-1234567');
// => XX-XXX0000

mask('011234567');
// => XXXXX4567
```

--------------------------------------------------------------------------------

## Tests
To test using a local installation of `node.js`:

```sh
npm test
```

To test using Docker exclusively:

```sh
docker-compose run --rm sut
```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## License
MIT

[npm-image]: https://img.shields.io/npm/v/ein-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ein-validator
[travis-image]: https://img.shields.io/travis/uphold/ein-validator.svg?style=flat-square
[travis-url]: https://img.shields.io/travis/uphold/ein-validator.svg?style=flat-square
