# faked-promise [![Build Status](https://img.shields.io/circleci/project/posva/faked-promise/master.svg)](https://circleci.com/gh/posva/faked-promise) [![npm package](https://img.shields.io/npm/v/faked-promise.svg)](https://www.npmjs.com/package/faked-promise) [![coverage](https://img.shields.io/codecov/c/github/posva/faked-promise.svg)](https://codecov.io/github/posva/faked-promise) [![donate](https://img.shields.io/badge/donate-%E2%99%A5-ff69b4.svg)](https://github.com/posva/donate)

> Create a fake promise that can be resolve and rejected programatically

## Installation

```sh
npm i faked-promise
```

## Usage

faked-promise exports one single function that returns a promise. This promise resolves into an array with 3 elements:

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
