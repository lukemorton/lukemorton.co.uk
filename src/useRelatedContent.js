import { useState } from 'react'
import { fetchThoughtsByTopic } from './fetchThoughts'

function excludeCurrentContent (currentSlug, thoughts) {
  return thoughts.filter((thought) => thought.slug !== currentSlug)
}

function sortByPublishedAt (thoughts) {
  return thoughts.sort((a, b) => {
    return new Date(b.publishedAt.iso) - new Date(a.publishedAt.iso)
  })
}

function take (count, arr) {
  return arr.slice(0, count)
}

export default function useRelatedContent () {
  const [relatedContent, setRelatedContent] = useState([])

  return [relatedContent, (currentSlug, tags) => {
    tags.forEach((tag) => {
      (async () => {
        const tagMap = {
          'Clean Architecture': 'cleanArchitecture',
          'Ruby on Rails': 'rails'
        }

        setRelatedContent(
          take(
            4,
            sortByPublishedAt(
              excludeCurrentContent(
                currentSlug,
                relatedContent.concat(
                  await fetchThoughtsByTopic(null, tagMap[tag])
                )
              )
            )
          )
        )
      })()
    })
  }]
}
