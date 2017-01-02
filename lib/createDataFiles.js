import createThoughtsMapFile from './createThoughtsMapFile'
import createThoughtsListFile from './createThoughtsListFile'

export default function () {
  return [
    createThoughtsMapFile(),
    createThoughtsListFile({ name: 'latestThoughts', limit: 10}),
    createThoughtsListFile({ name: 'thoughtsArchive' })
  ]
}
