import React from 'react'

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
  <li>
    <a href={url} id={`nav_${index}`}>{label}</a>
  </li>

export default () =>
  <nav className='navigation' id='navigation'>
    <div className='h3'>Chapters</div>

    <ol>
      {chapters.map(Chapter)}
    </ol>
  </nav>
