import Link from 'next/link'
import {
  GuideIntro,
  GuidePartList,
  GuidePartListItem,
  Prose,
  TypeSpan,
} from 'ui'
import Page from '../Page'
import SignUpFormBanner from './SignUpFormBanner'

export default () => (
  <Page title="A team guide to Software Development">
    <main>
      <GuideIntro>
        <h1 className="display">
          A team guide to <TypeSpan fontSize="1.77em">Software</TypeSpan>{' '}
          <TypeSpan fontSize="1.2em">Development</TypeSpan>
        </h1>

        <p>
          This guide is for new and established{' '}
          <mark>software development teams</mark> working in organistions that
          understand software isn't just a necessity – it's the mechanism by
          which they will achieve their mission and purpose.
        </p>

        <p>
          Software is the pervasive technology of the 21st century. As the
          private, public and third sectors adapt their operating models to have
          software at both the forefront and foundation of their services, they
          have to transform into internet-era organisations.
        </p>

        <p>
          At the core of these organisations are the teams who produce the
          software that drives their success. These teams must adapt to
          ever-changing market and environmental conditions. They aren't part of
          a production line working in widget factories – they are problem
          solvers and innovators and need to be empowered as such.
        </p>

        <p>
          In this guide you will find: articles on what a successful team looks
          like, how to set one up for success, technical advice for evolutionary
          architectures, team practices and importantly how to have fun while
          delivering working software.
        </p>

        <p>
          The guide is a work in progress, with new content released weekly. You
          can sign up for updates by email below. Enjoy and good luck out there!
          <br />
          <br />
          Luke
        </p>
      </GuideIntro>

      <GuidePartList>
        <GuidePartListItem
          title={
            <h2>
              <TypeSpan largeFontSize="1.535em">The software</TypeSpan>{' '}
              <TypeSpan largeFontSize="1.08em">development team</TypeSpan>
            </h2>
          }
          description="Learn about software development teams, from what good looks like and how to set one up, to how they interact with their organisations."
          links={[
            <Link
              href="/articles/[slug]"
              as="/articles/what-is-a-software-development-team"
            >
              <a>What is a software development team?</a>
            </Link>,
            <Link
              href="/articles/[slug]"
              as="/articles/every-team-helps-to-develop-software"
            >
              <a>Every team helps to develop software</a>
            </Link>,
          ]}
        />

        <GuidePartListItem
          title={
            <h2 style={{ paddingTop: '.125em' }}>
              Ways of working to{' '}
              <TypeSpan largeFontSize="1.535em">deliver value</TypeSpan>
            </h2>
          }
          description="Learn how software development teams work effectively together. From agile delivery practices, to focusing on problems rather than solutions."
          links={[
            <Link
              href="/"
              href="/articles/[slug]"
              as="/articles/defining-your-ways-of-working"
            >
              <a>Defining your ways of working</a>
            </Link>,
            <span>🚧 Problem statements and hypotheses</span>,
          ]}
        />

        <GuidePartListItem
          title={
            <h2 style={{ paddingTop: '.125em' }}>
              <TypeSpan largeFontSize="1.08em">Lean software</TypeSpan>
              {` `}
              <TypeSpan largeFontSize="1.45em">delivery</TypeSpan>
            </h2>
          }
          description="Learn how software development teams work effectively together. From agile and lean methodologies, to focusing on problems rather than solutions."
          links={[
            <span>🚧 Delivering in slices</span>,
            <span>🚧 Decoupling deploy from release</span>,
          ]}
        />

        <GuidePartListItem
          title={
            <h2>
              <TypeSpan largeFontSize="1.535em">Architecting</TypeSpan>
              {` `}
              <TypeSpan largeFontSize="1.08em">for change</TypeSpan>
            </h2>
          }
          description="Learn how software development teams work effectively together. From agile and lean methodologies, to focusing on problems rather than solutions."
          links={[
            <span>🚧 How teams architect for change</span>,
            <>
              Topic:{' '}
              <Link href="/topics/[slug]" as="/topics/clean-architecture">
                <a>Clean Architecture</a>
              </Link>
            </>,
          ]}
        />
      </GuidePartList>

      <Prose noIntro>
        <h2>Subscribe for updates</h2>

        <p>
          I'd love to keep you updated on my progress as I add new content to
          this guide. I'm writing an article a week at the moment, I promise not
          to email you more than once per week and will only contact you
          regarding team guide updates.
        </p>
      </Prose>

      <SignUpFormBanner />

      <Prose noIntro>
        <h2>Your feedback is helpful</h2>

        <p>
          If you've found this content useful, you've spotted an error, or have
          some feedback, your help is very much welcome. Please{' '}
          <a href="https://github.com/lukemorton/lukemorton.co.uk">
            open an issue
          </a>
          {` `}
          on GitHub or open a Pull Request if it's a quick fix.
        </p>

        <p>
          I'm very open to feedback, please to get in touch with your comments
          and suggestions:
          <br />
          <a href="mailto:contact@lukemorton.tech">contact@lukemorton.tech</a>
        </p>
      </Prose>
    </main>
  </Page>
)
