// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for every dynamic piece of content in the app.
// Update this file to change names, stats, projects, skills, etc. — no
// component code needs to change.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mubeen Ahmad',
  titles: ['Automation Developer', 'Frontend Developer'],
  tagline:
    'I build interactive dashboards and automate the workflows behind them — from React interfaces to n8n pipelines running quietly underneath.',
  location: 'Lahore, Punjab, Pakistan',
  availability: 'Open to new opportunities',
  email: 'mubimubeen3@gmail.com',
  resumeUrl: '/Mubeen_Ahmad_Resume.pdf',
  socials: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/swiftmubi' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/mubeenahmad' },
    { id: 'email', label: 'Email', href: 'mailto:mubimubeen3@gmail.com' },
  ],
}

export const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
  { id: 'about', label: 'About Me', icon: 'user' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'skills', label: 'Skills & Certifications', icon: 'award' },
  { id: 'contact', label: 'Contact Us', icon: 'mail' },
  { id: 'resume', label: 'Resume', icon: 'file' },
]

export const metrics = [
  { id: 'projects', label: 'Projects Completed', value: 14, suffix: '+', icon: 'folder' },
  { id: 'pipelines', label: 'Automation Pipelines Built', value: 22, suffix: '+', icon: 'workflow' },
  { id: 'experience', label: 'Years of Experience', value: 2, suffix: '+', icon: 'clock' },
  { id: 'uptime', label: 'Avg. Pipeline Uptime', value: 99, suffix: '.2%', icon: 'activity' },
]

export const featuredProject = {
  title: 'University Process Automation Hub',
  status: 'In production',
  description:
    'A centralized system that replaced manual university workflows with event-driven automation — student requests, approvals, and notifications now flow through n8n webhooks into a Django backend, with a React dashboard giving staff live visibility into every stage.',
  stack: ['React', 'Django', 'n8n Webhooks', 'SQLite3'],
  metrics: [
    { label: 'Manual steps removed', value: '18' },
    { label: 'Avg. processing time', value: '-64%' },
    { label: 'Departments onboarded', value: '5' },
  ],
}

export const recentActivity = [
  {
    id: 1,
    title: 'Shipped v2.3 of the Automation Hub dashboard',
    detail: 'Added real-time webhook status tracking and role-based views.',
    time: '2 days ago',
  },
  {
    id: 2,
    title: 'Automated Video Generation Pipeline — batch mode',
    detail: 'Extended the n8n pipeline to render and export in scheduled batches.',
    time: '1 week ago',
  },
  {
    id: 3,
    title: 'Earned NAVTTC Advanced Python Certification',
    detail: 'Completed with an A+ grade after the full applications track.',
    time: '3 weeks ago',
  },
]

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm Mubeen Ahmad, a frontend developer and automation specialist with a Bachelor's degree in Computer Science. I focus on building responsive web interfaces and connecting them with resilient backend logic and workflow automation.",
    "Most of my work sits at that intersection: React interfaces on the front end, Django and SQL underneath, and n8n stitching the systems together so processes react to real events instead of manual steps. The University Process Automation Hub is a prime example — transforming email-based approval chains into event-driven webhook automation.",
    "Outside of core applications, I design automated content pipelines and business integration workflows. I thrive on identifying repetitive operational bottlenecks and engineering clean systems to solve them.",
  ],
  focusAreas: [
    { label: 'Interactive Dashboards', detail: 'Data-dense UIs that stay readable under real usage.' },
    { label: 'Workflow Automation', detail: 'n8n-driven pipelines connecting APIs, forms, and databases.' },
    { label: 'Frontend Development', detail: 'Responsive UIs and interactive web components built with React.' },
  ],
  education: {
    degree: "Bachelor's Degree in Computer Science",
    institution: 'The Islamia University of Bahawalpur',
    detail: 'Coursework spanning software engineering, web development, databases, and systems design.',
  },
}

export const projects = [
  {
    id: 'automation-hub',
    title: 'University Process Automation Hub',
    description:
      'Replaced manual university request workflows with an event-driven system. React dashboard for staff, Django REST backend, n8n webhooks handling approvals and notifications, SQLite3 for storage.',
    tags: ['React', 'Django', 'n8n', 'SQLite3', 'Webhooks'],
    featured: true,
    links: { demo: '#', github: 'https://github.com/swiftmubi' },
  },
  {
    id: 'video-pipeline',
    title: 'Automated Video Generation Pipeline',
    description:
      'An end-to-end n8n pipeline that scripts, assembles, and exports short-form video content on a schedule, removing the manual editing pass entirely.',
    tags: ['n8n', 'Automation', 'Python', 'APIs'],
    featured: true,
    links: { demo: '#', github: 'https://github.com/swiftmubi' },
  },
  {
    id: 'analytics-dashboard',
    title: 'Realtime Analytics Dashboard',
    description:
      'A React + Node.js dashboard visualizing live product metrics, built with a component library designed for dense, fast-updating data.',
    tags: ['React', 'Node.js', 'Charts', 'WebSockets'],
    featured: false,
    links: { demo: '#', github: 'https://github.com/swiftmubi' },
  },
  {
    id: 'form-router',
    title: 'Multi-Channel Form Router',
    description:
      'A form intake system that routes submissions to Slack, email, or a database depending on content, using n8n conditional logic.',
    tags: ['n8n', 'JavaScript', 'Automation'],
    featured: false,
    links: { demo: '#', github: 'https://github.com/swiftmubi' },
  },
]

export const coreSkills = [
  { id: 'react', label: 'React.js', level: 90 },
  { id: 'javascript', label: 'JavaScript', level: 88 },
  { id: 'python', label: 'Python', level: 85 },
  { id: 'django', label: 'Django', level: 78 },
  { id: 'nodejs', label: 'Node.js', level: 75 },
  { id: 'n8n', label: 'n8n Engine', level: 92 },
]

export const secondarySkills = [
  'SQLite3', 'REST APIs', 'Webhooks', 'Tailwind CSS', 'Git', 'Linux', 'PostgreSQL', 'Docker',
]

export const certifications = [
  {
    id: 'navttc-python',
    title: 'Advanced Python Programming & Applications Certification',
    issuer: 'NAVTTC',
    grade: 'A+ Grade',
    year: '2024',
  },
  {
    id: 'datacamp-ds',
    title: 'Data Science Fundamentals',
    issuer: 'DataCamp',
    grade: 'Completed',
    year: '2024',
  },
  {
    id: 'datacamp-python',
    title: 'Python Programming Track',
    issuer: 'DataCamp',
    grade: 'Completed',
    year: '2023',
  },
]

export const contactDetails = [
  { id: 'email', label: 'Email', value: 'mubimubeen3@gmail.com', href: 'mailto:mubimubeen3@gmail.com' },
  { id: 'location', label: 'Location', value: 'Lahore, Punjab, Pakistan', href: null },
  { id: 'availability', label: 'Availability', value: 'Open to new opportunities', href: null },
]