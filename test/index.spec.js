const fakePromise = require('..')

describe('faked-promise', () => {
  it('can be resolved manually', (done) => {
    const [promise, resolve] = fakePromise()
    expect(async () => {
      await promise
      done()
    }).not.toThrow()
    resolve()
  })

  it('can be rejected manually', (done) => {
    const [promise, , reject] = fakePromise()
    expect(async () => {
      try {
        await promise
      } catch (err) {
        done()
      }
    }).not.toThrow()
    reject(new Error())
  })
})
