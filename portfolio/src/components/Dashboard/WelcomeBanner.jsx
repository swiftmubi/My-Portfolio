import Icon from '../Icon.jsx'
import { profile } from '../../data/portfolioData.js'

export default function WelcomeBanner({ onNavigate }) {
  return (
    <section className="panel relative overflow-hidden px-6 sm:px-10 py-10 sm:py-14 animate-fadeUp">
      {/* signature node-graph line motif — echoes the automation/workflow theme */}
      <svg
        className="pointer-events-none absolute -right-10 -top-10 h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] opacity-[0.14] text-silver"
        viewBox="0 0 200 200"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1">
          <path d="M20 40 L80 40 L80 100 L150 100" strokeDasharray="4 6" className="animate-dashFlow" />
          <path d="M20 120 L60 120 L60 160 L140 160" strokeDasharray="4 6" className="animate-dashFlow" />
          <path d="M100 20 L100 70 L150 70 L150 40" strokeDasharray="4 6" className="animate-dashFlow" />
        </g>
        <g fill="currentColor">
          <circle cx="20" cy="40" r="3.5" />
          <circle cx="80" cy="40" r="3.5" />
          <circle cx="150" cy="100" r="3.5" />
          <circle cx="20" cy="120" r="3.5" />
          <circle cx="140" cy="160" r="3.5" />
          <circle cx="100" cy="20" r="3.5" />
          <circle cx="150" cy="40" r="3.5" />
        </g>
      </svg>

      <div className="relative max-w-2xl">
        <div className="flex items-center gap-2 mb-5">
          <span className="h-2 w-2 rounded-full bg-signal animate-pulseDot" />
          <span className="eyebrow">{profile.availability}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
          {profile.name}
        </h1>

        <div className="mt-3 flex flex-wrap gap-2">
          {profile.titles.map((t) => (
            <span key={t} className="tag normal-case text-xs sm:text-[13px] text-ink">
              {t}
            </span>
          ))}
        </div>

        {/* Forced High Contrast Inline Style */}
        <p 
          style={{ color: '#d1d5db' }} 
          className="mt-6 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
        >
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-col xs:flex-row flex-wrap gap-3">
          <button className="btn-primary w-full xs:w-auto" onClick={() => onNavigate('projects')}>
            View Projects
            <Icon name="chevronRight" size={15} />
          </button>
          <button className="btn-ghost w-full xs:w-auto" onClick={() => onNavigate('resume')}>
            <Icon name="download" size={15} />
            Resume
          </button>
        </div>
      </div>
    </section>
  )
}