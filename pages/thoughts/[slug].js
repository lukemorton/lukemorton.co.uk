import React from 'react'
import Page from '../../components/Page'
import Thought from '../../components/Thought'

function freshThoughts () {
  delete require.cache[require.resolve('../../public/dist/thoughts')]
  return require('../../public/dist/thoughts')
}

function freshThought (slug) {
  const thoughts = freshThoughts()
  return thoughts[slug]
}

export default class extends React.Component {
  static getInitialProps ({ query }) {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      archiveUrl: '/thoughts/archive',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      thought: freshThought(query.slug)
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
