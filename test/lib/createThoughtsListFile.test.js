import test from 'ava'
import fs from 'fs'
import path from 'path'
import createThoughtsListFile from '../../lib/createThoughtsListFile'

const dataDir = path.join(__dirname, '../../data/test')
const thoughtsDir = path.join(__dirname, '../../thoughts')

function deleteIfExists (filename) {
  try { fs.unlinkSync(filename) } catch (e) {}
}

test('creates file in correct place', async t => {
  const expectedFilename = path.join(dataDir, 'test.json')
  deleteIfExists(expectedFilename)

  const filename = await createThoughtsListFile({ dir: dataDir, name: 'test', thoughtsDir })

  t.is(filename, expectedFilename)
  t.true(fs.existsSync(expectedFilename))
})

test('can be limited', async t => {
  deleteIfExists(path.join(dataDir, 'limitedTest.json'))

  const filename = await createThoughtsListFile({
    dir: dataDir,
    name: 'limitedTest',
    limit: 2,
    thoughtsDir
  })

  const parsedJson = JSON.parse(fs.readFileSync(filename, 'utf8'))
  t.is(parsedJson.length, 2)
})
