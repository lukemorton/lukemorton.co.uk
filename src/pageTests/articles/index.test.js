import { shallow } from 'enzyme'
import ArticlesIndexPage from '../../pages/articles'
import AllArticles from 'src/components/Articles/All'

test('content renders', () => {
  shallow(<ArticlesIndexPage />)
})
