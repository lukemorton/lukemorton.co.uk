import fs from 'fs-promise'
import path from 'path'
import createThoughtsList from './createThoughtsList'

export default async function ({ dir, name, limit, thoughtsDir }) {
  const filename = path.join(dir, name + '.json')
  const thoughtsList = await createThoughtsList({ limit, thoughtsDir })
  await fs.writeJson(filename, thoughtsList, { spaces: 2 })
  return filename
}
