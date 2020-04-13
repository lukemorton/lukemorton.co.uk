import { Prose } from '..'
import { fromLarge } from '../../settings/breakpoints'

export const GuidePartList = ({ children }) => (
  <>
    <style jsx>{`
      .part-list {
        font-size: 0.9em;
        justify-content: space-between;
        list-style: none;
        margin: 0 -1em;
        padding: 0;
      }

      @media ${fromLarge} {
        .part-list {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -2em;
        }
      }
    `}</style>

    <div className="part-list">{children}</div>
  </>
)
export const GuidePartListItem = ({ title, description, links }) => (
  <>
    <style jsx>{`
      .part {
        background: #f7f7f7;
        border-top: 3px solid #eee;
        margin: 0 0 2em 0;
        padding: 1em 1em;
      }

      @media ${fromLarge} {
        .part {
          padding: 1em 2em;
          width: 48%;
        }
      }

      .part :global(h2) {
        font-size: 1.8em;
        margin: 0.5em 0 1em;
      }

      .part p {
        line-height: 1.5em;
      }

      .part ul {
        margin: 0 0 2em 1.5em;
        padding: 0;
      }

      .part li {
        line-height: 1.5em;
        margin: 0 0 0.5em 0;
      }
    `}</style>

    <section className="part">
      {title}

      <p>{description}</p>

      <ul>
        {links.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>
    </section>
  </>
)