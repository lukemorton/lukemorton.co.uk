import { Page, Thought, RelatedContent } from '../../ui'
import useLiveBlog from '../../hooks/useLiveBlog'
import useDelayedRelatedContent from '../../hooks/useDelayedRelatedContent'

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
        <Thought {...props} thought={thought} />

        <RelatedContent thoughts={relatedContent} />
      </main>
    </Page>
  )
}
