import fetch from 'cross-fetch'
import {
  fetchOneThoughtBySlug,
  fetchRecentThoughts,
  fetchAllThoughts,
  fetchThoughtsByTopicSlug,
  fetchThoughtsByTopicName,
  NoThoughtFoundBySlugError,
  NoThoughtsFoundByTopicNameError,
  NoThoughtsFoundByTopicSlugError,
} from '../browserFactory'

jest.mock('cross-fetch')

describe('listThoughts', () => {
  let jsonResponse

  beforeEach(() => {
    fetch.mockResolvedValue({
      json() {
        return jsonResponse
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('.fetchOneThoughtBySlug()', () => {
    beforeEach(() => {
      jsonResponse = {} // thought returns object rather than array
    })

    test('it uses fetch', async () => {
      const expectedThought = {
        slug: 'lightweight-docker-images-for-go',
      }

      jsonResponse = {
        '2017-01-17-lightweight-docker-images-for-go': {
          slug: '2017-01-17-lightweight-docker-images-for-go',
        },
      }

      await fetchOneThoughtBySlug(null, expectedThought.slug)
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/index.json')
      )
    })

    test('it returns thought with matching slug', async () => {
      const expectedThought = { slug: 'a-slug' }

      jsonResponse = {
        '2012-01-01-a-slug': { slug: '2012-01-01-a-slug' },
      }

      const t = await fetchOneThoughtBySlug(null, expectedThought.slug)
      expect(t).toEqual(expectedThought)
    })

    test('it raises exception if thought doesnt exist', async () => {
      expect(fetchOneThoughtBySlug(null, 'doesnt-exist')).rejects.toThrow(
        NoThoughtFoundBySlugError
      )
    })
  })

  describe('.fetchRecentThoughts()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchRecentThoughts(null)
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/recent.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchRecentThoughts(null)
      expect(response).toEqual(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchRecentThoughts(null)
      expect(response).toEqual([])
    })
  })

  describe('.fetchAllThoughts()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchAllThoughts(null)
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/archive.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchAllThoughts(null)
      expect(response).toEqual(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchAllThoughts(null)
      expect(response).toEqual([])
    })
  })

  describe('.fetchThoughtsByTopicName()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchThoughtsByTopicName(null, 'Ruby on Rails')
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/topics/rails.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchThoughtsByTopicName(null, 'Ruby on Rails')
      expect(response).toEqual(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchThoughtsByTopicName(null, 'Ruby on Rails')
      expect(response).toEqual([])
    })

    test('it raises exception if topic doesnt exist', async () => {
      expect(fetchThoughtsByTopicName(null, 'Jim Bob')).rejects.toThrow(
        NoThoughtsFoundByTopicNameError
      )
    })
  })

  describe('.fetchThoughtsByTopicSlug()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchThoughtsByTopicSlug(null, 'rails')
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/topics/rails.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchThoughtsByTopicSlug(null, 'rails')
      expect(response).toEqual(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchThoughtsByTopicSlug(null, 'rails')
      expect(response).toEqual([])
    })

    test('it raises exception if topic doesnt exist', async () => {
      expect(fetchThoughtsByTopicSlug(null, 'jimbob')).rejects.toThrow(
        NoThoughtsFoundByTopicSlugError
      )
    })
  })

  describe('passing origin to fetch methods', () => {
    test('it uses requst object to build URL', async () => {
      await fetchThoughtsByTopicSlug('https://lukemorton.tech', 'rails')
      expect(fetch).toHaveBeenCalledWith(
        'https://lukemorton.tech/dist/src/content/articles/topics/rails.json'
      )
    })
  })
})
