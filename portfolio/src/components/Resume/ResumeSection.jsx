import Icon from '../Icon.jsx'
import { profile } from '../../data/portfolioData.js'

export default function ResumeSection() {
  return (
    <div className="flex flex-col gap-6 animate-fadeUp">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="eyebrow">Section 06</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">Resume</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost w-full sm:w-auto"
          >
            <Icon name="external" size={14} />
            View Full Resume
          </a>
          <a
            href={profile.resumeUrl}
            download="Mubeen_Ahmad_Resume.pdf"
            className="btn-primary w-full sm:w-auto"
          >
            <Icon name="download" size={14} />
            Download Resume
          </a>
        </div>
      </header>

      {/* Styled Resume Paper UI */}
      <div className="panel p-6 sm:p-10 space-y-8 bg-surface border border-line rounded-2xl shadow-xl text-ink">
        
        {/* Header Section */}
        <div className="border-b border-line pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">{profile.name}</h1>
          <p className="text-indigo-400 font-medium text-sm mt-1">
            {profile.titles.join(' • ')}
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-ink-dim mt-3">
            <span>📍 {profile.location}</span>
            <span>✉️ {profile.email}</span>
            <span>🔗 github.com/swiftmubi</span>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-ink-dim">
            Professional Summary
          </h3>
          <p className="text-sm text-ink-faint leading-relaxed">
            {profile.tagline} Experienced in building full-stack workflows using React, Django, and n8n webhooks.
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-ink-dim">
            Professional Experience
          </h3>
          
          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <h4 className="text-sm font-semibold text-white">Associate Automation Developer</h4>
              <span className="text-xs text-ink-dim">2025 – Present</span>
            </div>
            <p className="text-xs text-indigo-400">Think Code IT Solutions</p>
            <ul className="list-disc list-inside text-xs text-ink-faint space-y-1 mt-1">
              <li>Designed and deployed n8n automation workflows integrating webhooks and third-party APIs.</li>
              <li>Optimized existing pipelines, reducing manual operational steps and processing time.</li>
            </ul>
          </div>

          <div className="space-y-1 pt-2">
            <div className="flex justify-between items-baseline">
              <h4 className="text-sm font-semibold text-white">Frontend Developer Intern</h4>
              <span className="text-xs text-ink-dim">2025</span>
            </div>
            <p className="text-xs text-indigo-400">Think Code IT Solutions</p>
            <ul className="list-disc list-inside text-xs text-ink-faint space-y-1 mt-1">
              <li>Built responsive user interfaces using React.js, JavaScript, and Tailwind CSS.</li>
              <li>Integrated frontend dashboards with RESTful API endpoints and state management.</li>
            </ul>
          </div>
        </div>

        {/* Key Projects */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-ink-dim">
            Featured Projects
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-line bg-surface-hover/50 space-y-1">
              <h4 className="text-sm font-bold text-white">University Process Automation Hub</h4>
              <p className="text-xs text-indigo-400">React • Django • n8n • SQLite3</p>
              <p className="text-xs text-ink-faint mt-1">Event-driven portal automating academic approvals and student request tracking.</p>
            </div>
            <div className="p-4 rounded-xl border border-line bg-surface-hover/50 space-y-1">
              <h4 className="text-sm font-bold text-white">Automated Video Pipeline</h4>
              <p className="text-xs text-indigo-400">n8n • Python • APIs</p>
              <p className="text-xs text-ink-faint mt-1">End-to-end scheduled batch video rendering and publishing pipeline.</p>
            </div>
          </div>
        </div>

        {/* Education & Certification */}
        <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-line">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-dim mb-2">Education</h3>
            <p className="text-xs font-semibold text-white">BS Computer Science</p>
            <p className="text-xs text-ink-faint">The Islamia University of Bahawalpur</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-dim mb-2">Certifications</h3>
            <p className="text-xs font-semibold text-white">Advanced Python Programming (A+ Grade)</p>
            <p className="text-xs text-ink-faint">NAVTTC</p>
          </div>
        </div>

      </div>

      <p className="text-xs text-ink-faint font-mono text-center">
        File target: <code className="text-ink-dim">{profile.resumeUrl}</code> — Click "Download Resume" or "View Full Resume" to access the PDF file directly.
      </p>
    </div>
  )
}