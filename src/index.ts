import {map, each} from 'lodash'

export function add(a, b) {
  return (a + b)
}

export function spread() {
  const original = {
    a: 'foo',
    b: 'bar'
  }

  let copy = { ...original }
  return copy
}