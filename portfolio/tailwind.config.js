/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // All tokens read from CSS variables (defined in index.css for
        // :root = light and .dark = dark) so the whole palette can switch
        // at runtime with a single class toggle on <html>. Component code
        // never references hex values directly — only these token names.
        base: 'rgb(var(--color-base) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-raised': 'rgb(var(--color-surface-raised) / <alpha-value>)',
        'surface-hover': 'rgb(var(--color-surface-hover) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        'line-strong': 'rgb(var(--color-line-strong) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        'ink-dim': 'rgb(var(--color-ink-dim) / <alpha-value>)',
        'ink-faint': 'rgb(var(--color-ink-faint) / <alpha-value>)',
        silver: 'rgb(var(--color-silver) / <alpha-value>)',
        signal: 'rgb(var(--color-signal) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        },
        dashFlow: {
          to: { strokeDashoffset: -24 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        dashFlow: 'dashFlow 1.6s linear infinite',
        fadeUp: 'fadeUp 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
