import css from 'styled-jsx/css'
import {
  fromSmall,
  fromMedium,
  fromLarge,
  maxWidth
} from '../settings/breakpoints'

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
    line-height: 1.25;
    text-rendering: optimizelegibility;
  }

  h1 {
    font-size: 3em;
    line-height: 1.1;
  }

  h1.larger {
    font-size: 3.5em;
  }

  h1 span.larger {
    font-size: 1.16667em;
  }

  @media ${fromMedium} {
    h1,
    h1.larger {
      font-size: 4em;
    }

    h1 span.larger {
      font-size: 1em;
    }
  }

  /* Special case media query for keeping h1 size small on tiny screens */
  @media ${maxWidth('568px')} and (max-height: 568px) {
    h1 {
      font-size: 2.5em;
    }

    h1.larger {
      font-size: 3em;
    }

    h1 span.larger {
      font-size: 1.2em;
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
