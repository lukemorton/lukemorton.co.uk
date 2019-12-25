import React from 'react'
import Thoughts from '../Thoughts'

export default ({ thoughts }) => {
  if (!thoughts) return null

  return (
    <aside className='related_content'>
      <Thoughts
        title={<h2>Related content</h2>}
        thoughtTitleWrapper={(title) => <h3>{title}</h3>}
        thoughts={thoughts}
        />
    </aside>
  )
}
