import React from 'react'
import columnLayoutBreakpoint from '../columnLayoutBreakpoint'

export default () =>
  <div className='author'>
    <style jsx>{`
      .author {
        color: #666;
        float: left;
        line-height: 1.2em;
        margin: 0 0 1em 0;
      }

      .avatar {
        margin-bottom: .5em;
      }

      .avatar img {
        border-radius: 50%;
        max-width: none;
        vertical-align: bottom;
      }

      @media ${columnLayoutBreakpoint} {
        .author {
          float: none;
          margin-top: 1em;
          text-align: right;
        }
      }
    `}</style>

    <p className='avatar'>
      <img
        src='https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180'
        style={{ height: '5rem', width: '5rem' }}
      />
    </p>

    <p>
      <small>A website by</small><br />
      Luke&nbsp;Morton
    </p>
  </div>
