import Icon from '../Icon.jsx'

export default function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative h-9 w-16 rounded-full border border-line-strong bg-surface-hover flex items-center px-1 transition-colors ${className}`}
    >
      <span
        className={`h-7 w-7 rounded-full bg-ink text-base grid place-items-center transition-transform duration-300 ${
          isDark ? 'translate-x-[26px]' : 'translate-x-0'
        }`}
      >
        <Icon name={isDark ? 'moon' : 'sun'} size={14} strokeWidth={2} />
      </span>
    </button>
  )
}
