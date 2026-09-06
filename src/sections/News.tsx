import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { news } from '../data/site'

export function News() {
  return (
    <Section
      id="novidades"
      eyebrow="do axolotl"
      title={
        <>
          o que está <span className="text-gradient">acontecendo.</span>
        </>
      }
      lead="A história do universo em tempo real. atualizações, eventos e anotações registradas do jeito que aconteceram."
    >
      <ol className="news-list">
        {news.map((item, i) => (
          <li key={`${item.kind}-${item.date}`}>
            <Reveal delay={i * 70}>
              <article className={`news-item ${i === 0 ? 'news-now' : ''}`}>
                <div className="news-meta">
                  <span className="tag" data-kind={item.kind}>
                    {item.kind}
                  </span>
                  <span className="mono news-date">{item.date}</span>
                </div>
                <div className="news-body">
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-desc">{item.desc}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={400}>
        <div className="news-foot mono">
          <span className="text-faint">// mais registros vêm com o tempo. o universo não para.</span>
        </div>
      </Reveal>
    </Section>
  )
}