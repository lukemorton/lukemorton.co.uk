import fs from 'fs'
import path from 'path'
import createThoughtsList from './createThoughtsList'

export default function ({ name, limit }) {
  return new Promise(function (resolve, reject) {
    const filename = path.normalize(__dirname + '/../data/' + name + '.json')

    const thoughts = createThoughtsList({ limit }).then(function (thoughtsList) {
      fs.writeFile(filename, JSON.stringify(thoughtsList, null, 2), function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(filename)
        }
      })
    })
  })
}
