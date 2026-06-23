/**
 * Certifications & credentials, grouped by issuer.
 * `logo` resolves via Logo.astro. Counts: 11x AWS Certified, 4x Azure.
 * Partner accreditations / knowledge badges are included but clearly secondary.
 */

export interface Cert {
  name: string;
  issued: string;
  expires?: string;
  id?: string;
  /** Highest-signal certs to surface first within a group. */
  featured?: boolean;
}

export interface CertGroup {
  issuer: string;
  logo: string;
  /** Short summary chip shown next to the issuer. */
  tally: string;
  certs: Cert[];
}

export const CERT_GROUPS: CertGroup[] = [
  {
    issuer: 'Amazon Web Services',
    logo: 'aws',
    tally: '11x Certified',
    certs: [
      { name: 'Solutions Architect (Professional)', issued: 'Jul 2025', expires: 'Jul 2028', featured: true },
      { name: 'DevOps Engineer (Professional)', issued: 'Feb 2024', expires: 'Feb 2027', featured: true },
      { name: 'Security (Specialty)', issued: 'Jun 2023', expires: 'Jun 2026', featured: true },
      { name: 'Machine Learning (Specialty)', issued: 'Aug 2023', expires: 'Aug 2026', featured: true },
      { name: 'Data Engineer (Associate)', issued: 'Aug 2025', expires: 'Aug 2028' },
      { name: 'Machine Learning Engineer (Associate)', issued: 'Jun 2025', expires: 'Jun 2028' },
      { name: 'SysOps Administrator (Associate)', issued: 'Feb 2024', expires: 'Feb 2027' },
      { name: 'Developer (Associate)', issued: 'Feb 2024', expires: 'Feb 2027' },
      { name: 'Solutions Architect (Associate)', issued: 'Apr 2023', expires: 'Jul 2028' },
      { name: 'AI Practitioner', issued: 'May 2025', expires: 'May 2028' },
      { name: 'Cloud Practitioner', issued: 'Jun 2022', expires: 'Jul 2028' },
      { name: 'Generative AI Foundational (L100)', issued: 'Oct 2025', expires: 'Oct 2026' },
      { name: 'Knowledge: Amazon EKS', issued: 'Apr 2024' },
      { name: 'Tech U Graduate', issued: 'Apr 2023' },
      { name: 'Partner: Generative AI Essentials (Business)', issued: 'Aug 2023' },
      { name: 'Partner: Cloud Economics Accreditation', issued: 'Aug 2023' },
      { name: 'Partner: Accreditation (Technical)', issued: 'Aug 2023' },
      { name: 'Partner: Sales Accreditation (Business)', issued: 'Jul 2023' },
    ],
  },
  {
    issuer: 'Microsoft',
    logo: 'microsoft',
    tally: '4x Azure Certified',
    certs: [
      { name: 'Azure Fundamentals', issued: 'Mar 2026', id: '929FF3415F13DD5D', featured: true },
      { name: 'Azure AI Fundamentals', issued: 'Mar 2026', id: '9845E549C8A03271', featured: true },
      { name: 'Azure Data Fundamentals', issued: 'Apr 2026', id: '3D87865D89E0F46F', featured: true },
      {
        name: 'Security, Compliance, and Identity Fundamentals',
        issued: 'Apr 2026',
        id: '47AC121828D4CD0A',
        featured: true,
      },
    ],
  },
  {
    issuer: 'UBC Extended Learning',
    logo: 'ubc',
    tally: 'AI Cloud Strategy',
    certs: [
      { name: 'Micro-certificate: AI Cloud Solutions Strategy', issued: 'Jan 2024', id: '91665639' },
      { name: 'AI Cloud Technology Implementation', issued: 'Jan 2024', id: '91408666' },
      { name: 'Fundamentals of AI Cloud Strategy', issued: 'Nov 2023', id: '88037083' },
    ],
  },
];
