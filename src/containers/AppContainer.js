import * as nodeFactory from '../factories/nodeFactory'

export default class AppContainer {
  getFetchAllThoughts() {
    return nodeFactory.fetchAllThoughts
  }

  getFetchAllTopics() {
    return nodeFactory.fetchAllTopics
  }
}
