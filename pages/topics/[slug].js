import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'
import { fetchThoughtsByTopic } from '../../src/fetchThoughts'
import { TOPIC_SLUG_TO_FILE_MAP, TOPIC_SLUG_TO_NAME_MAP } from '../../src/topics'

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      topicName: TOPIC_SLUG_TO_NAME_MAP[query.slug],
      thoughts: await fetchThoughtsByTopic(req, TOPIC_SLUG_TO_FILE_MAP[query.slug])
    }
  }

  render () {
    return (
      <Page title={`Articles on ${this.props.topicName}`}>
        <main>
          <div className='prose'>
            <h1>
              {this.props.topicName}
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
