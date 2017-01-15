import createThoughtsList from './createThoughtsList'

function buildMap (map, thought) {
  map[thought.slug] = thought
  return map
}

export default function ({ dev, thoughtFiles }) {
  const thoughtsList = createThoughtsList({ dev, thoughtFiles })
  return thoughtsList.reduce(buildMap, {})
}
