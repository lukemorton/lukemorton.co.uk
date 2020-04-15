import Link from 'next/link'
import { Prose, Thoughts, TypeSpan } from 'ui'
import Page from './Page'

export default ({ archiveUrl, thoughts }) => (
  <Page
    title="Exploring teams & technology"
    description="I've spent the last 15 years building software and technology teams and this website represents some of what I have learned so far."
  >
    <main>
      <Prose>
        <h1 className="larger">
          <TypeSpan largeFontSize="1.09em">
            Exploring teams{' '}
            <TypeSpan largeFontSize="1.22em">& technology</TypeSpan>
          </TypeSpan>
        </h1>

        <p>
          Technology is consuming every aspect of society and yet in a rapidly
          changing landscape we struggle to keep up. Organisations are left with
          a decision: innovate or be disrupted.
        </p>

        <p>
          I've spent the last 15 years building software and technology teams
          and this website represents some of what I have learned so far. Here
          you will find a collection of{' '}
          <Link href={archiveUrl}>
            <a>articles</a>
          </Link>{' '}
          about software, people and everything inbetween.
        </p>
      </Prose>
    </main>

    <aside>
      <Thoughts
        title={<h2>Recent articles</h2>}
        thoughtTitleWrapper={(title) => <h3>{title}</h3>}
        thoughts={thoughts}
        after={
          <p>
            <Link href={archiveUrl}>
              <a>Read more articles by Luke</a>
            </Link>
          </p>
        }
      />
    </aside>
  </Page>
)
