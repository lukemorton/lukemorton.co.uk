import React from 'react'
import Link from 'next/link'
import Page from '../../src/app/components/Page'
import Prose from '../../src/app/components/Prose'
import withCommonStaticProps from '../../src/app/propMiddleware/withCommonStaticProps'

export default function Index({ archiveUrl, thoughts }) {
  return (
    <Page
      title="A team guide to software development"
      description="I've spent the last 15 years building software and technology teams and this website represents some of what I have learned so far."
    >
      <main>
        <Prose>
          <h1 className="larger">Team guide to software development</h1>

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
    </Page>
  )
}

export const getStaticProps = withCommonStaticProps()
