import React from 'react'
import Link from 'next/link'

export default ({ indexUrl, aboutUrl, archiveUrl, avatarSrc, thought }) =>
  <div>
    <div dangerouslySetInnerHTML={{ __html: thought.title.html }} />

    <p className='meta'>
      <Link href={aboutUrl}>
        <a className='meta__avatar'>
          <img
            src={avatarSrc}
            style={{ height: '3em', width: '3em' }}
            />
        </a>
      </Link>

      <div>
        <span className='author'>Written by <Link href={aboutUrl}><a>Luke Morton</a></Link></span> <span className='published'>on {thought.publishedAt.pretty}</span>
      </div>
    </p>

    <div
      className='content'
      dangerouslySetInnerHTML={{ __html: thought.content.html }}
      />

    ---

    <p>
      Feel free to read some <Link href={archiveUrl}><a>more thoughts</a></Link> or go back to <Link href={indexUrl}><a>the introduction</a></Link>.
    </p>
  </div>
