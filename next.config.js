const withOffline = require('next-offline')

const nextConfig = {
  webpack(config) {
    config.node = {
      __dirname: false,
      fs: 'empty',
    }
    return config
  },
}

module.exports = withOffline(nextConfig)
