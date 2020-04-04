#!/usr/bin/env node

import fetch from 'cross-fetch'
import fs from 'fs'
import { fetchAllThoughts, fetchAllTopics } from '../factory'

function testUrl(origin, path) {
  const url = `${origin}${path || ''}`

  fetch(url)
    .then((res) => {
      console.log(`URL: ${url}`)

      if (res.status === 200) {
        console.log('Status:', res.status)
      } else {
        console.error('Status:', res.status)
        process.exit(1)
      }
    })
    .catch((err) => {
      console.log(`URL: ${url}`)
      console.error(err)
      process.exit(1)
    })
}

if (!process.env.GITHUB_EVENT_PATH) {
  console.error('Please define GITHUB_EVENT_PATH')
  process.exit(1)
}

const eventJson = fs.readFileSync(process.env.GITHUB_EVENT_PATH)
const event = JSON.parse(eventJson)
const state = event.deployment_status.state
const targetUrl = event.deployment_status.target_url

if (state === 'success') {
  console.log('Smoke testing successful deploy')
  testUrl(targetUrl)
  testUrl(targetUrl, '/about')
  testUrl(targetUrl, '/open-source')
  testUrl(targetUrl, '/articles')
  ;(async () => {
    const thoughts = await fetchAllThoughts(targetUrl)
    thoughts.forEach((t) => {
      testUrl(targetUrl, `/articles/${t.slug}`)
    })
  })()
  ;(async () => {
    const topics = await fetchAllTopics()
    topics.forEach((t) => {
      testUrl(targetUrl, `/topics/${t.slug}`)
    })
  })()
} else {
  console.error('Should not be run unless success')
  process.exit(1)
}
