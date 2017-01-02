import test from 'ava'
import fs from 'fs'
import thoughtsList from '../../lib/thoughtsList'

function thoughts() {
  return [
    {
      slug: '2016-01-01-cool-things.md',
      content: fs.readFileSync(__dirname + '/mockContent.md', { encoding: 'utf8' })
    }
  ]
}

test('includes attributes', t => {
  const [thought] = thoughtsList({ thoughts: thoughts() })
  t.is(thought.title, 'A title')
  t.is(thought.intro, '<p>An introduction\ncool.</p>\n')
  t.is(thought.slug, '2016-01-01-cool-things.md')
  t.regex(thought.publishedAt, /[\d]{1,2}(?:st|nd|rd|th) [A-Za-z]+ [\d]{4}/)
  t.is(thought.content.indexOf('<h1 id="a-span-title-span-">A <span>title</span></h1>'), 0)
})
