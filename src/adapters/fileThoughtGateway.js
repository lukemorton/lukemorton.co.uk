import fs from 'fs'

export async function loadJsonPath(path) {
  const json = fs.readFileSync(`${__dirname}/../../public/${path}`)
  return JSON.parse(json)
}

export async function thoughtsIndex() {
  return loadJsonPath('dist/src/content/articles/index.json')
}

export async function recentThoughts() {
  return loadJsonPath('dist/src/content/articles/recent.json')
}

export async function allThoughts() {
  return loadJsonPath('dist/src/content/articles/archive.json')
}

export async function thoughtsByTopicSlug(slug) {
  return loadJsonPath(`dist/src/content/articles/topics/${slug}.json`)
}
