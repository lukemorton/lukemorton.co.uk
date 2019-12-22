import React from 'react'
import Link from 'next/link'

export default ({ indexUrl, aboutUrl, archiveUrl, avatarSrc, thought }) =>
  <div className='post'>
    <div dangerouslySetInnerHTML={{ __html: thought.title.html }} />

    <p className='post__meta'>
      <span className='post__author'>Written by <Link href={aboutUrl}><a>Luke Morton</a></Link></span> <span className='published'>on {thought.publishedAt.pretty}</span>
    </p>

    <div className='prose'>
      <div
        className='post__content'
        dangerouslySetInnerHTML={{ __html: thought.content.html }}
        />
    </div>

    ---

    <p>
      Feel free to read some <Link href={archiveUrl}><a>more thoughts</a></Link> or go back to <Link href={indexUrl}><a>the introduction</a></Link>.
    </p>
  </div>
