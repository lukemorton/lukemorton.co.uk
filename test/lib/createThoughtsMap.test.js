import test from 'ava'
import path from 'path'
import createThoughtsMap from '../../lib/createThoughtsMap'

function thoughts() {
  return {
    '2016-01-01-cool': '# Cool',
  }
}

test('keys are slugs', t => {
  const thoughtsMap = createThoughtsMap({ thoughtFiles: thoughts() })
  const firstThought = thoughtsMap['2016-01-01-cool']
  t.is(thoughtsMap[firstThought.slug], firstThought)
})
