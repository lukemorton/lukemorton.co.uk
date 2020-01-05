import React from 'react'
import Link from 'next/link'
import Prose from '../Prose'

export default ({ aboutUrl, avatarSrc, thought }) =>
  <div className='post'>
    <style jsx>{`
      .meta {
        color: #999;
        margin: 2em 0;
      }
    `}</style>

    <div dangerouslySetInnerHTML={{ __html: thought.title.html }} />

    <p className='meta'>
      {thought.publishedAt.pretty} by <Link href={aboutUrl}><a>Luke Morton</a></Link>
    </p>

    <Prose>
      <div dangerouslySetInnerHTML={{ __html: thought.content.html }} />
    </Prose>
  </div>
