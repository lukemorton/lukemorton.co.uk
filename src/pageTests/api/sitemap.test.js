import sitemap from '../../pages/api/sitemap'

describe('sitemap', () => {
  let req
  let res
  let container

  beforeEach(() => {
    req = { query: {} }
    res = {
      on: () => null,
      once: () => null,
      emit: () => null,
      end: () => null,
      setHeader: jest.fn(),
      write: jest.fn(),
    }
    container = {
      getFetchAllThoughts: jest.fn().mockReturnValue(() => []),
      getFetchAllTopics: jest.fn().mockReturnValue(() => []),
    }
  })

  it('calls container.getFetchAllThoughts', async () => {
    await sitemap(req, res, { container })
    expect(container.getFetchAllThoughts).toHaveBeenCalledWith()
  })

  it('calls container.getFetchAllTopics', async () => {
    await sitemap(req, res, { container })
    expect(container.getFetchAllTopics).toHaveBeenCalledWith()
  })

  it('returns XML sitemap', async () => {
    await sitemap(req, res, { container })
    expect(res.setHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/xml'
    )
    expect(res.write).toHaveBeenCalledWith(
      expect.stringContaining('<?xml version="1.0" encoding="UTF-8"?>')
    )
  })
})
