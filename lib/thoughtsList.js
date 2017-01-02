import fs from 'fs'
import format from 'date-fns/format'

function title(contentFragments) {
  return contentFragments[0].slice(2)
}

function intro(contentFragments) {
  return contentFragments[2]
}

function formattedDate(slug) {
  const [year, month, day] = slug.split('-')
  return format(new Date(year, month, day), 'Do MMMM YYYY')
}

export default function ({ thoughts }) {
  return thoughts.map(function ({ slug, content }) {
    const contentFragments = content.split('\n')

    return {
      title: title(contentFragments),
      intro: intro(contentFragments),
      publishedAt: formattedDate(slug),
      slug
    }
  })
}
