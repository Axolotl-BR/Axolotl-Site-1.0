import { ArrowUpRight, MessageCircle, Users, Trophy, LifeBuoy, Bot, Bell } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { links } from '../data/site'

const features = [
  { icon: MessageCircle, label: 'conversa' },
  { icon: Users, label: 'comunidade' },
  { icon: Trophy, label: 'eventos' },
  { icon: LifeBuoy, label: 'suporte' },
  { icon: Bot, label: 'bots' },
  { icon: Bell, label: 'novidades' },
]

export function DiscordSection() {
  return (
    <section id="discord" className="section discord">
      <div className="container">
        <Reveal>
          <div className="discord-door">
            <div className="discord-glow" aria-hidden="true" />
            <div className="discord-inner">
              <div className="discord-info">
                <span className="eyebrow">discord</span>
                <h2 className="h2 discord-title">
                  o ponto de <span className="text-gradient">encontro.</span>
                </h2>
                <p className="lead discord-desc">
                  O coração social do universo. é onde o axolotl respira em tempo real: canais,
                  eventos, suporte de verdade e a conversa que nunca para.
                </p>
                <ul className="discord-feats">
                  {features.map((f) => (
                    <li key={f.label}>
                      <f.icon size={15} aria-hidden="true" />
                      <span className="mono">{f.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="discord-enter">
                <div className="discord-status">
                  <span className="led online" /> comunidade online
                </div>
                <a
                  href={links.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary discord-cta"
                >
                  entrar no discord <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <p className="mono discord-hint">discord.gg/AxolotlBR</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}