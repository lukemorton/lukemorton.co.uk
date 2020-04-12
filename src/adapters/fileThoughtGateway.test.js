import { loadJsonPath } from './fileThoughtGateway'

describe('fileThoughtGateway', () => {
  describe('.loadJsonPath()', () => {
    it('returns list', async () => {
      const data = await loadJsonPath('dist/src/content/articles/archive')
      expect(data.length).toEqual(1)
    })
  })
})
