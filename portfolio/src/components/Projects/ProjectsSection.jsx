import ProjectCard from './ProjectCard.jsx'
import { projects } from '../../data/portfolioData.js'

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-6 animate-fadeUp">
      <header className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <span className="eyebrow">Section 03</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">Projects</h2>
        </div>
        <p className="text-xs text-ink-faint font-mono">{projects.length} projects, rendered from a single data array</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 60} />
        ))}
      </div>
    </div>
  )
}
