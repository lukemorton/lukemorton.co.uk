import { Feed } from 'feed'
import { fetchAllThoughts } from 'src/factories/nodeFactory'
import prefixUrl from 'src/helpers/prefixUrl'

const buildFeed = async () => {
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

export default async (req, res) => {
  const feed = await buildFeed()

  switch (req.query.type) {
    case 'rss':
      res.setHeader('Content-Type', 'application/rss+xml')
      feed.options.feed = prefixUrl('/feed.rss')
      res.end(feed.rss2())
      return
    case 'atom':
      res.setHeader('Content-Type', 'application/atom+xml')
      feed.options.feed = prefixUrl('/feed.atom')
      res.end(feed.atom1())
      return
    case 'json':
      res.setHeader('Content-Type', 'application/feed+json')
      feed.options.feed = prefixUrl('/feed.json')
      res.end(feed.json1())
      return
    default:
      res.send({ error: 'Unknown feed type' })
  }
}