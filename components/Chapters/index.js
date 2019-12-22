import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Toggle from './Toggle'
import isLargerThanMobile from './isLargerThanMobile'

const chapters = [
  {
    label: 'Introduction',
    url: '/'
  },
  {
    label: 'Articles',
    url: '/thoughts/archive'
  },
  {
    label: 'About Author',
    url: '/about'
  }
]

export default () => {
  const [navShowing, setNavShowing] = useState(null)

  useEffect(() => {
    if (navShowing === null) setNavShowing(isLargerThanMobile())
  })

  function handleToggle () {
    setNavShowing(!navShowing)
  }

  if (navShowing) {
    return <Nav chapters={chapters} />
  } else {
    return <Toggle onToggle={handleToggle} />
  }
}
