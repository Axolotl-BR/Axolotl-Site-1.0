import { Reveal } from '../components/Reveal'

export function Manifesto() {
  return (
    <section id="identidade" className="section manifesto">
      <div className="container">
        <Reveal>
          <span className="eyebrow">identidade</span>
        </Reveal>

        <Reveal delay={80}>
          <p className="manifesto-line">
            Um <em>canto da internet</em> feito por quem joga, cria, programa e simplesmente
            gosta de estar aqui.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="manifesto-sub">
            Axolotl BR não é um servidor. é um ecossistema. o discord é uma parte, o minecraft é
            uma parte, os projetos são uma parte, o código é uma parte. e você pode entrar por
            qualquer uma dessas portas.
          </p>
        </Reveal>

        <div className="manifesto-chips">
          <Reveal delay={200}>
            <span className="chip">brasileiro</span>
          </Reveal>
          <Reveal delay={260}>
            <span className="chip">de player para player</span>
          </Reveal>
          <Reveal delay={320}>
            <span className="chip">aberto a experimentos</span>
          </Reveal>
          <Reveal delay={380}>
            <span className="chip">🫟</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}