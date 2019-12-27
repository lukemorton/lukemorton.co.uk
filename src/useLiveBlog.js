import { useState } from 'react'
import useInterval from '@use-it/interval'

const INTERVAL = process.env.NODE_ENV === 'development' ? 1000 : null

export default function (propThought, loadThought) {
  const [thought, setThought] = useState(propThought)

  if (propThought !== thought) setThought(propThought)

  useInterval(() => {
    (async () => { setThought(await loadThought()) })()
  }, INTERVAL)

  return [thought, setThought]
}
