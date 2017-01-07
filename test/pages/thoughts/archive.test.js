import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import ThoughtArchive from '../../../pages/thoughts/archive'
import Page from '../../../components/Page'
import Thoughts from '../../../components/Thoughts'

test('content renders', t => {
  const page = shallow(<ThoughtArchive />)
  t.is(page.find(Page).length, 1)
  t.is(page.find(Thoughts).length, 1)
})
