import fs from 'fs'
import { allTopics, findTopicByName, findTopicBySlug, topicSlugExists } from './topicGateway'

describe('topicGateway.all()', () => {
  allTopics().forEach((topic) => {
    const fullFilePath = `${__dirname}/../../public${topic.path}`

    test(`${topic.name} params`, () => {
      expect(topic.name).toBeDefined()
      expect(topic.slug).toBeDefined()
      expect(topic.path).toBeDefined()
    })

    test(`${topic.name} file exists (${fullFilePath})`, () => {
      expect(fs.existsSync(fullFilePath)).toBe(true)
    })
  })
})

describe('topicGateway.topicSlugExists()', () => {
  allTopics().forEach((topic) => {
    test(`returns true for ${topic.slug}`, () => {
      expect(topicSlugExists(topic.slug)).toBe(true)
    })
  })

  test('returns false when topic does not exist', () => {
    expect(topicSlugExists('doesnt-exist')).toBe(false)
  })
})

describe('topicGateway.findTopicByName()', () => {
  allTopics().forEach((topic) => {
    test(`returns topic for ${topic.name}`, () => {
      expect(findTopicByName(topic.name)).toBeDefined()
    })
  })

  test('returns false when topic does not exist', () => {
    expect(findTopicByName('doesnt-exist')).toBeUndefined()
  })
})

describe('topicGateway.findTopicBySlug()', () => {
  allTopics().forEach((topic) => {
    test(`returns topic for ${topic.slug}`, () => {
      expect(findTopicBySlug(topic.slug)).toBeDefined()
    })
  })

  test('returns false when topic does not exist', () => {
    expect(findTopicBySlug('doesnt-exist')).toBeUndefined()
  })
})
