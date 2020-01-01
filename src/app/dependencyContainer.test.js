import * as appFactory from './factory'
import dependencyContainer from './dependencyContainer'

describe('dependencyContainer', () => {
  test('returns dependencies', async () => {
    expect(await dependencyContainer()).toEqual(appFactory)
  })
})
