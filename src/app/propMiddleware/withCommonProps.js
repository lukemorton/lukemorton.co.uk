import dependencyContainer from '../dependencyContainer'

const COMMON_PROPS = {
  indexUrl: '/',
  aboutUrl: '/about',
  archiveUrl: '/thoughts/archive',
  twitterUrl: 'https://twitter.com/lukemorton',
  githubUrl: 'https://github.com/lukemorton',
  avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
  twitterHandle: '@LukeMorton'
}

function buildOrigin (req) {
  if (process.env.FACTORY === 'build') return null
  const host = req ? req.headers.host : window.location.hostname
  return host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
}

export default function (callback) {
  return async (props) => {
    let nextProps

    nextProps = {
      ...props,
      ...COMMON_PROPS,
      dependencyContainer,
      origin: buildOrigin(props.req)

    }

    nextProps = {
      ...COMMON_PROPS,
      ...await callback(nextProps)
    }

    return nextProps
  }
}
