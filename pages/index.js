import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Thoughts from '../components/Thoughts'
import Projects from '../components/Projects'

export default class extends React.Component {
  static async getInitialProps () {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      archiveUrl: '/thoughts/archive',
      twitterUrl: 'https://twitter.com/lukemorton',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180',
      twitterHandle: '@LukeMorton',
      thoughts: [],
      projects: []
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
            thoughts={this.props.thoughts}
            after={<p>Please do read more from <a href={this.props.archiveUrl}>the archives</a>.</p>}
            />

          <Projects
            title={<h2>Open Source Projects</h2>}
            projects={this.props.projects}
            />
        </aside>
      </Page>
    )
  }
}
