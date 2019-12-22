import React from 'react'
import Link from 'next/link'

export default () =>
  <nav className='navigation' id='navigation'>
    <div className='h3'>Menu</div>

    <ul>
      <li>
        <Link href='/'>
          <a>
            Introduction
          </a>
        </Link>
      </li>

      <li>
        <Link href='/thoughts/archive'>
          <a>
            All articles
          </a>
        </Link>
      </li>

      <li>
        <Link href='/open-source'>
          <a>
            Open source
          </a>
        </Link>
      </li>

      <li>
        <Link href='/about'>
          <a>
            About Luke
          </a>
        </Link>
      </li>
    </ul>

    <div className='h3'>
      Topics
    </div>

    <ul>
      <li>
        <Link href='/topics/clean-architecture'>
          <a>
            Clean Architecture
          </a>
        </Link>
      </li>

      <li>
        <Link href='/topics/rails'>
          <a>
            Ruby on Rails
          </a>
        </Link>
      </li>
    </ul>
  </nav>
