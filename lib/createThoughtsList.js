import createThought from './createThought'
import sortByDateOrderDesc from './sortByDateOrderDesc'
import parseDate from './parseDate'

function published (slugs, dev) {
  if (dev) {
    return slugs
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return slugs.filter((slug) => today >= parseDate(slug))
}

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

export default function ({ dev, limit, thoughtFiles }) {
  const slugs = Object.keys(thoughtFiles)
  const sortedSlugs = limitBy(published(sortByDateOrderDesc(slugs), dev), limit)
  return thoughts(sortedSlugs, thoughtFiles)
}
