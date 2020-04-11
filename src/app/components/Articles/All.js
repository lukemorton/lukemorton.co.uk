import { Prose, Thoughts } from 'ui'
import Page from '../Page'

export default ({ indexUrl, thoughts }) => (
  <Page title="All articles">
    <main>
      <Prose>
        <h1 className="larger">All articles</h1>

        <p>
          Technology articles from code to teams to organisational
          transformation by Luke Morton.
        </p>
      </Prose>

      <Thoughts
        thoughtTitleWrapper={(title) => <h2 className="h3">{title}</h2>}
        thoughts={thoughts}
        after={<p>Thanks for checking out my articles!</p>}
      />
    </main>
  </Page>
)
