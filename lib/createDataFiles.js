import fs from 'fs'
import createThoughtsMapFile from './createThoughtsMapFile'
import createThoughtsListFile from './createThoughtsListFile'

export default async function ({ dataDir, thoughtsDir }) {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir)
  }

  return await Promise.all([
    createThoughtsMapFile({ dir: dataDir, thoughtsDir }),
    createThoughtsListFile({ dir: dataDir, name: 'latestThoughts', limit: 10, thoughtsDir }),
    createThoughtsListFile({ dir: dataDir, name: 'thoughtsArchive', thoughtsDir })
  ])
}
