/**
 * Experience, metric-first, from LinkedIn + resume.
 * `logo` is a key resolved by the Logo component (src/components/Logo.astro).
 * Order: most recent first.
 */

export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  location?: string;
  logo: string;
  points: string[];
  href?: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Microsoft',
    role: 'Cloud Solution Architect',
    dates: 'Jan 2026 to Present',
    location: 'Vancouver, BC · Remote',
    logo: 'microsoft',
    points: [
      'Built Project Pronghorn Blue for the Government of Alberta, prompt-build apps that deploy into a PBMM-aligned Azure landing zone for regulated workloads.',
      'Cloud advisor to lululemon, partnering across their teams on Azure architecture, migrations, security, governance, and the day-to-day of running cloud at scale.',
      'Architect secure, scalable Azure (Terraform / Bicep, AKS) for enterprise and public-sector clients, turning complex requirements into systems their teams can actually run.',
    ],
  },
  {
    company: 'latchkey.dev',
    role: 'Co-Founder & CTO',
    dates: 'Aug 2025 to Present',
    location: 'Vancouver, BC',
    logo: 'latchkey',
    points: [
      'Co-founded a venture-backed, profitable AI-powered DevOps platform that optimizes GitHub Actions for cost, security, and pipeline performance.',
      'Led customer acquisition end-to-end, turning early users into paying customers, and owned the public landing page and onboarding flow.',
      'Raised pre-seed funding from LAUNCH to grow the product.',
    ],
    href: 'https://latchkey.dev',
  },
  {
    company: 'Amazon Web Services',
    role: 'Delivery Consultant (Cloud Architect)',
    dates: 'Jan 2023 to Jan 2026',
    location: 'Vancouver, BC · Remote',
    logo: 'aws',
    points: [
      'Led cloud migrations for 10+ Canadian federal and provincial government organizations, designing secure, compliant architectures with IaC (CDK, CloudFormation, SAM).',
      'Held a 95% average CSAT across dozens of advisory and implementation engagements, delivering high-impact technical workshops alongside hands-on solutions.',
      'AWS Security & Containers SME: landing zones (LZA / PBMM, CCCS), GuardDuty / Security Hub / WAF, and EKS / ECS in highly regulated environments.',
      'Built reusable delivery kits (compliance dashboards, dashboard-migration tooling) adopted across multiple engagements, saving 500+ hours. 11x AWS certified, 3x AWSome Award.',
    ],
  },
];

/** Earlier internships, rich enough to list, compact enough not to dominate. */
export interface Internship {
  company: string;
  role: string;
  dates: string;
  location?: string;
  logo: string;
  blurb: string;
}

export const INTERNSHIPS: Internship[] = [
  {
    company: 'Amazon Web Services',
    role: 'Professional Services Intern',
    dates: 'May 2022 to Aug 2022',
    location: 'Vancouver, BC',
    logo: 'aws',
    blurb:
      'Deployed and customized AWS Service Workbench with CloudFormation, integrating EMR and SageMaker Notebooks for a Kaggle competition.',
  },
  {
    company: 'CIBC',
    role: 'Software Developer Intern',
    dates: 'Sep 2021 to Dec 2021',
    location: 'Toronto, ON',
    logo: 'cibc',
    blurb:
      'Built a full-stack React/Django app aggregating fraud data from multiple APIs, serving thousands of CIBC risk analysts.',
  },
  {
    company: 'RBC Capital Markets',
    role: 'Data Scientist Intern',
    dates: 'May 2021 to Aug 2021',
    location: 'Toronto, ON',
    logo: 'rbc',
    blurb:
      'Built a Kubernetes resource-optimization engine projected to save $2.5M in infrastructure costs, the work behind my patent.',
  },
  {
    company: 'Simon Fraser University',
    role: 'Research Assistant, Ester Lab',
    dates: 'May 2021 to Aug 2021',
    location: 'Vancouver, BC',
    logo: 'sfu',
    blurb:
      'Built a deep-learning model to predict chemotherapy side effects, optimizing for bias resilience and interpretability, later carried to publication.',
  },
  {
    company: 'Powerex',
    role: 'IT Analyst Intern',
    dates: 'Sep 2019 to Apr 2020',
    location: 'Vancouver, BC',
    logo: 'powerex',
    blurb:
      'Built ETL pipelines for real-time processing of terabytes of infrastructure data, integrated with Datadog for visualization.',
  },
];
