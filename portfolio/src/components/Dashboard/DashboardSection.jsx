import WelcomeBanner from './WelcomeBanner.jsx'
import MetricCard from './MetricCard.jsx'
import FeaturedProjectWidget from './FeaturedProjectWidget.jsx'
import RecentActivityWidget from './RecentActivityWidget.jsx'
import { metrics } from '../../data/portfolioData.js'

export default function DashboardSection({ onNavigate }) {
  return (
    <div className="flex flex-col gap-6">
      <WelcomeBanner onNavigate={onNavigate} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {metrics.map((m, i) => (
          <MetricCard key={m.id} metric={m} delay={i * 60} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3">
          <FeaturedProjectWidget />
        </div>
        <div className="lg:col-span-2">
          <RecentActivityWidget />
        </div>
      </div>
    </div>
  )
}
