import fetch from 'cross-fetch'

function buildOriginFromWindowIfNull(origin) {
  if (origin) return origin

  if (typeof window !== 'undefined') {
    const host = window.location.hostname

    if (host.indexOf('localhost') > -1) {
      return 'http://lvh.me:3000'
    } else {
      return `https://${host}`
    }
  }
}

export async function loadJsonPath(origin, path) {
  origin = buildOriginFromWindowIfNull(origin)

  const url = `${origin}${path}`

  try {
    const response = await fetch(url)
    return response.json()
  } catch (e) {
    console.error('Error occurred fetching', url)
    throw e
  }
}

export async function thoughtsIndex(loadJsonPath) {
  return loadJsonPath('/dist/src/content/articles/index.json')
}

export async function recentThoughts(loadJsonPath) {
  return loadJsonPath('/dist/src/content/articles/recent.json')
}

export async function allThoughts(loadJsonPath) {
  return loadJsonPath('/dist/src/content/articles/archive.json')
}

export async function thoughtsByTopicSlug(loadJsonPath, slug) {
  return loadJsonPath(`/dist/src/content/articles/topics/${slug}.json`)
}
