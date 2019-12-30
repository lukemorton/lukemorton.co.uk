import fetch from 'cross-fetch'
import { findTopicByName, topicSlugExists } from './topicGateway'

export class NoThoughtFoundBySlugError extends Error {
  constructor (slug) {
    super()
    this.name = 'NoThoughtFoundBySlugError'
    this.message = `Could not find thought by slug ${slug}`
  }
}

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
  if (!thoughts[slug]) throw new NoThoughtFoundBySlugError(slug)
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

export async function fetchThoughtsByTopicSlug (req, slug) {
  if (!topicSlugExists(slug)) throw new Error('Invalid topic slug')
  const url = buildUrlFromRequestAndPath(req, `/dist/thoughts/topics/${slug}.json`)
  return await fetchJson(url) || []
}

export async function fetchThoughtsByTopicName (req, name) {
  const topic = findTopicByName(name)
  if (!topic) throw new Error('Invalid topic name')
  const url = buildUrlFromRequestAndPath(req, `/dist/thoughts/topics/${topic.slug}.json`)
  return await fetchJson(url) || []
}
