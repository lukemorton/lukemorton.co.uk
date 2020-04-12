import withCommonProps from './withCommonProps'
import COMMON_PROPS from './commonProps'

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
})