import css from 'styled-jsx/css'

export default css.global`
.content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-top: 2em;
}

.content__primary {
}

.content__secondary {
}

.break--mobile,
.break--tablet,
.break--always {
  display: block;
}

.author {
  color: #666;
  float: left;
  line-height: 1.2em;
  margin: 0 0 1em 0;
}

.author__avatar {
  margin-bottom: .5em;
}

.author__avatar img {
  border-radius: 50%;
  max-width: none;
  vertical-align: bottom;
}

.navigation_toggle {
  float: right;
}

.navigation {
  margin: 0 0 1em 0;
  text-align: right;
}

.navigation .h3 {
  margin-top: 0;
}

.navigation ul {
  display: inline-block;
  margin: 0 0 1em 0;
}

.navigation ul {
  list-style: none;
  padding: 0;
}

.navigation li {
  color: #666;
  margin: 0;
}

.navigation a {
  color: #999;
}

.navigation a:hover {
  color: #333;
}

.post__author {
  display: block;
}

.post__content {
  clear: both;
}

.prose p:first-of-type {
  font-size: 1.2em;
  margin: 1.6em 0;
}

.gist {
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 1.6em 0;
}

.projects ul,
.thoughts ul {
  list-style: none;
  margin: 0;
}

li.post h2,
li.post h3 {
  margin-bottom: 0;
}

li.post .post__meta {
  margin: 0.5em 0;
}

.prose p:first-of-type {
  margin-top: 0;
}

.post__meta {
  color: #999;
  margin: 2em 0;
}

hr {
  border-top: 3px solid #eee;
}

.related_content {
  margin-top: 2em;
  border-top: 3px solid #eee;
}

.related_content ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.related_content .post {
  display: block;
  font-size: .7em;
  line-height: 1.8em;
  width: 48%;
}

@media only screen and (min-width: 540px) {
  body {
    margin: 2em;
  }

  .post__author {
    display: inline;
  }

  .break--mobile {
    display: inline;
  }
}

@media only screen and (min-width: 680px) {
  body {
    margin: 3em;
    font-size: 18px;
  }

  .break--tablet {
    display: inline;
  }
}

@media only screen and (min-width: 45em) {
  .gist {
    width: 40em;
  }
}

@media only screen and (min-width: 60em) {
  .content {
    flex-direction: row;
    margin: 0 auto;
    width: 50em;
  }

  .content__primary {
    width: 36em;
  }

  .content__secondary {
    width: 12em;
  }

  .author {
    float: none;
    margin-top: 1em;
    text-align: right;
  }

  .navigation {
    position: sticky;
    top: 2em;
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
