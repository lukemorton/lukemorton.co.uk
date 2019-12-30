import React from 'react'
import { shallow } from 'enzyme'
import Error from '../../pages/_error'
import Page from '../../components/Page'

test('content renders', () => {
  const page = shallow(<Error />)
  expect(page.find(Page).length).toBe(1)
})

test('.getInitialProps with req', () => {
  const reqNotFoundProps = Error.getInitialProps({ res: { statusCode: 404 } })
  expect(reqNotFoundProps.error).toBe('Page not found')

  const reqErrorProps = Error.getInitialProps({ res: { statusCode: 500 } })
  expect(reqErrorProps.error).toBe('An error occured')
})

test('.getInitialProps with xhr', () => {
  const reqNotFoundProps = Error.getInitialProps({ err: { statusCode: 404 } })
  expect(reqNotFoundProps.error).toBe('Page not found')

  const reqErrorProps = Error.getInitialProps({ err: { statusCode: 500 } })
  expect(reqErrorProps.error).toBe('An error occured')
})
