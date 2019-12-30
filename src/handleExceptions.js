import { NoTopicFoundBySlugError } from './fetchTopic'

export default function handleErrors (callback) {
  return async (props) => {
    try {
      return await callback(props)
    } catch (e) {
      if (e instanceof NoTopicFoundBySlugError) {
        if (props.res) {
          props.res.writeHead(301, { Location: '/404' })
          props.res.end()
        } else {
          Router.push('/404')
        }
      }

      throw e
    }
  }
}
