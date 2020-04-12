import COMMON_PROPS from './commonProps'
import AppContainer from '../containers/AppContainer'

export default function (Component) {
  const container = new AppContainer()
  return (props) => (
    <Component {...COMMON_PROPS} container={container} {...props} />
  )
}
