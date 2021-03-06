import css from 'styled-jsx/css'
import { fromSmall, fromMedium, fromLarge } from '../settings/breakpoints'

export default css.global`
  /* hr style */

  hr {
    border-top: 3px solid #eee;
  }

  hr + p {
    margin-top: 1.5em;
  }

  hr.mt {
    margin-top: 2em;
  }

  hr.mb {
    margin-bottom: 2em;
  }

  @media ${fromLarge} {
    hr.mb {
      margin-bottom: 4em;
    }
  }

  /* Breakpoint utilities for titles in blog posts */

  .break--mobile,
  .break--tablet,
  .break--always {
    display: block;
  }

  @media ${fromSmall} {
    .break--mobile {
      display: inline;
    }
  }

  @media ${fromMedium} {
    .break--tablet {
      display: inline;
    }
  }

  /* Styling GitHub gists */

  .gist {
    font-size: 14px;
    line-height: 1.6;
    margin: 0 0 1.6em 0;
  }

  /* Animations via animate.css */

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }
`
