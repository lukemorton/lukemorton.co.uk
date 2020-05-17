import Link from 'next/link'
import {
  GuideIntro,
  GuidePartList,
  GuidePartListItem,
  Prose,
  TypeSpan,
} from 'ui'
import Page from '../Page'
import SignUpForm from './SignUpForm'

export default () => (
  <Page title="Thanks for signing up">
    <main>
      <GuideIntro>
        <h1 className="larger">Thanks for signing up!</h1>

        <p>
          You are awesome! I'm very excited that you signed up. You'll receive
          up to one email a week from me with latest updates and content for my
          team guides. Thanks for your interest ❤️
        </p>

        <h2>Your privacy is important to me</h2>

        <p>
          I'll only use your email address to send you updates regarding my team
          guides, up to one per week. You can of course unsubscribe at anytime.
        </p>

        <h2>Your feedback is helpful</h2>

        <p>
          I'm very open to feedback, please to get in touch with your comments
          and suggestions:
          <br />
          <a href="mailto:contact@lukemorton.tech">contact@lukemorton.tech</a>
        </p>
      </GuideIntro>
    </main>
  </Page>
)
