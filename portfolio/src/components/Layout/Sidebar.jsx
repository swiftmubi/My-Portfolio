import { useState } from 'react'
import Icon from '../Icon.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { navItems, profile } from '../../data/portfolioData.js'

export default function Sidebar({ activeSection, onNavigate, theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (id) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <>
      {/* ── Mobile top bar ─────────────────────────────────────────── */}
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3.5 bg-base/90 backdrop-blur border-b border-line">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-ink text-base grid place-items-center font-mono font-bold text-sm">
            MA
          </div>
          <span className="font-semibold text-sm">{profile.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg border border-line-strong text-ink-dim hover:text-ink hover:bg-surface-hover"
            aria-label="Open navigation menu"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer overlay ──────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-surface border-l border-line p-5 flex flex-col animate-fadeUp">
            <div className="flex items-center justify-between mb-8">
              <span className="eyebrow">Navigate</span>
              <div className="flex items-center gap-2">
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-ink-dim hover:text-ink hover:bg-surface-hover"
                  aria-label="Close navigation menu"
                >
                  <Icon name="close" size={18} />
                </button>
              </div>
            </div>
            <NavList activeSection={activeSection} onNavigate={handleNav} />
            <SocialRow className="mt-auto pt-6 border-t border-line" />
          </div>
        </div>
      )}

      {/* ── Desktop fixed sidebar ──────────────────────────────────── */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-r lg:border-line lg:bg-surface/60 lg:backdrop-blur px-5 py-6 z-40">
        <div className="flex items-center gap-3 px-1 mb-10">
          <div className="h-10 w-10 rounded-xl bg-ink text-base grid place-items-center font-mono font-bold">
            MA
          </div>
          <div>
            <p className="font-semibold text-sm leading-tight">{profile.name}</p>
            <p className="text-xs text-ink-faint font-mono">Portfolio Dashboard</p>
          </div>
        </div>

        <NavList activeSection={activeSection} onNavigate={handleNav} />

        <div className="mt-auto pt-6 border-t border-line">
          <div className="flex items-center gap-2 px-3.5 mb-4">
            <span className="h-2 w-2 rounded-full bg-signal animate-pulseDot" />
            <span className="text-xs text-ink-dim">{profile.availability}</span>
          </div>
          <div className="flex items-center justify-between px-1 mb-4">
            <span className="eyebrow">Theme</span>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
          <SocialRow />
        </div>
      </aside>
    </>
  )
}

function NavList({ activeSection, onNavigate }) {
  return (
    <nav className="flex flex-col gap-1" aria-label="Primary">
      {navItems.map((item) => {
        const isActive = activeSection === item.id
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`nav-link w-full text-left ${isActive ? 'nav-link-active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon name={item.icon} size={17} className={isActive ? 'text-ink' : 'text-ink-faint'} />
            {item.label}
            {isActive && <Icon name="chevronRight" size={14} className="ml-auto text-ink-faint" />}
          </button>
        )
      })}
    </nav>
  )
}

function SocialRow({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 px-1 ${className}`}>
      {profile.socials.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target={s.id === 'email' ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          className="h-9 w-9 grid place-items-center rounded-lg border border-line-strong text-ink-dim hover:text-ink hover:border-silver hover:bg-surface-hover transition-colors"
        >
          <Icon name={s.id} size={16} />
        </a>
      ))}
    </div>
  )
}
