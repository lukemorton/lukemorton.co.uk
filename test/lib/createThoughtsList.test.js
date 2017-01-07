import test from 'ava'
import fs from 'fs'
import path from 'path'
import format from 'date-fns/format'
import createThoughtsList from '../../lib/createThoughtsList'
import sortByDateOrderDesc from '../../lib/sortByDateOrderDesc'

function thoughts() {
  return {
    '2016-01-01-cool': '# Cool',
    '2016-01-04-cool': '# Cool',
    '2016-01-02-cool': '# Cool'
  }
}

test('contains thoughts', t => {
  const thoughtsList = createThoughtsList({ thoughtFiles: thoughts() })
  t.true(thoughtsList.length > 2, thoughts)
})

test('can be limited', t => {
  const thoughtsList = createThoughtsList({ limit: 2, thoughtFiles: thoughts() })
  const firstDate = thoughtsList[0].publishedAtISO

  t.is(firstDate, format(new Date('2016', '01', '04')))
  t.is(thoughtsList.length, 2, thoughts)
})
