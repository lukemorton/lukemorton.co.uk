import { Prose } from '..'

export const GuideIntro = ({ children }) => (
  <>
    <style jsx>{`
      .intro :global(p:first-of-type) {
        font-size: 1.2em;
        margin-top: 4em;
      }

      .intro :global(p:last-of-type) {
        margin-bottom: 4em;
      }
    `}</style>

    <div className="intro">
      <Prose>{children}</Prose>
    </div>
  </>
)
