#! /usr/bin/env node

const createDataFiles = require(__dirname + '/../lib/createDataFiles')
const files = createDataFiles()
console.log('Files created', files)
