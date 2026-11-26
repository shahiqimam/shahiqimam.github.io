// All site copy lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Shahiq Imam',
  title: 'Full-Stack Software Developer',
  focus: ['Full-stack', 'Cyber security', 'DevOps'],
  stackLine: ['TypeScript', 'React', 'Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
  location: 'Islamabad, Pakistan',
  email: 'shahiqimam@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shahiqimam',
  github: 'https://github.com/shahiqimam',
  company: { name: 'ASVEX', url: 'https://www.asvex.ae' },
  resume: '/Shahiq-Imam-Resume.pdf',
  summary:
    'Full-stack software developer building web applications, backend services and enterprise software with TypeScript, React, Next.js, NestJS and PostgreSQL. I work across REST APIs, relational databases, multi-tenant systems, authentication and authorization, testing, Dockerized environments and CI/CD, with a growing focus on cyber security, GRC and DevOps.',
  facts: [
    { k: 'Base', v: 'Islamabad, Pakistan' },
    { k: 'Now', v: 'Full Stack Engineer @ Multi Vision World' },
    { k: 'Founder', v: 'ASVEX, automation & software studio' },
    { k: 'Studying', v: 'CompTIA Security+ · Cyber Security specialization' },
  ],
};

export type Job = {
  role: string;
  org: string;
  orgUrl?: string;
  when: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: 'Full Stack Engineer',
    org: 'Multi Vision World',
    when: 'Mar 2026 – Present',
    points: [
      'Develop a multi-tenant GRC platform with NestJS, TypeORM, PostgreSQL and Next.js: backend APIs, database migrations and frontend workflows.',
      'Contribute to governance and ISO 27001 automation: policies, Statement of Applicability, risk management and evidence workflows.',
      'Work with enterprise integrations across asset inventory, SIEM, SOAR and endpoint security; support testing, release verification and deployment prep.',
      'Build and maintain company and product web applications with Next.js and TypeScript.',
    ],
  },
  {
    role: 'Full-Stack Developer & Automation Engineer',
    org: 'ASVEX',
    orgUrl: 'https://www.asvex.ae',
    when: 'Ongoing',
    points: [
      'Build full-stack apps, REST API / webhook integrations and workflow automation with Next.js, React, Node.js, PostgreSQL/Supabase, n8n, Make and Zapier.',
      'Develop AI-assisted workflows with OpenAI, Claude, LangChain and Vapi, from requirements through testing and deployment.',
    ],
  },
  {
    role: 'Founder',
    org: 'ASVEX',
    orgUrl: 'https://www.asvex.ae',
    when: 'Founded',
    points: [
      'Founded an independent technology business spanning custom computer systems, technical services, software development and automation.',
    ],
  },
];

export type SkillGroup = { name: string; icon: string; items: string[] };

export const skills: SkillGroup[] = [
  { name: 'Core', icon: '◆', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'React', 'Next.js', 'Node.js', 'NestJS', 'REST APIs', 'TypeORM'] },
  { name: 'Data', icon: '▣', items: ['PostgreSQL', 'Redis', 'Supabase', 'PostGIS', 'Data modeling', 'Migrations', 'Transactions'] },
  { name: 'DevOps', icon: '⚙', items: ['Docker', 'Compose', 'Jenkins', 'CI/CD', 'Nginx', 'Git', 'GitHub', 'Vercel', 'Linux'] },
  { name: 'Security', icon: '⛨', items: ['JWT', 'RBAC', 'MFA / TOTP', 'Argon2id', 'GRC', 'ISO 27001', 'SIEM / SOAR'] },
  { name: 'AI & Automation', icon: '✦', items: ['OpenAI', 'Claude', 'LangChain', 'n8n', 'Make', 'Zapier'] },
];

export type ProjectStatus = 'public' | 'private' | 'wip';
export type Project = {
  id: string;
  name: string;
  tagline: string;
  zone: 'build' | 'client' | 'security' | 'devops';
  status: ProjectStatus;
  stack: string[];
  highlights: string[];
  repo?: string;
  live?: string;
  shot?: string;
  /** true when the image is a design mockup, not a capture of the running app */
  mockup?: boolean;
  note?: string;
  color: string;
};

const gh = (r: string) => `https://github.com/shahiqimam/${r}`;

