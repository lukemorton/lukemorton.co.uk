import React from 'react'
import { shallow } from 'enzyme'
import AboutPage from '../pages/about'
import About from '../src/app/components/About'

test('content renders', () => {
  const page = shallow(<AboutPage />)
  expect(page.find(About).length).toBe(1)
})
