import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Error from '../../pages/_error'
import Page from '../../components/Page'

test('content renders', t => {
  const page = shallow(<Error />)
  t.is(page.find(Page).length, 1)
})

test('.getInitialProps with req', t => {
  const reqNotFoundProps = Error.getInitialProps({ req: { statusCode: 404 } })
  t.is(reqNotFoundProps.error, 'Page not found')

  const reqErrorProps = Error.getInitialProps({ req: { statusCode: 500 } })
  t.is(reqErrorProps.error, 'An error occured')
})

test('.getInitialProps with xhr', t => {
  const reqNotFoundProps = Error.getInitialProps({ xhr: { status: 404 } })
  t.is(reqNotFoundProps.error, 'Page not found')

  const reqErrorProps = Error.getInitialProps({ xhr: { status: 500 } })
  t.is(reqErrorProps.error, 'An error occured')
})
