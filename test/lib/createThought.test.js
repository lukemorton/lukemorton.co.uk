import test from 'ava'
import fs from 'fs'
import path from 'path'
import createThought from '../../lib/createThought'

test('includes attributes', t => {
  const thought = createThought({
    slug: '2016-01-01-cool-things',
    content: fs.readFileSync(path.join(__dirname, 'mockContent.md'), { encoding: 'utf8' })
  })

  t.is(thought.title, '<h1 id="a-span-title-span-">A <span>title</span></h1>\n')
  t.is(thought.plainTitle, 'A title')
  t.is(thought.intro, '<p>An introduction\ncool.</p>\n')
  t.is(thought.slug, '2016-01-01-cool-things')
  t.is(thought.url, '/thoughts/2016-01-01-cool-things')
  t.regex(thought.publishedAt, /[\d]{1,2}(?:st|nd|rd|th) [A-Za-z]+ [\d]{4}/)
  t.truthy(thought.publishedAtISO)
  t.is(thought.content.indexOf('<p>An introduction\ncool.</p>\n'), 0)
})
