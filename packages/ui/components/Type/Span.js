import { fromLarge } from '../../settings/breakpoints'

export const TypeSpan = ({ largeFontSize, largeLineHeight, children }) => (
  <>
    <style jsx>{`
      @media ${fromLarge} {
        .type {
          font-size: ${largeFontSize};
          line-height: ${largeLineHeight || 'inherit'};
        }
      }
    `}</style>
    <span className="type">{children}</span>
  </>
)
