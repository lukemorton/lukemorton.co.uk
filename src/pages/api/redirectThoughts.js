export default (req, res) => {
  let location

  if (req.query.slug === 'archive') {
    location = '/articles'
  } else {
    const slug = req.query.slug.slice('0000-00-00-'.length)
    location = `/articles/${slug}`
  }

  res.status(301)
  res.setHeader('Location', location)
  res.end()
}
