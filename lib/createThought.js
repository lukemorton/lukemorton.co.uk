import format from 'date-fns/format'
import striptags from 'striptags'
import marked from 'marked'

function title (contentFragments) {
  return marked(contentFragments[0])
}

function plainTitle (contentFragments) {
  return striptags(contentFragments[0].slice(2))
}

function intro (contentFragments) {
  let i = 2
  let intro = []

  while (contentFragments[i]) {
    intro.push(contentFragments[i])
    i++
  }

  return marked(intro.join('\n'))
}

function formattedDate (slug, formatPattern = 'Do MMMM YYYY') {
  const [year, month, day] = slug.split('-')
  return format(new Date(year, month, day), formatPattern)
}

function contentWithoutTitle (contentFragments) {
  return marked(contentFragments.slice(2).join('\n'))
}

export default function ({ slug, content }) {
  const contentFragments = content.split('\n')

  return {
    title: title(contentFragments),
    plainTitle: plainTitle(contentFragments),
    intro: intro(contentFragments),
    publishedAt: formattedDate(slug),
    publishedAtISO: formattedDate(slug, null),
    content: contentWithoutTitle(contentFragments),
    url: '/thoughts/' + slug,
    slug
  }
}
