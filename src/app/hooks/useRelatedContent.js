import { useState } from 'react'
import { fetchThoughtsByTopicName } from '../factory'

async function fetchThoughtsForEachTag (topics) {
  return Promise.all(
    topics.map(t => fetchThoughtsByTopicName(null, t))
  )
}

const concatInto = (arr, a) => arr.concat(a)
const excludeCurrentSlugFn = (currentSlug) => ({ slug }) => slug !== currentSlug
const byPublishedAtDesc = (a, b) => new Date(b.publishedAt.iso) - new Date(a.publishedAt.iso)
const uniqueThoughts = (thought, i, self) => {
  return self.findIndex((t) => t.slug === thought.slug) === i
}

export default function useRelatedContent (slug, tags) {
  const [relatedContent, setRelatedContent] = useState([])

  const setTags = async (currentSlug, tags) => {
    setRelatedContent(
      (await fetchThoughtsForEachTag(tags))
        .reduce(concatInto, [])
        .filter(excludeCurrentSlugFn(currentSlug))
        .filter(uniqueThoughts)
        .sort(byPublishedAtDesc)
        .slice(0, 4)
    )
  }

  return [relatedContent, setTags]
}
