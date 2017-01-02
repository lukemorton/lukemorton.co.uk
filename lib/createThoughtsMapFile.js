import fs from 'fs'
import path from 'path'
import createThoughtsList from './createThoughtsList'

function buildMap (map, thought) {
  map[thought.slug] = thought
  return map
}

export default function () {
  return new Promise(function (resolve, reject) {
    (async function () {
      const filename = path.join(__dirname, '../data/thoughts.json')
      const thoughtsList = await createThoughtsList()
      const thoughtsMap = thoughtsList.reduce(buildMap, {})

      fs.writeFile(filename, JSON.stringify(thoughtsMap, null, 2), function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(filename)
        }
      })
    })()
  })
}
