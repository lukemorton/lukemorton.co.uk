import { shallow } from 'enzyme'
import TopicPage from '../../pages/topics/[slug]'
import { fetchAllTopics } from 'src/factories/nodeFactory'

test('content renders', () => {
  shallow(<TopicPage topic={fetchAllTopics()[0]} thoughts={[]} />)
})
