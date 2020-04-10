export class NoTopicFoundBySlugError extends Error {
  constructor(slug) {
    super()
    this.name = 'NoTopicFoundBySlugError'
    this.message = `Could not find topic by slug ${slug}`
  }
}

export function fetchAllTopics(allTopics) {
  return allTopics()
}

export function fetchTopicBySlug(findTopicBySlug, slug) {
  const topic = findTopicBySlug(slug)
  if (!topic) throw new NoTopicFoundBySlugError(slug)
  return topic
}
