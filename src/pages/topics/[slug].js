import Topic from 'src/components/Topics/Topic'
import {
  fetchAllTopics,
  fetchThoughtsByTopicSlug,
  fetchTopicBySlug,
} from 'src/factories/nodeFactory'

export default Topic

export const getStaticPaths = async () => {
  const topics = await fetchAllTopics()
  const paths = topics.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const topic = await fetchTopicBySlug(slug)
  const thoughts = await fetchThoughtsByTopicSlug(null, slug)
  return { props: { topic, thoughts } }
}
