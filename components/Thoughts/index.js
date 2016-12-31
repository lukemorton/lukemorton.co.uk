import React from 'react'
import Link from 'next/link'

const Thought = ({ title, url, publishedAt, intro }) =>
  <li className='post'>
    <h3>
      <Link href={url}>{title}</Link>
    </h3>

    <p className='meta'>
      <em>{publishedAt}</em>
    </p>

    <div className='content'>
      {intro}
    </div>
  </li>

export default ({ title, thoughts, after }) =>
  <div className='thoughts'>
    {title}

    <ul>
      {thoughts.map(Thought)}
    </ul>

    ---

    {after}
  </div>
