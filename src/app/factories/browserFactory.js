import partial from 'lodash.partial'
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
import { loadJsonPath } from '../adapters/httpThoughtGateway'
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

export function fetchOneThoughtBySlug(origin, slug) {
  return _fetchOneThoughtBySlug(partial(loadJsonPath, origin), slug)
}

export function fetchRecentThoughts(origin) {
  return _fetchRecentThoughts(partial(loadJsonPath, origin))
}

export function fetchAllThoughts(origin) {
  return _fetchAllThoughts(partial(loadJsonPath, origin))
}

export function fetchThoughtsByTopicName(origin, topicName) {
  return _fetchThoughtsByTopicName(
    partial(loadJsonPath, origin),
    findTopicByName,
    topicName
  )
}

export function fetchThoughtsByTopicSlug(origin, topicSlug) {
  return _fetchThoughtsByTopicSlug(
    partial(loadJsonPath, origin),
    topicSlugExists,
    topicSlug
  )
}

export { NoTopicFoundBySlugError } from '../capabilities/fetchTopic'

export function fetchAllTopics() {
  return _fetchAllTopics(allTopics)
}

export function fetchTopicBySlug(slug) {
  return _fetchTopicBySlug(findTopicBySlug, slug)
}