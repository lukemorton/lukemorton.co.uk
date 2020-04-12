import redirectThoughts from '../../pages/api/redirectThoughts'

describe('redirectThoughts', () => {
  let res

  beforeEach(() => {
    res = {
      status: jest.fn(),
      setHeader: jest.fn(),
      end: jest.fn(),
    }
  })

  it('redirects archive slug to /articles', () => {
    const req = { query: { slug: 'archive' } }
    redirectThoughts(req, res)
    expect(res.status).toHaveBeenCalledWith(301)
    expect(res.setHeader).toHaveBeenCalledWith('Location', '/articles')
    expect(res.end).toHaveBeenCalledWith()
  })

  it('redirects blog post slug to /articles/:slug', () => {
    const req = { query: { slug: '2020-01-01-very-cool-post' } }
    redirectThoughts(req, res)
    expect(res.status).toHaveBeenCalledWith(301)
    expect(res.setHeader).toHaveBeenCalledWith(
      'Location',
      '/articles/very-cool-post'
    )
    expect(res.end).toHaveBeenCalledWith()
  })
})
