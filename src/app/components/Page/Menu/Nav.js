import React from 'react'
import Link from 'next/link'
import columnLayoutBreakpoint from '../columnLayoutBreakpoint'

export default () =>
  <nav className='navigation' id='navigation'>
    <style jsx>{`
      .navigation {
        margin: 0 0 1em 0;
        text-align: right;
      }

      .navigation .h3 {
        margin-top: 0;
      }

      .navigation ul {
        margin: 0 0 1em 0;
      }

      .navigation ul {
        list-style: none;
        padding: 0;
      }

      .navigation li {
        color: #595959;
        margin: 0;
      }

      .navigation a {
        color: #595959;
      }

      .navigation a:hover {
        color: #222;
      }

      @media ${columnLayoutBreakpoint} {
        .navigation {
          position: sticky;
          top: 2em;
        }
      }
    `}</style>
    <div className='h3'>Menu</div>

    <ul>
      <li>
        <Link href='/'>
          <a>
            Home
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
        <Link href='/topics/[slug]' as='/topics/clean-architecture'>
          <a>
            Clean Architecture
          </a>
        </Link>
      </li>

      <li>
        <Link href='/topics/[slug]' as='/topics/rails'>
          <a>
            Ruby on Rails
          </a>
        </Link>
      </li>
    </ul>
  </nav>
