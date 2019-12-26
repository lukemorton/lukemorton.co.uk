import fetch from 'cross-fetch'

function buildUrlFromRequestAndPath (req, path) {
  const host = req ? req.headers.host : window.location.hostname
  const baseUrl = host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
  return `${baseUrl}${path}`
}

async function fetchJson (url) {
  const response = await fetch(url)
  return await response.json()
}

async function fetchThoughtMap (req) {
  const url = buildUrlFromRequestAndPath(req, '/dist/thoughts/index.json')
  return await fetchJson(url)
}

export async function fetchOneThoughtBySlug (req, slug) {
  const thoughts = await fetchThoughtMap(req)
  return thoughts[slug]
}

export async function fetchRecentThoughts (req) {
  const url = buildUrlFromRequestAndPath(req, '/dist/thoughts/recent.json')
  return await fetchJson(url) || []
}

export async function fetchAllThoughts (req) {
  const url = buildUrlFromRequestAndPath(req, '/dist/thoughts/archive.json')
  return await fetchJson(url) || []
}

export async function fetchThoughtsByTopic (req, topic) {
  const url = buildUrlFromRequestAndPath(req, `/dist/thoughts/topics/${topic}.json`)
  return await fetchJson(url) || []
}
