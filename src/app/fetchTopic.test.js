import { fetchAllTopics, fetchTopicBySlug, NoTopicFoundBySlugError } from './factory'
import { allTopics } from '../blog/topicGateway'

describe('fetchAllTopics()', () => {
  test('returns all topics', () => {
    expect(fetchAllTopics()).toEqual(allTopics())
  })
})

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
