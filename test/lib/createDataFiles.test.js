import test from 'ava'
import fs from 'fs'
import createDataFiles from '../../lib/createDataFiles'

function deleteIfExists(filename) {
  try { fs.unlinkSync(expectedFilename) } catch (e) {}
}

test('creates files', async t => {
  const thoughts = __dirname + '/../../data/thoughts.json'
  const latestThoughts = __dirname + '/../../data/latestThoughts.json'
  const thoughtsArchive = __dirname + '/../../data/thoughtsArchive.json'

  deleteIfExists(thoughts)
  deleteIfExists(latestThoughts)
  deleteIfExists(thoughtsArchive)

  t.is(createDataFiles().length, 3)
  t.true(fs.existsSync(thoughts))
  t.true(fs.existsSync(latestThoughts))
  t.true(fs.existsSync(thoughtsArchive))
})
