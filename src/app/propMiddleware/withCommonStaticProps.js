import COMMON_PROPS from './commonProps'

export default function (callback) {
  return async (props) => {
    let nextProps

    if (!callback) return { props: COMMON_PROPS }

    nextProps = {
      ...props,
      ...COMMON_PROPS,
    }

    nextProps = {
      ...COMMON_PROPS,
      ...(await callback(nextProps)).props,
    }

    return { props: nextProps }
  }
}
