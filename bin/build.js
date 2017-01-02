#! /usr/bin/env node

const path = require('path')
const createDataFiles = require(path.join(__dirname, '../lib/createDataFiles'))
const files = createDataFiles()
console.log('Files created', files)
