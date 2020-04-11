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
  return _fetchOneThoughtBySlug({
    thoughtsIndex: () => thoughtsIndex(partial(loadJsonPath, origin)),
    slug,
  })
}

export function fetchRecentThoughts(origin) {
  return _fetchRecentThoughts({
    recentThoughts: () => recentThoughts(partial(loadJsonPath, origin)),
  })
}

export function fetchAllThoughts(origin) {
  return _fetchAllThoughts({
    allThoughts: () => allThoughts(partial(loadJsonPath, origin)),
  })
}

export function fetchThoughtsByTopicName(origin, name) {
  return _fetchThoughtsByTopicName({
    thoughtsByTopicSlug: (slug) =>
      thoughtsByTopicSlug(partial(loadJsonPath, origin), slug),
    findTopicByName,
    name,
  })
}

export function fetchThoughtsByTopicSlug(origin, slug) {
  return _fetchThoughtsByTopicSlug({
    thoughtsByTopicSlug: (slug) =>
      thoughtsByTopicSlug(partial(loadJsonPath, origin), slug),
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
