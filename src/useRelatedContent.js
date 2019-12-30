import { useState } from 'react'
import { fetchThoughtsByTopic } from './fetchThoughts'
import { TOPIC_NAME_TO_FILE_MAP } from './topics'

async function fetchThoughtsForEachTag (tags) {
  return await Promise.all(
    tags.map((tag) => {
      return fetchThoughtsByTopic(null, TOPIC_NAME_TO_FILE_MAP[tag])
    })
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
