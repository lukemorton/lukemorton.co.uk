import test from 'ava'
import fs from 'fs'
import path from 'path'
import createDataFiles from '../../lib/createDataFiles'

const dataDir = path.join(__dirname, '../../data/test')
const thoughtsDir = path.join(__dirname, '../../thoughts')

function deleteIfExists (filename) {
  try { fs.unlinkSync(filename) } catch (e) {}
}

test('creates files', async t => {
  const thoughts = path.join(dataDir, 'thoughts.json')
  const latestThoughts = path.join(dataDir, 'latestThoughts.json')
  const thoughtsArchive = path.join(dataDir, 'thoughtsArchive.json')

  deleteIfExists(thoughts)
  deleteIfExists(latestThoughts)
  deleteIfExists(thoughtsArchive)

  const filenames = await createDataFiles({ dataDir, thoughtsDir })

  t.is(filenames.length, 3)
  t.true(fs.existsSync(thoughts))
  t.true(fs.existsSync(latestThoughts))
  t.true(fs.existsSync(thoughtsArchive))
})
