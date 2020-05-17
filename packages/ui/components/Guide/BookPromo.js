import { forwardRef } from 'react'
import { GuideIntro } from '.'
import { TypeSpan } from '..'

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
        transform: scale(1.1);
        width: 12em;
      }

      .h4 {
        border-top: 2px solid hsl(163, 100%, 50%);
        padding-top: 0.5em;
      }

      .book:hover {
        transform: scale(1.15);
      }

      .author {
        color: black;
        font-size: 0.8em;
        margin-top: 3em;
      }
    `}</style>

    <a className="book" href={href} onClick={onClick} ref={ref}>
      <span className="h4">
        <TypeSpan largeFontSize="1.07em">
          <TypeSpan largeFontSize=".95em">A team guide to</TypeSpan>{' '}
          <TypeSpan largeFontSize="1.68em" largeLineHeight="1">
            Software
          </TypeSpan>{' '}
          <TypeSpan largeFontSize="1.125em">Development</TypeSpan>
        </TypeSpan>
      </span>

      <span className="author">By Luke Morton</span>
    </a>
  </>
))
