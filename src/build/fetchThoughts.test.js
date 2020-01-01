import fs from 'fs'
import {
  fetchOneThoughtBySlug,
  fetchRecentThoughts,
  fetchAllThoughts,
  fetchThoughtsByTopicSlug,
  fetchThoughtsByTopicName,
  NoThoughtFoundBySlugError,
  NoThoughtsFoundByTopicNameError,
  NoThoughtsFoundByTopicSlugError
} from './factory'

jest.mock('fs')

describe('listThoughts', () => {
  let jsonResponse

  beforeEach(() => {
    fs.readFileSync.mockImplementation(_ => JSON.stringify(jsonResponse))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('.fetchOneThoughtBySlug()', () => {
    beforeEach(() => {
      jsonResponse = {} // thought returns object rather than array
    })

    test('it uses fs.readFileSync', async () => {
      const expectedThought = { slug: '2017-01-17-lightweight-docker-images-for-go' }

      jsonResponse = {
        [expectedThought.slug]: expectedThought
      }

      await fetchOneThoughtBySlug(null, expectedThought.slug)
      expect(fs.readFileSync).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/index.json')
      )
    })

    test('it returns thought with matching slug', async () => {
      const expectedThought = { slug: 'a-slug' }

      jsonResponse = {
        [expectedThought.slug]: expectedThought
      }

      const t = await fetchOneThoughtBySlug(null, expectedThought.slug)
      expect(t).toEqual(expectedThought)
    })

    test('it raises exception if thought doesnt exist', async () => {
      expect(fetchOneThoughtBySlug(null, 'doesnt-exist')).rejects.toThrow(NoThoughtFoundBySlugError)
    })
  })

  describe('.fetchRecentThoughts()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fs.readFileSync', async () => {
      await fetchRecentThoughts(null)
      expect(fs.readFileSync).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/recent.json')
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

    test('it uses fs.readFileSync', async () => {
      await fetchAllThoughts(null)
      expect(fs.readFileSync).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/archive.json')
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

    test('it uses fs.readFileSync', async () => {
      await fetchThoughtsByTopicName(null, 'Ruby on Rails')
      expect(fs.readFileSync).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/topics/rails.json')
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
      expect(fetchThoughtsByTopicName(null, 'Jim Bob')).rejects.toThrow(NoThoughtsFoundByTopicNameError)
    })
  })

  describe('.fetchThoughtsByTopicSlug()', () => {
    beforeEach(() => {
      jsonResponse = []
    })

    test('it uses fs.readFileSync', async () => {
      await fetchThoughtsByTopicSlug(null, 'rails')
      expect(fs.readFileSync).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/topics/rails.json')
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
      expect(fetchThoughtsByTopicSlug(null, 'jimbob')).rejects.toThrow(NoThoughtsFoundByTopicSlugError)
    })
  })
})
