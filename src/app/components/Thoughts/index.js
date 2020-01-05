import React from 'react'
import Link from 'next/link'

const Thought = ({ title, thoughtTitleWrapper, url, slug, publishedAt, excerpt }) =>
  <li className='post'>
    <style jsx>{`
      h2, h3 {
        margin-bottom: 0;
      }

      .meta {
        color: #999;
        margin: 0.5em 0;
      }
    `}</style>

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

const thoughtsClass = (small) => small ? 'thoughts small' : 'thoughts'

export default ({ small, title, thoughtTitleWrapper, thoughts, after }) =>
  <div className={thoughtsClass(small)}>
    <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
      }

      .thoughts.small ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .thoughts.small :global(.post) {
        display: block;
        font-size: .7em;
        line-height: 1.8em;
        width: 48%;
      }

      .thoughts.small :global(.post:only-child) {
        width: 100%;
      }
    `}</style>

    {title}

    <ul>
      {thoughts.map(thoughtMapper(small, thoughtTitleWrapper))}
    </ul>

    {after && <><hr />{after}</>}
  </div>
