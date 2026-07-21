import Icon from '../Icon.jsx'

export default function MetricCard({ metric, delay = 0 }) {
  return (
    <div
      className="panel px-5 py-5 flex flex-col gap-4 hover:border-line-strong transition-colors animate-fadeUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow">{metric.label}</span>
        <div className="h-8 w-8 rounded-lg bg-surface-hover border border-line grid place-items-center text-ink-dim">
          <Icon name={metric.icon} size={15} />
        </div>
      </div>
      <p className="text-3xl sm:text-4xl font-bold tracking-tight">
        {metric.value}
        <span className="text-ink-faint text-xl sm:text-2xl">{metric.suffix}</span>
      </p>
    </div>
  )
}
