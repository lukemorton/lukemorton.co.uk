import { findTopicByName, topicSlugExists } from './topicGateway'

export function fetchTopicByName (name) {
  const topic = findTopicByName(name)
  if (!topic) throw new Exception('No topic found by name')
  return topic
}
