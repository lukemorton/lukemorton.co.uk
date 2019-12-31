#!/usr/bin/env node

import fetch from 'cross-fetch'
import fs from 'fs'
import { fetchAllThoughts } from '../src/fetchThoughts'

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

(async () => {
  const eventJson = fs.readFileSync(process.env.GITHUB_EVENT_PATH)
  const event = JSON.parse(eventJson)
  const state = event.deployment_status.state
  const targetUrl = event.deployment_status.target_url

  if (state === 'success') {
    console.log('Smoke testing successful deploy')
    testUrl(targetUrl)
    testUrl(targetUrl, '/about')
    testUrl(targetUrl, '/open-source')
    testUrl(targetUrl, '/thoughts/archive')

    const thoughts = await fetchAllThoughts(targetUrl)
    thoughts.forEach(t => {
      testUrl(targetUrl, `/thoughts/${t.slug}`)
    })
  } else {
    console.log('NOOP: Ignoring non-success event')
    process.exit(1)
  }
})()
