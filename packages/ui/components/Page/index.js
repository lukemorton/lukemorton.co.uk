import React from 'react'
import Head from 'next/head'
import { AllHtmlEntities } from 'html-entities'
import Author from './Author'
import Menu from './Menu'
import { SkipToMainContentLink, MainContentMarker } from './SkipToMainContent'
import Content from './Content'
import Tracking from './Tracking'
import reset from '../../shared/reset.css'
import general from '../../shared/general.css'
import typography from '../../shared/typography.css'
import utils from '../../shared/utils.css'

const DEFAULT_IMAGE =
  'https://s.gravatar.com/avatar/e7f62d126dec76b03e6d2393e44247ad?s=200'

const unescape = (v) => {
  const entities = new AllHtmlEntities()
  return entities.decode(v)
}

export default ({
  article,
  title,
  description,
  url,
  canonical,
  image,
  prefixUrl,
  children,
}) => (
  <div className="page">
    {console.log(title, unescape(title))}
    <SkipToMainContentLink />

    <Head>
      <meta charSet="utf-8" />

      <title>{unescape(title)} – Luke Morton</title>
      <meta name="title" content={unescape(title)} />
      <meta name="description" content={unescape(description)} />
      <meta name="theme-color" content="#ffffff" />

      {canonical && <link rel="canonical" href={prefixUrl(canonical)} />}

      <link rel="manifest" href="/manifest.json" />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/icon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/icon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={unescape(title)} />
      {description && (
        <meta property="og:description" content={unescape(description)} />
      )}
      {image && <meta property="og:image" content={prefixUrl(image)} />}
      {url && <meta property="og:url" content={prefixUrl(url)} />}

      <meta
        name="twitter:card"
        content={image ? 'summary_large_image' : 'summary'}
      />
      <meta property="twitter:title" content={unescape(title)} />
      <meta property="twitter:site" content="@lukemorton" />
      <meta property="twitter:creator" content="@lukemorton" />
      <meta
        property="twitter:image"
        content={prefixUrl(image || DEFAULT_IMAGE)}
      />
      {description && (
        <meta property="twitter:description" content={unescape(description)} />
      )}
      {url && <meta property="twitter:url" content={prefixUrl(url)} />}

      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS 2"
        href={prefixUrl('/feed.rss')}
      />
      <link
        rel="alternate"
        type="application/atom+xml"
        title="Atom 1"
        href={prefixUrl('/feed.atom')}
      />
      <link
        rel="alternate"
        type="application/feed+json"
        title="JSON Feed 1"
        href={prefixUrl('/feed.json')}
      />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400&family=Roboto+Condensed:wght@700&family=Roboto:wght@900&display=swap"
      />

      <meta
        name="google-site-verification"
        content="lzxFltmFH5mp8y-5rFiNDfH9qQN8rHw_1zcwFVWQl7A"
      />
    </Head>

    <style jsx global>
      {reset}
    </style>
    <style jsx global>
      {general}
    </style>
    <style jsx global>
      {typography}
    </style>
    <style jsx global>
      {utils}
    </style>

    <Content>
      <Content.Navigation>
        <Author />

        <Menu />
      </Content.Navigation>

      <Content.Primary>
        <MainContentMarker />

        {children}
      </Content.Primary>
    </Content>

    <Tracking />
  </div>
)
