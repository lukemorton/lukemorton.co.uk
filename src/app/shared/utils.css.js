import css from 'styled-jsx/css'
import { fromMobile, fromTablet } from '../settings/breakpoints'

export default css.global`
/* Breakpoint utilities for titles in blog posts */

.break--mobile,
.break--tablet,
.break--always {
  display: block;
}

@media ${fromMobile} {
  .break--mobile {
    display: inline;
  }
}

@media ${fromTablet} {
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
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
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
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
`
