import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'
import { fetchAllThoughts } from '../../src/fetchThoughts'
import withCommonProps from '../../src/withCommonProps'

function buildOriginFromRequest (req) {
  const host = req ? req.headers.host : window.location.hostname
  return host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
}

export default function ThoughtArchive ({ indexUrl, thoughts }) {
  return (
    <Page title='All articles'>
      <main>
        <div className='prose'>
          <h1>
            All articles
          </h1>

          <p>
            Technology articles from code to teams to organisational transformation by Luke Morton.
          </p>
        </div>

        <Thoughts
          thoughtTitleWrapper={(title) => <h2 className='h3'>{title}</h2>}
          thoughts={thoughts}
          after={<p>Feel free to go home now <Link href={indexUrl}><a>here</a></Link>.</p>}
          />
      </main>
    </Page>
  )
}

ThoughtArchive.getInitialProps = async ({ req }) => {
  return withCommonProps({
    thoughts: await fetchAllThoughts(buildOriginFromRequest(req))
  })
}
