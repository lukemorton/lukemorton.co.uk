import React from 'react'
import Link from 'next/link'

export default ({ aboutUrl, avatarSrc, thought }) =>
  <div className='post'>
    <div dangerouslySetInnerHTML={{ __html: thought.title.html }} />

    <p className='post__meta'>
      {thought.publishedAt.pretty} by <Link href={aboutUrl}><a>Luke Morton</a></Link>
    </p>

    <div className='prose'>
      <div
        className='post__content'
        dangerouslySetInnerHTML={{ __html: thought.content.html }}
        />
    </div>
  </div>
