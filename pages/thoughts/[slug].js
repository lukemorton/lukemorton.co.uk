import React from 'react'
import Page from '../../components/Page'
import Thought from '../../components/Thought'
import { thought } from '../../src/listThoughts'

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      archiveUrl: '/thoughts/archive',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      thought: await thought(req, query.slug)
    }
  }

  render () {
    return (
      <Page title={this.props.thought.title.plain}>
        <main>
          <Thought {...this.props} />
        </main>
      </Page>
    )
  }
}
