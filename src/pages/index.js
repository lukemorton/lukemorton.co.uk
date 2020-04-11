import Home from 'src/components/Home'
import withCommonProps from 'src/hocs/withCommonProps'
import { fetchRecentThoughts } from 'src/factories/nodeFactory'

export default withCommonProps(Home)

export const getStaticProps = async () => {
  const thoughts = await fetchRecentThoughts()
  return { props: { thoughts } }
}
