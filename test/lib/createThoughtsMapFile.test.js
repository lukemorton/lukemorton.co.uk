import test from 'ava'
import fs from 'fs'
import path from 'path'
import createThoughtsMapFile from '../../lib/createThoughtsMapFile'

function deleteIfExists (filename) {
  try { fs.unlinkSync(filename) } catch (e) {}
}

test('creates file in correct place', async t => {
  const expectedFilename = path.join(__dirname, '../../data/thoughts.json')
  deleteIfExists(expectedFilename)

  const filename = await createThoughtsMapFile()

  t.is(filename, expectedFilename)
  t.true(fs.existsSync(expectedFilename))
})
