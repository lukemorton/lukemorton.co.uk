import React from 'react'
import useRelatedContent from './useRelatedContent'

export default function ({ slug, tags }) {
  const [relatedContent, setTags] = useRelatedContent()

  React.useEffect(
    () => { setTags(slug, tags) },
    [slug, tags.join(',')]
  )

  return [relatedContent, setTags]
}
