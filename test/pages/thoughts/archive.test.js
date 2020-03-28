import React from 'react'
import { shallow } from 'enzyme'
import ThoughtArchive from '../../../pages/thoughts/archive'
import Page from '../../../src/app/components/Page'
import Thoughts from '../../../src/app/components/Thoughts'

test('content renders', () => {
  const page = shallow(<ThoughtArchive />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Thoughts).length).toBe(1)
})
