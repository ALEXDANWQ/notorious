import { useEffect } from 'react'

function ensureDescriptionMeta(): HTMLMetaElement {
  let description = document.querySelector<HTMLMetaElement>('meta[name="description"]')

  if (!description) {
    description = document.createElement('meta')
    description.name = 'description'
    document.head.appendChild(description)
  }

  return description
}

export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    ensureDescriptionMeta().content = description
  }, [title, description])
}
