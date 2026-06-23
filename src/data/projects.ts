/**
 * Flagship projects, three stories, each with a result.
 * `href` points to a deep-dive sub-page; `external` links out (App Store, etc.).
 */

export interface Project {
  slug: string;
  name: string;
  /** Mono kicker shown above the title. */
  kind: string;
  /** Optional logo/icon shown on the card (public path). */
  icon?: string;
  blurb: string;
  /** Metric-first highlights rendered as mono tags. */
  metrics: string[];
  /** Internal case-study page. */
  href?: string;
  /** External, usable link (the "you can try this right now" flex). */
  external?: { label: string; url: string };
}

export const PROJECTS: Project[] = [
  {
    slug: 'latchkey',
    name: 'latchkey.dev',
    kind: 'founder · ai-powered ci/cd',
    blurb:
      'Self-healing GitHub Actions: an agentic AI backend that surfaces cloud cost, security, and pipeline-performance insights, then fixes them.',
    metrics: ['$5K MRR', '$25K pre-seed', '$1M valuation'],
    href: '/projects/latchkey',
    external: { label: 'latchkey.dev', url: 'https://latchkey.dev' },
  },
  {
    slug: 'worddrop',
    name: 'WordDrop',
    kind: 'product · ios',
    icon: '/img/worddrop-icon.png',
    blurb:
      'A minimalist, privacy-first vocabulary puzzle on the App Store. Calm where the day job is complex, and proof the same hands ship polished consumer products.',
    metrics: ['App Store', 'privacy-first', 'zero data collected'],
    href: '/projects/worddrop',
    // external App Store link is read from SITE.links.appStore in the UI
  },
  {
    slug: 'pronghorn',
    name: 'Project Pronghorn Blue',
    kind: 'microsoft · public sector',
    blurb:
      'Prompt-build applications that deploy straight into a PBMM-aligned Azure landing zone, regulated-workload guardrails, without the wait.',
    metrics: ['Azure', 'PBMM landing zone', 'IaC · AKS'],
  },
  {
    slug: 'securesight',
    name: 'SecureSight',
    kind: 'aws · security',
    blurb:
      'A centralized security data lake, the biggest system I have built. Amazon Security Lake and Control Tower with ETL pipelines that ingest CloudTrail, VPC, Route 53, and Security Hub logs, then surface the whole estate in QuickSight for proactive threat detection.',
    metrics: ['Security Lake', 'Athena · ETL', 'QuickSight'],
  },
  {
    slug: 'lza-guardrails',
    name: 'LZA Guardrails Dashboard',
    kind: 'aws · compliance',
    blurb:
      'Real-time compliance monitoring for PBMM landing zones. A SQL ETL pipeline in Athena ingests AWS Audit Manager and Config data and flags non-compliant CCCS guardrails in QuickSight for fast remediation.',
    metrics: ['LZA · PBMM', 'Athena · SQL', 'QuickSight'],
  },
  {
    slug: 'datalakes',
    name: 'Data lakes & BI',
    kind: 'aws · data',
    blurb:
      'Secure, scalable S3 data lakes with Lambda ETL and advanced QuickSight dashboards (NLP-powered search, geospatial mapping) for public-sector analytics, built with AWS CDK to the Well-Architected Framework.',
    metrics: ['S3 data lake', 'CDK · Lambda', 'QuickSight'],
  },
  {
    slug: 'dashboardmigrator',
    name: 'DashboardMigrator',
    kind: 'aws · tooling',
    blurb:
      'A reusable delivery kit that automates replicating QuickSight dashboards across AWS accounts with CloudFormation, replacing an error-prone manual process and saving hours across engagements.',
    metrics: ['CloudFormation', 'QuickSight', 'reusable kit'],
  },
  {
    slug: 'geospatial',
    name: 'Geospatial platform on AWS',
    kind: 'aws · migration',
    blurb:
      'A cloud-native migration of a mission-critical ArcGIS Enterprise geospatial platform via AWS CDK (EC2, ASG, RDS, S3, VPC), improving scalability and cutting operational cost.',
    metrics: ['CDK', 'EC2 · RDS', 'geospatial'],
  },
  {
    slug: 'serverless',
    name: 'Serverless migrations',
    kind: 'aws · migration',
    blurb:
      'Re-platformed legacy systems onto AWS-native serverless: API Gateway, Lambda, WAF, and SAM, with modular CDK and OpenAPI-defined contracts replacing brittle on-prem stacks.',
    metrics: ['Lambda · API GW', 'WAF', 'CDK · SAM'],
  },
];
