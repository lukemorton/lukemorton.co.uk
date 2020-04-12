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
} from '../adapters/fileThoughtGateway'

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

export function fetchOneThoughtBySlug({ slug }) {
  return _fetchOneThoughtBySlug({ thoughtsIndex, slug })
}

export function fetchRecentThoughts() {
  return _fetchRecentThoughts({ recentThoughts })
}

export function fetchAllThoughts() {
  return _fetchAllThoughts({ allThoughts })
}

export function fetchThoughtsByTopicName({ name }) {
  return _fetchThoughtsByTopicName({
    thoughtsByTopicSlug,
    findTopicByName,
    name,
  })
}

export function fetchThoughtsByTopicSlug({ slug }) {
  return _fetchThoughtsByTopicSlug({
    thoughtsByTopicSlug,
    topicSlugExists,
    slug,
  })
}

export { NoTopicFoundBySlugError } from 'blog/capabilities/fetchTopic'

export function fetchAllTopics() {
  return _fetchAllTopics({ allTopics })
}

export function fetchTopicBySlug({ slug }) {
  return _fetchTopicBySlug({
    topicBySlug: findTopicBySlug,
    slug,
  })
}
