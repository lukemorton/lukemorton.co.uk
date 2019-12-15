import React from 'react'
import { shallow } from 'enzyme'
import ShowThought from '../../../pages/thoughts/[slug]'
import Page from '../../../components/Page'
import Thought from '../../../components/Thought'
import thoughts from '../../../dist/thoughts'

function firstThought () {
  const slug = Object.keys(thoughts)[0]
  return thoughts[slug]
}

test('content renders', () => {
  const page = shallow(<ShowThought thought={firstThought()} />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Thought).length).toBe(1)
})

test('loading thought by slug', () => {
  const { slug } = firstThought()
  const { thought } = ShowThought.getInitialProps({ query: { slug } })
  expect(thought).toBe(thoughts[slug])
})
