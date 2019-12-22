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

    <div className='animated fadeIn'>
      <div className='content'>
        <div className='content__primary'>
          {children}
        </div>

        <div className='content__secondary'>
          <div className='author'>
            <p className='author__avatar'>
              <img
                src='https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=180'
                style={{ height: '5rem', width: '5rem' }}
                />
            </p>

            <p className='author__description'>
              <small>A website by</small><br />
              Luke&nbsp;Morton
            </p>
          </div>

          <Chapters />
        </div>
      </div>
    </div>

    <Tracking />
  </div>
