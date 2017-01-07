const express = require('express')
const favicon = require('serve-favicon')
const morgan = require('morgan')
const thoughts = require('../data/thoughts')

export default function ({ app, dev, handle }) {
  const server = express()

  server.use(function (req, res, next) {
    if (req.hostname === 'lukemorton.co.uk') {
      res.redirect('https://www.lukemorton.co.uk')
    } else {
      next()
    }
  })

  server.use(morgan(dev ? 'dev' : 'combined'))
  server.use(favicon('static/favicon.ico'))
  server.use('/poems', express.static('poems', { extensions: ['html'] }))
  server.use('/moon-and-fate.html', express.static('static/moon-and-fate.html'))

  server.get('/thoughts/:slug', (req, res, next) => {
    if (thoughts[req.params.slug]) {
      return app.render(req, res, '/thoughts/show', { slug: req.params.slug })
    } else {
      next()
    }
  })

  server.get('*', handle)

  return server
}
