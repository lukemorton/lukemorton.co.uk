import React from 'react'

function onClick(onToggle) {
  return function (e) {
    e.preventDefault()
    onToggle()
  }
}

export default ({ onToggle }) => (
  <a
    href="#menu"
    className="navigation_toggle"
    id="navigation_toggle"
    onClick={onClick(onToggle)}
  >
    <style jsx>
      {`
        .navigation_toggle {
          float: right;
        }
      `}
    </style>
    Menu
  </a>
)