export const projects: Project[] = [
  // ── Build District: full-stack products ──
  {
    id: 'stockpilot', name: 'StockPilot', zone: 'build', status: 'public', color: '#e8774a',
    tagline: 'Inventory & asset management with a real audit trail.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeORM', 'Docker'],
    highlights: ['Transactional stock movements: no phantom stock', 'Serialized assets and assignments', 'RBAC, CSV import/export workflows', 'Full audit history'],
    repo: gh('inventory-manager'),
  },
  {
    id: 'pulsewatch', name: 'PulseWatch', zone: 'build', status: 'public', color: '#3fae8c',
    tagline: 'Service health & uptime monitor.',
    stack: ['NestJS', 'Next.js', 'PostgreSQL'],
    highlights: ['Scheduled HTTP checks', 'SSRF-hardened check engine', 'Incident lifecycle', 'Uptime & latency metrics'],
    repo: gh('system-health-monitor'),
  },
  {
    id: 'ghostspend', name: 'GhostSpend', zone: 'build', status: 'private', color: '#7b6cf0',
    tagline: 'Find the subscriptions quietly draining your account, no bank login needed.',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Recharts'],
    highlights: [
      'Upload a bank or card statement (CSV or PDF); no live bank link, no Plaid, no stored credentials',
      'Merchant-name cleaner: "AMZN MKTP US*2K9…" becomes "Amazon"',
      'Detects recurring billing cycles (weekly, monthly, annual) from transaction patterns',
      'Price-creep alerts when the same subscription silently gets more expensive',
      '"Annual Burn" dashboard: recurring vs one-time spend and the yearly cost of forgotten subscriptions',
    ],
    shot: '/shots/ghostspend.jpg', mockup: true,
    note: 'Code and a live demo are available on request.',
  },
  {
    id: 'taskflow', name: 'TaskFlow API', zone: 'build', status: 'public', color: '#d9a62e',
    tagline: 'Project-management REST API built like production.',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'JWT', 'Docker'],
    highlights: ['Auth + role-based access control', 'Validation, migrations, filtering & pagination', 'Swagger / OpenAPI docs', 'Automated tests'],
    repo: gh('TaskFlow-API'),
  },
  {
    id: 'tabzero', name: 'TabZero', zone: 'build', status: 'private', color: '#ff5a36',
    tagline: 'Split group expenses and settle up in the fewest possible payments.',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL'],
    highlights: [
      'Debt-simplification engine: nets every balance, then greedily matches largest debtor to largest creditor (at most n − 1 transfers)',
      'Equal, exact, percentage and itemized receipt splits, with tax and tip shared proportionally',
      'Money stored as integer cents; rounding remainders assigned by largest remainder so totals always match',
      'Multi-user group ledgers modeled relationally',
      'Shareable settlement cards and links, ready to paste into WhatsApp',
      'Mobile-first UX',
    ],
    shot: '/shots/tabzero.jpg', mockup: true,
    note: 'Code and a live demo are available on request.',
  },
  {
    id: 'rooted', name: 'Rooted', zone: 'build', status: 'private', color: '#3d6b35',
    tagline: 'Helps people move toward whole, organic food alongside their treatment.',
    stack: ['React Native', 'TypeScript', 'iOS & Android'],
    highlights: [
      'Health profile of conditions and current medications',
      'Food safety check against a curated food–drug and food–condition interaction library (e.g. grapefruit with statins)',
      'Week-by-week whole-food transition plans with safer swaps',
      'Progress tracking and a shareable report for the user’s doctor',
      'Built around clinician oversight: medication decisions stay with the doctor',
    ],
    shot: '/shots/rooted.jpg', mockup: true,
    note: 'Not medical advice: Rooted supports, and never replaces, a doctor’s guidance. Code and a demo are available on request.',
  },
  {
    id: 'keeptrack', name: 'KeepTrack', zone: 'build', status: 'private', color: '#c0587e',
    tagline: 'Never miss an important date: passports, renewals, documents.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'BullMQ', 'Turborepo'],
    highlights: ['Monorepo: web app, REST API and background worker', 'Timezone-aware reminders with DST coverage', 'Idempotent notifications, retries & failure classification', 'Households, documents, Smart Add and billing flows'],
  },
  {
    id: 'metropulse', name: 'MetroPulse', zone: 'build', status: 'public', color: '#5b8bd9',
    tagline: 'Real-time transit operations platform (synthetic data).',
    stack: ['Java 21', 'Spring Boot', 'Kafka', 'PostGIS', 'Redis', 'Angular'],
    highlights: ['Transactional outbox → Kafka', 'Idempotent consumers with dead-letter topic', 'PostGIS route projection, headway & bunching detection', 'Incident workflow and historical playback'],
    repo: gh('METROPULSE_JAVA_SPRING'),
  },
  {
    id: 'gridlens', name: 'GridLens', zone: 'build', status: 'wip', color: '#8a6bd1',
    tagline: 'Utility-network GIS & outage intelligence (synthetic data).',
    stack: ['Next.js', 'MapLibre', 'NestJS', 'PostGIS', 'Redis', 'Docker'],
    highlights: ['Network topology modeling in PostGIS', 'Telemetry ingestion from a simulator', 'Downstream outage impact tracing', 'In active development'],
    repo: gh('GRIDLENS_UTILITY_GIS'),
  },
  // ── ASVEX client work ──
  {
    id: 'asvex', name: 'ASVEX', zone: 'client', status: 'private', color: '#e63957',
    tagline: 'Website for my automation & software studio.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    highlights: ['Bold, brand-led design system', 'Animated workflow showcase', 'Services, work and insights sections', 'Lead capture'],
    live: 'https://asvex-website.vercel.app', shot: '/shots/asvex.jpg',
  },
  // ── Firewall Fortress: security ──
  {
    id: 'complai', name: 'ComplAI', zone: 'security', status: 'private', color: '#4c6ef5',
    tagline: 'Multi-tenant GRC platform I build at Multi Vision World.',
    stack: ['NestJS', 'Next.js 14', 'PostgreSQL', 'Redis', 'Python FastAPI', 'Docker', 'Jenkins', 'Terraform'],
    highlights: [
      'Schema-per-tenant PostgreSQL isolation; JWT in memory + httpOnly refresh cookie',
      '18 frameworks (ISO 27001, NIST CSF 2.0, SOC 2, PCI DSS, regional) with Statement of Applicability',
      'Three-phase assessments, evidence, findings → risk register, ERM with bow-tie, KRIs and board reports',
      'Vendor risk (TPRM) portal, policy lifecycle, awareness training & phishing simulations',
      '20+ roles incl. time-boxed external-auditor access; hash-chained, tamper-evident audit log',
      'AI assistance (gap detection, policy drafting) that always needs human approval',
      'Integrations: Wazuh, Shuffle SOAR, Snipe-IT, Velociraptor; ClamAV scanning on upload',
    ],
    live: 'https://complai-next.vercel.app', shot: '/shots/complai.jpg',
    note: 'Work project at Multi Vision World. Screenshot shows the product site; source is private.',
  },
  {
    id: 'authforge', name: 'AuthForge', zone: 'security', status: 'public', color: '#2f8f83',
    tagline: 'Authentication & session service, security-first.',
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'JWT', 'TOTP'],
    highlights: ['Argon2id password hashing', 'Short-lived JWTs + rotating opaque refresh tokens', 'Refresh-token replay detection', 'TOTP MFA with one-time recovery codes', 'Session revocation, RBAC, durable audit events'],
    repo: gh('secure-auth-service'),
  },
  {
    id: 'sentinelview', name: 'SentinelView', zone: 'security', status: 'public', color: '#c4492f',
    tagline: 'Security-event dashboard: normalize SIEM / EDR / IAM.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    highlights: ['Adapter pattern per source with validation', 'Normalized event model, JSONB raw payloads', 'Idempotent ingestion & duplicate merging', 'Analyst workflow: status, assignment, notes, history'],
    repo: gh('security-events-dashboard'),
  },
  {
    id: 'grc', name: 'GRC Risk Register', zone: 'security', status: 'public', color: '#b5832c',
    tagline: 'Assets, controls, treatments, inherent & residual risk.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeORM', 'Recharts'],
    highlights: ['5×5 inherent-risk heatmap', 'Admin / Risk Manager / Viewer roles', 'Risk history, filtering & CSV export', 'Clear GRC domain modeling'],
    repo: gh('grc-risk-register'),
  },
  {
    id: 'saudiready', name: 'SaudiReady', zone: 'security', status: 'public', color: '#3c7d4f',
    tagline: 'KSA cybersecurity & privacy readiness workspace.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
    highlights: ['Profile → applicability → assessment → evidence → gaps → actions', 'Readiness always reported with coverage: never a fake 0%', 'Type system enforces what the app refuses to claim', 'Educational, with explicit non-certification disclaimers'],
    repo: gh('ksa-compliance-readiness'),
  },
  // ── Pipeline Works: DevOps ──
  {
    id: 'releaseboard', name: 'ReleaseBoard', zone: 'devops', status: 'public', color: '#2b6cb0',
    tagline: 'Containerized deployment lab.',
    stack: ['Docker', 'Jenkins', 'Nginx', 'PostgreSQL'],
    highlights: ['Multi-stage Docker images', 'Nginx reverse proxy + health checks', 'Jenkins pipeline with smoke tests', 'Rollback workflow'],
    repo: gh('docker-cicd-lab'),
  },
  {
    id: 'cicd', name: 'CI/CD Pipeline Demo', zone: 'devops', status: 'public', color: '#d4672a',
    tagline: 'Enterprise-style Jenkins pipeline, end to end.',
    stack: ['Jenkins', 'Docker', 'NestJS', 'Next.js', 'Vitest'],
    highlights: ['Lint, type-check, coverage-gated unit tests', 'Dependency, secret & image scanning', 'Integration tests on throwaway Postgres + Redis', 'Staging → manual approval → prod with auto-rollback'],
    repo: gh('cicd-pipeline-demo'),
  },
];

export const pipelineStages = ['Commit', 'Lint', 'Test', 'Scan', 'Build', 'Stage', 'Approve', 'Deploy'];

export const credentials = {
  inProgress: ['CompTIA Security+', 'Cyber Security Specialization'],
  earned: [
    'IBM AI Engineering Professional Certificate',
    'Machine Learning Specialization',
    'Deep Learning Specialization',
    'LangChain: Develop LLM-Powered Applications',
  ],
  training: ['CS50x', 'Full Stack Open', 'React', 'Next.js', 'Linux', 'Docker', 'Jenkins', 'Networking', 'Cybersecurity', 'Azure Fundamentals'],
};

export const education = [
  { school: 'University of Essex', detail: 'Management & Business Sciences (undergraduate studies)' },
  { school: 'SuperNova College, Islamabad', detail: 'Cambridge International A Levels & IGCSEs' },
];
