import fs from 'fs'
import {
  TOPICS,
  TOPIC_SLUG_TO_FILE_MAP,
  TOPIC_SLUG_TO_NAME_MAP,
  TOPIC_NAME_TO_FILE_MAP,
  topicSlugExists
} from './topics'

describe('TOPICS', () => {
  TOPICS.forEach((topic) => {
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

describe('topicSlugExists', () => {
  TOPICS.forEach((topic) => {
    test(`returns true for ${topic.slug}`, () => {
      expect(topicSlugExists(topic.slug)).toBe(true)
    })
  })

  test(`returns false when topic does not exist`, () => {
    expect(topicSlugExists('doesnt-exist')).toBe(false)
  })
})

describe('TOPIC_SLUG_TO_FILE_MAP', () => {
  TOPICS.forEach((topic) => {
    test(`${topic.name}`, () => {
      expect(TOPIC_SLUG_TO_FILE_MAP[topic.slug]).toBeDefined()
      expect(TOPIC_SLUG_TO_FILE_MAP[topic.slug]).toEqual(topic.slug)
    })
  })
})

describe('TOPIC_SLUG_TO_NAME_MAP', () => {
  TOPICS.forEach((topic) => {
    test(`${topic.name}`, () => {
      expect(TOPIC_SLUG_TO_NAME_MAP[topic.slug]).toBeDefined()
      expect(TOPIC_SLUG_TO_NAME_MAP[topic.slug]).toEqual(topic.name)
    })
  })
})

describe('TOPIC_NAME_TO_FILE_MAP', () => {
  TOPICS.forEach((topic) => {
    test(`${topic.name}`, () => {
      expect(TOPIC_NAME_TO_FILE_MAP[topic.name]).toBeDefined()
      expect(TOPIC_NAME_TO_FILE_MAP[topic.name]).toEqual(topic.slug)
    })
  })
})
