import css from 'styled-jsx/css'
import {
  fromSmall,
  fromMedium,
  fromLarge,
  maxWidth,
} from '../settings/breakpoints'

export default css.global`
  body {
    font-family: 'PT Serif', Georgia, 'Times New Roman', Times, serif;
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
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4 {
    font-family: 'Roboto Condensed', 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    font-weight: 700;
    line-height: 1.25;
    text-rendering: optimizelegibility;
  }

  h1,
  .h1 {
    font-size: 2.75em;
    line-height: 1.1;
  }

  .display {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 900;
  }

  @media ${fromMedium} {
    h1,
    .h1 {
      font-size: 4.25em;
    }
  }

  @media ${fromLarge} {
    h1,
    .h1 {
      font-size: 4.75em;
    }
  }

  /* Special case media query for keeping h1 size small on tiny screens */
  @media ${maxWidth('568px')} and (max-height: 568px) {
    h1,
    .h1 {
      font-size: 2.25em;
    }
  }

  h2,
  .h2 {
    font-size: 2.1em;
  }

  h3,
  .h3 {
    font-size: 1.5em;
  }

  h4,
  .h4 {
    font-size: 1.2em;
  }
`
