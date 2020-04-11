import Link from 'next/link'
import { Page } from '../ui'

export default ({ indexUrl }) => (
  <Page title="Page not found (404)">
    <main>
      <h1>Page not found</h1>

      <p>
        Sorry,{' '}
        <Link href={indexUrl}>
          <a>back to home</a>
        </Link>
        ?
      </p>
    </main>
  </Page>
)
