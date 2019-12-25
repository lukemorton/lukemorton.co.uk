import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'
import { fetchThoughtsByTopic } from '../../src/fetchThoughts'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      thoughts: await fetchThoughtsByTopic(req, 'cleanArchitecture')
    }
  }

  render () {
    return (
      <Page title='Articles on Clean Architecture'>
        <main>
          <div className='prose'>
            <h1>
              Clean Architecture
            </h1>

            <p>
              How cool!
            </p>
          </div>

          <Thoughts
            thoughtTitleWrapper={(title) => <h2 className='h3'>{title}</h2>}
            thoughts={this.props.thoughts}
            after={<p>Feel free to go home now <Link href={this.props.indexUrl}><a>here</a></Link>.</p>}
            />
        </main>
      </Page>
    )
  }
}
