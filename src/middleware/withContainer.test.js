import withContainer from './withContainer'
import AppContainer from '../containers/AppContainer'

describe('withContainer', () => {
  it('passes container in ctx', () => {
    const handler = withContainer((req, res, ctx) => {
      expect(ctx.container).toBeInstanceOf(AppContainer)
    })
    expect.assertions(1)
    handler()
  })

  it('does not replace container in ctx', () => {
    const mockContainer = 'mock'

    const handler = withContainer((req, res, ctx) => {
      expect(ctx.container).toBe(mockContainer)
    })

    expect.assertions(1)
    handler({}, {}, { container: mockContainer })
  })
})
