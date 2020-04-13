import { fromLarge } from '../../settings/breakpoints'

export const TypeSpan = ({ largeFontSize, children }) => (
  <>
    <style jsx>{`
      @media ${fromLarge} {
        .type {
          font-size: ${largeFontSize};
        }
      }
    `}</style>
    <span className="type">{children}</span>
  </>
)
