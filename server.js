const next = require('next')
const createServer = require('./lib/createServer')

const dev = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer({ app, dev, handle })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://0.0.0.0:${port}`)
  })
})
