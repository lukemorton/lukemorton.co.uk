import test from 'ava'
import createThoughtsList from '../../lib/createThoughtsList'

test('includes title', async t => {
  const thoughtsList = await createThoughtsList()
  t.truthy(thoughtsList[0].title)
})

test('can be limited', async t => {
  const thoughtsList = await createThoughtsList({ limit: 2 })
  t.is(thoughtsList.length, 2)
})
