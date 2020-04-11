import {
  fetchAllTopics,
  fetchTopicBySlug,
  NoTopicFoundBySlugError,
} from '../browserFactory'

describe('fetchAllTopics()', () => {
  test('returns all topics', () => {
    expect(fetchAllTopics().length).toBeGreaterThan(0)
  })
})

describe('fetchTopicBySlug()', () => {
  fetchAllTopics().forEach((topic) => {
    test(`returns topic for ${topic.slug}`, () => {
      expect(fetchTopicBySlug(topic.slug)).toBeDefined()
    })
  })

  test('throws when topic does not exist', () => {
    expect(() => fetchTopicBySlug('doesnt-exist')).toThrow(
      NoTopicFoundBySlugError
    )
  })
})
