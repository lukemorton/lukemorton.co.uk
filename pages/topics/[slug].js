import React from 'react'
import Link from 'next/link'
import Page from '../../src/app/components/Page'
import Prose from '../../src/app/components/Prose'
import Thoughts from '../../src/app/components/Thoughts'
import withCommonStaticProps from '../../src/app/propMiddleware/withCommonStaticProps'
import {
  fetchAllTopics,
  fetchThoughtsByTopicSlug,
  fetchTopicBySlug,
} from '../../src/app/factories/nodeFactory'

export default function Topic({ archiveUrl, topic, thoughts }) {
  return (
    <Page title={`Articles on ${topic.name}`}>
      <main>
        <Prose>
          <h1 className="larger">{topic.name}</h1>
        </Prose>

        <Thoughts
          thoughtTitleWrapper={(title) => <h2 className="h3">{title}</h2>}
          thoughts={thoughts}
          after={
            <p>
              <Link href={archiveUrl}>
                <a>Read more articles by Luke</a>
              </Link>
            </p>
          }
        />
      </main>
    </Page>
  )
}

export const getStaticPaths = async () => {
  const topics = await fetchAllTopics()

  const paths = topics.map(({ slug }) => {
    return { params: { slug } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = withCommonStaticProps(async ({ params }) => {
  return {
    props: {
      topic: fetchTopicBySlug(params.slug),
      thoughts: await fetchThoughtsByTopicSlug(null, params.slug),
    },
  }
})
