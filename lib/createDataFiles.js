import path from 'path'
import { createListFromDirectory, createMapFromDirectory } from 'markedly'

export default async function ({ dev, dataDir, thoughtsDir }) {
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
