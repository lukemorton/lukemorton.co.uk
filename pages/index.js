import React from 'react'
import Link from 'next/link'
import Page from '../src/app/components/Page'
import Prose from '../src/app/components/Prose'
import Thoughts from '../src/app/components/Thoughts'
import withCommonProps from '../src/app/propMiddleware/withCommonProps'

export default function Index ({ archiveUrl, thoughts }) {
  return (
    <Page title='Exploring technology & teams'>
      <main>
        <Prose>
          <h1 className='larger'>Exploring technology &&nbsp;teams</h1>

          <p>
            Technology is consuming every aspect of society and yet in a rapidly
            changing landscape we struggle to keep up. Organisations are left
            with a decision: innovate or be disrupted.
          </p>

          <p>
            I've spent the last 15 years building software and technology teams
            and this website represents some of what I have learned so far. Here
            you will find a collection of{' '}
            <Link href={archiveUrl}>
              <a>articles</a>
            </Link>{' '}
            about software, people and everything inbetween.
          </p>
        </Prose>
      </main>

      <aside>
        <Thoughts
          title={<h2>Recent articles</h2>}
          thoughtTitleWrapper={title => <h3>{title}</h3>}
          thoughts={thoughts}
          after={
            <p>
              Please do read more from{' '}
              <Link href={archiveUrl}>
                <a>the archives</a>
              </Link>
              .
            </p>
          }
        />
      </aside>
    </Page>
  )
}

Index.getInitialProps = withCommonProps(
  async ({ dependencyContainer, origin }) => {
    const { fetchRecentThoughts } = await dependencyContainer()

    return {
      origin,
      thoughts: await fetchRecentThoughts(origin)
    }
  }
)
