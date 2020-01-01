import dependencyContainer from '../dependencyContainer'
import COMMON_PROPS from './commonProps'

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
