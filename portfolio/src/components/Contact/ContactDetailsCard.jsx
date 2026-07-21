import Icon from '../Icon.jsx'
import { contactDetails, profile } from '../../data/portfolioData.js'

const iconFor = { email: 'mail', location: 'user', availability: 'activity' }

export default function ContactDetailsCard() {
  return (
    <div className="panel p-6 sm:p-8 flex flex-col h-full">
      <span className="eyebrow">Direct Contact</span>
      <p className="text-sm text-ink-dim leading-relaxed mt-3">
        Prefer email or a quick message on LinkedIn? Reach me directly through any of the channels below.
      </p>

      <div className="flex flex-col gap-4 mt-6">
        {contactDetails.map((c) => (
          <div key={c.id} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-surface-hover border border-line grid place-items-center shrink-0">
              <Icon name={iconFor[c.id] || 'mail'} size={15} className="text-ink-dim" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-ink-faint font-mono uppercase tracking-wide">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="text-sm text-ink hover:text-white truncate block">{c.value}</a>
              ) : (
                <p className="text-sm text-ink truncate">{c.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-line mt-6 flex items-center gap-2">
        {profile.socials.map((s) => (
          <a
            key={s.id}
            href={s.href}
            target={s.id === 'email' ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={s.label}
            className="h-9 w-9 grid place-items-center rounded-lg border border-line-strong text-ink-dim hover:text-ink hover:border-silver hover:bg-surface-hover transition-colors"
          >
            <Icon name={s.id} size={15} />
          </a>
        ))}
      </div>
    </div>
  )
}
