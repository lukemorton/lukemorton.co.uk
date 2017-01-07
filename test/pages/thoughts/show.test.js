import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import ShowThought from '../../../pages/thoughts/show'
import Page from '../../../components/Page'
import Thought from '../../../components/Thought'
import thoughts from '../../../data/thoughts'

function firstThought () {
  const slug = Object.keys(thoughts)[0]
  return thoughts[slug]
}

test('content renders', t => {
  const page = shallow(<ShowThought thought={firstThought()} />)
  t.is(page.find(Page).length, 1)
  t.is(page.find(Thought).length, 1)
})

test('loading thought by slug', t => {
  const { slug } = firstThought()
  const { thought } = ShowThought.getInitialProps({ query: { slug } })
  t.is(thought, thoughts[slug])
})
