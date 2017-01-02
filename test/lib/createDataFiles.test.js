import test from 'ava'
import fs from 'fs'
import path from 'path'
import createDataFiles from '../../lib/createDataFiles'

function deleteIfExists (filename) {
  try { fs.unlinkSync(filename) } catch (e) {}
}

test('creates files', async t => {
  const thoughts = path.join(__dirname, '../../data/thoughts.json')
  const latestThoughts = path.join(__dirname, '../../data/latestThoughts.json')
  const thoughtsArchive = path.join(__dirname, '../../data/thoughtsArchive.json')

  deleteIfExists(thoughts)
  deleteIfExists(latestThoughts)
  deleteIfExists(thoughtsArchive)

  const filenames = await createDataFiles()

  t.is(filenames.length, 3)
  t.true(fs.existsSync(thoughts))
  t.true(fs.existsSync(latestThoughts))
  t.true(fs.existsSync(thoughtsArchive))
})
