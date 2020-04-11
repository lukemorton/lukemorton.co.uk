module.exports = (api) => {
  api.cache(true)

  const presets = ['next/babel']

  const plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          blog: './packages/blog',
          ui: './packages/ui',
        },
      },
    ],
  ]

  const ignoreTests = [
    'pageTests/**/*.test.js',
    'src/**/*.test.js',
    'src/**/testHooks.js',
    'src/setupTests.js',
  ]

  switch (process.env.NODE_ENV) {
    case 'test':
      return { presets, plugins }
    default:
      return { presets, plugins, ignore: ignoreTests }
  }
}
