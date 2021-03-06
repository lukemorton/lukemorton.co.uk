import Topic from 'blog/entities/Topic'

const TOPICS = [
  Topic('Clean Architecture', 'clean-architecture', {
    guide: 'software-development',
  }),
  Topic('Ruby on Rails', 'rails'),
  Topic('Trunk-based development', 'trunk-based-development'),
  Topic('COVID19', 'covid-19'),
  Topic('Software development', 'software-development', {
    guide: 'software-development',
  }),
  Topic('Software development teams', 'software-development-teams', {
    guide: 'software-development',
  }),
  Topic(
    'Software development ways of working',
    'software-development-ways-of-working',
    {
      guide: 'software-development',
    }
  ),
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
