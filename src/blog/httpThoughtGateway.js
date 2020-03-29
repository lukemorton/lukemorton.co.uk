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
