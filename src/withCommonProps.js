const COMMON_PROPS = {
  indexUrl: '/',
  aboutUrl: '/about',
  archiveUrl: '/thoughts/archive',
  twitterUrl: 'https://twitter.com/lukemorton',
  githubUrl: 'https://github.com/lukemorton',
  avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
  twitterHandle: '@LukeMorton'
}

function buildOriginFromRequest (req) {
  const host = req ? req.headers.host : window.location.hostname
  return host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
}

export default function (callback) {
  return async (props) => {
    let nextProps = props
    nextProps = { ...nextProps, ...COMMON_PROPS }
    nextProps = { ...nextProps, origin: buildOriginFromRequest(nextProps.req) }
    nextProps = await callback(nextProps)
    return nextProps
  }
}
