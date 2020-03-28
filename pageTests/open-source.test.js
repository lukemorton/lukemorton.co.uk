import React from 'react'
import { shallow } from 'enzyme'
import OpenSource from '../pages/open-source'
import Page from '../src/app/components/Page'
import Projects from '../src/app/components/Projects'

test('content renders', () => {
  const page = shallow(<OpenSource />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Projects).length).toBe(1)
})
