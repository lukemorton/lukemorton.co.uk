import { fromLarge } from '../../settings/breakpoints'

export const LayoutSideBySide = ({ children }) => (
  <>
    <style jsx>{`
      .side-by-side {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 3em 0;
      }

      @media ${fromLarge} {
        .side-by-side {
          flex-direction: row;
        }
      }
    `}</style>

    <div className="side-by-side">{children}</div>
  </>
)
