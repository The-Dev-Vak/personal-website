/** Technical skills, grouped. Dual-cloud, sourced from resume + role detail. */

export interface SkillGroup {
  label: string;
  /** Icon key resolved in Skills.astro: aws/azure -> logo, others -> glyph. */
  icon: 'code' | 'azure' | 'aws' | 'platform' | 'security' | 'data';
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    label: 'Languages & Scripting',
    icon: 'code',
    items: ['TypeScript', 'JavaScript', 'Python', 'Bash', 'PowerShell', 'SQL'],
  },
  {
    label: 'Azure',
    icon: 'azure',
    items: [
      'Azure Landing Zones',
      'Bicep',
      'ARM Templates',
      'AKS',
      'Microsoft Entra ID',
      'Azure Policy',
      'Defender for Cloud',
      'Sentinel',
      'Azure Monitor',
      'Azure DevOps',
      'Key Vault',
      'Azure Arc',
    ],
  },
  {
    label: 'AWS',
    icon: 'aws',
    items: [
      'EC2',
      'Lambda',
      'ECS',
      'EKS',
      'Fargate',
      'Batch',
      'S3',
      'RDS',
      'Aurora',
      'DynamoDB',
      'DMS',
      'API Gateway',
      'SQS',
      'CDK',
      'CloudFormation',
      'SAM',
      'Athena',
      'Glue',
      'GuardDuty',
      'Security Hub',
      'WAF',
      'Control Tower / LZA',
    ],
  },
  {
    label: 'Platform & DevOps',
    icon: 'platform',
    items: ['Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'OpenTelemetry', 'Datadog', 'CloudWatch'],
  },
  {
    label: 'Security & Compliance',
    icon: 'security',
    items: ['PBMM', 'CCCS', 'HIPAA', 'Governance & guardrails', 'IaC security', 'Zero-trust networking', 'KMS'],
  },
  {
    label: 'Data, ML & Analytics',
    icon: 'data',
    items: ['S3 Data Lakes', 'QuickSight', 'Pandas', 'NumPy', 'Deep learning', 'Model interpretability', 'ETL pipelines'],
  },
];
