import test from 'ava'
import fs from 'fs'
import path from 'path'
import createThoughtsListFile from '../../lib/createThoughtsListFile'

function deleteIfExists (filename) {
  try { fs.unlinkSync(filename) } catch (e) {}
}

test('creates file in correct place', async t => {
  const expectedFilename = path.join(__dirname, '../../data/test.json')
  deleteIfExists(expectedFilename)

  const filename = await createThoughtsListFile({ name: 'test' })

  t.is(filename, expectedFilename)
  t.true(fs.existsSync(expectedFilename))
})

test('can be limited', async t => {
  deleteIfExists(path.join(__dirname, '/../../data/limitedTest.json'))

  const filename = await createThoughtsListFile({ name: 'limitedTest', limit: 2 })

  const parsedJson = JSON.parse(fs.readFileSync(filename, 'utf8'))
  t.is(parsedJson.length, 2)
})
