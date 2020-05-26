import Link from 'next/link'
import { GuideBanner, Thought, RelatedContent } from 'ui'
import Page from '../Page'
import SignUpFormBanner from '../Guides/SignUpFormBanner'
import useLiveBlog from '../../hooks/useLiveBlog'
import useDelayedRelatedContent from '../../hooks/useDelayedRelatedContent'

const inSoftwareDevelopmentGuide = (thought) =>
  thought.tags && thought.tags.find((t) => t === 'Software development')

export default (props) => {
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
        {inSoftwareDevelopmentGuide(thought) && (
          <GuideBanner>
            This article features in a team guide to{' '}
            <Link href="/guides/software-development">
              <a>software&nbsp;development</a>
            </Link>
          </GuideBanner>
        )}

        <Thought {...props} thought={thought} />

        <hr className="mt mb" />

        <SignUpFormBanner />

        <RelatedContent thoughts={relatedContent} />
      </main>
    </Page>
  )
}
