import { act } from 'react-dom/test-utils'
import useRelatedContent from './useRelatedContent'
import testHook from '../test/support/testHook'
import { fetchThoughtsByTopicSlug } from './fetchThoughts'
import { TOPIC_NAME_TO_FILE_MAP } from './topics'

jest.mock('./fetchThoughts')

function buildThought (slug, publishedAtIso) {
  return {
    slug,
    publishedAt: {
      iso: publishedAtIso || '2017-12-20T00:00:00.000+00:00'
    }
  }
}

describe('useRelatedContent()', () => {
  let relatedContent
  let setTags

  beforeEach(() => {
    testHook(() => {
      [relatedContent, setTags] = useRelatedContent()
    })

    fetchThoughtsByTopicSlug.mockResolvedValue([])
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('returns empty related content by default', () => {
    expect(relatedContent).toEqual([])
  })

  test('setTags receives currentSlug and tags', async () => {
    await act(async () => await setTags('a-slug', ['Clean Architecture']))
    expect(relatedContent).toEqual([])
  })

  test('fetches related content by tag', async () => {
    const expectedTags = ['Clean Architecture']
    await act(async () => await setTags('a-slug', expectedTags))
    expect(fetchThoughtsByTopicSlug).toHaveBeenCalledWith(null, TOPIC_NAME_TO_FILE_MAP[expectedTags[0]])
  })

  test('fetches related content for multiple tags', async () => {
    const expectedTags = ['Clean Architecture', 'Ruby on Rails']
    await act(async () => await setTags('a-slug', expectedTags))
    expect(fetchThoughtsByTopicSlug).toHaveBeenCalledWith(null, TOPIC_NAME_TO_FILE_MAP[expectedTags[0]])
    expect(fetchThoughtsByTopicSlug).toHaveBeenCalledWith(null, TOPIC_NAME_TO_FILE_MAP[expectedTags[1]])
  })

  test('adds related content for tag', async () => {
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([
      buildThought('a-ca-slug')
    ])
    await act(async () => await setTags('a-slug', ['Clean Architecture']))
    expect(relatedContent.length).toBe(1)
  })

  test('adds related content for tag', async () => {
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([
      buildThought('a-ca-slug')
    ])
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([
      buildThought('a-rails-slug')
    ])
    await act(async () => await setTags('a-slug', ['Clean Architecture', 'Ruby on Rails']))
    expect(relatedContent.length).toBe(2)
  })

  test('excludes current slug from related content', async () => {
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([
      buildThought('a-slug'),
      buildThought('a-ca-slug')
    ])
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([
      buildThought('a-rails-slug')
    ])
    await act(async () => await setTags('a-slug', ['Clean Architecture', 'Ruby on Rails']))
    expect(relatedContent.length).toBe(2)
  })

  test('sorts by publishedAt desc', async () => {
    const expectedFirst = buildThought('a-rails-slug', '2019-12-20T00:00:00.000+00:00')
    const expectedSecond = buildThought('a-ca-slug', '2018-12-20T00:00:00.000+00:00')
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([expectedSecond])
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([expectedFirst])

    await act(async () => await setTags('a-slug', ['Clean Architecture', 'Ruby on Rails']))

    expect(relatedContent).toEqual([expectedFirst, expectedSecond])
  })

  test('excludes duplicates from related content', async () => {
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([
      buildThought('a-slug'),
      buildThought('a-ca-slug')
    ])
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([
      buildThought('a-ca-slug'),
      buildThought('a-rails-slug')
    ])
    await act(async () => await setTags('a-slug', ['Clean Architecture', 'Ruby on Rails']))
    expect(relatedContent.length).toBe(2)
  })

  test('relatedContent max of 4', async () => {
    fetchThoughtsByTopicSlug.mockResolvedValueOnce([
      buildThought('a-cool-slug'),
      buildThought('a-ca-slug'),
      buildThought('a-rails-slug'),
      buildThought('a-another-slug'),
      buildThought('a-sweet-slug')
    ])
    await act(async () => await setTags('a-slug', ['Clean Architecture']))
    expect(relatedContent.length).toEqual(4)
  })
})
