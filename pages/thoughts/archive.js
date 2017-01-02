import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'
import thoughtsArchive from '../../data/thoughtsArchive'

export default class extends React.Component {
  static getInitialProps () {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      thoughts: thoughtsArchive,
    }
  }

  render () {
    return (
      <Page title='An Exploration of the Web'>
        <main>
          <h1>
            Thought Archive
          </h1>

          <p className='meta'>
            <Link href={this.props.indexUrl}>
              <img
                src={this.props.avatarSrc}
                style={{ height: '3em', width: '3em' }}
                />
            </Link>

            <em>By <Link href={this.props.aboutUrl}>Luke Morton</Link></em>
          </p>

          <Thoughts
            thoughtTitleWrapper={(title) => <h2>{title}</h2>}
            thoughts={this.props.thoughts}
            after={<p>Feel free to go home now <a href={this.props.indexUrl}>here</a>.</p>}
            />
        </main>
      </Page>
    )
  }
}
