import Link from 'next/link'
import { Page, Prose, Thoughts } from '../../ui'

export default ({ archiveUrl, topic, thoughts }) => (
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
