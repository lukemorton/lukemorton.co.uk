#! /usr/bin/env node

const path = require('path')
const createDataFiles = require(path.join(__dirname, '../lib/createDataFiles')).default
createDataFiles().then(files => {
  console.log('Files built:')
  console.log(' ', files.join('\n  '))
})
