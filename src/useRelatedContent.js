import { useState } from 'react'
import { fetchThoughtsByTopic } from './fetchThoughts'

const TAG_MAP = {
  'Clean Architecture': 'cleanArchitecture',
  'Ruby on Rails': 'rails'
}

async function fetchThoughtsForEachTag (tags) {
  return await Promise.all(
    tags.map((tag) => {
      return fetchThoughtsByTopic(null, TAG_MAP[tag])
    })
  )
}

const concatInto = (arr, a) => arr.concat(a)
const excludeCurrentSlugFn = (currentSlug) => ({ slug }) => slug !== currentSlug
const byPublishedAtDesc = (a, b) => new Date(b.publishedAt.iso) - new Date(a.publishedAt.iso)
const uniqueThoughts = (thought, i, self) => {
  return self.findIndex((t) => t.slug === thought.slug) === i
}

export default function useRelatedContent () {
  const [relatedContent, setRelatedContent] = useState([])

  return [relatedContent, async (currentSlug, tags) => {
    setRelatedContent(
      (await fetchThoughtsForEachTag(tags))
        .reduce(concatInto, [])
        .filter(excludeCurrentSlugFn(currentSlug))
        .filter(uniqueThoughts)
        .sort(byPublishedAtDesc)
        .slice(0, 4)
    )
  }]
}
