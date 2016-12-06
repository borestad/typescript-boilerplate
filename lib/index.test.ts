import { expect } from 'chai'
import { add } from './'
import test from 'ava'

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  t.plan(1)
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

test('baz', t => {
  const value = add(1,2)
  t.deepEqual(value, 3)
})
