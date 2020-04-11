import {
  fetchAllTopics,
  fetchTopicBySlug,
  NoTopicFoundBySlugError,
} from './fetchTopic'
import Topic from '../entities/Topic'

const MOCK_TOPICS = [Topic('Clean Architecture', 'clean-architecture')]

describe('fetchAllTopics()', () => {
  test('returns all topics', () => {
    const allTopics = jest.fn().mockReturnValue(MOCK_TOPICS)
    const topics = fetchAllTopics(allTopics)
    expect(allTopics).toHaveBeenCalled()
    expect(topics).toEqual(MOCK_TOPICS)
  })
})

describe('fetchTopicBySlug()', () => {
  MOCK_TOPICS.forEach((topic) => {
    test(`returns topic for ${topic.slug}`, () => {
      const findTopicBySlug = jest.fn().mockReturnValue(MOCK_TOPICS[0])
      expect(fetchTopicBySlug(findTopicBySlug, topic.slug)).toBeDefined()
    })
  })

  test('throws when topic does not exist', () => {
    const findTopicBySlug = jest.fn().mockReturnValue(undefined)
    expect(() => fetchTopicBySlug(findTopicBySlug, 'doesnt-exist')).toThrow(
      NoTopicFoundBySlugError
    )
  })
})
