export default function Topic(name, slug, { description, guide } = {}) {
  return {
    get name() {
      return name
    },

    get description() {
      return description || null
    },

    get guide() {
      return guide || null
    },

    get slug() {
      return slug
    },

    get path() {
      return `/dist/src/content/articles/topics/${slug}.json`
    },
  }
}
