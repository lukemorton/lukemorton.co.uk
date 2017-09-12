import fs from 'fs'
import fsp from 'fs-promise'
import path from 'path'
import createThoughtsMap from './createThoughtsMap'
import { createListFromDirectory, createMapFromDirectory } from 'markedly'

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
  return slugsAndContents(filenames)
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
    createMapFromDirectory({
      dir: thoughtsDir,
      outFilePath: path.join(dataDir, 'thoughts.json'),
      preview: dev
    }),
    createListFromDirectory({
      dir: thoughtsDir,
      outFilePath: path.join(dataDir, 'latestThoughts.json'),
      limit: 10,
      preview: dev
    }),
    createListFromDirectory({
      dir: thoughtsDir,
      outFilePath: path.join(dataDir, 'thoughtsArchive.json'),
      preview: dev
    }),
  ])
}
