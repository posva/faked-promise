module.exports = function fakePromise () {
  // eslint-disable-next-line
  return new Promise(outerResolve => {
    const promise = new Promise((resolve, reject) => {
      // if we don't use setTimeout or something similar
      // we don't have access to promise
      setTimeout(() => {
        outerResolve([promise, resolve, reject])
      }, 0)
    })
  })
}
