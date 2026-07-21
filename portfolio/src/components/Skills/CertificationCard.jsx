import Icon from '../Icon.jsx'

export default function CertificationCard({ cert, delay = 0 }) {
  return (
    <div
      className="flex items-start gap-4 p-5 rounded-xl border border-line hover:border-line-strong hover:bg-surface-hover/50 transition-colors animate-fadeUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-10 w-10 rounded-lg bg-surface-hover border border-line grid place-items-center shrink-0">
        <Icon name="award" size={17} className="text-ink-dim" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ink leading-snug">{cert.title}</p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2">
          <span className="text-xs text-ink-dim">{cert.issuer}</span>
          <span className="text-ink-faint">·</span>
          <span className="text-xs text-signal font-mono">{cert.grade}</span>
          <span className="text-ink-faint">·</span>
          <span className="text-xs text-ink-faint font-mono">{cert.year}</span>
        </div>
      </div>
    </div>
  )
}
