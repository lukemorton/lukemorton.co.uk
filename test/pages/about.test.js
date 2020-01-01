import React from 'react'
import { shallow } from 'enzyme'
import About from '../../pages/about'
import Page from '../../src/app/components/Page'

test('content renders', () => {
  const page = shallow(<About />)
  expect(page.find(Page).length).toBe(1)
})
