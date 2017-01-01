import test from 'ava'
import thoughtsInDateOrderDesc from '../../lib/thoughtsInDateOrderDesc'

function thoughts(limit) {
  return thoughtsInDateOrderDesc({
    thoughts: ['2015-03-01', '2016-01-01', '2016-02-01'],
    limit: limit
  })
}

test('sorted by date DESC', t => {
  const [a, b, c] = thoughts()
  t.is(a, '2016-02-01')
  t.is(b, '2016-01-01')
  t.is(c, '2015-03-01')
})

test('can be limited', t => {
  const [a, b, c] = thoughts(2)
  t.is(a, '2016-02-01')
  t.is(b, '2016-01-01')
  t.is(c, undefined)
})
