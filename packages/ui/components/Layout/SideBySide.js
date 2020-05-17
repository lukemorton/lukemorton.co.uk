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

      .side-by-side :global(.w-40) {
        flexbasis: 40%;
      }

      .side-by-side :global(.w-60) {
        flexbasis: 60%;
      }

      .side-by-side :global(.stretch) {
        align-self: stretch;
      }

      @media ${fromLarge} {
        .side-by-side {
          align-items: start;
          flex-direction: row;
        }
      }
    `}</style>

    <div className="side-by-side">{children}</div>
  </>
)
