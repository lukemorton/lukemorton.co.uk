import fetch from 'cross-fetch'
import { thought, recentThoughts, thoughtsArchive, topic } from './listThoughts'

jest.mock('cross-fetch')

describe('listThoughts', () => {
  let jsonResponse = []

  beforeEach(() => {
    fetch.mockResolvedValue({
      json () { return jsonResponse }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('.thought()', () => {
    beforeEach(() => {
      jsonResponse = {} // thought returns object rather than array
    })

    test('it uses fetch', async () => {
      await thought(null, '2017-01-17-lightweight-docker-images-for-go')
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/index.json')
      )
    })

    test('it returns thought with matching slug', async () => {
      const expectedThought = { slug: 'a-slug' }

      jsonResponse = {
        [expectedThought.slug]: expectedThought
      }

      const t = await thought(null, expectedThought.slug)
      expect(t).toBe(expectedThought)
    })
  })

  describe('.recentThoughts()', () => {
    test('it uses fetch', async () => {
      await recentThoughts(null)
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/latestThoughts.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await recentThoughts(null)
      expect(response).toBe(jsonResponse)
    })
  })

  describe('.thoughtsArchive()', () => {
    test('it uses fetch', async () => {
      await thoughtsArchive(null)
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/thoughtsArchive.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await thoughtsArchive(null)
      expect(response).toBe(jsonResponse)
    })
  })

  describe('.topic()', () => {
    test('it uses fetch', async () => {
      await topic(null, 'rails')
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/topics/rails.json')
      )
    })

    test('it returns JSON response', async () => {
      const response = await topic(null, 'rails')
      expect(response).toBe(jsonResponse)
    })
  })

  describe('passing request object to fetch methods', () => {
    test('it uses requst object to build URL', async () => {
      const response = {
        headers: {
          host: 'lukemorton.co.uk'
        }
      }
      await topic(response, 'rails')
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
      await topic(null, 'rails')
      expect(fetch).toHaveBeenCalledWith(
        'http://lvh.me:3000/dist/thoughts/topics/rails.json'
      )
    })
  })
})
