import { findTopicBySlug } from './topicGateway'

export function fetchTopicBySlug (name) {
  const topic = findTopicBySlug(name)
  if (!topic) throw new Exception('No topic found by slug')
  return topic
}
