module.exports = {
  async exportPathMap () {
    const { fetchAllThoughts, fetchAllTopics } = require('./lib/build/factory')
    const thoughts = await fetchAllThoughts()
    const topics = await fetchAllTopics()

    const routes = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/open-source': { page: '/open-source' },
      '/thoughts/archive': { page: '/thoughts/archive' },
      '/404': { page: '/404' }
    }

    thoughts.forEach(({ slug }) => {
      routes[`/thoughts/${slug}`] = { page: '/thoughts/[slug]', query: { slug } }
    })

    topics.forEach(({ slug }) => {
      routes[`/topics/${slug}`] = { page: '/topics/[slug]', query: { slug } }
    })

    return routes
  },

  webpack (config) {
    config.node = {
      __dirname: false,
      fs: 'empty'
    }
    return config
  }
}
