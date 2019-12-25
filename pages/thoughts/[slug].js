import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useInterval from '@use-it/interval'
import Page from '../../components/Page'
import Thought from '../../components/Thought'
import RelatedContent from '../../components/RelatedContent'
import useRelatedContent from '../../src/useRelatedContent'
import { fetchOneThoughtBySlug } from '../../src/fetchThoughts'

const INTERVAL = process.env.NODE_ENV === 'development' ? 1000 : null

export default function ThoughtPage (props) {
  const [thought, setThought] = useState(props.thought)
  const [relatedContent, setTags] = useRelatedContent()

  if (props.thought !== thought) {
    setThought(props.thought)
  }

  useEffect(
    () => setTags(thought.slug, thought.tags),
    [thought.slug, thought.tags.join(',')]
  )

  useInterval(() => {
    (async () => {
      setThought(await fetchOneThoughtBySlug(null, props.slug))
    })()
  }, INTERVAL)

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

ThoughtPage.getInitialProps = async ({ req, query }) => {
  return {
    indexUrl: '/',
    aboutUrl: '/about',
    archiveUrl: '/thoughts/archive',
    avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
    slug: query.slug,
    thought: await fetchOneThoughtBySlug(req, query.slug)
  }
}
