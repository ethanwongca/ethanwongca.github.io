import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import PatternHeader from '../components/PatternHeader';
import LogoBadge from '../components/LogoBadge';
import MaybeLink from '../components/MaybeLink';
import eaLogo from '../assets/ea.svg';
import amazonLogo from '../assets/amazon.jpg';
import unLogo from '../assets/un.png';
import ubcLogo from '../assets/ubc.png';
import utorontoLogo from '../assets/utoronto.png';
import googleLogo from '../assets/google logo.png';
import mcgillLogo from '../assets/mcgill.webp';

interface ExperienceEntry {
  logo?: string;
  initials?: string;
  initialsColor?: string;
  role: string;
  company: string;
  companyUrl?: string;
  brandColor?: string;
  dates: string;
  description: string;
  bullets?: string[];
  tags?: string[];
}

interface EducationEntry {
  logo?: string;
  initials?: string;
  initialsColor?: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  brandColor?: string;
  dates: string;
  detail?: string;
}

const professional: ExperienceEntry[] = [
  {
    logo: eaLogo,
    role: 'AI Engineer Intern',
    company: 'Electronic Arts',
    companyUrl: 'https://www.ea.com/en-ca/careers/teams/technology',
    brandColor: '#255AF6',
    dates: 'May 2026 – August 2026',
    description:
      'Building AI-powered developer tools to accelerate game development.',
    tags: ['LLMs', 'Developer Tools', 'Agentic Workflows'],
  },
  {
    logo: amazonLogo,
    role: 'Business Intelligence Engineer Intern',
    company: 'Amazon',
    companyUrl: 'https://www.amazon.science/tag/supply-chain-optimization-technologies',
    brandColor: '#F47025',
    dates: 'May 2025 – Jul 2025',
    description: 'Supply Chain Optimization Technologies (SCOT) Forecasting Team. Launched a full-stack portal to visualize anomalies in Amazon\'s internal ML forecasts across millions of retail items.',
    tags: ['React', 'TypeScript', 'AWS CDK', 'Redshift', 'AWS Glue'],
  },
  {
    logo: unLogo,
    role: 'AI Fellow',
    company: 'United Nations Office of Information and Communications Technology',
    companyUrl: 'https://unite.un.org/en',
    brandColor: '#009EDC',
    dates: 'May 2024 – Aug 2024',
    description:
      'Developed AI tools and evaluated open-source generative AI models for sustainable development goals (SDGs).',
    tags: ['Generative AI', 'Open Source', 'Policy'],
  },
];

const research: ExperienceEntry[] = [
  {
    logo: utorontoLogo,
    role: 'Research Assistant',
    company: 'Cognitive Lexicon Lab at the University of Toronto',
    companyUrl: 'https://www.cs.toronto.edu/~yangxu/index.html',
    brandColor: '#002F65',
    dates: 'Sep 2026 – Present',
    description:
      'Investigating culture and language in LLMs under Dr. Yang Xu.',
    tags: ['LLMs', 'Computational Social Science', 'Culture', 'MLLMs'],
  },
  {
    logo: ubcLogo,
    role: 'Research Assistant',
    company: 'SLIME-Lab at the University of British Columbia',
    companyUrl: 'https://www.arts.ubc.ca/news/ubc-arts-researchers-awarded-funding-through-b-c-knowledge-development-fund/',
    brandColor: '#0C2344',
    dates: 'Aug 2025 – Apr 2026',
    description:
      'Worked on LLM interpretability and speech LLMs under Dr. Jian Zhu.',
    tags: ['LLM Interpretability', 'Transformers', 'Speech LLMs'],
  },
  {
    logo: ubcLogo,
    role: 'Research Assistant',
    company: 'Human-AI Interaction Lab at the University of British Columbia',
    companyUrl: 'https://www.cs.ubc.ca/cs-research/lci/research-groups/human-ai-interaction/',
    brandColor: '#0C2344',
    dates: 'Jan 2025 – Apr 2025',
    description:
      'Used deep learning on eye-tracking data to detect long-term cognitive states under Dr. Cristina Conati.',
    tags: ['Deep Learning', 'Eye Tracking', 'HCI'],
  },
  {
    logo: ubcLogo,
    role: 'NLP Research Assistant',
    company: 'SLIME-Lab at the University of British Columbia',
    companyUrl: 'https://www.arts.ubc.ca/news/ubc-arts-researchers-awarded-funding-through-b-c-knowledge-development-fund/',
    brandColor: '#0C2344',
    dates: 'Aug 2024 – Apr 2025',
    description:
      'Conducted NLP and computational social science research under Dr. Jian Zhu, funded via UBC Work Learn.',
    tags: ['NLP', 'Computational Social Science'],
  },
  {
    logo: mcgillLogo,
    role: 'Undergraduate Researcher',
    company: 'McGill University',
    companyUrl: 'https://www.cs.mcgill.ca/',
    brandColor: '#ED1B2F',
    dates: 'Jan 2024 – Apr 2024',
    description:
      'Supervised by Dr. Faten M\'hiri. Analyzed bias in ML models.',
    tags: ['Multilingual NLP', 'Fairness', 'Bias'],
  },
  {
    logo: googleLogo,
    role: 'CS Research Mentorship Scholar',
    company: 'Google Computer Science Research Mentorship Program',
    companyUrl: 'https://research.google/programs-and-events/past-programs/csrmp/',
    brandColor: '#4285F4',
    dates: 'Sep 2023 – Dec 2023',
    description:
      'Selected for a three-month program to be mentored by a Google employee in HCI and NLP research.',
    tags: ['HCI', 'NLP', 'Research'],
  },
];

