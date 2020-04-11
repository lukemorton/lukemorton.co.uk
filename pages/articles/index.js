import AllArticles from '../../src/app/components/Articles/All'
import withCommonProps from '../../src/app/hocs/withCommonProps'
import { fetchAllThoughts } from '../../src/app/factories/nodeFactory'

export default withCommonProps(AllArticles)

export const getStaticProps = async () => {
  const thoughts = await fetchAllThoughts()
  return { props: { thoughts } }
}
