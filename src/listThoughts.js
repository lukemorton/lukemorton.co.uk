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

async function allThoughts (req) {
  const url = buildUrlFromRequestAndPath(req, '/dist/thoughts/index.json')
  return await fetchJson(url)
}

export async function thought (req, slug) {
  const thoughts = await allThoughts(req)
  return thoughts[slug]
}

export async function recentThoughts (req) {
  const url = buildUrlFromRequestAndPath(req, '/dist/thoughts/latestThoughts.json')
  return await fetchJson(url)
}

export async function thoughtsArchive (req) {
  const url = buildUrlFromRequestAndPath(req, '/dist/thoughts/thoughtsArchive.json')
  return await fetchJson(url)
}

export async function topic (req, topic) {
  const url = buildUrlFromRequestAndPath(req, `/dist/thoughts/topics/${topic}.json`)
  return await fetchJson(url)
}
