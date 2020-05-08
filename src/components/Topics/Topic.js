import Link from 'next/link'
import { GuideBanner, Prose, Thoughts } from 'ui'
import Page from '../Page'

export default ({ archiveUrl, topic, thoughts }) => (
  <Page title={`Articles on ${topic.name}`}>
    <main>
      {topic.guide === 'software-development' && (
        <GuideBanner>
          This topic is part of a team guide to{' '}
          <Link href="/topics/software-development">
            <a>software development</a>
          </Link>
        </GuideBanner>
      )}

      <Prose>
        <h1 className="larger">{topic.name}</h1>

        {topic.description && <p>{topic.description}</p>}
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
