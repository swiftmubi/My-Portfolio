import Icon from './Icon.jsx'
import { about } from '../data/portfolioData.js'

export default function About() {
  return (
    <div className="flex flex-col gap-6 animate-fadeUp">
      <header>
        <span className="eyebrow">Section 02</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">{about.heading}</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 panel p-6 sm:p-8 flex flex-col gap-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-[15px] text-ink-dim leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="panel p-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="award" size={16} className="text-ink-dim" />
              <span className="eyebrow">Education</span>
            </div>
            <p className="text-sm font-semibold text-ink leading-snug">{about.education.degree}</p>
            <p className="text-xs text-ink-dim mt-1">{about.education.institution}</p>
            <p className="text-xs text-ink-faint mt-2 leading-relaxed">{about.education.detail}</p>
          </div>

          <div className="panel p-6">
            <span className="eyebrow">Focus Areas</span>
            <ul className="mt-4 flex flex-col gap-4">
              {about.focusAreas.map((f) => (
                <li key={f.label} className="flex gap-3">
                  <Icon name="check" size={14} className="text-ink-dim mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-ink leading-snug">{f.label}</p>
                    <p className="text-xs text-ink-faint mt-0.5 leading-relaxed">{f.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
