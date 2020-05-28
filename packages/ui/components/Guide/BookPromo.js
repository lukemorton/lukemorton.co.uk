import { forwardRef } from 'react'
import { fromLarge } from '../../settings/breakpoints'
import { TypeSpan } from '..'
import { GuideIntro } from '.'

export const GuideBookPromo = forwardRef(({ href, onClick }, ref) => (
  <>
    <style jsx>{`
      .book,
      .h4,
      .author {
        display: block;
      }

      .book {
        box-shadow: 1px 1px 0 #ddd, 2px 2px 0 #fff, 3px 3px 0 #ddd,
          4px 4px 0 #fff, 5px 5px 0 #ddd, 0 0 40px rgba(0, 0, 0, 0.1);
        height: 15em;
        margin: 0 2em 2em 0;
        padding: 1em;
        text-decoration: none;
        transition: transform 0.2s ease-out;
        width: 12em;
      }

      .h4 {
        border-top: 2px solid hsl(163, 100%, 50%);
        padding-top: 0.5em;
      }

      .author {
        color: black;
        font-size: 0.8em;
        margin-top: 3em;
      }

      @media ${fromLarge} {
        .book {
          transform: scale(1.1);
        }

        .book:hover {
          transform: scale(1.15);
        }
      }
    `}</style>

    <a className="book" href={href} onClick={onClick} ref={ref}>
      <span className="display h4">
        <TypeSpan fontSize=".95em">A team guide to</TypeSpan>{' '}
        <TypeSpan fontSize="1.68em">Software</TypeSpan>{' '}
        <TypeSpan fontSize="1.125em">Development</TypeSpan>
      </span>

      <span className="author">By Luke Morton</span>
    </a>
  </>
))
