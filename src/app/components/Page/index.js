import React from 'react'
import Head from 'next/head'
import Menu from './Menu'
import Tracking from './Tracking'
import reset from '../../shared/reset.css'
import typography from '../../shared/typography.css'
import utils from '../../shared/utils.css'
import toBeMigrated from '../../shared/toBeMigrated.css'

export default ({ title, backgroundImageSrc, children }) =>
  <div className='page'>
    <Head>
      <title>{title} – Luke Morton</title>

      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='google-site-verification' content='lzxFltmFH5mp8y-5rFiNDfH9qQN8rHw_1zcwFVWQl7A' />
    </Head>

    <style jsx global>{reset}</style>
    <style jsx global>{typography}</style>
    <style jsx global>{utils}</style>
    <style jsx global>{toBeMigrated}</style>

    <div>
      <div className='content'>
        <div className='content__primary animated fadeIn'>
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

          <Menu />
        </div>
      </div>
    </div>

    <Tracking />
  </div>
