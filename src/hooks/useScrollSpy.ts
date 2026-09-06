import { useEffect, useRef, useState } from 'react'

function orderInDom(ids: string[]): string[] {
  const els = ids
    .map((id) => ({ id, el: document.getElementById(id) }))
    .filter((x): x is { id: string; el: HTMLElement } => x.el !== null)
  els.sort((a, b) => {
    if (a.el === b.el) return 0
    return a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
  })
  return els.map((x) => x.id)
}

export function useScrollSpy(ids: string[], offset = 120): string {
  const [active, setActive] = useState(ids[0] ?? '')
  const ordered = useRef<string[]>([])

  useEffect(() => {
    ordered.current = ids.length ? orderInDom(ids) : []
    setActive(ordered.current[0] ?? '')
  }, [ids])

  useEffect(() => {
    const onScroll = () => {
      const list = ordered.current
      if (!list.length) return
      let current = list[0]
      for (const id of list) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= offset) current = id
      }
      if (
        typeof window !== 'undefined' &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      ) {
        current = list[list.length - 1]
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [offset])

  return active
}