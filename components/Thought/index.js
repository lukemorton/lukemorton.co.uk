import React from 'react'
import Link from 'next/link'

export default ({ indexUrl, aboutUrl, archiveUrl, avatarSrc, thought }) =>
  <div>
    <div dangerouslySetInnerHTML={{ __html: thought.title.html }} />

    <p className='meta'>
      <Link href={aboutUrl}>
        <img
          src={avatarSrc}
          style={{ height: '3em', width: '3em' }}
          />
      </Link>

      <span className='author'>Written by <Link href={aboutUrl}>Luke Morton</Link></span> <span className='published'>on {thought.publishedAt.pretty}</span>
    </p>

    <div
      className='content'
      dangerouslySetInnerHTML={{ __html: thought.content.html }}
      />

    ---

    <p>
      Feel free to read some <Link href={archiveUrl}>more thoughts</Link> or go back to <Link href={indexUrl}>the introduction</Link>.
    </p>
  </div>
