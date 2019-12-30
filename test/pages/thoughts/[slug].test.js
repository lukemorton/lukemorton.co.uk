import React from 'react'
import { shallow } from 'enzyme'
import nock from 'nock'
import ShowThought from '../../../pages/thoughts/[slug]'
import Page from '../../../components/Page'
import Thought from '../../../components/Thought'
import thoughts from '../../../public/dist/thoughts'

function firstThought () {
  const slug = Object.keys(thoughts)[0]
  return thoughts[slug]
}

function secondThought () {
  const slug = Object.keys(thoughts)[1]
  return thoughts[slug]
}

test('content renders', () => {
  const page = shallow(<ShowThought thought={firstThought()} />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Thought).length).toBe(1)
})

test('loading thought by slug', async () => {
  const expectedThought = firstThought()
  nock(TEST_ORIGIN)
    .get('/dist/thoughts/index.json')
    .reply(200, thoughts)
  const { thought } = await ShowThought.getInitialProps({ query: { slug: expectedThought.slug } })
  expect(thought).toStrictEqual(expectedThought)
})

test('derives state from prop sensibly', () => {
  const page = shallow(<ShowThought thought={firstThought()} />)
  page.setProps({ thought: secondThought() })
  expect(page.find({ title: secondThought().title.plain }).length).toBe(1)
})
