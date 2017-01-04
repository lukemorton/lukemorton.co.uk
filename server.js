const express = require('express')
const next = require('next')
const thoughts = require('./data/thoughts')

const dev = process.env.NODE_ENV === 'development'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/thoughts/:slug', (req, res, next) => {
    if (thoughts[req.params.slug]) {
      return app.render(req, res, '/thoughts/show', { slug: req.params.slug })
    } else {
      next()
    }
  })

  server.get('*', handle)

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
