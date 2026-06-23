/** Education, from resume.md. `logo` resolves via Logo.astro. */

export interface EducationEntry {
  school: string;
  logo: string;
  degree: string;
  focus: string;
  gpa: string;
  dates: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    school: 'Georgia Institute of Technology',
    logo: 'gatech',
    degree: 'M.S. Computer Science',
    focus: 'Computer Systems specialization',
    gpa: '4.0 / 4.0',
    dates: 'Jan 2024 to 2027 (expected)',
  },
  {
    school: 'Simon Fraser University',
    logo: 'sfu',
    degree: 'B.Sc. Data Science',
    focus: 'Computer Science & Statistics concentration',
    gpa: '3.6 / 4.0',
    dates: 'Graduated',
  },
];
