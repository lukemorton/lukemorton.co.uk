import React from 'react'
import { shallow } from 'enzyme'
import nock from 'nock'
import Topic from '../../../pages/topics/[slug]'
import Page from '../../../components/Page'
import Thoughts from '../../../components/Thoughts'
import { TOPICS } from '../../../src/topics'

test('content renders', () => {
  const page = shallow(<Topic />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Thoughts).length).toBe(1)
})

TOPICS.forEach((topic) => {
  test(`loading ${topic.name} thoughts`, async () => {
    const expectedThoughts = [{ slug: 'cool' }, { slug: 'bob' }]
    nock('http://lvh.me:3000')
      .get(`/dist/thoughts/topics/${topic.file}.json`)
      .reply(200, expectedThoughts)
    const { thoughts } = await Topic.getInitialProps({ query: { slug: topic.slug } })
    expect(thoughts).toStrictEqual(expectedThoughts)
  })
})
