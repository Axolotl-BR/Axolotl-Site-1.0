import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'

const vibe = [
  'conversa boa',
  'jogos juntos',
  'eventos improvisados',
  'criação colaborativa (?)',
  'amizade de internet',
  'suporte que funciona',
]

export function Community() {
  return (
    <Section
      id="comunidade"
      eyebrow="comunidade"
      title={
        <>
          feito de <span className="text-gradient-accent">player para player.</span>
        </>
      }
      lead="sem perfis corporativos, sem roteiro, sem fingir que é outra coisa. aqui as pessoas são quem são na internet: gente que joga, cria e ocupa um canto da web junto."
    >
      <div className="community-grid">
        <div className="community-copy">
          <Reveal>
            <p className="lead">
              O axolote funciona assim: todo mundo pode entrar, todo mundo pode criar, e ninguém
              precisa pedir permissão pra ter ideia.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="community-note">
              não é sobre ser o maior. é sobre ser um lugar onde dá vontade de ficar.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="community-lista-wrap">
          <ul className="community-lista">
            {vibe.map((item) => (
              <li key={item} className="community-item">
                <span className="community-arrow mono" aria-hidden="true">
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}