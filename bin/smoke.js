#!/usr/bin/env node

const fetch = require('cross-fetch')
const event = require(process.env.GITHUB_EVENT_PATH)
const environment = event.deployment_status.environment
const state = event.deployment_status.state
const targetUrl = event.deployment_status.target_url

if (environment !== 'production') {
  console.log('NOOP: not production')
  process.exit(1)
}

if (state === 'success') {
  console.log('Smoke testing successful deploy')
  console.log(`URL: ${targetUrl}`)
  fetch(targetUrl)
    .then(res => {
      console.log('Status:', res.status)
    })
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
} else {
  console.log('NOOP: Ignoring non-success event')
  process.exit(1)
}
