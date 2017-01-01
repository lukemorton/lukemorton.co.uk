import fs from 'fs'
import thoughtsInDateOrderDesc from './thoughtsInDateOrderDesc'

function thoughtsList(thoughts) {
  return thoughts.map((title) => ({ title }))
}

export default function ({ limit } = {}) {
  return new Promise(function (resolve, reject) {
    fs.readdir(__dirname + '/../thoughts/', function (err, thoughts) {
      if (err) {
        reject(err)
      } else {
        resolve(thoughtsList(thoughtsInDateOrderDesc({ thoughts, limit })))
      }
    })
  })
}
