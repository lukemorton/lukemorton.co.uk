export const TOPICS = [
  { name: 'Clean Architecture', slug: 'clean-architecture', file: 'cleanArchitecture' },
  { name: 'Ruby on Rails', slug: 'rails', file: 'rails' },
]

export const TOPIC_SLUG_TO_FILE_MAP = TOPICS.reduce(
  (map, topic) => {
    return { ...map, [topic.slug]: topic.file }
  },
  {}
)

export const TOPIC_SLUG_TO_NAME_MAP = TOPICS.reduce(
  (map, topic) => {
    return { ...map, [topic.slug]: topic.name }
  },
  {}
)

export const TOPIC_NAME_TO_FILE_MAP = TOPICS.reduce(
  (map, topic) => {
    return { ...map, [topic.name]: topic.file }
  },
  {}
)
