import React from 'react'

export default ({ children }) =>
  <div className='prose'>
    <style jsx>{`
      .prose :global(p:first-of-type) {
        font-size: 1.2em;
        margin: 1.6em 0 1.6em 0;
      }
    `}</style>
    {children}
  </div>
