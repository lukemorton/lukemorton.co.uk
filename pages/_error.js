import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import withCommonProps from '../src/withCommonProps'

function errorMessage (res, xhr) {
  const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)

  if (statusCode === 404) {
    return 'Page not found'
  } else {
    return 'An error occured'
  }
}

export default class extends React.Component {
  static getInitialProps ({ res, xhr }) {
    return withCommonProps({
      error: errorMessage(res, xhr)
    })
  }

  render () {
    return (
      <Page title={this.props.error}>
        <main>
          <h1>
            {this.props.error}
          </h1>

          <p>
            Sorry, <Link href={this.props.indexUrl}><a>back to home</a></Link>?
          </p>
        </main>
      </Page>
    )
  }
}
