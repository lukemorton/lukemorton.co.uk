import {
  fetchOneThoughtBySlug,
  fetchRecentThoughts,
  fetchAllThoughts,
  fetchThoughtsByTopicSlug,
  fetchThoughtsByTopicName,
  NoThoughtFoundBySlugError,
  NoThoughtsFoundByTopicNameError,
  NoThoughtsFoundByTopicSlugError,
} from '../nodeFactory'

describe('listThoughts', () => {
  describe('.fetchOneThoughtBySlug()', () => {
    it('returns thought with matching slug', async () => {
      const expectedThought = {
        slug: 'lightweight-docker-images-for-go',
      }
      const t = await fetchOneThoughtBySlug(null, expectedThought.slug)
      expect(t).toEqual(expectedThought)
    })

    it('raises exception if thought doesnt exist', async () => {
      expect(fetchOneThoughtBySlug(null, 'doesnt-exist')).rejects.toThrow(
        NoThoughtFoundBySlugError
      )
    })
  })

  describe('.fetchRecentThoughts()', () => {
    it('returns list of thoughts', async () => {
      const response = await fetchRecentThoughts(null)
      expect(response.length).toEqual(1)
    })
  })

  describe('.fetchAllThoughts()', () => {
    it('returns list of thoughts', async () => {
      const response = await fetchAllThoughts(null)
      expect(response.length).toEqual(1)
    })
  })

  describe('.fetchThoughtsByTopicName()', () => {
    it('returns list of thoughts', async () => {
      const response = await fetchThoughtsByTopicName(null, 'Ruby on Rails')
      expect(response.length).toEqual(1)
    })

    it('raises exception if topic doesnt exist', async () => {
      expect(fetchThoughtsByTopicName(null, 'Jim Bob')).rejects.toThrow(
        NoThoughtsFoundByTopicNameError
      )
    })
  })

  describe('.fetchThoughtsByTopicSlug()', () => {
    it('returns list of thoughts', async () => {
      const response = await fetchThoughtsByTopicSlug(null, 'rails')
      expect(response.length).toEqual(1)
    })

    it('raises exception if topic doesnt exist', async () => {
      expect(fetchThoughtsByTopicSlug(null, 'jimbob')).rejects.toThrow(
        NoThoughtsFoundByTopicSlugError
      )
    })
  })
})
