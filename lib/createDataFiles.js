import fs from 'fs'
import fsp from 'fs-promise'
import path from 'path'
import createThoughtsMap from './createThoughtsMap'
import createThoughtsList from './createThoughtsList'

async function createFile(dir, name, data) {
  const filename = path.join(dir, name)
  await fsp.writeJson(filename, await data, { spaces: 2 })
  return filename
}

export default async function ({ dataDir, thoughtsDir }) {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir)
  }

  return Promise.all([
    createFile(dataDir, 'thoughts.json', createThoughtsMap({ thoughtsDir })),
    createFile(dataDir, 'latestThoughts.json', createThoughtsList({ limit: 10, thoughtsDir })),
    createFile(dataDir, 'thoughtsArchive.json', createThoughtsList({ thoughtsDir })),
  ])
}
