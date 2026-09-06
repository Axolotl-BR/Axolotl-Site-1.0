import { ArrowUpRight, Github } from 'lucide-react'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { githubRepos, links } from '../data/site'

export function BuiltPublic() {
  return (
    <Section
      id="builtpublic"
      eyebrow="github"
      title={
        <>
          built <span className="text-gradient">in public.</span>
        </>
      }
      lead="O código que sustenta o universo mora no github. repos reais, sem dados inventados — os que estão publicados aparecem aqui."
    >
      <div className="built-grid">
        {githubRepos.map((repo, i) => (
          <Reveal key={repo.name} delay={i * 90}>
            <a
              href={repo.href}
              target="_blank"
              rel="noreferrer"
              className="built-repo panel"
            >
              <div className="built-repo-top">
                <Github size={18} aria-hidden="true" />
                <ArrowUpRight size={15} aria-hidden="true" />
              </div>
              <h3 className="built-repo-name mono">{repo.name}</h3>
              <p className="built-repo-desc">{repo.desc}</p>
              <span className="built-repo-lang mono">
                <span className="led primary" aria-hidden="true" /> {repo.lang}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={280}>
        <div className="built-more">
          <a href={links.githubOrg} target="_blank" rel="noreferrer" className="btn btn-ghost">
            ver o org inteiro <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}