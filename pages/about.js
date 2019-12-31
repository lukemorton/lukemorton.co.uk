import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import withCommonProps from '../src/withCommonProps'

export default function About ({ indexUrl }) {
  return (
    <Page title='About the Author'>
      <main>
        <div className='prose'>
          <h1>
            About the Author
          </h1>

          <p>
            I'm CTO at <a href='https://madetech.com'>Made Tech</a> where we help organisations transform into high performance software teams, through agile software delivery and on-site training.
          </p>

          <p>
            I champion modern software engineering practices. I help transform private and public sector organisation's digital and technology delivery from the ground up. Whether it's coaching software teams or defining technology strategy my passion is big impact change.
          </p>

          <p>
            I've been a software engineer for 15 years, developing critical infrastructure for government departments, building global e-commerce platforms, and helping organisations create strong engineering cultures.
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

        <hr />

        <p>
          You may head <Link href={indexUrl}><a>back home</a></Link> now.
        </p>
      </main>
    </Page>
  )
}

About.getInitialProps = withCommonProps(_ => {})
