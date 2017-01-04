import React from 'react'
import Page from '../../components/Page'
import Thought from '../../components/Thought'
import thoughts from '../../data/thoughts'

export default class extends React.Component {
  static getInitialProps ({ query }) {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      archiveUrl: '/thoughts/archive',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      thought: thoughts[query.slug]
    }
  }

  render () {
    return (
      <Page title={this.props.plainTitle}>
        <main>
          <Thought {...this.props} />
        </main>
      </Page>
    )
  }
}
