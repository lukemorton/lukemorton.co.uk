import partial from 'lodash.partial'

import {
  fetchOneThoughtBySlug as _fetchOneThoughtBySlug,
  fetchRecentThoughts as _fetchRecentThoughts,
  fetchAllThoughts as _fetchAllThoughts,
  fetchThoughtsByTopicName as _fetchThoughtsByTopicName,
  fetchThoughtsByTopicSlug as _fetchThoughtsByTopicSlug,
} from 'blog/capabilities/fetchThoughts'

import {
  fetchAllTopics as _fetchAllTopics,
  fetchTopicBySlug as _fetchTopicBySlug,
} from 'blog/capabilities/fetchTopic'

import {
  thoughtsIndex,
  recentThoughts,
  allThoughts,
  thoughtsByTopicSlug,
  loadJsonPath,
} from '../adapters/httpThoughtGateway'

import {
  allTopics,
  findTopicByName,
  findTopicBySlug,
  topicSlugExists,
} from '../adapters/staticTopicGateway'

export {
  NoThoughtFoundBySlugError,
  NoThoughtsFoundByTopicNameError,
  NoThoughtsFoundByTopicSlugError,
} from 'blog/capabilities/fetchThoughts'

export function fetchOneThoughtBySlug(origin, slug) {
  const _load = (path) => loadJsonPath(path, { origin })

  return _fetchOneThoughtBySlug({
    thoughtsIndex: () => thoughtsIndex(_load),
    slug,
  })
}

export function fetchRecentThoughts(origin) {
  const _load = (path) => loadJsonPath(path, { origin })

  return _fetchRecentThoughts({
    recentThoughts: () => recentThoughts(_load),
  })
}

export function fetchAllThoughts(origin) {
  const _load = (path) => loadJsonPath(path, { origin })

  return _fetchAllThoughts({
    allThoughts: () => allThoughts(_load),
  })
}

export function fetchThoughtsByTopicName(origin, name) {
  const _load = (path) => loadJsonPath(path, { origin })

  return _fetchThoughtsByTopicName({
    thoughtsByTopicSlug: (slug) => thoughtsByTopicSlug(_load, slug),
    findTopicByName,
    name,
  })
}

export function fetchThoughtsByTopicSlug(origin, slug) {
  const _load = (path) => loadJsonPath(path, { origin })

  return _fetchThoughtsByTopicSlug({
    thoughtsByTopicSlug: (slug) => thoughtsByTopicSlug(_load, slug),
    topicSlugExists,
    slug,
  })
}

export { NoTopicFoundBySlugError } from 'blog/capabilities/fetchTopic'

export function fetchAllTopics() {
  return _fetchAllTopics(allTopics)
}

export function fetchTopicBySlug(slug) {
  return _fetchTopicBySlug(findTopicBySlug, slug)
}
