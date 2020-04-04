import fetch from 'cross-fetch'
import { loadJsonPath } from './httpThoughtGateway'

jest.mock('cross-fetch')

describe('httpThoughtGateway', () => {
  describe('.loadJsonPath()', () => {
    const origin = TEST_ORIGIN

    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation()

      fetch.mockResolvedValue({
        json() {
          return {}
        },
      })
    })

    afterEach(() => {
      jest.resetAllMocks()
      jest.restoreAllMocks()
    })

    test('it uses fetch', async () => {
      await loadJsonPath(origin, '/dist/content/articles/index.json')
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/content/articles/index.json')
      )
    })

    test('it uses prepends origin', async () => {
      await loadJsonPath(origin, '/dist/content/articles/index.json')
      expect(fetch).toHaveBeenCalledWith(
        `${origin}/dist/content/articles/index.json`
      )
    })

    describe('using window.location object to fetch methods', () => {
      let location

      beforeAll(() => {
        location = window.location
        delete window.location
      })

      afterAll(() => {
        window.location = location
      })

      test('it uses window.location for origin if null', async () => {
        window.location = { hostname: 'lukemorton.tech' }
        await loadJsonPath(null, '/dist/content/articles/index.json')
        expect(fetch).toHaveBeenCalledWith(
          'https://lukemorton.tech/dist/content/articles/index.json'
        )
      })

      test('it replaces localhost with lvh.me', async () => {
        window.location = { hostname: 'localhost' }
        await loadJsonPath(null, '/dist/content/articles/index.json')
        expect(fetch).toHaveBeenCalledWith(
          'http://lvh.me:3000/dist/content/articles/index.json'
        )
      })
    })

    test('it throws exception', async () => {
      const err = new Error('Uh oh')
      fetch.mockRejectedValueOnce(err)
      await expect(
        loadJsonPath(origin, '/dist/content/articles/index.json')
      ).rejects.toThrow(err)
    })

    test('it logs exception', async () => {
      const err = new Error('Uh oh')
      fetch.mockRejectedValueOnce(err)
      try {
        await loadJsonPath(origin, '/dist/content/articles/index.json')
      } catch {}
      expect(console.error).toHaveBeenCalled()
    })
  })
})
