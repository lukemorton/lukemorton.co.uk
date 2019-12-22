import React from 'react'
import Chapter from './Chapter'

export default ({ chapters }) =>
  <nav className='navigation' id='navigation'>
    <div className='h3'>Menu</div>

    <ol>
      {chapters.map(Chapter)}
    </ol>
  </nav>
