const express = require('express')
const favicon = require('serve-favicon')
const morgan = require('morgan')
const next = require('next')
const thoughts = require('./data/thoughts')

const dev = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(function (req, res, next) {
    if (req.headers.host === 'lukemorton.co.uk') {
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

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://0.0.0.0:${port}`)
  })
})
