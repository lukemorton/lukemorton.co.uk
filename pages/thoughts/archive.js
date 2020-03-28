import React from 'react'
import Link from 'next/link'
import Page from '../../src/app/components/Page'
import Prose from '../../src/app/components/Prose'
import Thoughts from '../../src/app/components/Thoughts'
import withCommonStaticProps from '../../src/app/propMiddleware/withCommonStaticProps'
import dependencyContainer from '../../src/app/dependencyContainer'

export default function ThoughtArchive ({ indexUrl, thoughts }) {
  return (
    <Page title='All articles'>
      <main>
        <Prose>
          <h1 className='larger'>All articles</h1>

          <p>
            Technology articles from code to teams to organisational
            transformation by Luke Morton.
          </p>
        </Prose>

        <Thoughts
          thoughtTitleWrapper={title => <h2 className='h3'>{title}</h2>}
          thoughts={thoughts}
          after={
            <p>
              Feel free to go home now{' '}
              <Link href={indexUrl}>
                <a>here</a>
              </Link>
              .
            </p>
          }
        />
      </main>
    </Page>
  )
}

export const getStaticProps = withCommonStaticProps(
  async () => {
    const { fetchAllThoughts } = await dependencyContainer('build')

    return {
      props: {
        thoughts: await fetchAllThoughts()
      }
    }
  }
)
