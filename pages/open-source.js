import React from 'react'
import Page from '../components/Page'
import Projects from '../components/Projects'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      archiveUrl: '/thoughts/archive',
      twitterUrl: 'https://twitter.com/lukemorton',
      twitterHandle: '@LukeMorton',
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
          <Projects
            title={<h1>Open source projects</h1>}
            projects={this.props.projects}
            after={<p>You can find even more of my open source work on my <a href={this.props.githubUrl}>GitHub profile</a>.</p>}
            />
        </main>
      </Page>
    )
  }
}