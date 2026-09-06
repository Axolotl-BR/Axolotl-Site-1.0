import { ArrowUpRight } from 'lucide-react'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { servers, links } from '../data/site'
import { StatusDot } from '../components/StatusDot'
import { stateLabel } from '../data/site'

export function Servers() {
  const smp = servers[0]

  return (
    <Section
      id="servidores"
      eyebrow="servidores"
      title={
        <>
          play the <span className="text-gradient">universe.</span>
        </>
      }
      lead="Lugares onde o universo acontece de verdade. por enquanto o avatar central é o minecraft — e quando os dados forem reais, eles aparecem aqui."
    >
      <Reveal>
        <div className="smp-card panel">
          <div className="smp-top">
            <div className="smp-title-row">
              <h3 className="smp-title">{smp.name}</h3>
              <div className="smp-state">
                <StatusDot state={smp.state} />
                <span className="mono smp-state-label">{stateLabel[smp.state]}</span>
              </div>
            </div>
            <span className="chip">minecraft · java</span>
          </div>

          <p className="smp-desc">{smp.desc}</p>

          <ul className="smp-feats">
            {smp.features.map((f) => (
              <li key={f} className="chip">
                {f}
              </li>
            ))}
          </ul>

          <div className="smp-actions">
            <a href={links.discord} target="_blank" rel="noreferrer" className="btn btn-ghost">
              acompanhar no discord <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <p className="mono smp-note">
              jogadores e versão aparecem quando existirem dados reais. prometido.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="servers-empty">
        <Reveal delay={120}>
          <p className="mono servers-empty-text">
            outros servidores: <span className="text-faint">nothing here yet. o laboratório está
            preparando alguma coisa.</span>
          </p>
        </Reveal>
      </div>
    </Section>
  )
}