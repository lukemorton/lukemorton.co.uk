import {
  fetchOneThoughtBySlug as _fetchOneThoughtBySlug,
  fetchRecentThoughts as _fetchRecentThoughts,
  fetchAllThoughts as _fetchAllThoughts,
  fetchThoughtsByTopicName as _fetchThoughtsByTopicName,
  fetchThoughtsByTopicSlug as _fetchThoughtsByTopicSlug,
} from '../capabilities/fetchThoughts'
import {
  fetchAllTopics as _fetchAllTopics,
  fetchTopicBySlug as _fetchTopicBySlug,
} from '../capabilities/fetchTopic'
import { loadJsonPath } from '../adapters/fileThoughtGateway'
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
} from '../capabilities/fetchThoughts'

export function fetchOneThoughtBySlug(_, slug) {
  return _fetchOneThoughtBySlug(loadJsonPath, slug)
}

export function fetchRecentThoughts(_) {
  return _fetchRecentThoughts(loadJsonPath)
}

export function fetchAllThoughts(_) {
  return _fetchAllThoughts(loadJsonPath)
}

export function fetchThoughtsByTopicName(_, topicName) {
  return _fetchThoughtsByTopicName(loadJsonPath, findTopicByName, topicName)
}

export function fetchThoughtsByTopicSlug(_, topicSlug) {
  return _fetchThoughtsByTopicSlug(loadJsonPath, topicSlugExists, topicSlug)
}

export { NoTopicFoundBySlugError } from '../capabilities/fetchTopic'

export function fetchAllTopics() {
  return _fetchAllTopics(allTopics)
}

export function fetchTopicBySlug(slug) {
  return _fetchTopicBySlug(findTopicBySlug, slug)
}
