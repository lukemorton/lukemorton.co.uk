function Topic (name, slug) {
  return {
    get name () {
      return name
    },

    get slug () {
      return slug
    },

    get path () {
      return `/dist/thoughts/topics/${slug}.json`
    }
  }
}

const TOPICS = [
  Topic('Clean Architecture', 'clean-architecture'),
  Topic('Ruby on Rails', 'rails')
]

const TOPIC_BY_SLUG_MAP = TOPICS.reduce(
  (map, topic) => {
    return { ...map, [topic.slug]: topic }
  },
  {}
)

const TOPIC_SLUG_TO_FILE_MAP = TOPICS.reduce(
  (map, topic) => {
    return { ...map, [topic.slug]: topic.slug }
  },
  {}
)

const TOPIC_SLUG_TO_NAME_MAP = TOPICS.reduce(
  (map, topic) => {
    return { ...map, [topic.slug]: topic.name }
  },
  {}
)

const TOPIC_NAME_TO_FILE_MAP = TOPICS.reduce(
  (map, topic) => {
    return { ...map, [topic.name]: topic.slug }
  },
  {}
)

export function allTopics () {
  return TOPICS
}

export function findTopicByName (name) {
  return TOPICS.find(t => t.name === name)
}

export function findTopicBySlug (slug) {
  return TOPICS.find(t => t.slug === slug)
}

export function topicSlugExists (slug) {
  return !!findTopicBySlug(slug)
}
