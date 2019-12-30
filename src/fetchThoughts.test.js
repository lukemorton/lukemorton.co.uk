import fetch from 'cross-fetch'
import {
  fetchOneThoughtBySlug,
  fetchRecentThoughts,
  fetchAllThoughts,
  fetchThoughtsByTopicSlug
} from './fetchThoughts'

jest.mock('cross-fetch')

describe('listThoughts', () => {
  let jsonResponse

  beforeEach(() => {
    fetch.mockResolvedValue({
      json () { return jsonResponse }
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
      await fetchOneThoughtBySlug(null, '2017-01-17-lightweight-docker-images-for-go')
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/index.json')
      )
    })

    test('it returns thought with matching slug', async () => {
      const expectedThought = { slug: 'a-slug' }

      jsonResponse = {
        [expectedThought.slug]: expectedThought
      }

      const t = await fetchOneThoughtBySlug(null, expectedThought.slug)
      expect(t).toBe(expectedThought)
    })
  })

  describe('.fetchRecentThoughts()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchRecentThoughts(null)
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/recent.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchRecentThoughts(null)
      expect(response).toBe(jsonResponse)
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
        expect.stringContaining('/dist/thoughts/archive.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchAllThoughts(null)
      expect(response).toBe(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchAllThoughts(null)
      expect(response).toEqual([])
    })
  })

  describe('.fetchThoughtsByTopicSlug()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fetch', async () => {
      await fetchThoughtsByTopicSlug(null, 'rails')
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/topics/rails.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await fetchThoughtsByTopicSlug(null, 'rails')
      expect(response).toBe(jsonResponse)
    })

    test('it returns empty array when json response is null', async () => {
      jsonResponse = null
      const response = await fetchThoughtsByTopicSlug(null, 'rails')
      expect(response).toEqual([])
    })

    test('it raises exception if topic doesnt exist', async () => {
      expect(fetchThoughtsByTopicSlug(null, 'jimbob')).rejects.toThrow()
    })
  })

  describe('passing request object to fetch methods', () => {
    test('it uses requst object to build URL', async () => {
      const response = {
        headers: {
          host: 'lukemorton.co.uk'
        }
      }
      await fetchThoughtsByTopicSlug(response, 'rails')
      expect(fetch).toHaveBeenCalledWith(
        'https://lukemorton.co.uk/dist/thoughts/topics/rails.json'
      )
    })
  })

  describe('passing window.location object to fetch methods', () => {
    const { location } = window

    beforeAll(() => {
      delete window.location
      window.location = { hostname: 'localhost' }
    })

    afterAll(() => {
      window.location = location
    })

    test('it uses request object to build URL', async () => {
      await fetchThoughtsByTopicSlug(null, 'rails')
      expect(fetch).toHaveBeenCalledWith(
        'http://lvh.me:3000/dist/thoughts/topics/rails.json'
      )
    })
  })
})
