import {
  fetchAllTopics,
  fetchTopicBySlug,
  NoTopicFoundBySlugError,
} from '../nodeFactory'

describe('fetchAllTopics()', () => {
  test('returns all topics', () => {
    expect(fetchAllTopics().length).toBeGreaterThan(0)
  })
})

describe('fetchTopicBySlug()', () => {
  fetchAllTopics().forEach((topic) => {
    test(`returns topic for ${topic.slug}`, () => {
      expect(fetchTopicBySlug({ slug: topic.slug })).toBeDefined()
    })
  })

  test('throws when topic does not exist', () => {
    expect(() => fetchTopicBySlug({ slug: 'doesnt-exist' })).toThrow(
      NoTopicFoundBySlugError
    )
  })
})
