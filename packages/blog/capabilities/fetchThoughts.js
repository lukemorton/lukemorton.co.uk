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

export async function fetchOneThoughtBySlug({ thoughtsIndex, slug }) {
  const thoughts = mapWithDatelessSlug(await thoughtsIndex())
  if (!thoughts[slug]) throw new NoThoughtFoundBySlugError(slug)
  return thoughts[slug]
}

export async function fetchRecentThoughts({ recentThoughts }) {
  return arrayWithDatelessSlug((await recentThoughts()) || [])
}

export async function fetchAllThoughts({ allThoughts }) {
  return arrayWithDatelessSlug((await allThoughts()) || [])
}

export async function fetchThoughtsByTopicName({
  thoughtsByTopicSlug,
  findTopicByName,
  name,
}) {
  const topic = findTopicByName(name)
  if (!topic) throw new NoThoughtsFoundByTopicNameError(name)
  return arrayWithDatelessSlug((await thoughtsByTopicSlug(topic.slug)) || [])
}

export async function fetchThoughtsByTopicSlug({
  thoughtsByTopicSlug,
  topicSlugExists,
  slug,
}) {
  if (!topicSlugExists(slug)) throw new NoThoughtsFoundByTopicSlugError(slug)
  return arrayWithDatelessSlug((await thoughtsByTopicSlug(slug)) || [])
}
