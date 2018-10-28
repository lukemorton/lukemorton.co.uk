import React from 'react'

const Thought = ({ title, thoughtTitleWrapper, url, slug, publishedAt, excerpt }) =>
  <li className='post'>
    {thoughtTitleWrapper(<a href={`/thoughts/${slug}`}>{title.plain}</a>)}

    <p className='meta'>
      Written on {publishedAt.pretty}
    </p>

    <div
      className='content'
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

    ---

    {after}
  </div>
