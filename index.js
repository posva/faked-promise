/**
 * Creates a Promise that can be resolved manually
 *
 * @returns {[Promise<any>, (value?: any) => void, (error?: any) => void]}
 */
module.exports = function fakePromise () {
  let res, rej
  // the executor is guaranteed to get executed right away
  const promise = new Promise((resolve, reject) => {
    res = resolve
    rej = reject
  })
  return [promise, res, rej]
}
