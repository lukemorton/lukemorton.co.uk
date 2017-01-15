import fs from 'fs'
import fsp from 'fs-promise'
import path from 'path'
import createThoughtsMap from './createThoughtsMap'
import createThoughtsList from './createThoughtsList'

async function fullFilenames (thoughtsDir) {
  const filenames = await fsp.readdir(thoughtsDir)
  return filenames.map(filename => path.join(thoughtsDir, filename))
}

async function slugAndContent (filename) {
  return [path.basename(filename, '.md'), await fsp.readFile(filename, 'utf8')]
}

async function slugsAndContents (filenames) {
  const pairs = await Promise.all(filenames.map(slugAndContent))

  return pairs.reduce((slugsAndContents, [slug, content]) => {
    slugsAndContents[slug] = content
    return slugsAndContents
  }, {})
}

async function loadThoughtFiles (thoughtsDir) {
  const filenames = await fullFilenames(thoughtsDir)
  return await slugsAndContents(filenames)
}

async function createFile (dir, name, data) {
  const filename = path.join(dir, name)
  await fsp.writeJson(filename, data, { spaces: 2 })
  return filename
}

export default async function ({ dev, dataDir, thoughtsDir }) {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir)
  }

  const thoughtFiles = await loadThoughtFiles(thoughtsDir)

  return Promise.all([
    createFile(dataDir, 'thoughts.json', createThoughtsMap({ dev, thoughtFiles })),
    createFile(dataDir, 'latestThoughts.json', createThoughtsList({ limit: 10, dev, thoughtFiles })),
    createFile(dataDir, 'thoughtsArchive.json', createThoughtsList({ dev, thoughtFiles }))
  ])
}
