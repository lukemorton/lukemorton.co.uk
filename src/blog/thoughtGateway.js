import fetch from 'cross-fetch'

function buildUrlFromOriginAndPath (origin, path) {
  // const host = req ? req.headers.host : window.location.hostname
  // const baseUrl = host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
  return `${origin}${path}`
}

export async function loadJsonPath (origin, path) {
  const url = buildUrlFromOriginAndPath(origin, path)

  try {
    const response = await fetch(url)
    return response.json()
  } catch (e) {
    console.error('Error occurred fetching', url)
    throw e
  }
}
