import { fetchTopicByName } from './fetchTopic'
import { allTopics } from './topicGateway'

describe('fetchTopicByName()', () => {
  allTopics().forEach((topic) => {
    test(`returns topic for ${topic.name}`, () => {
      expect(fetchTopicByName(topic.name)).toBeDefined()
    })
  })

  test(`throws when topic does not exist`, () => {
    expect(() => findTopicByName('doesnt-exist')).toThrow()
  })
})
