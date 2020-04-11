export default (path) => {
  if (path.indexOf('http') === 0) {
    return path
  } else if (path.indexOf('/') === 0) {
    return `https://lukemorton.tech${path}`
  } else {
    throw new Error('Invalid URL')
  }
}
