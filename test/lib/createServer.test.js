import test from 'ava'
import supertest from 'supertest'
import createServer from '../../lib/createServer'
import thoughts from '../../data/thoughts'

function server({ app, handle, logger } = {}) {
  handle = handle || ((req, res) => res.send())
  return createServer({ app, handle, logger })
}

function firstThought() {
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
   await supertest(server()).get('/favicon.ico').expect(200)
})

test('serves poems', async t => {
   await supertest(server()).get('/poems/').expect(200)
   await supertest(server()).get('/poems/a-soul').expect(200)
   await supertest(server()).get('/poems/a-soul.html').expect(200)
})

test('serves moon and fate', async t => {
   await supertest(server()).get('/moon-and-fate.html').expect(200)
})

test('serves thoughts', async t => {
  const app = { render (req, res) { return res.send() } }
  const { url } = firstThought()
  await supertest(server({ app })).get(url).expect(200)
})

test('serves 404 if thought does not exist', async t => {
  const handle = (req, res) => res.status(404).send()
  await supertest(server({ handle })).get('/thoughts/doesnt-exist').expect(404)
})

test('serves next.js by default', async t => {
  const handle = (req, res) => res.status(200).send()
  await supertest(server({ handle })).get('/cool').expect(200)
})
