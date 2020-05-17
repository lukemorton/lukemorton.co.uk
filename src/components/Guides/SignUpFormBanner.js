import Link from 'next/link'
import { GuideBookPromo, LayoutSideBySide } from 'ui'
import SignUpForm from './SignUpForm'

export default () => (
  <LayoutSideBySide>
    <Link href="/guides/software-development" passHref>
      <GuideBookPromo />
    </Link>

    <div>
      <p className="h3">Sign up for new content weekly</p>

      <SignUpForm />
    </div>
  </LayoutSideBySide>
)
