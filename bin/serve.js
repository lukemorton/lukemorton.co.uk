#! /usr/bin/env node

import next from 'next'
import morgan from 'morgan'
import path from 'path'
import createServer from '../lib/createServer'

const dev = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const dataDir = path.join(process.cwd(), 'data')
const logger = morgan(dev ? 'dev' : 'combined')
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer({ app, dataDir, logger, handle })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://0.0.0.0:${port}`)
  })
})
