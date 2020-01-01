import React from 'react'
import { shallow } from 'enzyme'
import nock from 'nock'
import Topic from '../../../pages/topics/[slug]'
import Page from '../../../components/Page'
import Thoughts from '../../../components/Thoughts'
import { allTopics } from '../../../src/blog/topicGateway'

test('content renders', () => {
  const page = shallow(<Topic topic={allTopics()[0]} thoughts={[]} />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Thoughts).length).toBe(1)
})

allTopics().forEach((topic) => {
  test(`loading ${topic.name} thoughts`, async () => {
    const expectedThoughts = [{ slug: 'cool' }, { slug: 'bob' }]
    nock(TEST_ORIGIN).get(topic.path).reply(200, expectedThoughts)
    const { thoughts } = await Topic.getInitialProps({ query: { slug: topic.slug } })
    expect(thoughts).toStrictEqual(expectedThoughts)
  })
})
