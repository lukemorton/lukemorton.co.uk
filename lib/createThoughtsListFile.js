import fs from 'fs-promise'
import path from 'path'
import createThoughtsList from './createThoughtsList'

export default async function ({ name, limit }) {
  const filename = path.join(__dirname, '../data', name + '.json')
  const thoughtsList = await createThoughtsList({ limit })
  await fs.writeJson(filename, thoughtsList, { spaces: 2 })
  return filename
}
