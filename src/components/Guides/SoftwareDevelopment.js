import Link from 'next/link'
import {
  GuideIntro,
  GuidePartList,
  GuidePartListItem,
  Prose,
  TypeSpan,
} from 'ui'
import Page from '../Page'

export default () => (
  <Page title="A team guide to Software Development">
    <main>
      <GuideIntro>
        <h1 className="larger">
          <TypeSpan largeFontSize="1.07em">
            <TypeSpan largeFontSize=".95em">A team guide to</TypeSpan>{' '}
            <TypeSpan largeFontSize="1.68em">Software</TypeSpan>{' '}
            <TypeSpan largeFontSize="1.125em">Development</TypeSpan>
          </TypeSpan>
        </h1>

        <p>
          This guide is for software development teams working in organistions
          who've realised that software isn't just a necessity – it's the
          mechanism by which they will achieve their mission and purpose.
        </p>

        <p>
          Software is the pervasive technology of the 21st century. As the
          private, public and third sectors adapt their operating models to have
          software at both the forefront and foundation of their services, they
          have to transform into internet-era organisations.
        </p>

        <p>
          At the core of these organisations are the teams who produce the
          software that acts as their unique selling point and competitive
          advantage. These teams must adapt to ever-changing market and
          environmental conditions. They aren't part of a production line
          working in widget factories – they are problem solvers and innovators.
        </p>

        <p>
          The guide has been organised into parts. Over time content will change
          and new content will be added – you can subscribe for updates below.
        </p>

        <p>
          Enjoy and good luck out there!
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
          description="Learn about software development teams, from the roles and skills they need to succeed, to how they interact with their organisations."
          links={[
            <Link href="/">
              <a>What is a software development team?</a>
            </Link>,
            <Link href="/">
              <a>Every team is a software team</a>
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
          description="Learn how software development teams work effectively together. From agile and lean methodologies, to focusing on problems rather than solutions."
          links={[
            <Link href="/">
              <a>Defining your ways of working</a>
            </Link>,
            <Link href="/">
              <a>Problem statements and hypotheses</a>
            </Link>,
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
            <Link href="/">
              <a>How teams architect for change</a>
            </Link>,
            <>
              Topic:{' '}
              <Link href="/">
                <a>Clean Architecture</a>
              </Link>
            </>,
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
            <Link href="/">
              <a>Delivering in slices</a>
            </Link>,
            <Link href="/">
              <a>Decoupling deploy from release</a>
            </Link>,
          ]}
        />
      </GuidePartList>

      <Prose>
        <h2>Subscribe for updates</h2>

        <p>
          There will be an email subscription to keep you in the loop of updates
          to this team guide to Software Development and other future guides.
        </p>

        <p>
          Register your interest by emailing{' '}
          <a href="mailto:subscriptions@lukemorton.tech">
            subscriptions@lukemorton.tech
          </a>
          .
        </p>

        <h2>Feedback</h2>

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
          If you'd just like to get in touch to say thanks, please email{' '}
          <a href="mailto:contact@lukemorton.tech">contact@lukemorton.tech</a>.
        </p>
      </Prose>
    </main>
  </Page>
)
