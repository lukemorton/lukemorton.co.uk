import fs from 'fs'
import format from 'date-fns/format'
import striptags from 'striptags'
import marked from 'marked'

function title(contentFragments) {
  return striptags(contentFragments[0].slice(2))
}

function intro(contentFragments) {
  let i = 2
  let intro = []

  while (contentFragments[i]) {
    intro.push(contentFragments[i])
    i++
  }

  return marked(intro.join('\n'))
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
      content: marked(content),
      slug
    }
  })
}
