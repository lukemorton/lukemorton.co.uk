import COMMON_PROPS from './commonProps'

export default function (Component) {
  return (props) => Component({ ...COMMON_PROPS, ...props })
}
