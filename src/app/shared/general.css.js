import css from 'styled-jsx/css'
import { fromMedium, fromExtraLarge } from '../settings/breakpoints'

export default css.global`
body {
  color: #333333;
  background-color: #ffffff;
  margin: 1em;
}

@media ${fromMedium} {
  body {
    margin: 2em;
  }
}

@media ${fromExtraLarge} {
  body {
    margin: 5em 3em;
  }
}

a,
a code {
  color: #0056B3;
  text-decoration: underline;
}

a:hover,
a:focus {
  color: #004A99;
}
`
