import AllArticles from 'src/components/Articles/All'
import { fetchAllThoughts } from 'src/factories/nodeFactory'

export default AllArticles

export const getStaticProps = async () => {
  const thoughts = await fetchAllThoughts()
  return { props: { thoughts } }
}
