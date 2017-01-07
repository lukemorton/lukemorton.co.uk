import test from 'ava'
import fs from 'fs'
import path from 'path'
import format from 'date-fns/format'
import createThoughtsList from '../../lib/createThoughtsList'
import sortByDateOrderDesc from '../../lib/sortByDateOrderDesc'

const thoughtsDir = path.join(__dirname, '../../thoughts/')

test('contains thoughts', async t => {
  const thoughts = await createThoughtsList({ thoughtsDir })
  t.true(thoughts.length > 2, thoughts)
})

function latestThoughtDate () {
  const filename = sortByDateOrderDesc(fs.readdirSync(thoughtsDir))[0]
  const [year, month, day] = filename.split('-')
  return format(new Date(year, month, day))
}

test('can be limited', async t => {
  const thoughts = await createThoughtsList({ limit: 2, thoughtsDir })
  const firstDate = thoughts[0].publishedAtISO

  t.is(firstDate, latestThoughtDate())
  t.is(thoughts.length, 2, thoughts)
})
