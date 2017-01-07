import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Thoughts from '../components/Thoughts'
import Projects from '../components/Projects'
import latestThoughts from '../data/latestThoughts'

export default class extends React.Component {
  static getInitialProps () {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      archiveUrl: '/thoughts/archive',
      twitterUrl: 'https://twitter.com/lukemorton',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      twitterHandle: '@LukeMorton',
      thoughts: latestThoughts,
      projects: [
        {
          name: 'MarketTown',
          description: 'A collection of open source libraries for e-commerce.',
          url: 'https://github.com/madetech/market_town'
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
      <Page title='An Exploration of the Web'>
        <main>
          <h1>
            <span className='break--mobile'>An Exploration</span> of the Web
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

          <div className='content'>
            <p>
              Like both the atoms that make us and the systems that comprise the universe in which we live, the Internet is a complex organism that we explore daily.
            </p>

            <p>
              Here you will find a collection of <Link href={this.props.archiveUrl}>my thoughts</Link> on the Internet and the systems that make it so complex. You will also find some of those thoughts realised in the form of open source code. Hopefully the resources contained within these HTML walls will encourage you to explore for yourself this rich and interesting landscape.
            </p>

            <p>
              If you want you can find a little more <Link href={this.props.aboutUrl}>about me</Link> and please do get in touch via twitter <a href={this.props.twitterUrl}>{this.props.twitterHandle}</a>.
            </p>

            <p>
              Finally, everything you find here is yours to keep unless licensed otherwise.
            </p>
          </div>
        </main>

        <aside>
          <Thoughts
            title={<h2>Thoughts</h2>}
            thoughtTitleWrapper={(title) => <h3>{title}</h3>}
            thoughts={this.props.thoughts}
            after={<p>Please do read more from <a href={this.props.archiveUrl}>the archives</a>.</p>}
            />

          <Projects
            title={<h2>Open Source Projects</h2>}
            projects={this.props.projects}
            after={<p>You can find even more of my open source work on my <a href={this.props.githubUrl}>GitHub profile</a>.</p>}
            />
        </aside>
      </Page>
    )
  }
}
