import Router from 'next/router'
import ga from 'react-ga'

function twitterInit() {
  !(function (e, t, n, s, u, a) {
    e.twq ||
      ((s = e.twq = function () {
        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
      }),
      (s.version = '1.1'),
      (s.queue = []),
      (u = t.createElement(n)),
      (u.async = !0),
      (u.src = '//static.ads-twitter.com/uwt.js'),
      (a = t.getElementsByTagName(n)[0]),
      a.parentNode.insertBefore(u, a))
  })(window, document, 'script')

  twq('init', 'o3pmi')
  twq('track', 'PageView')
}

function logPageView(url) {
  ga.set({ page: url })
  ga.pageview(url)
}

if (process.env.NODE_ENV === 'production') {
  if (typeof window !== 'undefined') {
    twitterInit()
    ga.initialize('UA-9371957-1')
    logPageView(window.location.pathname)
  }

  Router.onRouteChangeComplete = logPageView
}

export default () => null
