import {
  TOPICS,
  TOPIC_SLUG_TO_FILE_MAP,
  TOPIC_SLUG_TO_NAME_MAP,
  TOPIC_NAME_TO_FILE_MAP
} from './topics'

describe('TOPICS', () => {
  TOPICS.forEach((topic) => {
    test(`${topic} params`, () => {
      expect(topic.name).toBeDefined()
      expect(topic.slug).toBeDefined()
      expect(topic.file).toBeDefined()
    })
  })
})

describe('TOPIC_SLUG_TO_FILE_MAP', () => {
  TOPICS.forEach((topic) => {
    test(`${topic}`, () => {
      expect(TOPIC_SLUG_TO_FILE_MAP[topic.slug]).toBeDefined()
      expect(TOPIC_SLUG_TO_FILE_MAP[topic.slug]).toEqual(topic.file)
    })
  })
})

describe('TOPIC_SLUG_TO_NAME_MAP', () => {
  TOPICS.forEach((topic) => {
    test(`${topic}`, () => {
      expect(TOPIC_SLUG_TO_NAME_MAP[topic.slug]).toBeDefined()
      expect(TOPIC_SLUG_TO_NAME_MAP[topic.slug]).toEqual(topic.name)
    })
  })
})

describe('TOPIC_NAME_TO_FILE_MAP', () => {
  TOPICS.forEach((topic) => {
    test(`${topic}`, () => {
      expect(TOPIC_NAME_TO_FILE_MAP[topic.name]).toBeDefined()
      expect(TOPIC_NAME_TO_FILE_MAP[topic.name]).toEqual(topic.file)
    })
  })
})
