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

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4 {
    color: #000;
  }

  a,
  a code {
    color: #0056b3;
    text-decoration: underline;
  }

  a:hover,
  a:focus {
    color: #003166;
  }

  h1 a,
  .h1 a,
  h2 a,
  .h2 a,
  h3 a,
  .h3 a,
  h4 a,
  .h4 a {
    color: #0063cc;
  }

  h1 a:hover,
  .h1 a:hover,
  h2 a:hover,
  .h2 a:hover,
  h3 a:hover,
  .h3 a:hover,
  h4 a:hover,
  h1 a:focus,
  .h1 a:focus,
  h2 a:focus,
  .h2 a:focus,
  h3 a:focus,
  .h3 a:focus,
  h4 a:focus,
  .h4 a:focus {
    color: #004c9e;
  }
`
