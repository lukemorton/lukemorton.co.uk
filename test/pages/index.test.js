import React from 'react'
import { shallow } from 'enzyme'
import nock from 'nock'
import Index from '../../pages/index'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'

test('content renders', () => {
  const page = shallow(<Index />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Thoughts).length).toBe(1)
})

test('loading thoughts', async () => {
  const expectedThoughts = [{ slug: 'cool' }, { slug: 'bob' }]
  nock('http://lvh.me:3000')
    .get('/dist/thoughts/latestThoughts.json')
    .reply(200, expectedThoughts)
  const { thoughts } = await Index.getInitialProps({})
  expect(thoughts).toStrictEqual(expectedThoughts)
})
