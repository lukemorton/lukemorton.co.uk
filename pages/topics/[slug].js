import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'
import { fetchTopicBySlug } from '../../src/fetchTopic'
import { fetchThoughtsByTopicSlug } from '../../src/fetchThoughts'
import withErrorHandling from '../../src/withErrorHandling'
import withCommonProps from '../../src/withCommonProps'


export default function Topic ({ indexUrl, topic, thoughts }) {
  return (
    <Page title={`Articles on ${topic.name}`}>
      <main>
        <div className='prose'>
          <h1>
            {topic.name}
          </h1>

          <p>
            How cool!
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

Topic.getInitialProps = withErrorHandling(withCommonProps(async ({ origin, query }) => {
  return {
    topic: fetchTopicBySlug(query.slug),
    thoughts: await fetchThoughtsByTopicSlug(origin, query.slug)
  }
}))
