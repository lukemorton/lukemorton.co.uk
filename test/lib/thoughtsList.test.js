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
  t.is(thought.intro, 'An introduction\ncool.')
  t.is(thought.slug, '2016-01-01-cool-things.md')
  t.regex(thought.publishedAt, /[\d]{1,2}(?:st|nd|rd|th) [A-Za-z]+ [\d]{4}/)
})
