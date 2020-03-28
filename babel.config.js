module.exports = api => {
  api.cache(true)

  const presets = ['next/babel']

  const ignoreTests = [
    'pageTests/**/*.test.js',
    'src/**/*.test.js',
    'src/setupTests.js'
  ]

  switch (process.env.NODE_ENV) {
    case 'test':
      return { presets }
    default:
      return { presets, ignore: ignoreTests }
  }
}
