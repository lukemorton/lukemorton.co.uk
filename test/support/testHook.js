import React from 'react'
import { mount } from 'enzyme'

const TestHook = ({ callback }) => {
  callback()
  return null
}

export default function (callback) {
  mount(<TestHook callback={callback} />)
}
