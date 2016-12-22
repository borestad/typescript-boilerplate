import * as x from './';
import test from 'ava'

test('should resolve async methods', async t => {
  t.plan(1)
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

test('.add()', t => {
  t.deepEqual(x.add(1,2), 3)
})

test('.spread() - should create a shallow object clone', t => {
  const obj1 = { a: 'foo', b: 'bar' }
  const obj2: any = x.clone(obj1)
  obj2.a = 'baz'
  t.not(obj1.a, obj2.a)
  t.is(obj1.a, 'foo')
})

test('GetterSetter()', t => {
  const foo = new x.GetterSetter()
  t.is(foo.bar, 'Hello undefined')
  // Wallabyjs before: => 'Hello undefined'
  console.log(foo.bar)
  foo.bar = 'world'
  t.is(foo.bar, 'Hello world')
  // Wallabyjs after: => 'Hello world'
  console.log(foo.bar)
})
