import createThoughtsList from './createThoughtsList'

function buildMap (map, thought) {
  map[thought.slug] = thought
  return map
}

export default function ({ thoughtFiles }) {
  const thoughtsList = createThoughtsList({ thoughtFiles })
  return thoughtsList.reduce(buildMap, {})
}
