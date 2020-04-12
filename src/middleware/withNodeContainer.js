import NodeContainer from '../containers/NodeContainer'

export default (handler) => {
  return (req, res, ctx) => {
    ctx = ctx || {}
    ctx.container = ctx.container || new NodeContainer()
    return handler(req, res, ctx)
  }
}
