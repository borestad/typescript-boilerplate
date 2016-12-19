import { add, spread } from './'
import test from 'ava'

test('should pass', t => {
  t.pass()
})

test('should resolve async methods', async t => {
  t.plan(1)
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

test('.add()', t => {
  const value = add(1,2)
  t.deepEqual(value, 3)
})

test('.spread() - should create a shallow object clone', t => {
  const obj1 = { a: 'foo', b: 'bar' }
  const obj2: any = spread(obj1)
  obj2.a = 'baz'

  t.not(obj1.a, obj2.a)
  t.is(obj1.a, 'foo')
})
