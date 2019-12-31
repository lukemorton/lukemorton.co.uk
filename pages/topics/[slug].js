import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'
import { fetchTopicBySlug } from '../../src/fetchTopic'
import { fetchThoughtsByTopicSlug } from '../../src/fetchThoughts'
import handleExceptions from '../../src/handleExceptions'
import withCommonProps from '../../src/withCommonProps'

function buildOriginFromRequest (req) {
  const host = req ? req.headers.host : window.location.hostname
  return host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
}

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

Topic.getInitialProps = handleExceptions(async ({ req, res, query }) => {
  return withCommonProps({
    topic: fetchTopicBySlug(query.slug),
    thoughts: await fetchThoughtsByTopicSlug(buildOriginFromRequest(req), query.slug)
  })
})
