import React from 'react'
import { shallow } from 'enzyme'
import nock from 'nock'
import Index, { unstable_getStaticProps } from '../../pages/index' // eslint-disable-line camelcase
import Page from '../../src/app/components/Page'
import Thoughts from '../../src/app/components/Thoughts'

test('content renders', () => {
  const page = shallow(<Index />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Thoughts).length).toBe(1)
})

test('loading thoughts', async () => {
  const expectedThoughts = [{ slug: 'cool' }, { slug: 'bob' }]
  nock(TEST_ORIGIN)
    .get('/dist/thoughts/recent.json')
    .reply(200, expectedThoughts)
  const { props: { thoughts } } = await unstable_getStaticProps({ origin: TEST_ORIGIN }) // eslint-disable-line camelcase
  expect(thoughts).toStrictEqual(expectedThoughts)
})
