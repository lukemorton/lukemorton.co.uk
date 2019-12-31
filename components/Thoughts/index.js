import React from 'react'
import Link from 'next/link'

const Thought = ({ title, thoughtTitleWrapper, url, slug, publishedAt, excerpt }) =>
  <li className='post'>
    {thoughtTitleWrapper(<Link href='/thoughts/[slug]' as={`/thoughts/${slug}`}><a>{title.plain}</a></Link>)}

    <p className='post__meta'>
      {publishedAt.pretty}
    </p>

    <div
      className='post__content'
      dangerouslySetInnerHTML={{ __html: excerpt && excerpt.html }}
    />
  </li>

const thoughtMapper = (thoughtTitleWrapper) => (props, i) =>
  <Thought
    {...props}
    key={i}
    thoughtTitleWrapper={thoughtTitleWrapper}
  />

export default ({ title, thoughtTitleWrapper, thoughts, after }) =>
  <div className='thoughts'>
    {title}

    <ul>
      {thoughts.map(thoughtMapper(thoughtTitleWrapper))}
    </ul>

    {after && <><hr />{after}</>}
  </div>
