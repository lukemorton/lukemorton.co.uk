import React from 'react'
import Head from 'next/head'
import Chapters from '../Chapters'
import Tracking from '../Tracking'

export default ({ title, backgroundImageSrc, children }) =>
  <div className='page'>
    <Head>
      <title>{title} – Luke Morton</title>

      <meta charset='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='google-site-verification' content='lzxFltmFH5mp8y-5rFiNDfH9qQN8rHw_1zcwFVWQl7A' />

      <link rel='stylesheet' href='/css/reset.css' />
      <link rel='stylesheet' href='/css/screen.css' />
    </Head>

    <Chapters />

    <div className='animated fadeIn'>
      {children}
    </div>

    <Tracking />
  </div>
