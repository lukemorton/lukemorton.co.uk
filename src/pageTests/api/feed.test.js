import feed from '../../pages/api/feed'

describe('feed', () => {
  let req
  let res
  let container

  beforeEach(() => {
    req = { query: {} }
    res = {
      status: jest.fn(),
      setHeader: jest.fn(),
      send: jest.fn(),
      end: jest.fn(),
    }
    container = {
      getFetchAllThoughts: jest.fn().mockReturnValue(() => []),
    }
  })

  it('returns error if type not set', async () => {
    await feed(req, res, { container })
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.send).toHaveBeenCalledWith({ error: 'Unknown feed type' })
  })

  it('returns error if type unknown', async () => {
    req.query.type = 'phony'
    await feed(req, res, { container })
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.send).toHaveBeenCalledWith({ error: 'Unknown feed type' })
  })

  it('calls container.getFetchAllThoughts', async () => {
    req.query.type = 'json'
    await feed(req, res, { container })
    expect(container.getFetchAllThoughts).toHaveBeenCalledWith()
  })

  it('returns rss feed', async () => {
    req.query.type = 'rss'
    await feed(req, res, { container })
    expect(res.setHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/rss+xml'
    )
    expect(res.end).toHaveBeenCalledWith(
      expect.stringContaining('<?xml version="1.0" encoding="utf-8"?>')
    )
  })

  it('returns atom feed', async () => {
    req.query.type = 'atom'
    await feed(req, res, { container })
    expect(res.setHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/atom+xml'
    )
    expect(res.end).toHaveBeenCalledWith(
      expect.stringContaining('<?xml version="1.0" encoding="utf-8"?>')
    )
  })

  it('returns json feed', async () => {
    req.query.type = 'json'
    res.end.mockImplementation((json) => {
      expect(JSON.parse(json)).toEqual(
        expect.objectContaining({
          version: 'https://jsonfeed.org/version/1',
        })
      )
    })
    expect.assertions(2)
    await feed(req, res, { container })
    expect(res.setHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/feed+json'
    )
  })
})
