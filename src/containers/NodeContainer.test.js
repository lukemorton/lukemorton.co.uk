import NodeContainer from './NodeContainer'

describe('NodeContainer', () => {
  let container

  beforeEach(() => {
    container = new NodeContainer()
  })

  it('returns fetchAllThoughts', () => {
    expect(container.getFetchAllThoughts()).toBeDefined()
  })

  it('returns fetchAllTopics', () => {
    expect(container.getFetchAllTopics()).toBeDefined()
  })
})
