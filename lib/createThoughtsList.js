import createThought from './createThought'
import sortByDateOrderDesc from './sortByDateOrderDesc'

function limitBy (limitable, limit) {
  if (limit) {
    return limitable.slice(0, limit)
  } else {
    return limitable
  }
}

function thoughts (slugs, thoughtFiles) {
  return slugs.map(function (slug) {
    return createThought({
      slug,
      content: thoughtFiles[slug]
    })
  })
}

export default function ({ limit, thoughtFiles }) {
  const slugs = Object.keys(thoughtFiles)
  const sortedSlugs = limitBy(sortByDateOrderDesc(slugs), limit)
  return thoughts(sortedSlugs, thoughtFiles)
}
