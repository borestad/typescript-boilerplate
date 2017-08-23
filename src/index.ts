/**
 * Example of simple function
 */
export function add (a, b): Number {
  return (a + b)
}

/**
 * Example of using the spread operator
 */
export function clone (obj: Object): Object {
  let copy = { ...obj }
  return copy
}

/**
 * Example of using getters/setters
 */
export class GetterSetter {
  private _val

  get bar () {
    return `Hello ${this._val}`
  }

  set bar (val) {
    this._val = val
  }
}

export class GenericsExample1<T> {
  value: T
  setValue (value: T) {
    this.value = value
  }
  getValue (): T {
    return this.value
  }
}
