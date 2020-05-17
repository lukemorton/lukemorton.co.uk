import React from 'react'
import Link from 'next/link'
import columnLayoutBreakpoint from '../columnLayoutBreakpoint'

export default () => (
  <nav className="navigation" id="navigation">
    <style jsx>
      {`
        .navigation {
          margin: 0 0 1em 0;
          text-align: right;
        }

        .navigation .h4 {
          margin-top: 0;
        }

        .navigation ul {
          line-height: 1.25;
          margin: 0 0 1em 0;
        }

        .navigation ul {
          list-style: none;
          padding: 0;
        }

        .navigation li {
          color: #595959;
          margin: 0.5rem 0 0 0;
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
      `}
    </style>

    <div className="h4">Menu</div>

    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/articles">
          <a>All articles</a>
        </Link>
      </li>

      <li>
        <Link href="/open-source">
          <a>Open source</a>
        </Link>
      </li>

      <li>
        <Link href="/about">
          <a>About Luke</a>
        </Link>
      </li>
    </ul>

    <div className="h4">Guides</div>

    <ul>
      <li>
        <Link href="/guides/software-development">
          <a>Software Development</a>
        </Link>
      </li>
    </ul>

    <div className="h4">Topics</div>

    <ul>
      <li>
        <Link href="/topics/[slug]" as="/topics/clean-architecture">
          <a>Clean Architecture</a>
        </Link>
      </li>

      <li>
        <Link href="/topics/[slug]" as="/topics/rails">
          <a>Ruby on Rails</a>
        </Link>
      </li>

      <li>
        <Link href="/topics/[slug]" as="/topics/software-development-teams">
          <a>Teams</a>
        </Link>
      </li>
    </ul>
  </nav>
)
