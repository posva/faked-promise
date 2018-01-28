module.exports = function fakePromise () {
  // eslint-disable-next-line
  return new Promise(outerResolve => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        outerResolve([promise, resolve, reject])
      }, 0)
    })
  })
}
