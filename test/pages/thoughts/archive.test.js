import React from 'react'
import { shallow } from 'enzyme'
import ThoughtArchive from '../../../pages/thoughts/archive'
import Page from '../../../components/Page'
import Thoughts from '../../../components/Thoughts'

test('content renders', () => {
  const page = shallow(<ThoughtArchive />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Thoughts).length).toBe(1)
})
