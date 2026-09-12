import {
  AppWindow,
  Layers,
  Monitor,
  MessageSquare,
  Palette,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = "Web & Mobile" | "Software Solutions" | "Artificial Intelligence" | "Design";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  audience: string;
  deliverables: string[];
  techStack: string[];
  workflow: { title: string; desc: string }[];
  color: string;
}

export const services: Service[] = [
  {
    slug: "website-development",
    icon: AppWindow,
    title: "Website Development",
    category: "Web & Mobile",
    tagline: "High-performance, responsive websites built for speed and SEO.",
    description:
      "High-performance, responsive websites, web apps, and modern digital portals tailored for speed and SEO — from marketing sites to complex customer portals, engineered for Core Web Vitals and built to scale.",
    audience: "Startups and enterprises who need a fast, conversion-focused web presence.",
    deliverables: [
      "Custom UI/UX design system and component library",
      "Responsive builds across mobile, tablet, and desktop",
      "Headless CMS integration for editorial teams",
      "Performance tuning for Core Web Vitals",
      "Accessibility (WCAG 2.1 AA) audit and fixes",
      "Analytics, tag manager, and conversion tracking setup",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Sanity CMS"],
    workflow: [
      { title: "Discovery & Wireframes", desc: "Stakeholder workshops, sitemap, and low-fidelity wireframes." },
      { title: "UI Design & Prototyping", desc: "High-fidelity design system in Figma with interactive prototypes." },
      { title: "Engineering Sprints", desc: "Component-driven development with weekly demo checkpoints." },
      { title: "QA & Performance Pass", desc: "Cross-device testing, Lighthouse audits, accessibility review." },
      { title: "Launch", desc: "Domain cutover, monitoring, and a 30-day hypercare window." },
    ],
    color: "#155B58",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    category: "Web & Mobile",
    tagline: "Native & cross-platform iOS and Android apps built to scale.",
    description:
      "Native and cross-platform iOS & Android apps built for intuitive UX, fluid performance, and scalability — native when performance demands it, cross-platform when speed to market matters most.",
    audience: "Companies launching a new mobile product or rebuilding a legacy app.",
    deliverables: [
      "Native iOS (Swift) and Android (Kotlin) or React Native builds",
      "Offline-first data sync architecture",
      "Push notifications and deep-linking setup",
      "App Store and Google Play submission support",
      "In-app analytics and crash reporting integration",
      "Post-launch update roadmap",
    ],
    techStack: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL"],
    workflow: [
      { title: "Product Definition", desc: "Define core flows, platform scope, and MVP feature set." },
      { title: "Design", desc: "Native-feeling UI kits for iOS and Android." },
      { title: "Build", desc: "Sprint-based development with TestFlight/Play internal builds." },
      { title: "QA & Store Prep", desc: "Device testing, store assets, and submission." },
      { title: "Launch & Iterate", desc: "Ship, monitor crash-free rate, and plan v1.1." },
    ],
    color: "#0D3F3D",
  },
  {
    slug: "desktop-application-development",
    icon: Monitor,
    title: "Desktop Application Development",
    category: "Web & Mobile",
    tagline: "Cross-platform desktop apps built for performance, offline-first.",
    description:
      "Powerful cross-platform desktop applications engineered for high performance and offline-first capabilities — shipped for Windows, macOS, and Linux from a single codebase.",
    audience: "Teams that need a native-feeling desktop tool for internal ops or a shippable product.",
    deliverables: [
      "Cross-platform builds for Windows, macOS, and Linux",
      "Offline-first local data storage and sync",
      "Native OS integration (menu bar, notifications, file system)",
      "Auto-update and release channel pipeline",
      "Code signing and notarization for distribution",
      "Performance profiling and memory optimization",
    ],
    techStack: ["Electron", "Tauri", "React", "Rust", "TypeScript", "SQLite"],
    workflow: [
      { title: "Scope & Platform Targets", desc: "Define feature set and target operating systems." },
      { title: "UI/UX Design", desc: "Design a desktop-native interface and interaction model." },
      { title: "Engineering Sprints", desc: "Build core features with weekly internal builds." },
      { title: "QA Across OSes", desc: "Test installers, updates, and edge cases per platform." },
      { title: "Release & Distribute", desc: "Sign, package, and ship through your distribution channel." },
    ],
    color: "#155B58",
  },
  {
    slug: "custom-software-development",
    icon: Layers,
    title: "Custom Software Development",
    subtitle: "CRMs, CMS, HRMs, ERPs, & Tailored Systems",
    category: "Software Solutions",
    tagline: "Enterprise-grade systems built around your exact workflows.",
    description:
      "Enterprise-grade custom software built around your exact business workflows and operational needs — CRMs, CMS platforms, HRMs, ERPs, and bespoke internal tools that off-the-shelf software can't fit.",
    audience: "Businesses whose operations have outgrown generic, off-the-shelf software.",
    deliverables: [
      "Workflow mapping and system architecture design",
      "Custom CRM, CMS, HRM, or ERP module development",
      "Role-based access control and admin tooling",
      "Third-party integrations (payments, accounting, comms)",
      "Data migration from legacy systems",
      "Documentation and internal training handoff",
    ],
    techStack: ["Node.js", "PostgreSQL", "React", "TypeScript", "Docker", "REST/GraphQL APIs"],
    workflow: [
      { title: "Process Discovery", desc: "Map current workflows and pinpoint operational bottlenecks." },
      { title: "System Architecture", desc: "Design a data model and module structure that fits your ops." },
      { title: "Build in Modules", desc: "Ship core modules iteratively, validated against real usage." },
      { title: "Migrate & Integrate", desc: "Move legacy data and connect existing business tools." },
      { title: "Train & Handoff", desc: "Document the system and train your team to run it." },
    ],
    color: "#0D3F3D",
  },
  {
    slug: "ai-automations",
    icon: Workflow,
    title: "AI Automations",
    category: "Artificial Intelligence",
    tagline: "Automated workflows that cut manual effort and scale operations.",
    description:
      "End-to-end automated workflows that integrate your apps, cut down manual effort, and scale business operations — wiring AI into the repetitive work your team shouldn't have to do by hand.",
    audience: "Operations teams drowning in manual, repetitive cross-app work.",
    deliverables: [
      "Automation opportunity audit across your current stack",
      "Custom workflow automations connecting your apps and APIs",
      "AI-driven data extraction, tagging, and routing",
      "Human-in-the-loop approval steps where accuracy matters",
      "Monitoring dashboard for automation health and errors",
      "Ongoing tuning as your processes evolve",
    ],
    techStack: ["Python", "n8n", "Zapier/Make", "LangChain", "Claude & GPT APIs", "PostgreSQL"],
    workflow: [
      { title: "Process Audit", desc: "Identify the highest-friction manual workflows to automate." },
      { title: "Design the Flow", desc: "Map triggers, logic, and human checkpoints end to end." },
      { title: "Build & Connect", desc: "Wire together your apps, APIs, and AI steps." },
      { title: "Test Against Real Cases", desc: "Validate accuracy on real historical data before go-live." },
      { title: "Monitor & Improve", desc: "Track exceptions and refine the automation over time." },
    ],
    color: "#F5A623",
  },
  {
    slug: "custom-chatbots",
    icon: MessageSquare,
    title: "Custom Chatbots",
    category: "Artificial Intelligence",
    tagline: "Multi-channel conversational agents powered by custom AI.",
    description:
      "Intelligent, multi-channel conversational agents powered by custom AI models and direct API integrations — trained on your product and data, deployed wherever your customers already are.",
    audience: "Businesses that want to automate support or sales conversations without losing quality.",
    deliverables: [
      "Conversation design and intent mapping",
      "Custom LLM integration grounded in your knowledge base",
      "Multi-channel deployment (web, WhatsApp, Slack, Messenger)",
      "Handoff-to-human escalation flows",
      "Analytics on resolution rate and conversation quality",
      "Ongoing prompt tuning and knowledge base updates",
    ],
    techStack: ["Claude & GPT APIs", "LangChain", "Node.js", "WhatsApp Business API", "Vector DBs"],
    workflow: [
      { title: "Conversation Design", desc: "Map intents, tone, and the flows the bot needs to handle." },
      { title: "Knowledge Grounding", desc: "Connect the bot to your docs, product, and support data." },
      { title: "Build & Integrate", desc: "Deploy across the channels your customers actually use." },
      { title: "Test & Tune", desc: "Red-team conversations and refine prompts against real queries." },
      { title: "Launch & Monitor", desc: "Go live and track resolution rate, deflection, and CSAT." },
    ],
    color: "#0D3F3D",
  },
  {
    slug: "graphics-brand-design",
    icon: Palette,
    title: "Graphics & Brand Design",
    category: "Design",
    tagline: "Brand identities, UI/UX kits, and high-impact marketing assets.",
    description:
      "Comprehensive brand identities, UI/UX asset kits, visual assets, and high-impact marketing collateral — distinctive brand systems plus the ongoing design production your team actually needs.",
    audience: "Founders and marketing teams needing a brand system that scales across channels.",
    deliverables: [
      "Logo suite and brand mark exploration",
      "Full brand guidelines document",
      "UI/UX component and asset kits",
      "Marketing collateral: brochures, decks, one-pagers",
      "Social media templates and content kits",
      "Ongoing design retainer for campaign assets",
    ],
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects"],
    workflow: [
      { title: "Brand Discovery", desc: "Positioning workshop and competitive audit." },
      { title: "Concept Exploration", desc: "Multiple logo and identity directions." },
      { title: "Refinement", desc: "Refine chosen direction into a full system." },
      { title: "Guidelines", desc: "Document usage rules across every touchpoint." },
      { title: "Rollout", desc: "Apply the system across collateral and channels." },
    ],
    color: "#F5A623",
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Web & Mobile",
  "Software Solutions",
  "Artificial Intelligence",
  "Design",
];

export type PortfolioCategory = "Websites" | "Mobile Apps" | "AI Software" | "Graphics" | "Logos";

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  color: string;
  result: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  services: string[];
  year: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "northstar-ai",
    title: "Northstar AI",
    client: "Northstar Robotics",
    category: "AI Software",
    color: "#0D3F3D",
    result: "+240% Traffic",
    summary: "A custom LLM copilot for industrial robotics field engineers.",
    challenge:
      "Northstar's field engineers were losing hours a day digging through PDF manuals to troubleshoot equipment on-site.",
    solution:
      "We built a RAG-powered copilot trained on their full technical documentation library, deployed as a mobile-friendly web app with offline caching.",
    outcome:
      "Average troubleshooting time dropped from 22 minutes to 4 minutes, and organic traffic to their support hub grew 240% as the tool became publicly searchable.",
    services: ["Custom AI Software Development", "Website Development"],
    year: "2025",
  },
  {
    id: "orbit-health",
    title: "Orbit Health",
    client: "Orbit Health Group",
    category: "Mobile Apps",
    color: "#F5A623",
    result: "4.8★ App Rating",
    summary: "A cross-platform patient engagement app for a multi-clinic health group.",
    challenge:
      "Orbit needed a single app to replace three disconnected legacy booking systems across their clinic network.",
    solution:
      "We designed and shipped a React Native app with unified booking, secure messaging, and push reminders synced to their EHR.",
    outcome:
      "Launched to a 4.8-star rating across app stores with a 63% increase in appointment completion rate in the first quarter.",
    services: ["Mobile App Development", "Graphic & Brand Design"],
    year: "2024",
  },
  {
    id: "morrow-studio",
    title: "Morrow Studio",
    client: "Morrow Creative Studio",
    category: "Graphics",
    color: "#292929",
    result: "+180% Engagement",
    summary: "A full rebrand and campaign asset system for a creative studio.",
    challenge:
      "Morrow's visual identity hadn't evolved in eight years and no longer matched the caliber of client work they were producing.",
    solution:
      "We led a full rebrand — new mark, type system, and a modular campaign template kit their internal team could run independently.",
    outcome:
      "Social engagement rose 180% within two months of rollout, and the studio landed three new enterprise clients citing the new brand.",
    services: ["Graphic & Brand Design"],
    year: "2024",
  },
  {
    id: "vertex-dashboard",
    title: "Vertex SaaS Dashboard",
    client: "Vertex Analytics",
    category: "Websites",
    color: "#155B58",
    result: "-38% Bounce Rate",
    summary: "A rebuilt marketing site and product dashboard for a B2B analytics platform.",
    challenge:
      "Vertex's marketing site was slow, confusing to navigate, and converting well below industry benchmarks.",
    solution:
      "We rebuilt the marketing site on Next.js with a new information architecture, plus a redesigned in-product dashboard shell.",
    outcome:
      "Bounce rate dropped 38% and demo requests rose 92% within the first six weeks post-launch.",
    services: ["Website Development", "Search Engine Optimization (SEO)"],
    year: "2025",
  },
  {
    id: "bloom-logo-suite",
    title: "Bloom Logo Suite",
    client: "Bloom Wellness Co.",
    category: "Logos",
    color: "#F5A623",
    result: "12 Brand Marks Delivered",
    summary: "A modular logo system for a wellness brand's multi-product line.",
    challenge:
      "Bloom was launching six sub-brands and needed a cohesive but distinct mark for each.",
    solution:
      "We developed a modular logo framework built from a shared geometric language, letting each sub-brand feel distinct within one family.",
    outcome:
      "Delivered 12 finished marks across primary and sub-brands, all shipped with a unified usage guideline.",
    services: ["Graphic & Brand Design"],
    year: "2023",
  },
  {
    id: "trailhead-fitness",
    title: "Trailhead Fitness",
    client: "Trailhead Athletics",
    category: "Mobile Apps",
    color: "#0D3F3D",
    result: "50k+ Downloads",
    summary: "A social fitness tracking app with route-sharing and live leaderboards.",
    challenge:
      "Trailhead wanted to compete with major fitness apps but had no in-house mobile engineering team.",
    solution:
      "We built the full product from scratch — native performance tracking, social feed, and live leaderboard infrastructure.",
    outcome:
      "Surpassed 50,000 downloads in the first four months with a 47% 30-day retention rate.",
    services: ["Mobile App Development", "Digital Marketing"],
    year: "2025",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "Websites",
  "Mobile Apps",
  "AI Software",
  "Graphics",
  "Logos",
];

export interface RecentWorkItem {
  title: string;
  url: string;
  image: string;
  tags: string[];
}

// Real, live client projects — each card links straight out to the
// production site (target="_blank"), not to an internal case-study page.
// Keep this exact sequence; it's the order requested for display.
export const recentWork: RecentWorkItem[] = [
  {
    title: "SS Track",
    url: "https://www.sstrack.io/",
    image: "/portfolio/sstrack.jpg",
    tags: ["Website Development", "Custom Software Development (HRM)"],
  },
  {
    title: "B&B Traders",
    url: "https://bbtraders.info/",
    image: "/portfolio/bbtraders.jpg",
    tags: ["Website Development", "Custom Software Development", "Mobile App Development"],
  },
  {
    title: "CodeNova AI",
    url: "https://codenovaa.com/",
    image: "/portfolio/codenova.jpg",
    tags: ["Website Development", "Desktop Application"],
  },
  {
    title: "Yousfis Europe",
    url: "https://www.yousfis.com/",
    image: "/portfolio/yousfis.jpg",
    tags: ["Website Development"],
  },
];
