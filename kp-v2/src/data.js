// All site content lives here. Set a link to a URL string to show it; leave null to hide it.

export const profile = {
  name: 'Krishiv Periwal',
  tagline: 'Full-stack engineer. Scalable systems. Startup ideas, tested.',
  role: 'B.Tech CS @ IIIT Naya Raipur',
  location: 'Raipur, Chhattisgarh',
  cgpa: '9.16',
  email: 'krishivperiwal@gmail.com',
  linkedin: 'https://linkedin.com/in/krishivperiwal',
  github: 'https://github.com/krishivperiwal',
  leetcode: 'https://leetcode.com/u/krishivperiwal/',
  codeforces: 'https://codeforces.com/profile/pkrishiv',
  neetcode: 'https://neetcode.io/user/GlacialHolocron518',
  codeforcesRating: null, // e.g. '1450'
  photo: null,
}

export const stops = [
  'Start',
  'Job Queue',
  'Drishti',
  'Shipped',
  'Things I’ve Tried',
  'Toolkit',
  'Finish',
]

export const jobQueue = {
  title: 'Distributed Job Queue & Dashboard',
  year: '2026',
  blurb:
    'A production-style job queue and image-thumbnail processing service. Multiple workers claim jobs safely at the same time, failures retry on their own, and everything runs as containerized services on AWS.',
  points: [
    'Postgres-backed queue with row-level locking (FOR UPDATE SKIP LOCKED) so concurrent workers never claim the same job.',
    'Exponential backoff retries plus a dead-letter queue and redrive policy; later migrated the queue to real AWS SQS.',
    'Multi-stage Docker builds, deployed to AWS ECS Fargate with RDS PostgreSQL, ElastiCache Redis and least-privilege IAM roles per service.',
    'React dashboard for job submission, live status polling and failed-job replay, with a Redis-cached queue-depth counter for fast reads.',
  ],
  flow: ['React UI', 'API', 'SQS', 'Workers', 'Postgres', 'Redis cache'],
  tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS SQS', 'ECS Fargate', 'RDS', 'ElastiCache', 'Docker', 'React'],
  links: { code: 'https://github.com/krishivperiwal/job-queue-service' },
}

export const drishti = {
  title: 'Drishti',
  badge: 'CSIDC Hackathon Winner · Competed against 50+ teams',
  year: '2026',
  blurb:
    'An AI-powered geospatial compliance system that spots land encroachments from satellite imagery, then checks actual land use against official records.',
  points: [
    'Detects encroachments from satellite imagery using image processing.',
    'Integrates geospatial reference data to compare real land use with official records.',
    'Generates compliance reports automatically.',
  ],
  tags: ['Python', 'Image Processing', 'Geospatial'],
  links: { code: 'https://github.com/krishivperiwal/drishti' },
}

export const shipped = [
  {
    title: 'Job Application Tracker',
    blurb:
      'Full-stack MERN tracker for applications and interview stages, with JWT auth and protected routes, filterable and searchable REST APIs, Cloudinary resume uploads, and an analytics dashboard built on MongoDB aggregation pipelines.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    links: { live: 'https://job-tracker-client-ten.vercel.app', api: 'https://github.com/krishivperiwal/job-tracker-api', client: 'https://github.com/krishivperiwal/job-tracker-client' },
  },
  {
    title: 'Role-Based Issue Tracker',
    blurb:
      'MERN issue tracker with RBAC: admins manage everything, creators and assignees edit their own issues. The React UI changes based on the decoded JWT, with a full open, in-progress, closed lifecycle and comments.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'RBAC'],
    links: { live: 'https://role-tracker-client.vercel.app', api: 'https://github.com/krishivperiwal/role-based-issue-tracking-api', client: 'https://github.com/krishivperiwal/role-tracker-client' },
  },
  {
    title: 'URL Shortener',
    blurb:
      'MERN shortener with JWT auth and per-user URL management, a Chart.js analytics page (clicks over time, active days, average clicks per day), indexed lookups, and unique short-ID generation with input validation.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    links: { live: 'https://url-shortener-client-jade.vercel.app', api: 'https://github.com/krishivperiwal/url-shortener-api', client: 'https://github.com/krishivperiwal/url-shortener-client' },
  },
]

