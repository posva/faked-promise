declare function fakePromise<T = any>(): [Promise<T>, (resolvedValue: T) => void, (error?: Error) => void]

export default fakePromise
