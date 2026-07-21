export default function SkillBar({ skill, delay = 0 }) {
  return (
    <div className="animate-fadeUp" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-ink">{skill.label}</span>
        <span className="text-xs font-mono text-ink-faint">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-surface-hover overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-ink-faint to-silver"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}
