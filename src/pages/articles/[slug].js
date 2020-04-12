import Article from 'src/components/Articles/Article'
import {
  fetchAllThoughts,
  fetchOneThoughtBySlug,
} from 'src/factories/nodeFactory'

export default Article

export const getStaticPaths = async () => {
  const thoughts = await fetchAllThoughts()
  const paths = thoughts.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const thought = await fetchOneThoughtBySlug({ slug: params.slug })
  return { props: { slug, thought } }
}
