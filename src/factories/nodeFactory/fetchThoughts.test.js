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
      const t = await fetchOneThoughtBySlug({ slug: expectedThought.slug })
      expect(t).toEqual(expectedThought)
    })

    it('raises exception if thought doesnt exist', async () => {
      expect(fetchOneThoughtBySlug({ slug: 'doesnt-exist' })).rejects.toThrow(
        NoThoughtFoundBySlugError
      )
    })
  })

  describe('.fetchRecentThoughts()', () => {
    it('returns list of thoughts', async () => {
      const response = await fetchRecentThoughts()
      expect(response.length).toEqual(1)
    })
  })

  describe('.fetchAllThoughts()', () => {
    it('returns list of thoughts', async () => {
      const response = await fetchAllThoughts()
      expect(response.length).toEqual(1)
    })
  })

  describe('.fetchThoughtsByTopicName()', () => {
    it('returns list of thoughts', async () => {
      const response = await fetchThoughtsByTopicName({ name: 'Ruby on Rails' })
      expect(response.length).toEqual(1)
    })

    it('raises exception if topic doesnt exist', async () => {
      expect(fetchThoughtsByTopicName({ name: 'Jim Bob' })).rejects.toThrow(
        NoThoughtsFoundByTopicNameError
      )
    })
  })

  describe('.fetchThoughtsByTopicSlug()', () => {
    it('returns list of thoughts', async () => {
      const response = await fetchThoughtsByTopicSlug({ slug: 'rails' })
      expect(response.length).toEqual(1)
    })

    it('raises exception if topic doesnt exist', async () => {
      expect(fetchThoughtsByTopicSlug({ slug: 'jimbob' })).rejects.toThrow(
        NoThoughtsFoundByTopicSlugError
      )
    })
  })
})
