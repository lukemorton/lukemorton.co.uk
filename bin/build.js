#! /usr/bin/env node

import path from 'path'
import createDataFiles from '../lib/createDataFiles'

const dev = process.env.NODE_ENV === 'development'
const dataDir = path.join(process.cwd(), 'data')
const thoughtsDir = path.join(process.cwd(), 'thoughts')

createDataFiles({ dev, dataDir, thoughtsDir }).then(files => {
  console.log(files.map(file => `data -> ${file}`).join('\n'))
})
