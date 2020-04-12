import Home from 'src/components/Home'
import { fetchRecentThoughts } from 'src/factories/nodeFactory'

export default Home

export const getStaticProps = async () => {
  const thoughts = await fetchRecentThoughts()
  return { props: { thoughts } }
}
