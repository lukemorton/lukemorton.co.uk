import React from 'react'
import Link from 'next/link'
import Page from '../../src/app/components/Page'
import Prose from '../../src/app/components/Prose'
import Thoughts from '../../src/app/components/Thoughts'
import withCommonStaticProps from '../../src/app/propMiddleware/withCommonStaticProps'
import dependencyContainer from '../../src/app/dependencyContainer'

export default function Topic({ indexUrl, topic, thoughts }) {
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

export const getStaticPaths = async () => {
  const { fetchAllTopics } = await dependencyContainer('build')
  const topics = await fetchAllTopics()

  const paths = topics.map(({ slug }) => {
    return { params: { slug } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = withCommonStaticProps(async ({ params }) => {
  const {
    fetchThoughtsByTopicSlug,
    fetchTopicBySlug,
  } = await dependencyContainer('build')

  return {
    props: {
      topic: fetchTopicBySlug(params.slug),
      thoughts: await fetchThoughtsByTopicSlug(null, params.slug),
    },
  }
})