export const tried = [
  {
    name: 'Backhaul Logistics',
    verdict: 'Pivoted on ground research',
    color: 'amber',
    body:
      'Started from the assumption that empty return trips were the problem. After real conversations with traders, the actual pain turned out to be trust and theft in transit. Fixing that needed more capital and scale than I had, so I pivoted away.',
    lesson: 'Talk to the people living the problem before building anything.',
  },
  {
    name: 'Solar Rooftop Leasing',
    verdict: 'Planned, not executed',
    color: 'cyan',
    body:
      'A RESCO-style model: lease roofs on large buildings, install panels, sell the energy. I had a real financial plan covering the bank loan and subsidy timing, but the capital needed was beyond what I had then.',
    lesson: 'Good unit economics still need runway.',
  },
  {
    name: 'DipAlert',
    verdict: 'Killed by data',
    color: 'magenta',
    body:
      'A dip-buying SIP strategy. I backtested it on 10 years of real NSE data (RIL, HDFC Bank), then ran a far more rigorous second test with full OHLC data and a 288-combination parameter grid. Both found no statistical edge over a plain SIP.',
    lesson: 'Some ideas just need to be answered with data, not turned into a company.',
  },
  {
    name: 'Cafewhopping',
    verdict: 'Smaller, scrappier',
    color: 'lime',
    body:
      'A cafe discovery and review app for my city. A lighter, just-for-fun idea that kept me building and thinking about product, without the stakes.',
    lesson: 'Side quests keep the habit of shipping alive.',
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'C++'] },
  { group: 'Backend & Data', items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Mongoose', 'Redis', 'REST APIs', 'Zod', 'Error Handling'] },
  { group: 'Cloud & DevOps', items: ['AWS (SQS, ECS Fargate, RDS, ElastiCache, CloudWatch, IAM)', 'Docker', 'Docker Compose'] },
  { group: 'Frontend', items: ['React.js', 'Vite', 'Tailwind CSS', 'React Router v6', 'Context API', 'Redux Toolkit', 'Axios'] },
  { group: 'Auth & Security', items: ['JWT', 'bcrypt', 'Rate Limiting', 'RBAC', 'Least-Privilege IAM Policies'] },
  { group: 'Tools', items: ['Git', 'Postman', 'Cloudinary', 'Multer'] },
  { group: 'AI', items: ['Prompt Engineering'] },
  { group: 'Concepts', items: ['Distributed Systems', 'Message Queues', 'MERN Stack', 'MVC Architecture', 'Middleware', 'Aggregation Pipelines'] },
]

export const extras = [
  { title: 'SSNM & ICISS', body: 'Volunteer at international conferences, coordinating logistics for international speakers and technical sessions.' },
  { title: 'MUN Club', body: 'Sponsorship team: led outreach to 10+ potential sponsors for inter-college events.' },
  { title: 'Problem solving', body: '460+ problems solved: 210+ on LeetCode, 100+ on NeetCode and 150+ on Codeforces.' },
]

// ---------- v2 additions ----------
export const heroPhrases = [
  {
    lines: ['FULL-STACK', 'ENGINEER'],
    tag: '// BUILDING THINGS THAT SHIP',
    text: 'Open to internships and freelance work. React on the front, Node on the back, taken from idea to production.',
  },
  {
    lines: ['SCALABLE', 'SYSTEMS'],
    tag: '// BUILT TO SCALE',
    text: 'Clean React interfaces on APIs that stay up under load: Node, Postgres, Redis and queues when it counts.',
  },
  {
    lines: ['FOUNDER', 'IN TRAINING'],
    tag: '// IDEAS, TESTED',
    text: 'I research the real problem, backtest the idea, then build it or kill it. Evidence over ego.',
  },
  {
    lines: ['PROBLEM', 'SOLVER'],
    tag: '// 460+ SOLVED',
    text: '210+ on LeetCode, 100+ on NeetCode and 150+ on Codeforces. Competitive programming is a daily habit.',
  },
]

export const about = {
  text:
    "CS undergrad at IIIT Naya Raipur and a full-stack developer who likes owning a product end to end, from the React interface to the Node API and the database underneath. Off the keyboard I'm on the football pitch or the pickleball and badminton courts, and I love picking startup ideas apart, then shipping the good ones and killing the bad ones with data.",
  chips: [
    ['Full-Stack', 'ARCHITECTURE'],
    ['React & Node', 'CORE TECH'],
    ['Scalable', 'SYSTEMS'],
  ],
}

