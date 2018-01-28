# faked-promise [![Build Status](https://img.shields.io/circleci/project/posva/faked-promise/master.svg)](https://circleci.com/gh/posva/faked-promise) [![npm package](https://img.shields.io/npm/v/faked-promise.svg)](https://www.npmjs.com/package/faked-promise) [![coverage](https://img.shields.io/codecov/c/github/posva/faked-promise.svg)](https://codecov.io/github/posva/faked-promise) [![donate](https://img.shields.io/badge/donate-%E2%99%A5-ff69b4.svg)](https://github.com/posva/donate)

> Create a promise that can be resolved and rejected programatically outside of it

It basically extracts the `resolve` and `reject` callbacks so you can call them whenever you need.
⚠️ The promise can only be resolved once, it's still a regular Promise after all.

## Installation

```sh
npm i faked-promise
```

## Usage

faked-promise exports one single function that takes no arguments and returns a promise. That promise resolves into an array with 3 elements:

- A real promise
- Its `resolve` callback
- Its `reject` callback

Meaning you can control exactly when the promise is resolved or rejected:

```js
const fakePromise = require('faked-promise')

const [promise, resolve, reject] = await fakePromise()
promise.then(() => {})
resolve('any value')
```

## License

[MIT](http://opensource.org/licenses/MIT)
