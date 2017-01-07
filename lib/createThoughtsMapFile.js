import fs from 'fs-promise'
import path from 'path'
import createThoughtsList from './createThoughtsList'

function buildMap (map, thought) {
  map[thought.slug] = thought
  return map
}

export default async function () {
  const filename = path.join(__dirname, '../data/thoughts.json')
  const thoughtsList = await createThoughtsList()
  const thoughtsMap = thoughtsList.reduce(buildMap, {})
  await fs.writeJson(filename, thoughtsMap, { spaces: 2 })
  return filename
}
