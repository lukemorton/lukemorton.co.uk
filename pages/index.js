import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Thoughts from '../components/Thoughts'
import Projects from '../components/Projects'
import { recentThoughts } from '../src/listThoughts'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      archiveUrl: '/thoughts/archive',
      twitterUrl: 'https://twitter.com/lukemorton',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      twitterHandle: '@LukeMorton',
      thoughts: await recentThoughts(req),
      projects: [
        {
          name: 'jvm-examples',
          description: 'Various JVM examples across Clojure, Scala, Kotlin, Java, etc.',
          url: 'https://github.com/lukemorton/jvm-examples'
        },
        {
          name: 'Space',
          description: 'An example of Clean Architecture in Rails.',
          url: 'https://github.com/lukemorton/space'
        },
        {
          name: 'TypeScript and CA',
          description: 'An example of Clean Architecture in TypeScript.',
          url: 'https://github.com/lukemorton/typescript-clean-architecture-example'
        },
        {
          name: 'markedly',
          description: 'Turn a directory of Markdown into JSON for your blog',
          url: 'https://github.com/lukemorton/markedly'
        },
        {
          name: 'cf-deploy',
          description: 'cf-deploy is the tool you use to deploy your rails app to CloudFoundry providers like Pivotal.',
          url: 'https://github.com/madetech/cf-deploy'
        },
        {
          name: 'rui',
          description: 'Very experimental ruby user interface library for HTML/CSS.',
          url: 'https://github.com/lukemorton/rui'
        },
        {
          name: 'Lily',
          description: 'A lightweight web application library for PHP.',
          url: 'https://github.com/lukemorton/lily'
        }
      ]
    }
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

          <Projects
            title={<h2>Open source projects</h2>}
            projects={this.props.projects}
            after={<p>You can find even more of my open source work on my <a href={this.props.githubUrl}>GitHub profile</a>.</p>}
            />
        </aside>
      </Page>
    )
  }
}
