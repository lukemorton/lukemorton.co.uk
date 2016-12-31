import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

function errorMessage(res, xhr) {
  const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)

  if (statusCode === '404') {
    return 'Page Not Found'
  } else {
    return 'An error occured'
  }
}

export default class extends React.Component {
  static getInitialProps ({ res, xhr }) {
    return {
      error: errorMessage(res, xhr),
      indexUrl: '/'
    }
  }

  render () {
    return (
      <Page title={this.props.error}>
        <main>
          <h1>
            {this.props.error}
          </h1>

          <p>
            Sorry, <Link href={this.props.indexUrl}>back to home</Link>?
          </p>
        </main>
      </Page>
    )
  }
}