export const marqueeA = ['JavaScript (ES6+)', 'TypeScript', 'C++', 'Node.js', 'Express.js', 'React.js', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'React Router', 'Context API', 'Axios', 'Zod', 'Mongoose', 'REST APIs', 'Git', 'Postman', 'Cloudinary', 'Multer', 'Prompt Engineering']
export const marqueeB = ['PostgreSQL', 'MongoDB', 'Redis', 'AWS SQS', 'ECS Fargate', 'RDS', 'ElastiCache', 'CloudWatch', 'IAM', 'Docker', 'Docker Compose', 'JWT', 'bcrypt', 'Rate Limiting', 'RBAC', 'MERN Stack', 'MVC Architecture', 'Middleware', 'Error Handling', 'Aggregation Pipelines', 'Distributed Systems', 'Message Queues']

export const roadmap = [
  {
    n: '01',
    title: 'Frontend Engineering',
    text: 'Dashboards and tools in React with live status, routing, state management and role-aware interfaces.',
    tags: ['React', 'Redux Toolkit', 'Tailwind'],
  },
  {
    n: '02',
    title: 'Backend & APIs',
    text: 'REST APIs in Node and Express with validation, middleware, JWT auth and MVC structure.',
    tags: ['Node.js', 'Express', 'Zod'],
  },
  {
    n: '03',
    title: 'Databases & Auth',
    text: 'Schema design and queries across PostgreSQL and MongoDB, Redis caching and role-based access control.',
    tags: ['PostgreSQL', 'MongoDB', 'RBAC'],
  },
  {
    n: '04',
    title: 'Scalable Systems',
    text: 'Job queues with retries and dead-letter handling, deployed with Docker on AWS ECS Fargate.',
    tags: ['Queues', 'Docker', 'AWS'],
  },
]

export const triedStatus = {
  'Backhaul Logistics': 'PIVOTED',
  'Solar Rooftop Leasing': 'SHELVED',
  DipAlert: 'KILLED BY DATA',
  Cafewhopping: 'SIDE QUEST',
}

// ---------- projects carousel ----------
export const railProjects = [
  {
    n: '01',
    featured: true,
    category: 'Distributed Systems',
    title: jobQueue.title,
    text: 'Job queue and image-thumbnail service where concurrent workers claim jobs safely and failures retry on their own.',
    bullets: [
      'Postgres queue with row-level locking (FOR UPDATE SKIP LOCKED)',
      'Exponential backoff, dead-letter queue and redrive; migrated to AWS SQS',
      'Docker on ECS Fargate with RDS, ElastiCache and least-privilege IAM',
      'React dashboard with live status and failed-job replay',
    ],
    flow: ['React UI', 'API', 'SQS', 'Workers', 'Postgres'],
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS SQS', 'Docker'],
    links: { code: 'https://github.com/krishivperiwal/job-queue-service' },
  },
  {
    n: '02',
    category: 'AI & Geospatial',
    badge: 'CSIDC Winner · 50+ teams',
    title: drishti.title,
    text: 'AI-powered compliance system that detects land encroachments from satellite imagery and compares them with official records.',
    tags: ['Python', 'Image Processing', 'Geospatial'],
    links: drishti.links,
  },
  {
    n: '03',
    category: 'Full-Stack MERN',
    title: 'Job Application Tracker',
    text: 'Tracks applications and interview stages with JWT auth, searchable REST APIs, resume uploads and an aggregation-powered analytics dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    links: shipped[0].links,
  },
  {
    n: '04',
    category: 'Auth & RBAC',
    title: 'Role-Based Issue Tracker',
    text: 'Issue lifecycle from open to closed with comments, where admins, creators and assignees each see different controls from their JWT.',
    tags: ['React', 'Node.js', 'MongoDB', 'RBAC'],
    links: shipped[1].links,
  },
  {
    n: '05',
    category: 'Analytics',
    title: 'URL Shortener',
    text: 'Per-user short links with a Chart.js analytics page, indexed lookups and unique short-ID generation with validation.',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    links: shipped[2].links,
  },
]
