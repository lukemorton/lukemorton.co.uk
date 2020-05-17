import Link from 'next/link'
import { GuideBookPromo, LayoutSideBySide } from 'ui'
import SignUpForm from './SignUpForm'

export default () => (
  <LayoutSideBySide>
    <div className="w-40">
      <Link href="/guides/software-development" passHref>
        <GuideBookPromo />
      </Link>
    </div>

    <div className="w-60 stretch">
      <p className="h3">Sign up for new content weekly</p>

      <SignUpForm />
    </div>
  </LayoutSideBySide>
)
