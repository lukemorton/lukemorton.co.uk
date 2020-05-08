import React from 'react'
import columnLayoutBreakpoint from '../columnLayoutBreakpoint'

export default () => (
  <div className="author">
    <style jsx>
      {`
        .author {
          color: #595959;
          float: left;
          line-height: 1.2em;
          margin: 0 0 1em 0;
        }

        .avatar {
          margin-bottom: 0.5em;
        }

        .avatar img {
          border-radius: 50%;
          filter: brightness(1.2);
          height: 4rem;
          max-width: none;
          vertical-align: bottom;
          width: 4rem;
        }

        @media ${columnLayoutBreakpoint} {
          .author {
            float: none;
            margin-top: 1em;
            text-align: right;
          }

          .avatar img {
            height: 6rem;
            width: 6rem;
          }
        }
      `}
    </style>

    <p className="avatar">
      <img
        alt="A photograph of Luke smiling in a smart white shirt"
        src="https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=200"
        height="6rem"
        width="6rem"
      />
    </p>

    <p>
      Teams &<br />
      Technology
      <br />
      <small>by Luke&nbsp;Morton</small>
    </p>
  </div>
)
