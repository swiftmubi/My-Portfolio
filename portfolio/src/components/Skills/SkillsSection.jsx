import SkillBar from './SkillBar.jsx'
import CertificationCard from './CertificationCard.jsx'
import { coreSkills, secondarySkills, certifications } from '../../data/portfolioData.js'

export default function SkillsSection() {
  return (
    <div className="flex flex-col gap-6 animate-fadeUp">
      <header>
        <span className="eyebrow">Section 04</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">Skills &amp; Certifications</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Core proficiency bars */}
        <div className="lg:col-span-3 panel p-6 sm:p-8">
          <span className="eyebrow">Core Languages &amp; Tools</span>
          <div className="mt-6 flex flex-col gap-5">
            {coreSkills.map((skill, i) => (
              <SkillBar key={skill.id} skill={skill} delay={i * 60} />
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-line">
            <span className="eyebrow">Also Working With</span>
            <div className="flex flex-wrap gap-2 mt-4">
              {secondarySkills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="lg:col-span-2 panel p-6 sm:p-8">
          <span className="eyebrow">Verified Credentials</span>
          <div className="mt-5 flex flex-col gap-3">
            {certifications.map((cert, i) => (
              <CertificationCard key={cert.id} cert={cert} delay={i * 60} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
