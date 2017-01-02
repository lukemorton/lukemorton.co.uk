import test from 'ava'
import fs from 'fs'
import format from 'date-fns/format'
import createThoughtsList from '../../lib/createThoughtsList'
import sortByDateOrderDesc from '../../lib/sortByDateOrderDesc'

test('contains thoughts', async t => {
  const thoughts = await createThoughtsList()
  t.true(thoughts.length > 2, thoughts)
})

function latestThoughtDate() {
  const basePath = __dirname + '/../../thoughts/'
  const filename = sortByDateOrderDesc(fs.readdirSync(basePath))[0]
  const [year, month, day] = filename.split('-')
  return format(new Date(year, month, day))
}

test('can be limited', async t => {
  const thoughts = await createThoughtsList({ limit: 2 })
  const firstDate = thoughts[0].publishedAtISO

  t.is(firstDate, latestThoughtDate())
  t.is(thoughts.length, 2, thoughts)
})
