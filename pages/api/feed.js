import { Feed } from 'feed'
import dependencyContainer from '../../src/app/dependencyContainer'

const buildFeed = async () => {
  const { fetchAllThoughts } = await dependencyContainer('build')
  const thoughts = await fetchAllThoughts()

  const author = {
    name: 'Luke Morton',
    link: 'https://lukemorton.tech',
  }

  const feed = new Feed({
    title: 'Exploring teams & technology – Luke Morton',
    description:
      "I've spent the last 15 years building software and technology teams and this website represents some of what I have learned so far.",
    id: 'https://lukemorton.tech',
    link: 'https://lukemorton.tech',
    language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: 'https://lukemorton.tech/icons/512x512.png',
    favicon: 'https://lukemorton.tech/favicon.ico',
    copyright: 'Copyright Luke Morton',
    feedLinks: {
      rss: 'https://lukemorton.tech/feed.rss',
      json: 'https://lukemorton.tech/feed.json',
      atom: 'https://lukemorton.tech/feed.atom',
    },
    author,
  })

  thoughts.forEach(({ title, publishedAt, featuredImage, excerpt, slug }) => {
    console.log(title)
    console.log(Date.parse(publishedAt.iso))

    feed.addItem({
      title: title.plain,
      id: `https://lukemorton.tech/articles/${slug}`,
      link: `https://lukemorton.tech/articles/${slug}`,
      description: excerpt.html,
      author: [author],
      date: new Date(publishedAt.iso),
      image: featuredImage,
    })
  })

  return feed
}

export default async (req, res) => {
  const feed = await buildFeed()

  switch (req.query.type) {
    case 'rss':
      res.setHeader('Content-Type', 'application/rss+xml')
      res.end(feed.rss2())
      return
    case 'atom':
      res.setHeader('Content-Type', 'application/atom+xml')
      res.end(feed.atom1())
      return
    case 'json':
      res.setHeader('Content-Type', 'application/feed+json')
      res.end(feed.json1())
      return
    default:
      res.send({ error: 'Unknown feed type' })
  }
}
