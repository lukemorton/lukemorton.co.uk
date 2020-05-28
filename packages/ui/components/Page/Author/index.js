import Link from 'next/link'
import columnLayoutBreakpoint from '../columnLayoutBreakpoint'

export default () => (
  <div className="author">
    <style jsx>
      {`
        .author {
          float: left;
          line-height: 1.2em;
          margin: 0 0 1em 0;
        }

        .home {
          display: flex;
          text-decoration: none;
        }

        .avatar,
        .text {
          display: block;
          margin-bottom: 0.5em;
        }

        .text {
          margin-left: 1em;
        }

        .avatar img {
          border-radius: 50%;
          filter: brightness(1.2);
          height: 4rem;
          max-width: none;
          vertical-align: bottom;
          width: 4rem;
        }

        .authorName {
          color: #595959;
        }

        @media ${columnLayoutBreakpoint} {
          .home {
            display: block;
          }

          .author {
            float: none;
            text-align: right;
          }

          .avatar img {
            height: 6rem;
            width: 6rem;
          }
        }
      `}
    </style>

    <div>
      <Link href="/">
        <a className="home">
          <span className="avatar">
            <img
              alt="A photograph of Luke smiling in a smart white shirt"
              src="https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=200"
              height="6rem"
              width="6rem"
            />
          </span>

          <span className="text">
            <span className="display h4">
              Teams &<br />
              Technology
            </span>
            <br />
            <small className="authorName">by Luke&nbsp;Morton</small>
          </span>
        </a>
      </Link>
    </div>
  </div>
)
