import { SitemapStream, streamToPromise } from 'sitemap'
import withContainer from '../../middleware/withContainer'

const buildPages = async ({ fetchAllThoughts, fetchAllTopics }) => {
  const staticPages = [
    { url: '/', changefreq: 'weekly' },
    { url: '/about', changefreq: 'weekly' },
    { url: '/open-source', changefreq: 'weekly' },
    { url: '/articles', changefreq: 'weekly' },
  ]

  const articlePages = (await fetchAllThoughts()).map(({ slug }) => {
    return { url: `/articles/${slug}`, changefreq: 'weekly' }
  })

  const topicPages = (await fetchAllTopics()).map(({ slug }) => {
    return { url: `/topics/${slug}`, changefreq: 'weekly' }
  })

  return [].concat(staticPages, articlePages, topicPages)
}

const writeSitemap = async ({ fetchAllThoughts, fetchAllTopics }) => {
  const sitemap = new SitemapStream({ hostname: 'https://lukemorton.tech/' })
  const pages = await buildPages({ fetchAllThoughts, fetchAllTopics })
  pages.map((page) => sitemap.write(page))
  return sitemap
}

const handleError = (context) => (e) => {
  console.error(context, e)
  exit(1)
}

export default withContainer(async (req, res, { container }) => {
  res.setHeader('Content-Type', 'application/xml')
  res.on('error', handleError('res'))

  const sitemap = await writeSitemap({
    fetchAllThoughts: container.getFetchAllThoughts(),
    fetchAllTopics: container.getFetchAllTopics(),
  })
  sitemap.on('error', handleError('sitemap'))
  sitemap.pipe(res)
  sitemap.end()
})
