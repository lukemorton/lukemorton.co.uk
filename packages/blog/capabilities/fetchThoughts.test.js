import {
  fetchOneThoughtBySlug,
  fetchRecentThoughts,
  fetchAllThoughts,
  fetchThoughtsByTopicSlug,
  fetchThoughtsByTopicName,
  NoThoughtFoundBySlugError,
  NoThoughtsFoundByTopicNameError,
  NoThoughtsFoundByTopicSlugError,
} from './fetchThoughts'

describe('fetchThoughts', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('.fetchOneThoughtBySlug()', () => {
    const thoughtsIndex = jest.fn()

    test('it uses thoughtsIndex', async () => {
      const expectedThought = {
        slug: 'lightweight-docker-images-for-go',
      }

      thoughtsIndex.mockReturnValue({
        '2017-01-17-lightweight-docker-images-for-go': {
          slug: '2017-01-17-lightweight-docker-images-for-go',
        },
      })

      await fetchOneThoughtBySlug({ thoughtsIndex, slug: expectedThought.slug })
      expect(thoughtsIndex).toHaveBeenCalledWith()
    })

    test('it returns thought with matching slug', async () => {
      const expectedThought = { slug: 'a-slug' }

      thoughtsIndex.mockReturnValue({
        '2017-01-17-a-slug': { slug: '2017-01-17-a-slug' },
      })

      const t = await fetchOneThoughtBySlug({
        thoughtsIndex,
        slug: expectedThought.slug,
      })
      expect(t).toEqual(expectedThought)
    })

    test('it raises exception if thought doesnt exist', async () => {
      thoughtsIndex.mockReturnValue({})
      expect(
        fetchOneThoughtBySlug({ thoughtsIndex, slug: 'doesnt-exist' })
      ).rejects.toThrow(NoThoughtFoundBySlugError)
    })
  })

  describe('.fetchRecentThoughts()', () => {
    const recentThoughts = jest.fn()

    test('it uses recentThoughts', async () => {
      recentThoughts.mockReturnValue([])
      await fetchRecentThoughts({ recentThoughts })
      expect(recentThoughts).toHaveBeenCalledWith()
    })

    test('it returns JSON response', async () => {
      recentThoughts.mockReturnValue([])
      const response = await fetchRecentThoughts({ recentThoughts })
      expect(response).toEqual([])
    })

    test('it returns empty array when json response is null', async () => {
      recentThoughts.mockReturnValue(null)
      const response = await fetchRecentThoughts({ recentThoughts })
      expect(response).toEqual([])
    })
  })

  describe('.fetchAllThoughts()', () => {
    const allThoughts = jest.fn()

    test('it uses allThoughts', async () => {
      allThoughts.mockReturnValue([])
      await fetchAllThoughts({ allThoughts })
      expect(allThoughts).toHaveBeenCalledWith()
    })

    test('it returns JSON response', async () => {
      allThoughts.mockReturnValue([])
      const response = await fetchAllThoughts({ allThoughts })
      expect(response).toEqual([])
    })

    test('it returns empty array when json response is null', async () => {
      allThoughts.mockReturnValue(null)
      const response = await fetchAllThoughts({ allThoughts })
      expect(response).toEqual([])
    })
  })

  describe('.fetchThoughtsByTopicName()', () => {
    const thoughtsByTopicSlug = jest.fn()

    let findTopicByName = () => {
      return {
        name: 'Ruby on Rails',
        slug: 'rails',
      }
    }

    test('it uses thoughtsByTopicSlug', async () => {
      thoughtsByTopicSlug.mockReturnValue([])
      await fetchThoughtsByTopicName({
        thoughtsByTopicSlug,
        findTopicByName,
        name: 'Ruby on Rails',
      })
      expect(thoughtsByTopicSlug).toHaveBeenCalledWith('rails')
    })

    test('it returns JSON response', async () => {
      thoughtsByTopicSlug.mockReturnValue([])
      const response = await fetchThoughtsByTopicName({
        thoughtsByTopicSlug,
        findTopicByName,
        name: 'Ruby on Rails',
      })
      expect(response).toEqual([])
    })

    test('it returns empty array when json response is null', async () => {
      thoughtsByTopicSlug.mockReturnValue(null)
      const response = await fetchThoughtsByTopicName({
        thoughtsByTopicSlug,
        findTopicByName,
        name: 'Ruby on Rails',
      })
      expect(response).toEqual([])
    })

    test('it raises exception if topic doesnt exist', async () => {
      thoughtsByTopicSlug.mockReturnValue([])
      findTopicByName = () => null
      expect(
        fetchThoughtsByTopicName({
          thoughtsByTopicSlug,
          findTopicByName,
          name: 'Jim Bob',
        })
      ).rejects.toThrow(NoThoughtsFoundByTopicNameError)
    })
  })

  describe('.fetchThoughtsByTopicSlug()', () => {
    const thoughtsByTopicSlug = jest.fn()
    let topicSlugExists = () => true

    test('it uses thoughtsByTopicSlug', async () => {
      thoughtsByTopicSlug.mockReturnValue([])
      await fetchThoughtsByTopicSlug({
        thoughtsByTopicSlug,
        topicSlugExists,
        slug: 'rails',
      })
      expect(thoughtsByTopicSlug).toHaveBeenCalledWith('rails')
    })

    test('it returns JSON response', async () => {
      thoughtsByTopicSlug.mockReturnValue([])
      const response = await fetchThoughtsByTopicSlug({
        thoughtsByTopicSlug,
        topicSlugExists,
        slug: 'rails',
      })
      expect(response).toEqual([])
    })

    test('it returns empty array when json response is null', async () => {
      thoughtsByTopicSlug.mockReturnValue(null)
      const response = await fetchThoughtsByTopicSlug({
        thoughtsByTopicSlug,
        topicSlugExists,
        slug: 'rails',
      })
      expect(response).toEqual([])
    })

    test('it raises exception if topic doesnt exist', async () => {
      thoughtsByTopicSlug.mockReturnValue([])
      topicSlugExists = () => false
      expect(
        fetchThoughtsByTopicSlug({
          thoughtsByTopicSlug,
          topicSlugExists,
          slug: 'jimbob',
        })
      ).rejects.toThrow(NoThoughtsFoundByTopicSlugError)
    })
  })
})
