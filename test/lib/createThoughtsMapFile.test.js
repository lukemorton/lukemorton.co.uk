import test from 'ava'
import fs from 'fs'
import path from 'path'
import createThoughtsMapFile from '../../lib/createThoughtsMapFile'

const dataDir = path.join(__dirname, '../../data/test')
const thoughtsDir = path.join(__dirname, '../../thoughts')

function deleteIfExists (filename) {
  try { fs.unlinkSync(filename) } catch (e) {}
}

test('creates file in correct place', async t => {
  const expectedFilename = path.join(dataDir, 'thoughts.json')
  deleteIfExists(expectedFilename)

  const filename = await createThoughtsMapFile({ dir: dataDir, thoughtsDir })

  t.is(filename, expectedFilename)
  t.true(fs.existsSync(expectedFilename))
})
