import React from 'react'
import Thoughts from '../Thoughts'

export default ({ thoughts }) => {
  if (!thoughts || thoughts.length === 0) return null

  return (
    <aside className="related_content">
      <style jsx>
        {`
          .related_content {
            border-top: 3px solid #eee;
            padding-top: 1em;
          }
        `}
      </style>

      <Thoughts
        small
        title={<h2 className="h3">Related content</h2>}
        thoughtTitleWrapper={(title) => <h3>{title}</h3>}
        thoughts={thoughts}
      />
    </aside>
  )
}
