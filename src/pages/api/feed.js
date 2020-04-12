import { Feed } from 'feed'
import withContainer from 'src/middleware/withContainer'
import prefixUrl from 'src/helpers/prefixUrl'

const buildFeed = async (fetchAllThoughts) => {
  const thoughts = await fetchAllThoughts()

  const author = {
    name: 'Luke Morton',
    email: 'lukemorton.dev@gmail.com',
    link: prefixUrl('/'),
  }

  const feed = new Feed({
    title: 'Exploring teams & technology',
    description:
      "I've spent the last 15 years building software and technology teams and this website represents some of what I have learned so far.",
    id: prefixUrl('/'),
    link: prefixUrl('/'),
    language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: prefixUrl('/icons/512x512.png'),
    favicon: prefixUrl('/favicon.ico'),
    copyright: 'Copyright Luke Morton',
    author,
  })

  thoughts.forEach(({ title, publishedAt, featuredImage, excerpt, slug }) => {
    feed.addItem({
      title: title.plain,
      id: prefixUrl(`/articles/${slug}`),
      link: prefixUrl(`/articles/${slug}`),
      description: excerpt.html,
      author: [author],
      date: new Date(publishedAt.iso),
      image: featuredImage ? prefixUrl(featuredImage) : undefined,
    })
  })

  return feed
}

export default withContainer(async (req, res, { container }) => {
  let feed

  switch (req.query.type) {
    case 'rss':
      feed = await buildFeed(container.getFetchAllThoughts())
      feed.options.feed = prefixUrl('/feed.rss')
      res.setHeader('Content-Type', 'application/rss+xml')
      res.end(feed.rss2())
      return
    case 'atom':
      feed = await buildFeed(container.getFetchAllThoughts())
      feed.options.feed = prefixUrl('/feed.atom')
      res.setHeader('Content-Type', 'application/atom+xml')
      res.end(feed.atom1())
      return
    case 'json':
      feed = await buildFeed(container.getFetchAllThoughts())
      feed.options.feed = prefixUrl('/feed.json')
      res.setHeader('Content-Type', 'application/feed+json')
      res.end(feed.json1())
      return
    default:
      res.status(400)
      res.send({ error: 'Unknown feed type' })
  }
})
