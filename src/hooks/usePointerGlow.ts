import { useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion'

// glow suave acompanhando o mouse — desktop e mouse de precisão apenas
export function usePointerGlow(enabled = true): void {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!enabled || reduced) return
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (coarse) return

    const el = document.createElement('div')
    el.className = 'cursor-glow'
    document.body.appendChild(el)

    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const root = document.documentElement
        root.style.setProperty('--mx', `${e.clientX}px`)
        root.style.setProperty('--my', `${e.clientY}px`)
        el.style.opacity = '1'
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      el.remove()
    }
  }, [enabled, reduced])
}