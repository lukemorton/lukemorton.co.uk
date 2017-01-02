import React from 'react'
import Head from 'next/head'
import Chapters from '../Chapters'

export default ({ title, backgroundImageSrc, children }) =>
  <div className='page'>
    <Head>
      <title>{title} – Luke Morton</title>
      <meta charset='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='/static/reset.css' />
      <link rel='stylesheet' href='/static/screen.css' />
      <link rel='alternate'
        type='application/atom+xml'
        title='Latest Thoughts of Luke Morton'
        href='/thoughts/latest.atom' />
    </Head>

    <a href='#menu'
      className='navigation_toggle'
      id='navigation_toggle'
      style={{ display: 'none' }}>menu</a>

    <Chapters />

    <div className='animated fadeIn'>
      {children}
    </div>
  </div>
