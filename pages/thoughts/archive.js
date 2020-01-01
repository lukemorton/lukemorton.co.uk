import React from 'react'
import Link from 'next/link'
import Page from '../../src/app/components/Page'
import Thoughts from '../../src/app/components/Thoughts'
import { fetchAllThoughts } from '../../src/app/factory'
import withCommonProps from '../../src/app/propMiddleware/withCommonProps'

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

ThoughtArchive.getInitialProps = withCommonProps(async ({ origin }) => {
  return {
    origin,
    thoughts: await fetchAllThoughts(origin)
  }
})
