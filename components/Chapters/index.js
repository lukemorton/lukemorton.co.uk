import React from 'react'
import Nav from './Nav'
import Toggle from './Toggle'
import isLargerThanMobile from './isLargerThanMobile'

const chapters = [
  {
    label: 'Introduction',
    url: '/'
  },
  {
    label: 'Thoughts',
    url: '/thoughts/archive'
  },
  {
    label: 'About Author',
    url: '/about'
  }
]

export default class extends React.Component {
  componentWillMount () {
    this.state = { navShowing: isLargerThanMobile() }
  }

  handleToggle () {
    this.setState({ navShowing: true })
  }

  render () {
    if (this.state.navShowing) {
      return <Nav chapters={chapters} />
    } else {
      return <Toggle onToggle={this.handleToggle.bind(this)} />
    }
  }
}
