import fs from 'fs-promise'
import path from 'path'
import createThought from './createThought'
import sortByDateOrderDesc from './sortByDateOrderDesc'

function limitBy (limitable, limit) {
  if (limit) {
    return limitable.slice(0, limit)
  } else {
    return limitable
  }
}

function thoughtSlugsAndContents (filenames, thoughtsDir) {
  return filenames.map(function (filename) {
    return {
      slug: path.basename(filename, '.md'),
      content: fs.readFileSync(path.join(thoughtsDir, filename), 'utf8')
    }
  })
}

export default async function ({ limit, thoughtsDir }) {
  const filenames = await fs.readdir(thoughtsDir)
  const sortedFilenames = limitBy(sortByDateOrderDesc(filenames), limit)
  const thoughts = thoughtSlugsAndContents(sortedFilenames, thoughtsDir)
  return thoughts.map(createThought)
}
