import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import About from '../../pages/about'
import Page from '../../components/Page'

test('content renders', t => {
  const page = shallow(<About />)
  t.is(page.find(Page).length, 1)
})
