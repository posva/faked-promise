const fakePromise = require('..')

describe('faked-promise', () => {
  test('can be resolved manually', async done => {
    const [promise, resolve] = fakePromise()
    expect(async () => {
      try {
        await promise
        done()
      } catch (err) {
        throw err
      }
    }).not.toThrow()
    resolve()
  })
  test('can be rejected manually', async done => {
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
