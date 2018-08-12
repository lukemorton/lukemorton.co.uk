import React from 'react'

const Thought = ({ plainTitle, thoughtTitleWrapper, url, slug, publishedAt, intro }) =>
  <li className='post'>
    {thoughtTitleWrapper(<a href={`/thoughts/${slug}`}>{plainTitle}</a>)}

    <p className='meta'>
      <em>{publishedAt}</em>
    </p>

    <div
      className='content'
      dangerouslySetInnerHTML={{ __html: intro }}
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
