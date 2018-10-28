import test from 'ava'
import supertest from 'supertest'
import path from 'path'
import createServer from '../../lib/createServer'

const distDir = path.join(__dirname, '../../dist')

function server ({ app, handle, logger } = {}) {
  handle = handle || ((req, res) => res.send())
  return createServer({ app, distDir, handle, logger })
}

function firstThought () {
  const thoughts = require(path.join(distDir, 'thoughts'))
  const slug = Object.keys(thoughts)[0]
  return thoughts[slug]
}

test('attaches logger when provided', async t => {
  var hasLogged = false
  const logger = (req, res, pass) => {
    hasLogged = true
    pass()
  }
  await supertest(server({ logger })).get('/').expect(200)
  t.true(hasLogged)
})

test('redirects non-www to www', async t => {
  const { headers } = await supertest(server()).get('/').set('Host', 'lukemorton.co.uk').expect(302)
  t.is(headers.location, 'https://www.lukemorton.co.uk')
})

test('serves favicon', async t => {
  t.is((await supertest(server()).get('/favicon.ico')).status, 200)
})

test('serves poems', async t => {
  t.is((await supertest(server()).get('/poems/')).status, 200)
  t.is((await supertest(server()).get('/poems/a-soul')).status, 200)
  t.is((await supertest(server()).get('/poems/a-soul.html')).status, 200)
})

test('serves moon and fate', async t => {
  t.is((await supertest(server()).get('/moon-and-fate.html')).status, 200)
})

test('serves thoughts', async t => {
  const app = { render (req, res) { return res.send() } }
  const { slug } = firstThought()
  const url = `/thoughts/${slug}`
  t.is((await supertest(server({ app })).get(url)).status, 200)
})

test('serves 404 if thought does not exist', async t => {
  const handle = (req, res) => res.status(404).send()
  t.is((await supertest(server({ handle })).get('/thoughts/doesnt-exist')).status, 404)
})

test('serves next.js by default', async t => {
  const handle = (req, res) => res.status(200).send()
  t.is((await supertest(server({ handle })).get('/cool')).status, 200)
})
