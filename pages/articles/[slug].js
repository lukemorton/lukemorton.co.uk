import React from 'react'
import Link from 'next/link'
import Page from '../../src/app/components/Page'
import Thought from '../../src/app/components/Thought'
import RelatedContent from '../../src/app/components/RelatedContent'
import useLiveBlog from '../../src/app/hooks/useLiveBlog'
import useDelayedRelatedContent from '../../src/app/hooks/useDelayedRelatedContent'
import withCommonStaticProps from '../../src/app/propMiddleware/withCommonStaticProps'
import dependencyContainer from '../../src/app/dependencyContainer'

export default function ThoughtPage(props) {
  const [thought] = useLiveBlog(props.thought)
  const [relatedContent] = useDelayedRelatedContent(thought)

  return (
    <Page
      article
      title={thought.title.plain}
      description={thought.excerpt.plain}
      image={thought.featuredImage}
      canonical={thought.canonical || `/articles/${thought.slug}`}
      url={`/articles/${thought.slug}`}
    >
      <main>
        <Thought {...props} thought={thought} />

        <RelatedContent thoughts={relatedContent} />
      </main>
    </Page>
  )
}

export const getStaticPaths = async () => {
  const { fetchAllThoughts } = await dependencyContainer('build')
  const thoughts = await fetchAllThoughts()

  const paths = thoughts.map(({ slug }) => {
    return { params: { slug } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = withCommonStaticProps(async ({ params }) => {
  const { fetchOneThoughtBySlug } = await dependencyContainer('build')

  return {
    props: {
      slug: params.slug,
      thought: await fetchOneThoughtBySlug(null, params.slug),
    },
  }
})
