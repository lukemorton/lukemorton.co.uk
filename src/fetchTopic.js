import { findTopicBySlug } from './topicGateway'

export class NoTopicFoundBySlugError extends Error {}

export function fetchTopicBySlug (name) {
  const topic = findTopicBySlug(name)
  if (!topic) throw new NoTopicFoundBySlugError()
  return topic
}
