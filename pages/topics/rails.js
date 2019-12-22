import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'
import { topic } from '../../src/listThoughts'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      thoughts: await topic(req, 'rails')
    }
  }

  render () {
    return (
      <Page title='Articles regarding Ruby on Rails'>
        <main>
          <div className='prose'>
            <h1>
              Ruby on Rails
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
