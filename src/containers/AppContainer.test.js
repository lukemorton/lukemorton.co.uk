import AppContainer from './AppContainer'

describe('AppContainer', () => {
  let container

  beforeEach(() => {
    container = new AppContainer()
  })

  it('returns fetchAllThoughts', () => {
    expect(container.getFetchAllThoughts()).toBeDefined()
  })

  it('returns fetchAllTopics', () => {
    expect(container.getFetchAllTopics()).toBeDefined()
  })
})
