import Router from 'next/router'
import { NoThoughtFoundBySlugError } from './fetchThoughts'
import { NoTopicFoundBySlugError } from './fetchTopic'

function handleNotFound (props) {
  if (props.res) {
    props.res.writeHead(301, { Location: '/404' })
    props.res.end()
  } else {
    Router.push('/404')
  }
}

export default function handleErrors (callback) {
  return async (props) => {
    try {
      return await callback(props)
    } catch (e) {
      if (e instanceof NoTopicFoundBySlugError) {
        handleNotFound(props)
      } else if (e instanceof NoThoughtFoundBySlugError) {
        handleNotFound(props)
      }

      throw e
    }
  }
}
