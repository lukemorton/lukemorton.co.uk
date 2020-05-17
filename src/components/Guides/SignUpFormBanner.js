import Link from 'next/link'
import { GuideBookPromo } from 'ui'
import SignUpForm from './SignUpForm'

export default () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '3em 0',
    }}
  >
    <Link href="/guides/software-development" passHref>
      <GuideBookPromo />
    </Link>

    <div>
      <p className="h3">Sign up new content weekly</p>

      <SignUpForm />
    </div>
  </div>
)
