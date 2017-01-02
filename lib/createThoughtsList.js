import fs from 'fs'
import path from 'path'
import createThought from './createThought'
import sortByDateOrderDesc from './sortByDateOrderDesc'

function limitBy(limitable, limit) {
  if (limit) {
    return limitable.slice(0, limit)
  } else {
    return limitable
  }
}

function thoughtSlugsAndContents(filenames, basePath) {
  return filenames.map(function (filename) {
    return {
      slug: path.basename(filename, '.md'),
      content: fs.readFileSync(basePath + filename, 'utf8')
    }
  })
}

export default function ({ limit } = {}) {
  return new Promise(function (resolve, reject) {
    const basePath = __dirname + '/../thoughts/'

    fs.readdir(basePath, function (err, filenames) {
      if (err) {
        reject(err)
      } else {
        const sortedFilenames = sortByDateOrderDesc(limitBy(filenames, limit))
        const thoughts = thoughtSlugsAndContents(sortedFilenames, basePath)
        resolve(thoughts.map(createThought))
      }
    })
  })
}
