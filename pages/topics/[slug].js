import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'
import Thoughts from '../../components/Thoughts'
import { fetchTopicBySlug } from '../../src/fetchTopic'
import { fetchThoughtsByTopicSlug } from '../../src/fetchThoughts'
import withCommonProps from '../../src/withCommonProps'

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    return withCommonProps({
      topic: fetchTopicBySlug(query.slug),
      thoughts: await fetchThoughtsByTopicSlug(req, query.slug)
    })
  }

  render () {
    return (
      <Page title={`Articles on ${this.props.topic.name}`}>
        <main>
          <div className='prose'>
            <h1>
              {this.props.topic.name}
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
