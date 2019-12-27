import { act } from 'react-dom/test-utils'
import useRelatedContent from './useRelatedContent'
import testHook from '../test/support/testHook'
import { fetchThoughtsByTopic } from './fetchThoughts'

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

    fetchThoughtsByTopic.mockResolvedValue([])
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
    await act(async () => await setTags('a-slug', ['Clean Architecture']))
    expect(fetchThoughtsByTopic).toHaveBeenCalledWith(null, 'cleanArchitecture')
  })

  test('fetches related content for multiple tags', async () => {
    await act(async () => await setTags('a-slug', ['Clean Architecture', 'Ruby on Rails']))
    expect(fetchThoughtsByTopic).toHaveBeenCalledWith(null, 'cleanArchitecture')
    expect(fetchThoughtsByTopic).toHaveBeenCalledWith(null, 'rails')
  })

  test('adds related content for tag', async () => {
    fetchThoughtsByTopic.mockResolvedValueOnce([
      buildThought('a-ca-slug')
    ])
    await act(async () => await setTags('a-slug', ['Clean Architecture']))
    expect(relatedContent.length).toBe(1)
  })

  test('adds related content for tag', async () => {
    fetchThoughtsByTopic.mockResolvedValueOnce([
      buildThought('a-ca-slug')
    ])
    fetchThoughtsByTopic.mockResolvedValueOnce([
      buildThought('a-rails-slug')
    ])
    await act(async () => await setTags('a-slug', ['Clean Architecture', 'Ruby on Rails']))
    expect(relatedContent.length).toBe(2)
  })

  test('excludes current slug from related content', async () => {
    fetchThoughtsByTopic.mockResolvedValueOnce([
      buildThought('a-slug'),
      buildThought('a-ca-slug')
    ])
    fetchThoughtsByTopic.mockResolvedValueOnce([
      buildThought('a-rails-slug')
    ])
    await act(async () => await setTags('a-slug', ['Clean Architecture', 'Ruby on Rails']))
    expect(relatedContent.length).toBe(2)
  })

  test('sorts by publishedAt desc', async () => {
    const expectedFirst = buildThought('a-rails-slug', '2019-12-20T00:00:00.000+00:00')
    const expectedSecond = buildThought('a-ca-slug', '2018-12-20T00:00:00.000+00:00')
    fetchThoughtsByTopic.mockResolvedValueOnce([expectedSecond])
    fetchThoughtsByTopic.mockResolvedValueOnce([expectedFirst])

    await act(async () => await setTags('a-slug', ['Clean Architecture', 'Ruby on Rails']))

    expect(relatedContent).toEqual([expectedFirst, expectedSecond])
  })

  test('excludes duplicates from related content', async () => {
    fetchThoughtsByTopic.mockResolvedValueOnce([
      buildThought('a-slug'),
      buildThought('a-ca-slug')
    ])
    fetchThoughtsByTopic.mockResolvedValueOnce([
      buildThought('a-ca-slug'),
      buildThought('a-rails-slug')
    ])
    await act(async () => await setTags('a-slug', ['Clean Architecture', 'Ruby on Rails']))
    expect(relatedContent.length).toBe(2)
  })

  test('relatedContent max of 4', async () => {
    fetchThoughtsByTopic.mockResolvedValueOnce([
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
