module.exports = {
  exportPathMap: async function () {
    const { fetchAllThoughts } = require('./lib/fetchThoughts')
    const thoughts = await fetchAllThoughts(process.env.ORIGIN)

    const { fetchAllTopics } = require('./lib/fetchTopic')
    const topics = await fetchAllTopics()

    const routes = {
      '/about': { page: '/about' },
      '/index': { page: '/index' },
      '/open-source': { page: '/open-source' },
      '/thoughts/archive': { page: '/thoughts/archive' },
      '/': { page: '/' }
    }

    thoughts.forEach(({ slug }) => {
      routes[`/thoughts/${slug}`] = { page: '/thoughts/[slug]', query: { slug } }
    })

    topics.forEach(({ slug }) => {
      routes[`/topics/${slug}`] = { page: '/topics/[slug]', query: { slug } }
    })

    return routes
  },
}
