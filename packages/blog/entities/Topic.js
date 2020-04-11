export default function Topic(name, slug) {
  return {
    get name() {
      return name
    },

    get slug() {
      return slug
    },

    get path() {
      return `/dist/src/content/articles/topics/${slug}.json`
    },
  }
}
