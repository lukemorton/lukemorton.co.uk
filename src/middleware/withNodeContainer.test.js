import withNodeContainer from './withNodeContainer'
import NodeContainer from '../containers/NodeContainer'

describe('withNodeContainer', () => {
  it('passes container in ctx', () => {
    const handler = withNodeContainer((req, res, ctx) => {
      expect(ctx.container).toBeInstanceOf(NodeContainer)
    })
    expect.assertions(1)
    handler()
  })

  it('does not replace container in ctx', () => {
    const mockContainer = 'mock'

    const handler = withNodeContainer((req, res, ctx) => {
      expect(ctx.container).toBe(mockContainer)
    })

    expect.assertions(1)
    handler({}, {}, { container: mockContainer })
  })
})
