import * as nodeFactory from '../factories/nodeFactory'

export default class NodeContainer {
  getFetchAllThoughts() {
    return nodeFactory.fetchAllThoughts
  }
}
