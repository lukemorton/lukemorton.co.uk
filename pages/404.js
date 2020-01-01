import React from 'react'
import Link from 'next/link'
import Page from '../src/app/components/Page'
import withCommonProps from '../src/app/propMiddleware/withCommonProps'

export default function Error ({ indexUrl }) {
  return (
    <Page title='Page not found (404)'>
      <main>
        <h1>
          Page not found
        </h1>

        <p>
          Sorry, <Link href={indexUrl}><a>back to home</a></Link>?
        </p>
      </main>
    </Page>
  )
}

Error.getInitialProps = withCommonProps(_ => {})
