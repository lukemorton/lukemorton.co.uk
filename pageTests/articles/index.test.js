import React from 'react'
import { shallow } from 'enzyme'
import ArticlesIndexPage from '../../pages/articles'
import AllArticles from '../../src/app/components/Articles/All'

test('content renders', () => {
  const page = shallow(<ArticlesIndexPage />)
  expect(page.find(AllArticles).length).toBe(1)
})
