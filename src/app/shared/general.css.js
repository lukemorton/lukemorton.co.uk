import css from 'styled-jsx/css'
import { fromMobile, fromTablet } from '../settings/breakpoints'

export default css.global`
body {
  color: #333333;
  background-color: #ffffff;
  margin: 1em;
}

@media ${fromMobile} {
  body {
    margin: 2em;
  }
}

@media ${fromTablet} {
  body {
    margin: 3em;
    font-size: 18px;
  }
}

a,
a code {
  color: #0088cc;
  text-decoration: underline;
}

a:hover,
a:focus {
  color: #005580;
}
`
