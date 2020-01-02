import fetch from 'cross-fetch'
import { loadJsonPath } from './httpThoughtGateway'

jest.mock('cross-fetch')

describe('httpThoughtGateway', () => {
  describe('.loadJsonPath()', () => {
    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation()

      fetch.mockResolvedValue({
        json () { return {} }
      })
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    test('it uses fetch', async () => {
      await loadJsonPath(null, '/dist/thoughts/index.json')
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/dist/thoughts/index.json')
      )
    })

    test('it throws exception', async () => {
      const err = new Error('Uh oh')
      fetch.mockRejectedValueOnce(err)
      await expect(loadJsonPath(null, '/dist/thoughts/index.json')).rejects.toThrow(err)
    })

    test('it logs exception', async () => {
      const err = new Error('Uh oh')
      fetch.mockRejectedValueOnce(err)
      try { await loadJsonPath(null, '/dist/thoughts/index.json') } catch {}
      expect(console.error).toHaveBeenCalled()
    })
  })
})
