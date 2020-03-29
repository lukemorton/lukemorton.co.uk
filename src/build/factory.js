import {
  fetchOneThoughtBySlug as _fetchOneThoughtBySlug,
  fetchRecentThoughts as _fetchRecentThoughts,
  fetchAllThoughts as _fetchAllThoughts,
  fetchThoughtsByTopicName as _fetchThoughtsByTopicName,
  fetchThoughtsByTopicSlug as _fetchThoughtsByTopicSlug,
} from '../blog/fetchThoughts'
import {
  fetchAllTopics as _fetchAllTopics,
  fetchTopicBySlug as _fetchTopicBySlug,
} from '../blog/fetchTopic'
import { loadJsonPath } from '../blog/fileThoughtGateway'
import {
  allTopics,
  findTopicByName,
  findTopicBySlug,
  topicSlugExists,
} from '../blog/staticTopicGateway'

export {
  NoThoughtFoundBySlugError,
  NoThoughtsFoundByTopicNameError,
  NoThoughtsFoundByTopicSlugError,
} from '../blog/fetchThoughts'

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

export { NoTopicFoundBySlugError } from '../blog/fetchTopic'

export function fetchAllTopics() {
  return _fetchAllTopics(allTopics)
}

export function fetchTopicBySlug(slug) {
  return _fetchTopicBySlug(findTopicBySlug, slug)
}
