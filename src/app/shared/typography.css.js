import css from 'styled-jsx/css'

export default css.global`
body {
  margin: 1em;

  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 16px;
  line-height: 1.8em;

  color: #333333;
  background-color: #ffffff;
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

h1,
h2,
h3,
.h3 {
  margin: 1em 0 0.5em 0;
}

h1 {
  font-size: 2.5em;
  margin: 0 0 1rem 0;
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
  margin: 0.5em 0 0.25em 0;
}

p {
  margin: 0 0 1.6em 0;
}

ul,
ol {
  padding: 0;
  margin: 0 1.6em 1.6em 1.6em;
}

li {
  margin-bottom: 1em;
}

blockquote {
  padding: 0 0 0 1em;
  margin: 0 0 1.6em 0;
  font-style: italic;
}

blockquote p {
  font-size: 1.2em;
}

blockquote p cite {
  font-size: .8em;
  color: #999;
}

h2 + blockquote {
  margin-top: 2em;
}

a,
a code {
  color: #0088cc;
  text-decoration: underline;
}

a:hover,
a:focus {
  color: #005580;
}
`
