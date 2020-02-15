import React from 'react'
import columnLayoutBreakpoint from '../columnLayoutBreakpoint'

const Content = ({ children }) =>
  <div className='content'>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        max-width: 992px;
      }

      @media ${columnLayoutBreakpoint} {
        .content {
          flex-direction: row;
          margin: 0 auto;
        }
      }
    `}
    </style>

    {children}
  </div>

Content.Primary = ({ children }) =>
  <div className='primary animated fadeIn'>
    <style jsx>{`
      @media ${columnLayoutBreakpoint} {
        .primary {
          flex: 1;
          max-width: 700px;
        }
      }
    `}
    </style>

    {children}
  </div>

Content.Secondary = ({ children }) =>
  <div className='secondary'>
    <style jsx>{`
      @media ${columnLayoutBreakpoint} {
        .secondary {
          width: 160px;
        }
      }
    `}
    </style>

    {children}
  </div>

export default Content
