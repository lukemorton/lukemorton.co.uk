import css from 'styled-jsx/css'
import { fromSmall, fromLarge, maxWidth } from '../settings/breakpoints'

export default css.global`
body {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 16px;
  line-height: 1.8em;
}

@media ${fromSmall} {
  body {
    font-size: 16px;
  }
}

@media ${fromLarge} {
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

/* Special case media query for keeping h1 size small on tiny screens */
@media ${maxWidth('568px')} and (max-height: 568px) {
  h1 {
    font-size: 2.25em;
  }
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
