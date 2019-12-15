import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

export default class extends React.Component {
  static getInitialProps () {
    return {
      indexUrl: '/',
      aboutUrl: '/about',
      avatarSrc: 'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180'
    }
  }

  render () {
    return (
      <Page title='About the Author'>
        <main>
          <h1>
            About the Author
          </h1>

          <p className='meta'>
            <Link href={this.props.aboutUrl}>
              <a>
                <img
                  src={this.props.avatarSrc}
                  style={{ height: '6em', width: '6em' }}
                  />
              </a>
            </Link>
          </p>

          <div className='content'>
            <p>
              I've developed commercial web applications as a software engineer since 2009 though I've been building on the web since 2004.
            </p>

            <p>
              I'm currently a Director at <a href='https://madetech.com'>Made Tech</a> where I help our customers transform their approach to software delivery. I have created and transformed software engineering departments, introduced best practices such as test-driven development, pair programming and continuous delivery to software teams, and built technology roadmaps for business critical platforms. I’ve lead efforts to create exciting engineering cultures that make hiring easy.
            </p>

            <p>
              Though I'm not coding day-to-day I'm very much coding in my spare time having recently been building <a href='https://github.com/lukemorton/web-deployer'>open source deployment tools</a> for Kubernetes in Golang as well as experimenting with Clean Architecture in Ruby on Rails applications.
            </p>

            <p>
              I'm a generalist software engineer at heart. I practice and preach agile, encourage XP/CI/CD/TDD/BDD, architect things like APIs and delivery piplines, reorganise archaic code bases and generally bring order to the universe.
            </p>

            <p>
              I acknowledge the universe is intersectional and do my best to share and uncover information from all walks of life, mostly <a href='https://twitter.com/LukeMorton'>via Twitter</a>. Basically I do my utmost to be a good human and be kind to the world and me.
            </p>

            <h2>Timeline</h2>

            <p>
              Brought up with tech and of the internet generation I think it's only fair to give you some highlights. Here is a stripped down timeline of my life in tech:
            </p>

            <ul>
              <li>
                Dad annoyed me by constantly recording me with his Camcorder.
              </li>

              <li>
                I became master of VHS.
              </li>

              <li>
                Dad bought a DVD player from America, no one knew what I was going on about a school.
              </li>

              <li>
                First family computer in 1996. Highlights include using Corel Draw to create make-believe business cards for Lork Meutron.
              </li>

              <li>
                Mafia MMORPG games introduce me to the idea I might like to make a game too.
              </li>

              <li>
                Started learning HTML at 13. Even before I started I realised what a piece of crap Frontpage was and used Dreamweaver instead.
              </li>

              <li>
                After learning HTML wasn't powerful enough to make a click based role playing game I settled for making static sites for fun.
              </li>

              <li>
                At 15 I bought lukemorton.co.uk and started learning PHP to make my own WordPress templates for my first blog.
              </li>

              <li>
                Started becoming really tetchy about non-standards compliant websites.
              </li>

              <li>
                Bought a book on PHP, MySQL and Apache. I was finally going to make my game.
              </li>

              <li>
                Didn't make a game. Didn't stay on at school. Didn't get a job.
              </li>

              <li>
                Did write a lot of unreleased and unrealised code.
              </li>

              <li>
                Went to work for my uncle sacking potatoes.
              </li>

              <li>
                Got tired of sacking potatoes and went back to college. Also got an IT support job at <a href='http://freeola.com'>Freeola</a>.
              </li>

              <li>
                Started emailing various departments of Freeola telling them to stop using tables and to start using divs.
              </li>

              <li>
                Got moved into web content department to start fixing said issues.
              </li>

              <li>
                Tried out as a programmer for 3 months after complaining about messy PHP templates.
              </li>

              <li>
                Got hired. Wrote a web mail client. Rebuilt several core infrastructure systems such as Support Ticketing, Timesheets, Knowledge Base.
              </li>

              <li>
                Tried leaving. Got my own office. Eventually left.
              </li>

              <li>
                I worked for a startup, <a href='https://gignite.com'>Gignite</a> where I made some very good friends, some of whom I'm still working with today.
              </li>

              <li>Present day, and working at <a href='https://madetech.com'>Made Tech</a>.</li>
            </ul>
          </div>

          ---

          <p>
            You may head <Link href={this.props.indexUrl}><a>back home</a></Link> now.
          </p>
        </main>
      </Page>
    )
  }
}
