import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import withCommonProps from '../src/withCommonProps'

export default function Error ({ error, indexUrl }) {
  return (
    <Page title={error}>
      <main>
        <h1>
          {error}
        </h1>

        <p>
          Sorry, <Link href={indexUrl}><a>back to home</a></Link>?
        </p>
      </main>
    </Page>
  )
}

function errorMessage (res, err) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  if (statusCode === 404) {
    return 'Page not found'
  } else {
    return 'An error occured'
  }
}

Error.getInitialProps = ({ res, err }) => {
  return withCommonProps({
    error: errorMessage(res, err)
  })
}
