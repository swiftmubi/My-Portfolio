# Mubeen Ahmad — Personal Portfolio Dashboard

A production-ready, fully responsive portfolio dashboard built with React + Vite + Tailwind CSS, in a dark gray / white aesthetic.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Adding your resume

Drop your PDF into `public/Mubeen_Ahmad_Resume.pdf` (see `public/RESUME_PLACEHOLDER.txt`). The Resume section will automatically pick it up for the embedded viewer, "View Full Resume", and "Download Resume" actions.

## Editing content

Every piece of dynamic content — name, titles, stats, projects, skills, certifications, contact details — lives in one file:

```
src/data/portfolioData.js
```

Edit that file to update the site; no component code needs to change.

## Project structure

```
src/
  App.jsx                       Root layout, section router, footer
  index.css                     Tailwind directives + design tokens/utilities
  data/portfolioData.js         All dynamic content (single source of truth)
  components/
    Icon.jsx                    Shared inline SVG icon set
    Layout/
      Sidebar.jsx                Fixed responsive nav + mobile drawer
      FloatingSocial.jsx         Floating action button for social links
    Dashboard/
      DashboardSection.jsx
      WelcomeBanner.jsx
      MetricCard.jsx
      FeaturedProjectWidget.jsx
      RecentActivityWidget.jsx
    About.jsx
    Projects/
      ProjectsSection.jsx
      ProjectCard.jsx
    Skills/
      SkillsSection.jsx
      SkillBar.jsx
      CertificationCard.jsx
    Contact/
      ContactSection.jsx
      ContactForm.jsx
      ContactDetailsCard.jsx
    Resume/
      ResumeSection.jsx
```

## Design tokens (Tailwind config)

| Token      | Value     | Use                          |
|------------|-----------|-------------------------------|
| `base`     | `#121212` | App background                |
| `surface`  | `#1a1a1a` | Cards / panels                |
| `line`     | `#2b2b2b` | Hairline borders               |
| `ink`      | `#f5f5f4` | Primary text                  |
| `ink-dim`  | `#a3a3a1` | Secondary text                |
| `silver`   | `#c9c9c6` | Accent icons / active states  |
| `signal`   | `#8fd6a8` | The single muted-color accent, used only for "live/available" indicators |

Fonts: **Inter** (UI/body) and **JetBrains Mono** (labels, tags, data), loaded via Google Fonts in `index.html`.
