import useSWR from 'swr'
import { fetchOneThoughtBySlug } from '../factories/browserFactory'

const INTERVAL = process.env.NODE_ENV === 'development' ? 500 : 0

function buildOrigin() {
  const host = window.location.hostname
  return host.indexOf('localhost') > -1
    ? 'http://lvh.me:3000'
    : `https://${host}`
}

export default function (propThought, origin) {
  const { data: thought } = useSWR(
    propThought.slug,
    (query) => fetchOneThoughtBySlug(buildOrigin(), propThought.slug),
    { initialData: propThought, refreshInterval: INTERVAL }
  )
  return [thought]
}
