import React from 'react'

export default ({ noIntro, children }) => (
  <div className={`prose ${noIntro ? 'noIntro' : ''}`}>
    <style jsx>
      {`
        .prose :global(h1),
        .prose :global(h2),
        .prose :global(h3),
        .prose :global(.h3) {
          margin: 1em 0 0.5em 0;
        }

        .prose :global(:first-child) {
          margin-top: 0;
        }

        .prose :global(h4) {
          margin: 0.5em 0 0.25em 0;
        }

        .prose :global(p) {
          margin: 0 0 1.6em 0;
        }

        .prose :global(p:first-of-type) {
          font-size: 1.2em;
          margin: 1.6em 0;
        }

        .prose.noIntro :global(p:first-of-type) {
          font-size: 1em;
          margin: 1.6em 0;
        }

        .prose :global(.meta) + :global(p) {
          font-size: 1.2em;
          margin: 1.6em 0;
        }

        .prose :global(ul),
        .prose :global(ol) {
          padding: 0;
          margin: 0 1.6em 1.6em 1.6em;
        }

        .prose :global(li) {
          margin-bottom: 1em;
        }

        .prose :global(ul.short-list) :global(li),
        .prose :global(ol.short-list) :global(li) {
          margin-bottom: 0.2em;
        }

        .prose :global(blockquote) {
          padding: 0 0 0 1em;
          margin: 0 0 1.6em 0;
          font-style: italic;
        }

        .prose :global(blockquote) :global(p) {
          font-size: 1.2em;
        }

        .prose :global(blockquote) :global(p) :global(cite) {
          font-size: 0.8em;
          color: #595959;
        }

        .prose :global(h2) + :global(blockquote) {
          margin-top: 2em;
        }

        .prose :global(img) {
          background: #eee;
          height: auto;
          max-width: 100%;
        }
      `}
    </style>
    {children}
  </div>
)
