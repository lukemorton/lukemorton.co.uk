import { useState } from 'react'
import useInterval from '@use-it/interval'
import dependencyContainer from '../dependencyContainer'

const INTERVAL = process.env.NODE_ENV === 'development' ? 1000 : null

function buildOrigin () {
  const host = window.location.hostname
  return host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
}

export default function (propThought, origin) {
  const [thought, setThought] = useState(propThought)

  if (propThought.slug !== thought.slug) setThought(propThought)

  useInterval(() => {
    (async () => {
      const { fetchOneThoughtBySlug } = await dependencyContainer('app')
      setThought(await fetchOneThoughtBySlug(buildOrigin(), propThought.slug))
    })()
  }, INTERVAL)

  return [thought, setThought]
}
