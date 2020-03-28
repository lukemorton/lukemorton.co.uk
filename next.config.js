module.exports = {
  webpack (config) {
    config.node = {
      __dirname: false,
      fs: 'empty'
    }
    return config
  }
}
