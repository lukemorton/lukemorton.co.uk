import React from 'react'
import { shallow } from 'enzyme'
import TopicPage from 'pages/topics/[slug]'
import Topic from 'src/components/Topics/Topic'
import { fetchAllTopics } from 'src/factories/nodeFactory'

test('content renders', () => {
  const page = shallow(<TopicPage topic={fetchAllTopics()[0]} thoughts={[]} />)
  expect(page.find(Topic).length).toBe(1)
})
