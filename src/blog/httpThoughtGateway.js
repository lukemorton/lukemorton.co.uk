import fetch from 'cross-fetch'

export async function loadJsonPath (origin, path) {
  const url = `${origin}${path}`

  try {
    const response = await fetch(url)
    return response.json()
  } catch (e) {
    console.error('Error occurred fetching', url)
    throw e
  }
}
