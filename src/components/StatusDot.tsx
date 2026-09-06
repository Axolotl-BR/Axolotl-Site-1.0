import type { StatusState } from '../data/site'
import { stateLabel } from '../data/site'

export function StatusDot({ state }: { state: StatusState }) {
  const cls =
    state === 'online' ? 'led online' : state === 'development' ? 'led warning' : 'led'
  return (
    <span className={cls} role="img" aria-label={stateLabel[state]} title={stateLabel[state]} />
  )
}