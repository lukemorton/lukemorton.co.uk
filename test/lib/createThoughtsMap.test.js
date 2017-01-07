import test from 'ava'
import path from 'path'
import createThoughtsMap from '../../lib/createThoughtsMap'

const thoughtsDir = path.join(__dirname, '../../thoughts')

test('keys are slugs', async t => {
  const thoughtsMap = await createThoughtsMap({ thoughtsDir })
  const firstThought = thoughtsMap[Object.keys(thoughtsMap)[0]]
  t.truthy(thoughtsMap[firstThought.slug])
})
