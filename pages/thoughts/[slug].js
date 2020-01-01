import React from 'react'
import Link from 'next/link'
import Page from '../../src/app/components/Page'
import Thought from '../../src/app/components/Thought'
import RelatedContent from '../../src/app/components/RelatedContent'
import useDelayedRelatedContent from '../../src/app/hooks/useDelayedRelatedContent'
import useLiveBlog from '../../src/app/hooks/useLiveBlog'
import { fetchOneThoughtBySlug } from '../../src/app/factory'
import withErrorHandling from '../../src/app/propMiddleware/withErrorHandling'
import withCommonProps from '../../src/app/propMiddleware/withCommonProps'

export default function ThoughtPage (props) {
  const [thought] = useLiveBlog(props.thought, () => {
    return fetchOneThoughtBySlug(props.origin, props.slug)
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

ThoughtPage.getInitialProps = withErrorHandling(withCommonProps(async ({ origin, query }) => {
  return {
    origin,
    slug: query.slug,
    thought: await fetchOneThoughtBySlug(origin, query.slug)
  }
}))
