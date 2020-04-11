import React from 'react'
import { shallow } from 'enzyme'
import IndexPage from 'pages/index'
import Home from 'src/components/Home'

test('content renders', () => {
  const page = shallow(<IndexPage />)
  expect(page.find(Home).length).toBe(1)
})
