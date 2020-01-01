import { fetchAllTopics, fetchTopicBySlug, NoTopicFoundBySlugError } from './fetchTopic'
import { allTopics, findTopicBySlug } from './topicGateway'

describe('fetchAllTopics()', () => {
  test('returns all topics', () => {
    expect(fetchAllTopics(allTopics)).toEqual(allTopics())
  })
})

describe('fetchTopicBySlug()', () => {
  allTopics().forEach((topic) => {
    test(`returns topic for ${topic.slug}`, () => {
      expect(fetchTopicBySlug(findTopicBySlug, topic.slug)).toBeDefined()
    })
  })

  test('throws when topic does not exist', () => {
    expect(() => fetchTopicBySlug(findTopicBySlug, 'doesnt-exist')).toThrow(NoTopicFoundBySlugError)
  })
})
