import { recentActivity } from '../../data/portfolioData.js'

export default function RecentActivityWidget() {
  return (
    <div className="panel p-6 sm:p-7 h-full animate-fadeUp">
      <span className="eyebrow">Recent Activity</span>
      <ul className="mt-5 flex flex-col">
        {recentActivity.map((item, idx) => (
          <li key={item.id} className="relative pl-6 pb-6 last:pb-0">
            {idx !== recentActivity.length - 1 && (
              <span className="absolute left-[5px] top-3 bottom-0 w-px bg-line" />
            )}
            <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-surface border-2 border-silver" />
            <p className="text-sm font-medium text-ink leading-snug">{item.title}</p>
            <p className="text-xs text-ink-dim mt-1 leading-relaxed">{item.detail}</p>
            <p className="text-[11px] text-ink-faint font-mono mt-1.5">{item.time}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
