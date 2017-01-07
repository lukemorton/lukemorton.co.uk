import test from 'ava'
import supertest from 'supertest'
import createServer from '../../lib/createServer'

function server() {
  const app = () => null
  const handle = () => null
  return createServer({ app, handle })
}

test('serves favicon', async t => {
   await supertest(server()).get('/favicon.ico').expect(200)
})
