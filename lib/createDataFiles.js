import createThoughtsListFile from './createThoughtsListFile'

export default function () {
  return [
    createThoughtsListFile({ name: 'latestThoughts', limit: 10}),
    createThoughtsListFile({ name: 'thoughtsArchive' })
  ]
}
