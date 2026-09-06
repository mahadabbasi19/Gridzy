import {
  BrainCircuit,
  Globe,
  Headphones,
  LineChart,
  Megaphone,
  MousePointerClick,
  Palette,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = "Web & Mobile" | "Artificial Intelligence" | "Marketing & SEO" | "Infrastructure";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
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
    icon: Globe,
    title: "Website Development",
    category: "Web & Mobile",
    tagline: "Responsive, high-performance web apps engineered to convert.",
    description:
      "We design and build fast, accessible, pixel-perfect websites and web applications on modern frameworks — from marketing sites to complex customer portals — engineered for Core Web Vitals and built to scale.",
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
    slug: "custom-ai-software-development",
    icon: BrainCircuit,
    title: "Custom AI Software Development",
    category: "Artificial Intelligence",
    tagline: "Automation, predictive models, and custom LLM integration.",
    description:
      "We build production-grade AI systems — from internal automation agents to customer-facing copilots — grounded in your data and wired into your existing stack.",
    audience: "Product and operations teams looking to automate workflows or ship AI-native features.",
    deliverables: [
      "AI feasibility audit and architecture proposal",
      "Custom LLM integration (RAG, fine-tuning, agents)",
      "Predictive models trained on your first-party data",
      "Workflow automation pipelines",
      "Evaluation harness and guardrails for production safety",
      "Ongoing model monitoring and retraining cadence",
    ],
    techStack: ["Python", "PyTorch", "LangChain", "Claude & GPT APIs", "Docker", "PostgreSQL"],
    workflow: [
      { title: "Data & Feasibility Audit", desc: "Assess data readiness and define success metrics." },
      { title: "Prototype", desc: "Rapid proof-of-concept against real use cases." },
      { title: "Productionize", desc: "Harden the pipeline, add evals, guardrails, and observability." },
      { title: "Integrate", desc: "Wire into your existing product and internal tools." },
      { title: "Monitor & Improve", desc: "Track drift, gather feedback, retrain on a schedule." },
    ],
    color: "#0D3F3D",
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    category: "Marketing & SEO",
    tagline: "Targeted campaign execution across every channel that matters.",
    description:
      "Full-funnel digital marketing programs across Meta, LinkedIn, Google, and email — built on real attribution and iterated weekly based on performance data.",
    audience: "Brands who need predictable, measurable pipeline from paid and organic channels.",
    deliverables: [
      "Channel strategy across Facebook, Instagram, and LinkedIn",
      "Creative production for ad units and landing pages",
      "Audience segmentation and targeting strategy",
      "Marketing automation and email nurture sequences",
      "Monthly performance reporting with clear attribution",
      "Conversion rate optimization on landing experiences",
    ],
    techStack: ["Meta Ads Manager", "LinkedIn Campaign Manager", "HubSpot", "Klaviyo", "GA4"],
    workflow: [
      { title: "Audit & Strategy", desc: "Review existing channels and set target KPIs." },
      { title: "Creative & Copy", desc: "Produce ad creative, copy variants, and landing pages." },
      { title: "Launch & Optimize", desc: "Launch campaigns and optimize weekly against CPA/ROAS." },
      { title: "Scale", desc: "Increase budget on winning segments, cut underperformers." },
      { title: "Report", desc: "Monthly reporting with clear, attributed results." },
    ],
    color: "#F5A623",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    category: "Web & Mobile",
    tagline: "iOS & Android native and cross-platform apps.",
    description:
      "We ship polished, App Store-ready mobile applications — native when performance demands it, cross-platform when speed to market matters most.",
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
    color: "#155B58",
  },
  {
    slug: "graphic-brand-design",
    icon: Palette,
    title: "Graphic & Brand Design",
    category: "Marketing & SEO",
    tagline: "High-impact visual identity, brochures, and digital assets.",
    description:
      "Distinctive brand systems — logo, color, type, and voice — plus the ongoing design production your marketing team actually needs.",
    audience: "Founders and marketing teams needing a brand system that scales across channels.",
    deliverables: [
      "Logo suite and brand mark exploration",
      "Full brand guidelines document",
      "Marketing collateral: brochures, decks, one-pagers",
      "Social media templates and content kits",
      "Packaging or print-ready design assets",
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
    color: "#0D3F3D",
  },
  {
    slug: "ppc-advertising",
    icon: MousePointerClick,
    title: "Pay Per Click (PPC) Advertising",
    category: "Marketing & SEO",
    tagline: "Google Ads & Meta Ads with transparent ROI tracking.",
    description:
      "Performance-first paid media management with granular tracking, so every dollar spent is tied to a measurable business outcome.",
    audience: "Businesses that need fast, trackable demand generation.",
    deliverables: [
      "Google Ads and Meta Ads account structuring",
      "Keyword and audience research",
      "Ad copy and creative testing framework",
      "Conversion tracking and server-side tagging",
      "Bid strategy and budget pacing management",
      "Weekly optimization and monthly ROI reporting",
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "Looker Studio"],
    workflow: [
      { title: "Account Audit", desc: "Review existing spend, structure, and tracking." },
      { title: "Campaign Build", desc: "Structure campaigns around clear conversion goals." },
      { title: "Testing", desc: "A/B test creative, copy, and landing pages." },
      { title: "Scale", desc: "Shift budget toward the highest ROAS segments." },
      { title: "Report", desc: "Transparent monthly reporting tied to revenue." },
    ],
    color: "#F5A623",
  },
  {
    slug: "seo",
    icon: LineChart,
    title: "Search Engine Optimization (SEO)",
    category: "Marketing & SEO",
    tagline: "Organic visibility and technical SEO strategy.",
    description:
      "Technical, content, and authority SEO built to compound — grounded in real search data and shipped without breaking your engineering roadmap.",
    audience: "Businesses that want durable, compounding organic traffic growth.",
    deliverables: [
      "Full technical SEO audit and fixes",
      "Keyword research and content strategy",
      "On-page optimization across priority pages",
      "Site architecture and internal linking strategy",
      "Backlink and digital PR strategy",
      "Monthly rank and traffic reporting",
    ],
    techStack: ["Ahrefs", "Google Search Console", "Screaming Frog", "GA4"],
    workflow: [
      { title: "Technical Audit", desc: "Crawl the site and fix indexation and speed issues." },
      { title: "Keyword Strategy", desc: "Map keywords to funnel stage and existing pages." },
      { title: "On-Page Optimization", desc: "Optimize titles, structure, and internal links." },
      { title: "Content & Links", desc: "Publish content and build topical authority." },
      { title: "Measure", desc: "Track rankings, traffic, and conversions monthly." },
    ],
    color: "#155B58",
  },
  {
    slug: "customer-support-solutions",
    icon: Headphones,
    title: "Customer Support Solutions",
    category: "Infrastructure",
    tagline: "24/7 managed helpdesk and live client assistance.",
    description:
      "Fully managed customer support operations — helpdesk, live chat, and phone — staffed by a trained team and backed by clear SLAs.",
    audience: "Growing companies that need reliable support coverage without building an in-house team.",
    deliverables: [
      "Helpdesk setup and knowledge base build-out",
      "Live chat and email support staffing",
      "Ticket routing and escalation workflows",
      "SLA definition and adherence reporting",
      "CSAT tracking and quality assurance reviews",
      "Monthly support performance reporting",
    ],
    techStack: ["Zendesk", "Intercom", "Freshdesk", "Slack"],
    workflow: [
      { title: "Onboarding", desc: "Learn your product, tone, and escalation paths." },
      { title: "Setup", desc: "Configure helpdesk, macros, and knowledge base." },
      { title: "Staffing", desc: "Train and deploy a dedicated support pod." },
      { title: "Go-Live", desc: "Launch coverage against agreed SLAs." },
      { title: "Optimize", desc: "Refine based on CSAT and ticket trends." },
    ],
    color: "#0D3F3D",
  },
  {
    slug: "managed-web-hosting",
    icon: Server,
    title: "Managed Web Hosting",
    category: "Infrastructure",
    tagline: "99.9% uptime, enterprise security, and cloud scalability.",
    description:
      "Fully managed cloud infrastructure so your product stays fast and available — with proactive monitoring, security patching, and scaling handled for you.",
    audience: "Teams who want their infrastructure managed by experts, not on-call engineers.",
    deliverables: [
      "Cloud infrastructure setup (AWS/GCP/Vercel)",
      "CDN configuration and edge caching",
      "Automated backups and disaster recovery plan",
      "Security patching and vulnerability monitoring",
      "Uptime monitoring with 99.9% SLA",
      "24/7 incident response",
    ],
    techStack: ["AWS", "Vercel", "Cloudflare", "Docker", "Terraform"],
    workflow: [
      { title: "Infrastructure Audit", desc: "Assess current hosting and identify risk points." },
      { title: "Migration Plan", desc: "Plan a zero-downtime migration path." },
      { title: "Setup", desc: "Provision infrastructure, CDN, and monitoring." },
      { title: "Cutover", desc: "Migrate traffic with rollback safeguards." },
      { title: "Manage", desc: "Ongoing patching, monitoring, and incident response." },
    ],
    color: "#F5A623",
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Web & Mobile",
  "Artificial Intelligence",
  "Marketing & SEO",
  "Infrastructure",
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

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$3,500",
    period: "starting price",
    description: "For early-stage teams shipping a first web presence or MVP.",
    features: [
      "Up to 5-page responsive website",
      "Design system & brand starter kit",
      "Basic on-page SEO setup",
      "Analytics & tag manager setup",
      "2 weeks of post-launch support",
      "Single environment hosting",
    ],
  },
  {
    name: "Scale",
    price: "$9,500",
    period: "starting price",
    description: "For growing companies building a full product or platform.",
    features: [
      "Full custom web or mobile application",
      "Dedicated design & engineering pod",
      "CMS or admin dashboard integration",
      "Technical SEO & performance tuning",
      "60 days of post-launch support",
      "Staging + production environments",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored scope",
    description: "For organizations needing custom AI, infrastructure, or multi-team delivery.",
    features: [
      "Custom AI/ML systems & integrations",
      "Multi-squad delivery with a dedicated PM",
      "Enterprise security & compliance review",
      "Managed infrastructure & 24/7 monitoring",
      "Ongoing SLA-backed support retainer",
      "Quarterly roadmap & strategy reviews",
    ],
  },
];

export interface SlaPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export const slaPackages: SlaPackage[] = [
  {
    name: "Essential Care",
    price: "$249/mo",
    description: "Uptime monitoring and security patching for stable, low-traffic sites.",
    features: ["99.5% uptime SLA", "Monthly security patching", "Nightly backups", "Email support, 48h response"],
  },
  {
    name: "Business Care",
    price: "$699/mo",
    description: "Managed hosting with active monitoring for growing products.",
    features: ["99.9% uptime SLA", "Weekly patching & audits", "Hourly backups", "Priority support, 4h response"],
  },
  {
    name: "Enterprise Care",
    price: "Custom",
    description: "White-glove infrastructure management with a dedicated engineer.",
    features: ["99.99% uptime SLA", "Continuous monitoring", "Real-time backup replication", "24/7 dedicated support"],
  },
];
