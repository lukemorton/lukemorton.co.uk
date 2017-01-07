import createThoughtsList from './createThoughtsList'

function buildMap (map, thought) {
  map[thought.slug] = thought
  return map
}

export default async function ({ thoughtsDir }) {
  const thoughtsList = await createThoughtsList({ thoughtsDir })
  return thoughtsList.reduce(buildMap, {})
}
