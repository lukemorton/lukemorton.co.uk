import { fetchTopicBySlug, NoTopicFoundBySlugError } from './fetchTopic'
import { allTopics } from './topicGateway'

describe('fetchTopicBySlug()', () => {
  allTopics().forEach((topic) => {
    test(`returns topic for ${topic.slug}`, () => {
      expect(fetchTopicBySlug(topic.slug)).toBeDefined()
    })
  })

  test('throws when topic does not exist', () => {
    expect(() => fetchTopicBySlug('doesnt-exist')).toThrow(NoTopicFoundBySlugError)
  })
})
