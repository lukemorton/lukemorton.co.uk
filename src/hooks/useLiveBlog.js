import useSWR from 'swr'
import { fetchOneThoughtBySlug } from '../factories/browserFactory'

const INTERVAL = process.env.NODE_ENV === 'development' ? 500 : 0

export default function (propThought, origin) {
  const { data: thought } = useSWR(
    propThought.slug,
    (query) => fetchOneThoughtBySlug({ slug: propThought.slug }),
    { initialData: propThought, refreshInterval: INTERVAL }
  )
  return [thought]
}
