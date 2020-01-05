import css from 'styled-jsx/css'

export default css.global`
.break--mobile,
.break--tablet,
.break--always {
  display: block;
}

@media only screen and (min-width: 540px) {
  .break--mobile {
    display: inline;
  }
}

@media only screen and (min-width: 680px) {
  .break--tablet {
    display: inline;
  }
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
