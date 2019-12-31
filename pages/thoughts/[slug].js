import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'
import Thought from '../../components/Thought'
import RelatedContent from '../../components/RelatedContent'
import useDelayedRelatedContent from '../../src/useDelayedRelatedContent'
import useLiveBlog from '../../src/useLiveBlog'
import { fetchOneThoughtBySlug } from '../../src/fetchThoughts'
import withExceptionHandling from '../../src/withExceptionHandling'
import withCommonProps from '../../src/withCommonProps'

function buildOriginFromRequest (req) {
  const host = req ? req.headers.host : window.location.hostname
  return host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
}

export default function ThoughtPage (props) {
  const [thought] = useLiveBlog(props.thought, () => {
    return fetchOneThoughtBySlug(buildOriginFromRequest(null), props.slug)
  })
  const [relatedContent] = useDelayedRelatedContent(thought)

  return (
    <Page title={thought.title.plain}>
      <main>
        <Thought {...props} thought={thought} />

        <RelatedContent thoughts={relatedContent} />

        <hr />

        <p>
          Feel free to read some <Link href={props.archiveUrl}><a>more thoughts</a></Link> or go back to <Link href={props.indexUrl}><a>the introduction</a></Link>.
        </p>
      </main>
    </Page>
  )
}

ThoughtPage.getInitialProps = withExceptionHandling(async ({ req, query }) => {
  return withCommonProps({
    slug: query.slug,
    thought: await fetchOneThoughtBySlug(buildOriginFromRequest(req), query.slug)
  })
})
