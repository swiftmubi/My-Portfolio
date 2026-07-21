import Icon from '../Icon.jsx'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <div
      className="panel p-6 flex flex-col h-full hover:border-line-strong hover:-translate-y-0.5 transition-all animate-fadeUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-bold tracking-tight leading-snug">{project.title}</h3>
        {project.featured && (
          <span className="tag shrink-0 text-signal border-signal/30">Featured</span>
        )}
      </div>

      <p className="text-sm text-ink-dim leading-relaxed mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-line">
        <a href={project.links.demo} className="btn-ghost flex-1 !py-2 text-xs" target="_blank" rel="noreferrer">
          <Icon name="external" size={13} />
          Live Demo
        </a>
        <a href={project.links.github} className="btn-ghost flex-1 !py-2 text-xs" target="_blank" rel="noreferrer">
          <Icon name="github" size={13} />
          GitHub
        </a>
      </div>
    </div>
  )
}
