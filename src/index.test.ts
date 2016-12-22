import * as x from './'
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
  foo.bar = 'world'
  t.is(foo.bar, 'Hello world')
})

test('GenericsExample1 - #1 - Using strings', t => {
  const gen1 = new x.GenericsExample1<string>()
  gen1.setValue('Hello World')
  t.is(
    gen1.getValue().toLowerCase(),
    'hello world'
  )
})

test('GenericsExample1 - #2 - Using numbers', t => {
  const gen1 = new x.GenericsExample1<number>()
  gen1.setValue(2.00)
  t.is(
    gen1.getValue().valueOf(),
    2
  )
})
