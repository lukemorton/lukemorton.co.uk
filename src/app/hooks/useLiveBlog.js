import { useState } from 'react'
import useInterval from '@use-it/interval'
import dependencyContainer from '../dependencyContainer'

const INTERVAL = process.env.NODE_ENV === 'development' ? 1000 : null

export default function (propThought, origin) {
  const [thought, setThought] = useState(propThought)

  if (propThought.slug !== thought.slug) setThought(propThought)

  useInterval(() => {
    (async () => {
      const { fetchOneThoughtBySlug } = await dependencyContainer()
      setThought(await fetchOneThoughtBySlug(origin, propThought.slug))
    })()
  }, INTERVAL)

  return [thought, setThought]
}
