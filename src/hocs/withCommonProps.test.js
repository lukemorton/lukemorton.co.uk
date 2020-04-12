import { shallow } from 'enzyme'
import withCommonProps from './withCommonProps'
import COMMON_PROPS from './commonProps'
import AppContainer from '../containers/AppContainer'

describe('withCommonProps', () => {
  const MockComponent = () => <div />
  const MockComponentWithCommonProps = withCommonProps(MockComponent)

  it('passes COMMON_PROPS as props', () => {
    const component = shallow(<MockComponentWithCommonProps />)
    expect(component.props()).toEqual(expect.objectContaining(COMMON_PROPS))
  })

  it('passes COMMON_PROPS before other props', () => {
    const otherProps = { indexUrl: '/?diff' }
    const component = shallow(<MockComponentWithCommonProps {...otherProps} />)
    expect(component.props()).toEqual(expect.objectContaining(otherProps))
  })

  it('passes container in props', () => {
    const component = shallow(<MockComponentWithCommonProps />)
    expect(component.props()).toEqual(
      expect.objectContaining({ container: expect.any(AppContainer) })
    )
  })
})
