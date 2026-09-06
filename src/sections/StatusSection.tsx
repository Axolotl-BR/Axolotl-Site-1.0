import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { status, stateLabel } from '../data/site'

export function StatusSection() {
  return (
    <Section
      id="status"
      eyebrow="axolotl status"
      title={
        <>
          como o universo <span className="text-gradient">está se sentindo.</span>
        </>
      }
    >
      <Reveal>
        <div className="status panel">
          <div className="status-head">
            <span className="mono status-key">axolotl.status</span>
            <span className="tag" data-kind="UPDATE">
              demonstrativo
            </span>
          </div>

          <ul className="status-list">
            {status.map((s) => (
              <li key={s.label} className="status-item">
                <span
                  className={`led ${
                    s.state === 'online' ? 'online' : s.state === 'development' ? 'warning' : ''
                  }`}
                  aria-hidden="true"
                />
                <span className="mono status-label">{s.label}</span>
                <span className="status-state mono">{stateLabel[s.state]}</span>
                <span className="status-note">{s.note}</span>
              </li>
            ))}
          </ul>

          <p className="status-foot mono">
            sem backend de monitoramento ainda — esses status acompanham o estado real conhecido
            do universo. quando houver sistema de verdade, essa tela vira real.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}