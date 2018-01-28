module.exports = function fakePromise () {
  return new Promise(outerResolve => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        outerResolve([promise, resolve, reject])
      }, 0)
    })
  })
}
