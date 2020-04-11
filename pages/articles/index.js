import AllArticles from 'src/components/Articles/All'
import withCommonProps from 'src/hocs/withCommonProps'
import { fetchAllThoughts } from 'src/factories/nodeFactory'

export default withCommonProps(AllArticles)

export const getStaticProps = async () => {
  const thoughts = await fetchAllThoughts()
  return { props: { thoughts } }
}
