import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Thoughts from '../components/Thoughts'
import { fetchRecentThoughts } from '../src/fetchThoughts'
import withCommonProps from '../src/withCommonProps'

function buildOriginFromRequest (req) {
  const host = req ? req.headers.host : window.location.hostname
  return host.indexOf('localhost') > -1 ? 'http://lvh.me:3000' : `https://${host}`
}

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return withCommonProps({
      thoughts: await fetchRecentThoughts(buildOriginFromRequest(req))
    })
  }

  render () {
    return (
      <Page title='An exploration of the way we use technology'>
        <main>
          <div className='prose'>
            <h1>
              <span className='break--mobile'>An exploration</span> of the way we use technology
            </h1>

            <p>
              Technology is consuming every aspect of society and yet in a rapidly changing landscape we struggle to keep up. Organisations are left with a decision: innovate or be disrupted.
            </p>

            <p>
              I've spent the last 15 years building software and technology teams and this website represents some of what I have learned so far. Here you will find a collection of <Link href={this.props.archiveUrl}><a>articles</a></Link> about software, people and everything inbetween.
            </p>
          </div>
        </main>

        <aside>
          <Thoughts
            title={<h2>Recent articles</h2>}
            thoughtTitleWrapper={(title) => <h3>{title}</h3>}
            thoughts={this.props.thoughts}
            after={<p>Please do read more from <Link href={this.props.archiveUrl}><a>the archives</a></Link>.</p>}
            />
        </aside>
      </Page>
    )
  }
}
