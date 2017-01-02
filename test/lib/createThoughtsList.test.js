import test from 'ava'
import createThoughtsList from '../../lib/createThoughtsList'

test('contains thoughts', async t => {
  const thoughts = await createThoughtsList()
  t.true(thoughts.length > 2, thoughts)
})

test('can be limited', async t => {
  const thoughts = await createThoughtsList({ limit: 1 })
  t.is(thoughts.length, 1, thoughts)
})
