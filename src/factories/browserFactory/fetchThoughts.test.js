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

      await fetchOneThoughtBySlug(expectedThought)
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/index.json')
      )
    })

    test('it returns thought with matching slug', async () => {
      const expectedThought = { slug: 'a-slug' }

      jsonResponse = {
        '2012-01-01-a-slug': { slug: '2012-01-01-a-slug' },
      }

      const t = await fetchOneThoughtBySlug(expectedThought)
      expect(t).toEqual(expectedThought)
    })

    test('it raises exception if thought doesnt exist', async () => {
      expect(fetchOneThoughtBySlug({ slug: 'doesnt-exist' })).rejects.toThrow(
        NoThoughtFoundBySlugError
      )
    })
  })

  describe('.fetchRecentThoughts()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchRecentThoughts()
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/recent.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchRecentThoughts()
      expect(response).toEqual(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchRecentThoughts()
      expect(response).toEqual([])
    })
  })

  describe('.fetchAllThoughts()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchAllThoughts()
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/archive.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchAllThoughts()
      expect(response).toEqual(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchAllThoughts()
      expect(response).toEqual([])
    })
  })

  describe('.fetchThoughtsByTopicName()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchThoughtsByTopicName({ name: 'Ruby on Rails' })
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/topics/rails.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchThoughtsByTopicName({ name: 'Ruby on Rails' })
      expect(response).toEqual(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchThoughtsByTopicName({ name: 'Ruby on Rails' })
      expect(response).toEqual([])
    })

    test('it raises exception if topic doesnt exist', async () => {
      expect(fetchThoughtsByTopicName({ name: 'Jim Bob' })).rejects.toThrow(
        NoThoughtsFoundByTopicNameError
      )
    })
  })

  describe('.fetchThoughtsByTopicSlug()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchThoughtsByTopicSlug({ slug: 'rails' })
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/src/content/articles/topics/rails.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchThoughtsByTopicSlug({ slug: 'rails' })
      expect(response).toEqual(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchThoughtsByTopicSlug({ slug: 'rails' })
      expect(response).toEqual([])
    })

    test('it raises exception if topic doesnt exist', async () => {
      expect(fetchThoughtsByTopicSlug({ slug: 'jimbob' })).rejects.toThrow(
        NoThoughtsFoundByTopicSlugError
      )
    })
  })

  describe('passing origin to fetch methods', () => {
    test('it uses requst object to build URL', async () => {
      await fetchThoughtsByTopicSlug({
        slug: 'rails',
        origin: 'https://lukemorton.tech',
      })
      expect(fetch).toHaveBeenCalledWith(
        'https://lukemorton.tech/dist/src/content/articles/topics/rails.json'
      )
    })
  })
})
