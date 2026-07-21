import Icon from '../Icon.jsx'
import { featuredProject } from '../../data/portfolioData.js'

export default function FeaturedProjectWidget() {
  return (
    <div className="panel p-6 sm:p-7 h-full flex flex-col animate-fadeUp">
      <div className="flex items-center justify-between mb-5">
        <span className="eyebrow">Featured System</span>
        <span className="flex items-center gap-1.5 text-xs text-signal font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulseDot" />
          {featuredProject.status}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
        {featuredProject.title}
      </h3>
      <p className="text-sm text-ink-dim leading-relaxed mb-5">
        {featuredProject.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {featuredProject.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-3 gap-2 sm:gap-3 pt-5 border-t border-line">
        {featuredProject.metrics.map((m) => (
          <div key={m.label}>
            <p className="text-lg sm:text-xl font-bold">{m.value}</p>
            <p className="text-[11px] text-ink-faint leading-snug mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
