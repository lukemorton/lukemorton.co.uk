import css from 'styled-jsx/css'

export default css.global`
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
  .post__author {
    display: inline;
  }
}
`
