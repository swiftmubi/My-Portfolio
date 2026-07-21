import { useState } from 'react'
import useTheme from './hooks/useTheme.js'
import Sidebar from './components/Layout/Sidebar.jsx'
import FloatingSocial from './components/Layout/FloatingSocial.jsx'
import DashboardSection from './components/Dashboard/DashboardSection.jsx'
import About from './components/About.jsx'
import ProjectsSection from './components/Projects/ProjectsSection.jsx'
import SkillsSection from './components/Skills/SkillsSection.jsx'
import ContactSection from './components/Contact/ContactSection.jsx'
import ResumeSection from './components/Resume/ResumeSection.jsx'
import Icon from './components/Icon.jsx'
import { profile } from './data/portfolioData.js'

const sections = {
  dashboard: DashboardSection,
  about: About,
  projects: ProjectsSection,
  skills: SkillsSection,
  contact: ContactSection,
  resume: ResumeSection,
}

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const { theme, toggleTheme } = useTheme()
  const ActiveComponent = sections[activeSection] || DashboardSection

  return (
    <div className="min-h-screen bg-base text-ink">
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className="lg:pl-64 flex flex-col min-h-screen">
        <main className="flex-1 px-4 sm:px-8 lg:px-10 py-6 sm:py-10 max-w-7xl w-full mx-auto">
          <ActiveComponent onNavigate={setActiveSection} />
        </main>

        <Footer onNavigate={setActiveSection} />
      </div>

      <FloatingSocial />
    </div>
  )
}

function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-line px-4 sm:px-8 lg:px-10 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-surface-hover border border-line grid place-items-center font-mono font-bold text-xs">
            MA
          </div>
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>
        </div>
        <button
          onClick={() => onNavigate('resume')}
          className="text-xs font-mono text-ink-dim hover:text-ink flex items-center gap-1.5"
        >
          <Icon name="file" size={13} />
          View Resume
        </button>
      </div>
    </footer>
  )
}
