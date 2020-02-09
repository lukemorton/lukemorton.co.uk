module.exports = api => {
  if (api.env('test')) {
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
  } else {
    return {
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
