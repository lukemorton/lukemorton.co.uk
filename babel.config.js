module.exports = api => {
  api.cache(true)

  switch (process.env.NODE_ENV) {
    case 'test':
      return {
        plugins: [
          '@babel/plugin-transform-runtime',
          'styled-jsx/babel'
        ],
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
        ]
      }
    case 'build:lib':
      return {
        ignore: [
          'src/**/*.test.js',
          'src/setupTests.js'
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-transform-modules-commonjs',
          '@babel/plugin-syntax-dynamic-import',
          'styled-jsx/babel'
        ],
        presets: [
          '@babel/preset-react'
        ]
      }
    default:
      return {
        ignore: [
          'src/**/*.test.js',
          'src/setupTests.js'
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-syntax-dynamic-import',
          'styled-jsx/babel'
        ],
        presets: [
          '@babel/preset-react'
        ]
      }
  }
}
