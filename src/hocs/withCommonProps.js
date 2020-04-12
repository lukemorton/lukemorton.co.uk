import COMMON_PROPS from './commonProps'
import NodeContainer from '../containers/NodeContainer'

export default function (Component) {
  const container = new NodeContainer()
  return (props) => Component({ ...COMMON_PROPS, container, ...props })
}
