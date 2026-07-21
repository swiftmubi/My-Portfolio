import { useState } from 'react'
import Icon from '../Icon.jsx'
import { profile } from '../../data/portfolioData.js'

export default function FloatingSocial() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-5 sm:right-8 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-fadeUp">
          {profile.socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target={s.id === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              title={s.label}
              className="h-11 w-11 grid place-items-center rounded-full bg-surface-raised border border-line-strong text-ink shadow-panel hover:border-silver hover:bg-surface-hover transition-colors"
            >
              <Icon name={s.id} size={17} />
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close social links' : 'Open social links'}
        aria-expanded={open}
        className="h-12 w-12 grid place-items-center rounded-full bg-ink text-base shadow-panel hover:bg-white transition-all active:scale-95"
      >
        <Icon name={open ? 'close' : 'send'} size={18} strokeWidth={2} />
      </button>
    </div>
  )
}
