import React from 'react'
import Head from 'next/head'
import Author from './Author'
import Menu from './Menu'
import Content from './Content'
import Tracking from './Tracking'
import reset from '../../shared/reset.css'
import typography from '../../shared/typography.css'
import utils from '../../shared/utils.css'
import toBeMigrated from '../../shared/toBeMigrated.css'

export default ({ title, children }) =>
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

    <Content>
      <Content.Primary>
        {children}
      </Content.Primary>

      <Content.Secondary>
        <Author />

        <Menu />
      </Content.Secondary>
    </Content>

    <Tracking />
  </div>
