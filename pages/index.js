import Home from '../src/app/components/Home'
import withCommonProps from '../src/app/hocs/withCommonProps'
import { fetchRecentThoughts } from '../src/app/factories/nodeFactory'

export default withCommonProps(Home)

export const getStaticProps = async () => {
  const thoughts = await fetchRecentThoughts()
  return { props: { thoughts } }
}
