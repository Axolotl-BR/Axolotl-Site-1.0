import { ArrowUpRight } from 'lucide-react'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { socials } from '../data/site'

export function Social() {
  return (
    <Section
      id="entrar"
      eyebrow="a internet"
      title={
        <>
          o axolotl existe <span className="text-gradient-accent">em vários lugares.</span>
        </>
      }
      lead="mesma identidade, formatos diferentes. os espaços oficiais — e só os que existem de verdade."
      className="social-section"
    >
      <div className="social-grid">
        {socials.map((s, i) => (
          <Reveal key={s.name} delay={i * 90}>
            <a href={s.href} target="_blank" rel="noreferrer" className="social-card panel">
              <div className="social-card-top">
                <span className="social-name mono">{s.name}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
              <p className="social-handle mono">{s.handle}</p>
              <p className="social-desc">{s.desc}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300}>
        <p className="social-note mono text-faint">
          // youtube, instagram, x e cia: canais oficiais aparecem aqui quando existirem. sem inventar conta.
        </p>
      </Reveal>
    </Section>
  )
}