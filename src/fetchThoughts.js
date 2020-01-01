import fetch from 'cross-fetch'
import { findTopicByName, topicSlugExists } from './topicGateway'

export class NoThoughtFoundBySlugError extends Error {
  constructor (slug) {
    super()
    this.name = 'NoThoughtFoundBySlugError'
    this.message = `Could not find thought by slug ${slug}`
  }
}

export class NoThoughtsFoundByTopicNameError extends Error {
  constructor (name) {
    super()
    this.name = 'NoThoughtsFoundByTopicNameError'
    this.message = `Could not find thought by topic name ${name}`
  }
}

export class NoThoughtsFoundByTopicSlugError extends Error {
  constructor (slug) {
    super()
    this.name = 'NoThoughtsFoundByTopicSlugError'
    this.message = `Could not find thought by topic slug ${slug}`
  }
}

function buildUrlFromOriginAndPath (origin, path) {
  // const host = req ? req.headers.host : window.location.hostname
  // const baseUrl = host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
  return `${origin}${path}`
}

async function loadJsonPath (origin, path) {
  const url = buildUrlFromOriginAndPath(origin, path)

  try {
    const response = await fetch(url)
    return response.json()
  } catch (e) {
    console.error('Error occurred fetching', url)
    throw e
  }
}

async function fetchThoughtMap (origin) {
  return loadJsonPath(origin, '/dist/thoughts/index.json')
}

export async function fetchOneThoughtBySlug (origin, slug) {
  const thoughts = await fetchThoughtMap(origin)
  if (!thoughts[slug]) throw new NoThoughtFoundBySlugError(slug)
  return thoughts[slug]
}

export async function fetchRecentThoughts (origin) {
  return (await loadJsonPath(origin, '/dist/thoughts/recent.json')) || []
}

export async function fetchAllThoughts (origin) {
  return (await loadJsonPath(origin, '/dist/thoughts/archive.json')) || []
}

export async function fetchThoughtsByTopicName (origin, name) {
  const topic = findTopicByName(name)
  if (!topic) throw new NoThoughtsFoundByTopicNameError(name)
  return (await loadJsonPath(origin, `/dist/thoughts/topics/${topic.slug}.json`)) || []
}

export async function fetchThoughtsByTopicSlug (origin, slug) {
  if (!topicSlugExists(slug)) throw new NoThoughtsFoundByTopicSlugError(slug)
  return (await loadJsonPath(origin, `/dist/thoughts/topics/${slug}.json`)) || []
}
