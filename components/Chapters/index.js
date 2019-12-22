import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Toggle from './Toggle'
import isLargerThanMobile from './isLargerThanMobile'

export default () => {
  const [navShowing, setNavShowing] = useState(null)

  useEffect(() => {
    if (navShowing === null) setNavShowing(isLargerThanMobile())
  })

  function handleToggle () {
    setNavShowing(!navShowing)
  }

  if (navShowing) {
    return <Nav />
  } else {
    return <Toggle onToggle={handleToggle} />
  }
}
