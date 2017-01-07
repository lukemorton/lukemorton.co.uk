import fs from 'fs-promise'
import path from 'path'
import createThoughtsList from './createThoughtsList'

function buildMap (map, thought) {
  map[thought.slug] = thought
  return map
}

export default async function ({ dir, thoughtsDir }) {
  const filename = path.join(dir, 'thoughts.json')
  const thoughtsList = await createThoughtsList({ thoughtsDir })
  const thoughtsMap = thoughtsList.reduce(buildMap, {})
  await fs.writeJson(filename, thoughtsMap, { spaces: 2 })
  return filename
}
