import { Prose } from '..'
import { fromLarge } from '../../settings/breakpoints'

export const GuideIntro = ({ children }) => (
  <>
    <style jsx>{`
      .intro :global(h1) {
        border-top: 5px solid hsl(163, 100%, 50%);
        padding: 0.4em 0;
      }

      .intro :global(p:first-of-type) {
        font-size: 1.2em;
        margin: 1.6em 0;
      }

      .intro :global(mark) {
        background: hsl(163, 100%, 85%);
      }

      @media ${fromLarge} {
        .intro :global(p:last-of-type) {
          margin-bottom: 4em;
        }
      }
    `}</style>

    <div className="intro">
      <Prose>{children}</Prose>
    </div>
  </>
)
