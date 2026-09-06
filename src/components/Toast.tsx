type ToastProps = {
  message: string | null
}

export function Toast({ message }: ToastProps) {
  const show = message !== null
  return (
    <div
      className={`toast ${show ? 'show' : ''}`}
      role="status"
      aria-live="polite"
      aria-hidden={!show}
    >
      <div className="toast-inner">{show ? message : ''}</div>
    </div>
  )
}