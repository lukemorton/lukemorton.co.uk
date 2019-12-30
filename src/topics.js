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

export const TOPICS = [
  Topic('Clean Architecture', 'clean-architecture'),
  Topic('Ruby on Rails', 'rails')
]

export const TOPIC_SLUG_TO_FILE_MAP = TOPICS.reduce(
  (map, topic) => {
    return { ...map, [topic.slug]: topic.slug }
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
    return { ...map, [topic.name]: topic.slug }
  },
  {}
)
