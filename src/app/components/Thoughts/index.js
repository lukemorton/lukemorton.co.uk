import React from 'react'
import Link from 'next/link'
import Prose from '../Prose'

const Thought = ({ small, title, thoughtTitleWrapper, url, slug, publishedAt, excerpt }) =>
  <li className={small ? 'post small' : 'post'}>
    <style jsx>{`
      .post {
        margin-bottom: 1.6em;
      }

      .post.small {
        display: block;
        font-size: .7em;
        line-height: 1.8em;
        width: 48%;
      }

      .post.small:only-child {
        width: 100%;
      }

      .meta {
        color: #595959;
        margin: 0.5em 0;
      }

    `}
    </style>

    {thoughtTitleWrapper(<Link href='/thoughts/[slug]' as={`/thoughts/${slug}`}><a>{title.plain}</a></Link>)}

    <p className='meta'>
      {publishedAt.pretty}
    </p>

    <div dangerouslySetInnerHTML={{ __html: excerpt && excerpt.html }} />
  </li>

const thoughtMapper = (small, thoughtTitleWrapper) => (props, i) =>
  <Thought
    {...props}
    key={i}
    thoughtTitleWrapper={thoughtTitleWrapper}
    small={small}
  />

export default ({ small, title, thoughtTitleWrapper, thoughts, after }) =>
  <div className={small ? 'small' : ''}>
    <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .small ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}
    </style>

    <Prose>
      {title}
    </Prose>

    <ul>
      {thoughts.map(thoughtMapper(small, thoughtTitleWrapper))}
    </ul>

    {after && <><hr />{after}</>}
  </div>
