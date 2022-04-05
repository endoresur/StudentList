type Func<T extends any[], R> = (...a: T) => R

export default function compose(...funcs: Func<any, any>[]) {
    if (funcs.length === 0) {
      return <T>(arg: T) => arg
    }
  
    if (funcs.length === 1) {
      return funcs[0]
    }
  
    return funcs.reduce(
      (a, b) =>
        (...args: any) =>
          a(b(...args))
    )
  }