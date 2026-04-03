import React from 'react';
import Sidebar from '../components/Sidebar';
import eaLogo from '../assets/ea.svg';
import amazonLogo from '../assets/amazon.jpg';
import unLogo from '../assets/un.png';
import ubcLogo from '../assets/ubc.png';
import utorontoLogo from '../assets/utoronto.png';
import googleLogo from '../assets/google logo.png';
import mcgillLogo from '../assets/mcgill.webp';
import apolloLogo from '../assets/apollo.jpg';

interface ExperienceEntry {
  logo?: string;
  initials?: string;
  initialsColor?: string;
  role: string;
  company: string;
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
  dates: string;
  detail?: string;
}

const professional: ExperienceEntry[] = [
  {
    logo: eaLogo,
    role: 'AI Engineer Intern',
    company: 'Electronic Arts',
    dates: 'May 2026 – Present',
    description:
      'Building AI-powered developer tools to streamline game engine workflows and accelerate asset creation using large language models.',
    tags: ['LLMs', 'Developer Tools', 'Game AI'],
  },
  {
    logo: amazonLogo,
    role: 'Business Intelligence Engineer Intern',
    company: 'Amazon',
    dates: 'May 2025 – Jul 2025',
    description: 'Supply Chain Optimization Technologies (SCOT) Forecasting Team.',
    bullets: [
      'Launched a full-stack portal using React, Node.js, TypeScript, API Gateway, and AWS CDK to visualize forecast anomalies across millions of retail items, reducing root-cause discovery lead time by 80%.',
      'Optimized vendor lead time visibility by developing ranking metrics and a scalable ETL pipeline using Redshift SQL and AWS Glue, reducing identification time of underperforming forecasts by 50%.',
    ],
    tags: ['React', 'TypeScript', 'AWS CDK', 'Redshift', 'AWS Glue'],
  },
  {
    logo: unLogo,
    role: 'AI Fellow',
    company: 'United Nations – OICT Innovation Unit',
    dates: 'May 2024 – Aug 2024',
    description:
      'Developed AI tools and evaluated open-source generative AI models for sustainable development initiatives, focusing on data-driven agriculture forecasting.',
    tags: ['Generative AI', 'Open Source', 'Policy'],
  },
  {
    logo: apolloLogo,
    role: 'Agency Intern',
    company: 'APOLLO Insurance',
    dates: 'Jun 2023 – Aug 2023',
    description: 'Managed and optimized an insurance database to improve data retrieval efficiency.',
    tags: ['Databases', 'Operations'],
  },
];

const research: ExperienceEntry[] = [
  {
    logo: utorontoLogo,
    role: 'Research Assistant',
    company: 'University of Toronto – Cognitive Lexicon Lab',
    dates: 'Sep 2026 – Present',
    description:
      'Investigating culture and language in LLMs under Dr. Yang Xu, exploring how large language models encode and reflect cultural norms and social biases.',
    tags: ['LLMs', 'Computational Social Science', 'Culture', 'MLLMs'],
  },
  {
    logo: ubcLogo,
    role: 'Research Assistant',
    company: 'UBC SLIME-Lab',
    dates: 'Aug 2025 – Apr 2026',
    description:
      'Investigated the internal mechanisms of attention heads in Transformer architectures under Dr. Jian Zhu, enhancing transparency in high-stakes reasoning tasks. Worked on LLM interpretability and speech LLMs.',
    tags: ['LLM Interpretability', 'Transformers', 'Speech LLMs'],
  },
  {
    logo: ubcLogo,
    role: 'Research Assistant',
    company: 'UBC Human-AI Interaction Lab',
    dates: 'Jan 2025 – Apr 2025',
    description:
      'Focused on deep learning applications for eye tracking in collaborative coding environments under Dr. Cristina Conati.',
    tags: ['Deep Learning', 'Eye Tracking', 'HCI'],
  },
  {
    logo: ubcLogo,
    role: 'NLP Research Assistant',
    company: 'UBC SLIME-Lab',
    dates: 'Aug 2024 – Apr 2025',
    description:
      'Conducted NLP and computational social science research under Dr. Jian Zhu, funded via UBC Work Learn.',
    tags: ['NLP', 'Computational Social Science'],
  },
  {
    logo: mcgillLogo,
    role: 'Undergraduate Researcher',
    company: 'McGill University',
    dates: 'Jan 2024 – Apr 2024',
    description:
      'Supervised by Dr. Faten M\'hiri. Analyzed bias patterns across diverse datasets, advancing pre-trained models in multilingual NLP.',
    tags: ['Multilingual NLP', 'Fairness', 'Bias'],
  },
  {
    logo: googleLogo,
    role: 'CS Research Mentorship Scholar',
    company: 'Google CSRM Program',
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
    dates: '2026 – Present',
    detail: 'Advisor: Dr. Yang Xu · Research Topic: Culture and MLLMs',
  },
  {
    logo: ubcLogo,
    degree: 'BSc in Computer Science',
    institution: 'University of British Columbia',
    dates: '2024 – 2026',
    detail: 'GPA: 4.33 / 4.33',
  },
  {
    logo: mcgillLogo,
    degree: 'BSc in Computer Science (Transferred)',
    institution: 'McGill University',
    dates: '2022 – 2024',
    detail: 'GPA: 3.94 / 4.00',
  },
];

const LogoBadge: React.FC<{ logo?: string; initials?: string; initialsColor?: string; alt?: string }> = ({
  logo, initials, initialsColor = 'bg-gray-100 text-gray-600', alt,
}) => {
  if (logo) {
    return (
      <div className="w-12 h-12 rounded-lg border border-gray-100 flex items-center justify-center bg-white shadow-sm flex-shrink-0 overflow-hidden">
        <img src={logo} alt={alt} className="w-10 h-10 object-contain" />
      </div>
    );
  }
  return (
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${initialsColor}`}>
      {initials}
    </div>
  );
};

const ExperienceCard: React.FC<{ entry: ExperienceEntry }> = ({ entry }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-5 hover:shadow-md transition-shadow">
    <LogoBadge logo={entry.logo} initials={entry.initials} initialsColor={entry.initialsColor} alt={entry.company} />
    <div className="flex-1 min-w-0">
      <div className="flex items-start justify-between gap-4 mb-1">
        <h3 className="text-base font-bold text-gray-900">{entry.role}</h3>
        <span className="text-sm text-gray-400 whitespace-nowrap flex-shrink-0">{entry.dates}</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{entry.company}</p>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{entry.description}</p>
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
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-5 hover:shadow-md transition-shadow">
    <LogoBadge logo={entry.logo} initials={entry.initials} initialsColor={entry.initialsColor} alt={entry.institution} />
    <div className="flex-1">
      <div className="flex items-start justify-between gap-4 mb-1">
        <h3 className="text-base font-bold text-gray-900">{entry.degree}</h3>
        <span className="text-sm text-gray-400 whitespace-nowrap flex-shrink-0">{entry.dates}</span>
      </div>
      <p className="text-sm text-gray-500 mb-1">{entry.institution}</p>
      {entry.detail && <p className="text-xs text-gray-400">{entry.detail}</p>}
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">{title}</h2>
);

const CV: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-12 overflow-y-auto">
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
    </div>
  );
};

export default CV;
