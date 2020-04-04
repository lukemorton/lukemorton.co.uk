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
  const loadJsonPath = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('.fetchOneThoughtBySlug()', () => {
    test('it uses loadJsonPath', async () => {
      const expectedThought = {
        slug: '2017-01-17-lightweight-docker-images-for-go',
      }

      loadJsonPath.mockReturnValue({
        [expectedThought.slug]: expectedThought,
      })

      await fetchOneThoughtBySlug(loadJsonPath, expectedThought.slug)
      expect(loadJsonPath).toHaveBeenCalledWith(
        expect.stringContaining('/dist/content/articles/index.json')
      )
    })

    test('it returns thought with matching slug', async () => {
      const expectedThought = { slug: 'a-slug' }

      loadJsonPath.mockReturnValue({
        [expectedThought.slug]: expectedThought,
      })

      const t = await fetchOneThoughtBySlug(loadJsonPath, expectedThought.slug)
      expect(t).toBe(expectedThought)
    })

    test('it raises exception if thought doesnt exist', async () => {
      loadJsonPath.mockReturnValue({})
      expect(
        fetchOneThoughtBySlug(loadJsonPath, 'doesnt-exist')
      ).rejects.toThrow(NoThoughtFoundBySlugError)
    })
  })

  describe('.fetchRecentThoughts()', () => {
    test('it uses loadJsonPath', async () => {
      loadJsonPath.mockReturnValue([])
      await fetchRecentThoughts(loadJsonPath)
      expect(loadJsonPath).toHaveBeenCalledWith(
        expect.stringContaining('/dist/content/articles/recent.json')
      )
    })

    test('it returns JSON response', async () => {
      loadJsonPath.mockReturnValue([])
      const response = await fetchRecentThoughts(loadJsonPath)
      expect(response).toEqual([])
    })

    test('it returns empty array when json response is null', async () => {
      loadJsonPath.mockReturnValue(null)
      const response = await fetchRecentThoughts(loadJsonPath)
      expect(response).toEqual([])
    })
  })

  describe('.fetchAllThoughts()', () => {
    test('it uses loadJsonPath', async () => {
      loadJsonPath.mockReturnValue([])
      await fetchAllThoughts(loadJsonPath)
      expect(loadJsonPath).toHaveBeenCalledWith(
        expect.stringContaining('/dist/content/articles/archive.json')
      )
    })

    test('it returns JSON response', async () => {
      loadJsonPath.mockReturnValue([])
      const response = await fetchAllThoughts(loadJsonPath)
      expect(response).toEqual([])
    })

    test('it returns empty array when json response is null', async () => {
      loadJsonPath.mockReturnValue(null)
      const response = await fetchAllThoughts(loadJsonPath)
      expect(response).toEqual([])
    })
  })

  describe('.fetchThoughtsByTopicName()', () => {
    let findTopicByName = () => {
      return {
        name: 'Ruby on Rails',
        slug: 'rails',
      }
    }

    test('it uses loadJsonPath', async () => {
      loadJsonPath.mockReturnValue([])
      await fetchThoughtsByTopicName(
        loadJsonPath,
        findTopicByName,
        'Ruby on Rails'
      )
      expect(loadJsonPath).toHaveBeenCalledWith(
        expect.stringContaining('/dist/content/articles/topics/rails.json')
      )
    })

    test('it returns JSON response', async () => {
      loadJsonPath.mockReturnValue([])
      const response = await fetchThoughtsByTopicName(
        loadJsonPath,
        findTopicByName,
        'Ruby on Rails'
      )
      expect(response).toEqual([])
    })

    test('it returns empty array when json response is null', async () => {
      loadJsonPath.mockReturnValue(null)
      const response = await fetchThoughtsByTopicName(
        loadJsonPath,
        findTopicByName,
        'Ruby on Rails'
      )
      expect(response).toEqual([])
    })

    test('it raises exception if topic doesnt exist', async () => {
      loadJsonPath.mockReturnValue([])
      findTopicByName = () => null
      expect(
        fetchThoughtsByTopicName(loadJsonPath, findTopicByName, 'Jim Bob')
      ).rejects.toThrow(NoThoughtsFoundByTopicNameError)
    })
  })

  describe('.fetchThoughtsByTopicSlug()', () => {
    let topicSlugExists = () => true

    test('it uses loadJsonPath', async () => {
      loadJsonPath.mockReturnValue([])
      await fetchThoughtsByTopicSlug(loadJsonPath, topicSlugExists, 'rails')
      expect(loadJsonPath).toHaveBeenCalledWith(
        expect.stringContaining('/dist/content/articles/topics/rails.json')
      )
    })

    test('it returns JSON response', async () => {
      loadJsonPath.mockReturnValue([])
      const response = await fetchThoughtsByTopicSlug(
        loadJsonPath,
        topicSlugExists,
        'rails'
      )
      expect(response).toEqual([])
    })

    test('it returns empty array when json response is null', async () => {
      loadJsonPath.mockReturnValue(null)
      const response = await fetchThoughtsByTopicSlug(
        loadJsonPath,
        topicSlugExists,
        'rails'
      )
      expect(response).toEqual([])
    })

    test('it raises exception if topic doesnt exist', async () => {
      loadJsonPath.mockReturnValue([])
      topicSlugExists = () => false
      expect(
        fetchThoughtsByTopicSlug(loadJsonPath, topicSlugExists, 'jimbob')
      ).rejects.toThrow(NoThoughtsFoundByTopicSlugError)
    })
  })
})
