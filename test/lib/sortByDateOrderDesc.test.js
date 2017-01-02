import test from 'ava'
import sortByDateOrderDesc from '../../lib/sortByDateOrderDesc'

function thoughts (limit) {
  return sortByDateOrderDesc([
    '2015-03-01-cool-title',
    '2016-01-01-another-one',
    '2016-02-01-nice'
  ])
}

test('sorted by date DESC', t => {
  const [a, b, c] = thoughts()
  t.is(a, '2016-02-01-nice')
  t.is(b, '2016-01-01-another-one')
  t.is(c, '2015-03-01-cool-title')
})
