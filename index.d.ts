declare function fakePromise<T = undefined>(): T extends undefined ? [Promise<undefined>, () => void, (error?: Error) => void] : [Promise<T>, (resolvedValue: T) => void, (error?: Error) => void]

export default fakePromise
