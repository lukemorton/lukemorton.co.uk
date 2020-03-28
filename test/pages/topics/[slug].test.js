import React from 'react'
import { shallow } from 'enzyme'
import Topic from '../../../pages/topics/[slug]'
import Page from '../../../src/app/components/Page'
import Thoughts from '../../../src/app/components/Thoughts'
import { fetchAllTopics } from '../../../src/app/factory'

test('content renders', () => {
  const page = shallow(<Topic topic={fetchAllTopics()[0]} thoughts={[]} />)
  expect(page.find(Page).length).toBe(1)
  expect(page.find(Thoughts).length).toBe(1)
})
