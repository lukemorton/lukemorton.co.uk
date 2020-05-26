import { fromLarge } from '../../settings/breakpoints'

const fontSizeRule = (fontSize) => {
  if (fontSize) {
    return `font-size: ${fontSize};`
  } else {
    return ''
  }
}

export const TypeSpan = ({ fontSize, largeFontSize, children }) => (
  <>
    <style jsx>{`
      .type {
        ${fontSizeRule(fontSize)}
      }

      @media ${fromLarge} {
        .type {
          ${fontSizeRule(largeFontSize)}
        }
      }
    `}</style>
    <span className="type">{children}</span>
  </>
)
