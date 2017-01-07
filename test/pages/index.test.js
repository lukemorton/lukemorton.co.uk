import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Index from '../../pages/index'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'
import Projects from '../../components/Projects'

test('content renders', t => {
  const page = shallow(<Index />)
  t.is(page.find(Page).length, 1)
  t.is(page.find(Thoughts).length, 1)
  t.is(page.find(Projects).length, 1)
})
