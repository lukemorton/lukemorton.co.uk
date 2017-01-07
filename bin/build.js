#! /usr/bin/env node

import path from 'path'
import createDataFiles from '../lib/createDataFiles'

createDataFiles().then(files => {
  console.log('Files built:')
  console.log(' ', files.join('\n  '))
})
