import React from 'react'
import Link from 'next/link'

const chapters = [
  {
    label: 'Introduction',
    url: '/'
  },
  {
    label: 'Thoughts',
    url: '/thoughts/archive'
  },
  {
    label: 'About Author',
    url: '/about'
  }
]

const Chapter = ({ label, url }, index) =>
  <li key={index}>
    <Link href={url} id={`nav_${index}`}>{label}</Link>
  </li>

export default () =>
  <nav className='navigation' id='navigation'>
    <div className='h3'>Chapters</div>

    <ol>
      {chapters.map(Chapter)}
    </ol>
  </nav>
