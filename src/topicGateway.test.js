import fs from 'fs'
import { all, topicSlugExists } from './topicGateway'

describe('topicGateway.all()', () => {
  all().forEach((topic) => {
    const fullFilePath = `${__dirname}/../public${topic.path}`

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
  all().forEach((topic) => {
    test(`returns true for ${topic.slug}`, () => {
      expect(topicSlugExists(topic.slug)).toBe(true)
    })
  })

  test(`returns false when topic does not exist`, () => {
    expect(topicSlugExists('doesnt-exist')).toBe(false)
  })
})
