#!/usr/bin/env node

const fetch = require('cross-fetch')
const event = require(process.env.GITHUB_EVENT_PATH)
const state = event.deployment_status.state
const targetUrl = event.deployment_status.target_url

function testUrl (origin, path) {
  const url = `${origin}${path || ''}`

  fetch(url)
    .then(res => {
      console.log(`URL: ${url}`)
      console.log('Status:', res.status)
    })
    .catch(err => {
      console.log(`URL: ${url}`)
      console.error(err)
      process.exit(1)
    })
}

if (state === 'success') {
  console.log('Smoke testing successful deploy')
  testUrl(targetUrl)
  testUrl(targetUrl, '/about')
  testUrl(targetUrl, '/open-source')
  testUrl(targetUrl, '/thoughts/archive')
} else {
  console.log('NOOP: Ignoring non-success event')
  process.exit(1)
}
