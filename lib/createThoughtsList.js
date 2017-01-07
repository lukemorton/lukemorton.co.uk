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

function thoughtSlugsAndContents (filenames, basePath) {
  return filenames.map(function (filename) {
    return {
      slug: path.basename(filename, '.md'),
      content: fs.readFileSync(path.join(basePath, filename), 'utf8')
    }
  })
}

export default async function ({ limit } = {}) {
  const basePath = path.join(process.cwd(), 'thoughts')
  const filenames = await fs.readdir(basePath)
  const sortedFilenames = limitBy(sortByDateOrderDesc(filenames), limit)
  const thoughts = thoughtSlugsAndContents(sortedFilenames, basePath)
  return thoughts.map(createThought)
}
