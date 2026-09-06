import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, lead, children, className }: SectionProps) {
  return (
    <section id={id} className={`section ${className ?? ''}`}>
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h2">{title}</h2>
            {lead ? <p className="lead">{lead}</p> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}