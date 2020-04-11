import React from 'react'

export const SkipToMainContentLink = () => (
  <a href="#main-content">
    <style jsx>
      {`
        a {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          position: absolute;
        }

        a:focus {
          padding: 1rem;
          position: fixed;
          top: 10px;
          left: 10px;
          background: white;
          z-index: 1;
          width: auto;
          height: auto;
          clip: auto;
        }
      `}
    </style>
    Skip to main content
  </a>
)

export const MainContentMarker = () => <div id="main-content" />
