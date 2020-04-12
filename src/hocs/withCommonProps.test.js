import withCommonProps from './withCommonProps'
import COMMON_PROPS from './commonProps'
import AppContainer from '../containers/AppContainer'

describe('withCommonProps', () => {
  it('passes COMMON_PROPS as props', () => {
    const MockComponent = jest.fn()
    withCommonProps(MockComponent)()
    expect(MockComponent).toBeCalledWith(expect.objectContaining(COMMON_PROPS))
  })

  it('passes COMMON_PROPS before other props', () => {
    const MockComponent = jest.fn()
    withCommonProps(MockComponent)({ indexUrl: '/?diff' })
    expect(MockComponent).toBeCalledWith(
      expect.objectContaining({ indexUrl: '/?diff' })
    )
  })

  it('passes container in props', () => {
    const MockComponent = jest.fn()
    withCommonProps(MockComponent)()
    expect(MockComponent).toBeCalledWith(
      expect.objectContaining({ container: expect.any(AppContainer) })
    )
  })
})
