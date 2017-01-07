import fs from 'fs'
import path from 'path'
import createThoughtsList from './createThoughtsList'

export default function ({ name, limit }) {
  return new Promise(function (resolve, reject) {
    (async function () {
      const filename = path.join(__dirname, '../data', name + '.json')
      const thoughtsList = await createThoughtsList({ limit })

      fs.writeFile(filename, JSON.stringify(thoughtsList, null, 2), function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(filename)
        }
      })
    })()
  })
}
