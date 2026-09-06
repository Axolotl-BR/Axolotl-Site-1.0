import { useEffect, useRef, useState } from 'react'
import { Section } from '../components/Section'
import { universeNodes } from '../data/site'

export function Universe() {
  return (
    <Section
      id="universo"
      eyebrow="universo"
      title={
        <>
          um universo. <span className="text-gradient">vários lugares.</span>
        </>
      }
      lead="Axolotl BR é tudo isso ao mesmo tempo. a comunidade, os jogos, os servidores, os projetos, a tecnologia e quem cria. tudo conectado ao mesmo centro."
    >
      <div className="universe-diagram" role="img" aria-label="Diagrama do universo Axolotl BR: no centro Axolotl BR conectado a Community, Games, Servers, Projects, Tech e Creators">
        <svg className="universe-svg" viewBox="0 0 600 400" aria-hidden="true">
          <line className="u-line" x1="300" y1="200" x2="300" y2="60" />
          <line className="u-line" x1="300" y1="200" x2="520" y2="115" />
          <line className="u-line" x1="300" y1="200" x2="520" y2="286" />
          <line className="u-line" x1="300" y1="200" x2="300" y2="340" />
          <line className="u-line" x1="300" y1="200" x2="80" y2="286" />
          <line className="u-line" x1="300" y1="200" x2="80" y2="115" />
        </svg>

        <UniverseNode className="u-node-center" name="AXOLOTL BR" hint="o coração" glow />
        {universeNodes.map((n, i) => (
          <UniverseNode
            key={n.name}
            className={`u-node-${i}`}
            name={n.name}
            hint={n.hint}
            delay={150 + i * 90}
          />
        ))}
      </div>
    </Section>
  )
}

function UniverseNode({
  name,
  hint,
  className,
  delay = 0,
  glow = false,
}: {
  name: string
  hint?: string
  className: string
  delay?: number
  glow?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`node-in u-node ${glow ? 'u-node-glow' : ''} ${inView ? 'is-in' : ''} ${className}`}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      <span className="u-node-dot" aria-hidden="true" />
      <span className="u-node-name mono">{name}</span>
      {hint ? <span className="u-node-hint">{hint}</span> : null}
    </div>
  )
}