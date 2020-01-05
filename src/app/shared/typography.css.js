import css from 'styled-jsx/css'
import { fromMobile, fromTablet } from '../settings/breakpoints'

export default css.global`
body {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 16px;
  line-height: 1.8em;
}

@media ${fromTablet} {
  body {
    font-size: 18px;
  }
}

h1,
h2,
h3,
.h3,
h4 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  line-height: 1.5em;
  color: inherit;
  text-rendering: optimizelegibility;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 2em;
}

h3,
.h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 1.2em;
}
`
