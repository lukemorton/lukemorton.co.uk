/*!
 * Bootstrap v2.3.2
 *
 * Copyright 2013 Twitter, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world @twitter by @mdo and @fat.
 */

import css from 'styled-jsx/css'

export default css.global`
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
audio:not([controls]) {
  display: none;
}
html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
a:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
a:hover,
a:active {
  outline: 0;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  /* Responsive images (ensure images don't scale beyond their parents) */

  max-width: 100%;
  /* Part 1: Set a maxium relative to the parent */

  width: auto\9;
  /* IE7-8 need help adjusting responsive images */

  height: auto;
  /* Part 2: Scale the height according to the width, otherwise you get stretching */

  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}
@media print {
  * {
    text-shadow: none !important;
    color: #000 !important;
    background: transparent !important;
    box-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  .ir a:after,
  a[href^="javascript:"]:after,
  a[href^="#"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  @page  {
    margin: 0.5cm;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
}
small {
  font-size: 85%;
}
strong {
  font-weight: bold;
}
em {
  font-style: italic;
}
cite {
  font-style: normal;
}
ul ul,
ul ol,
ol ol,
ol ul {
  margin-bottom: 0;
}
hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #ffffff;
}
abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #999999;
}
abbr.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote small {
  display: block;
  line-height: 20px;
  color: #999999;
  padding-top: 1em;
}
blockquote small:before {
  content: '\2014 \00A0';
}
blockquote.pull-right {
  float: right;
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid #eeeeee;
  border-left: 0;
}
blockquote.pull-right p,
blockquote.pull-right small {
  text-align: right;
}
blockquote.pull-right small:before {
  content: '';
}
blockquote.pull-right small:after {
  content: '\00A0 \2014';
}
q:before,
q:after,
blockquote:before,
blockquote:after {
  content: "";
}
address {
  display: block;
  margin-bottom: 20px;
  font-style: normal;
  line-height: 20px;
}
code,
pre {
  padding: 0 3px 2px;
  font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
  font-size: 14px;
  color: #333333;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
code {
  padding: 2px 4px;
  background-color: #f7f7f9;
  border: 1px solid #e1e1e8;
  white-space: nowrap;
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 1.6em;
  font-size: 1em;
  line-height: 20px;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre;
  white-space: pre-wrap;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
pre.prettyprint {
  margin-bottom: 20px;
}
pre code {
  padding: 0;
  color: inherit;
  white-space: pre;
  white-space: pre-wrap;
  background-color: transparent;
  border: 0;
}
.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}
`