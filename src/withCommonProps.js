const COMMON_PROPS = {
  indexUrl: '/',
  aboutUrl: '/about',
  archiveUrl: '/thoughts/archive',
  twitterUrl: 'https://twitter.com/lukemorton',
  githubUrl: 'https://github.com/lukemorton',
  avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
  twitterHandle: '@LukeMorton'
}

export default function (callback) {
  return async (props) => {
    let nextProps = props
    nextProps = { ...nextProps, ...COMMON_PROPS }
    nextProps = { ...nextProps, ...(await callback(nextProps)) }
    return nextProps
  }
}
