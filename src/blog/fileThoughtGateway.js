import fs from 'fs'

export async function loadJsonPath (path) {
  const json = fs.readFileSync(`${__dirname}/../../public/${path}`)
  return JSON.parse(json)
}