const education: EducationEntry[] = [
  {
    logo: utorontoLogo,
    degree: 'MSc in Computer Science',
    institution: 'University of Toronto',
    institutionUrl: 'https://web.cs.toronto.edu/',
    brandColor: '#002F65',
    dates: '2026 – Present',
    detail: 'Advisor: Dr. Yang Xu · Research Topic: Culture and MLLMs',
  },
  {
    logo: ubcLogo,
    degree: 'BSc in Computer Science',
    institution: 'University of British Columbia',
    institutionUrl: 'https://www.cs.ubc.ca/',
    brandColor: '#0C2344',
    dates: '2024 – 2026',
    detail: 'GPA: 4.33 / 4.33',
  },
  {
    logo: mcgillLogo,
    degree: 'BSc in Computer Science (Transferred)',
    institution: 'McGill University',
    institutionUrl: 'https://www.cs.mcgill.ca/',
    brandColor: '#ED1B2F',
    dates: '2022 – 2024',
    detail: 'GPA: 3.94 / 4.00',
  },
];

const ExperienceCard: React.FC<{ entry: ExperienceEntry }> = ({ entry }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-5">
    <MaybeLink href={entry.companyUrl} brandColor={entry.brandColor}>
      <LogoBadge logo={entry.logo} initials={entry.initials} initialsColor={entry.initialsColor} alt={entry.company} />
    </MaybeLink>
    <div className="flex-1 min-w-0">
      <div className="flex items-start justify-between gap-4 mb-1">
        <MaybeLink href={entry.companyUrl} brandColor={entry.brandColor} className="brand-hover transition-colors">
          <h3 className="text-lg font-bold text-gray-900">{entry.role}</h3>
        </MaybeLink>
        <span className="text-base text-gray-400 whitespace-nowrap flex-shrink-0">{entry.dates}</span>
      </div>
      <p className="text-base text-gray-500 mb-2">{entry.company}</p>
      <p className="text-base text-gray-600 leading-relaxed mb-3">{entry.description}</p>
      {entry.bullets && (
        <ul className="list-disc list-outside ml-4 space-y-1.5 mb-3">
          {entry.bullets.map((b) => (
            <li key={b} className="text-sm text-gray-600 leading-relaxed">{b}</li>
          ))}
        </ul>
      )}
      {entry.tags && (
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-500 text-xs px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const EducationCard: React.FC<{ entry: EducationEntry }> = ({ entry }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-5">
    <MaybeLink href={entry.institutionUrl} brandColor={entry.brandColor}>
      <LogoBadge logo={entry.logo} initials={entry.initials} initialsColor={entry.initialsColor} alt={entry.institution} />
    </MaybeLink>
    <div className="flex-1">
      <div className="flex items-start justify-between gap-4 mb-1">
        <MaybeLink href={entry.institutionUrl} brandColor={entry.brandColor} className="brand-hover transition-colors">
          <h3 className="text-lg font-bold text-gray-900">{entry.degree}</h3>
        </MaybeLink>
        <span className="text-base text-gray-400 whitespace-nowrap flex-shrink-0">{entry.dates}</span>
      </div>
      <p className="text-base text-gray-500 mb-1">{entry.institution}</p>
      {entry.detail && <p className="text-sm text-gray-400">{entry.detail}</p>}
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">{title}</h2>
);

const CV: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 md:ml-[280px]">
      <Sidebar />

      {/* Cover banner – full width, fades into the page below */}
      <PatternHeader variant="circles" />

      {/* Title – directly underneath the banner */}
      <div className="px-6 md:px-12 pt-4">
        <h1 className="text-4xl font-bold text-gray-900">Experience</h1>
      </div>

      {/* Main content */}
      <div className="px-6 md:px-12 pt-6 pb-24 md:pb-12 min-h-screen">
        <div className="max-w-3xl space-y-14">
          {/* Professional Experience */}
          <section>
            <SectionHeader title="Professional Experience" />
            <div className="space-y-4">
              {professional.map((entry) => (
                <ExperienceCard key={entry.role + entry.company} entry={entry} />
              ))}
            </div>
          </section>

          {/* Research Experience */}
          <section>
            <SectionHeader title="Research Experience" />
            <div className="space-y-4">
              {research.map((entry) => (
                <ExperienceCard key={entry.role + entry.company} entry={entry} />
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionHeader title="Education" />
            <div className="space-y-4">
              {education.map((entry) => (
                <EducationCard key={entry.degree} entry={entry} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default CV;
