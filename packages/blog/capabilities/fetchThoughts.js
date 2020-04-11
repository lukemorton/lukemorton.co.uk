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
  return loadJsonPath('/dist/src/content/articles/index.json')
}

const datelessSlug = (slug) => slug.slice('0000-00-00-'.length)

const withDatelessSlug = (article) => ({
  ...article,
  slug: datelessSlug(article.slug),
})

const mapWithDatelessSlugReducer = (map) => (newMap, slug) => {
  return {
    ...newMap,
    [datelessSlug(slug)]: withDatelessSlug(map[slug]),
  }
}

const arrayWithDatelessSlug = (array) => array.map(withDatelessSlug)

const mapWithDatelessSlug = (map) =>
  Object.keys(map).reduce(mapWithDatelessSlugReducer(map), {})

export async function fetchOneThoughtBySlug(loadJsonPath, slug) {
  const thoughts = mapWithDatelessSlug(await fetchThoughtMap(loadJsonPath))
  if (!thoughts[slug]) throw new NoThoughtFoundBySlugError(slug)
  return thoughts[slug]
}

export async function fetchRecentThoughts(loadJsonPath) {
  return arrayWithDatelessSlug(
    (await loadJsonPath('/dist/src/content/articles/recent.json')) || []
  )
}

export async function fetchAllThoughts(loadJsonPath) {
  return arrayWithDatelessSlug(
    (await loadJsonPath('/dist/src/content/articles/archive.json')) || []
  )
}

export async function fetchThoughtsByTopicName(
  loadJsonPath,
  findTopicByName,
  name
) {
  const topic = findTopicByName(name)
  if (!topic) throw new NoThoughtsFoundByTopicNameError(name)
  return arrayWithDatelessSlug(
    (await loadJsonPath(
      `/dist/src/content/articles/topics/${topic.slug}.json`
    )) || []
  )
}

export async function fetchThoughtsByTopicSlug(
  loadJsonPath,
  topicSlugExists,
  slug
) {
  if (!topicSlugExists(slug)) throw new NoThoughtsFoundByTopicSlugError(slug)
  return arrayWithDatelessSlug(
    (await loadJsonPath(`/dist/src/content/articles/topics/${slug}.json`)) || []
  )
}
