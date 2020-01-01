import partial from 'lodash.partial'
import {
  fetchOneThoughtBySlug as _fetchOneThoughtBySlug,
  fetchRecentThoughts as _fetchRecentThoughts,
  fetchAllThoughts as _fetchAllThoughts,
  fetchThoughtsByTopicName as _fetchThoughtsByTopicName,
  fetchThoughtsByTopicSlug as _fetchThoughtsByTopicSlug
} from '../blog/fetchThoughts'
import { loadJsonPath } from '../blog/thoughtGateway'

export {
  fetchAllTopics,
  fetchTopicBySlug,
  NoTopicFoundBySlugError
} from '../blog/fetchTopic'

export {
  NoThoughtFoundBySlugError,
  NoThoughtsFoundByTopicNameError,
  NoThoughtsFoundByTopicSlugError
} from '../blog/fetchThoughts'

export function fetchOneThoughtBySlug (origin, slug) {
  return _fetchOneThoughtBySlug(partial(loadJsonPath, origin), slug)
}

export function fetchRecentThoughts (origin) {
  return _fetchRecentThoughts(partial(loadJsonPath, origin))
}

export function fetchAllThoughts (origin) {
  return _fetchAllThoughts(partial(loadJsonPath, origin))
}

export function fetchThoughtsByTopicName (origin, topicName) {
  return _fetchThoughtsByTopicName(partial(loadJsonPath, origin), topicName)
}

export function fetchThoughtsByTopicSlug (origin, topicSlug) {
  return _fetchThoughtsByTopicSlug(partial(loadJsonPath, origin), topicSlug)
}
