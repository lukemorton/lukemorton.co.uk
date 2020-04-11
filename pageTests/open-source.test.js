import React from 'react'
import { shallow } from 'enzyme'
import OpenSourcePage from 'pages/open-source'
import OpenSource from 'src/components/OpenSource'

test('content renders', () => {
  const page = shallow(<OpenSourcePage />)
  expect(page.find(OpenSource).length).toBe(1)
})
