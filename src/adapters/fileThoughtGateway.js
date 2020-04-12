export async function loadJsonPath(path) {
  return (await import(`../../public/${path}.json`)).default
}

export async function thoughtsIndex() {
  return loadJsonPath('dist/src/content/articles/index')
}

export async function recentThoughts() {
  return loadJsonPath('dist/src/content/articles/recent')
}

export async function allThoughts() {
  return loadJsonPath('dist/src/content/articles/archive')
}

export async function thoughtsByTopicSlug(slug) {
  return loadJsonPath(`dist/src/content/articles/topics/${slug}`)
}
