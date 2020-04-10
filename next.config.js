const withOffline = require('next-offline')

const nextConfig = {
  webpack(config) {
    config.node = {
      __dirname: true,
      fs: 'empty',
    }
    return config
  },
}

module.exports = withOffline(nextConfig)
