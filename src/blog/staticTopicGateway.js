function Topic(name, slug) {
  return {
    get name() {
      return name
    },

    get slug() {
      return slug
    },

    get path() {
      return `/dist/thoughts/topics/${slug}.json`
    },
  }
}

const TOPICS = [
  Topic('Clean Architecture', 'clean-architecture'),
  Topic('Ruby on Rails', 'rails'),
  Topic('Trunk-based development', 'trunk-based-development'),
  Topic('COVID19', 'covid-19'),
]

export function allTopics() {
  return TOPICS
}

export function findTopicByName(name) {
  return TOPICS.find((t) => t.name === name)
}

export function findTopicBySlug(slug) {
  return TOPICS.find((t) => t.slug === slug)
}

export function topicSlugExists(slug) {
  return !!findTopicBySlug(slug)
}
