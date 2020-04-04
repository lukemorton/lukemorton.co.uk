export class NoThoughtFoundBySlugError extends Error {
  constructor(slug) {
    super()
    this.name = 'NoThoughtFoundBySlugError'
    this.message = `Could not find thought by slug ${slug}`
  }
}

export class NoThoughtsFoundByTopicNameError extends Error {
  constructor(name) {
    super()
    this.name = 'NoThoughtsFoundByTopicNameError'
    this.message = `Could not find thought by topic name ${name}`
  }
}

export class NoThoughtsFoundByTopicSlugError extends Error {
  constructor(slug) {
    super()
    this.name = 'NoThoughtsFoundByTopicSlugError'
    this.message = `Could not find thought by topic slug ${slug}`
  }
}

async function fetchThoughtMap(loadJsonPath) {
  return loadJsonPath('/dist/content/articles/index.json')
}

export async function fetchOneThoughtBySlug(loadJsonPath, slug) {
  const thoughts = await fetchThoughtMap(loadJsonPath)
  if (!thoughts[slug]) throw new NoThoughtFoundBySlugError(slug)
  return thoughts[slug]
}

export async function fetchRecentThoughts(loadJsonPath) {
  return (await loadJsonPath('/dist/content/articles/recent.json')) || []
}

export async function fetchAllThoughts(loadJsonPath) {
  return (await loadJsonPath('/dist/content/articles/archive.json')) || []
}

export async function fetchThoughtsByTopicName(
  loadJsonPath,
  findTopicByName,
  name
) {
  const topic = findTopicByName(name)
  if (!topic) throw new NoThoughtsFoundByTopicNameError(name)
  return (
    (await loadJsonPath(`/dist/content/articles/topics/${topic.slug}.json`)) ||
    []
  )
}

export async function fetchThoughtsByTopicSlug(
  loadJsonPath,
  topicSlugExists,
  slug
) {
  if (!topicSlugExists(slug)) throw new NoThoughtsFoundByTopicSlugError(slug)
  return (
    (await loadJsonPath(`/dist/content/articles/topics/${slug}.json`)) || []
  )
}
