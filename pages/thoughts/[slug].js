import React, { useState } from 'react'
import useInterval from '@use-it/interval'
import Page from '../../components/Page'
import Thought from '../../components/Thought'
import { fetchOneThoughtBySlug } from '../../src/fetchThoughts'

const INTERVAL = process.env.NODE_ENV === 'development' ? 1000 : null

export default function ThoughtPage (props) {
  const [thought, setThought] = useState(props.thought)

  useInterval(() => {
    (async () => {
      setThought(await fetchOneThoughtBySlug(null, props.slug))
    })()
  }, INTERVAL)

  return (
    <Page title={thought.title.plain}>
      <main>
        <Thought {...props} thought={thought} />
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
