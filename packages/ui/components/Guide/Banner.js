export const GuideBanner = ({ children }) => (
  <>
    <style jsx>{`
      .banner {
        border-top: 5px solid hsl(163, 100%, 50%);
        background: hsl(163, 75%, 95%);
        line-height: 1.5em;
        margin-bottom: 2em;
        padding: 0.4em;
      }
    `}</style>

    <div className="banner">{children}</div>
  </>
)
