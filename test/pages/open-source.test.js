import React from 'react'
import { shallow } from 'enzyme'
import OpenSource from '../../pages/open-source'
import Page from '../../components/Page'
import Projects from '../../components/Projects'

test('content renders', () => {
  const page = shallow(<OpenSource />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Projects).length).toBe(1)
})
