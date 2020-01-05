import React from 'react'
import { fromDesktop } from '../../../settings/breakpoints'

const Content = ({ children }) =>
  <div className='content'>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        padding-top: 2em;
      }

      @media ${fromDesktop} {
        .content {
          flex-direction: row;
          margin: 0 auto;
          width: 50em;
        }
      }
    `}</style>

    {children}
  </div>

Content.Primary = ({ children }) =>
  <div className='primary animated fadeIn'>
    <style jsx>{`
      @media ${fromDesktop} {
        .primary {
          width: 36em;
        }
      }
    `}</style>

    {children}
  </div>

Content.Secondary = ({ children }) =>
  <div className='secondary'>
    <style jsx>{`
      @media ${fromDesktop} {
        .secondary {
          width: 12em;
        }
      }
    `}</style>

    {children}
  </div>

export default Content
