import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import PatternHeader from '../components/PatternHeader';
import LogoBadge from '../components/LogoBadge';
import MaybeLink from '../components/MaybeLink';
import utorontoLogo from '../assets/utoronto.png';
import mcgillLogo from '../assets/mcgill.webp';
import mchacksLogo from '../assets/mchacks.png';
import csusLogo from '../assets/csus.webp';
import mageeLogo from '../assets/magee.png';

interface TeachingEntry {
  title: string;
  institution: string;
  logo: string;
  url?: string;
  brandColor?: string;
  term: string;
  description: string;
}

const teaching: TeachingEntry[] = [
  {
    title: 'CSC 110 Tutorial TA',
    institution: 'University of Toronto',
    logo: utorontoLogo,
    url: 'https://web.cs.toronto.edu/',
    brandColor: '#002F65',
    term: 'Fall 2026 (Sept 2026 – Dec 2026)',
    description: "Hosting tutorials for the University of Toronto's introductory CS course.",
  },
  {
    title: 'TEAM Mentor (CSUS Helpdesk)',
    institution: 'McGill University',
    logo: mcgillLogo,
    url: 'https://www.cs.mcgill.ca/',
    brandColor: '#ED1B2F',
    term: 'Winter 2024 (Jan 2024 – Apr 2024)',
    description: 'Hosted office hours for COMP 202, 250, and 206.',
  },
];

interface WorkshopEntry {
  title: string;
  logo?: string;
  url?: string;
  brandColor?: string;
  description: string;
}

const workshops: WorkshopEntry[] = [
  {
    title: 'AI Bias Workshop',
    logo: mageeLogo,
    url: 'https://github.com/ethanwongca/AI-Bias-Workshop',
    brandColor: '#FF0000',
    description: 'Workshop on AI bias for Magee Secondary students.',
  },
  {
    title: 'React Fundamentals Workshop',
    logo: mchacksLogo,
    url: 'https://github.com/ethanwongca/McHacksReactWorkshop',
    brandColor: '#D23C2F',
    description: "Led interactive training for 50+ developers at McGill's McHacks.",
  },
  {
    title: 'Web Development Workshop',
    logo: csusLogo,
    url: 'https://github.com/ethanwongca/CSUSxMcHacksWebDev',
    brandColor: '#2FABDE',
    description: 'Taught HTML/CSS/JS fundamentals at the CSUS x McHacks event.',
  },
];

const TeachingCard: React.FC<{ entry: TeachingEntry }> = ({ entry }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-5">
    <MaybeLink href={entry.url} brandColor={entry.brandColor}>
      <LogoBadge logo={entry.logo} alt={entry.institution} />
    </MaybeLink>
    <div className="flex-1 min-w-0">
      <div className="flex items-start justify-between gap-4 mb-1">
        <MaybeLink href={entry.url} brandColor={entry.brandColor} className="brand-hover transition-colors">
          <h3 className="text-lg font-bold text-gray-900">{entry.title}</h3>
        </MaybeLink>
        <span className="text-sm text-gray-400 whitespace-nowrap flex-shrink-0">{entry.term}</span>
      </div>
      <p className="text-base text-gray-500 mb-2">{entry.institution}</p>
      <p className="text-base text-gray-600 leading-relaxed">{entry.description}</p>
    </div>
  </div>
);

const WorkshopCard: React.FC<{ entry: WorkshopEntry }> = ({ entry }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-5">
    {entry.logo && (
      <MaybeLink href={entry.url} brandColor={entry.brandColor}>
        <LogoBadge logo={entry.logo} alt={entry.title} />
      </MaybeLink>
    )}
    <div className="flex-1 min-w-0">
      <MaybeLink href={entry.url} brandColor={entry.brandColor} className="brand-hover transition-colors">
        <h3 className="text-lg font-bold text-gray-900 mb-1.5">{entry.title}</h3>
      </MaybeLink>
      <p className="text-base text-gray-600 leading-relaxed">{entry.description}</p>
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
);

const Teaching: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 md:ml-[280px]">
      <Sidebar />

      {/* Cover banner – full width, fades into the page below */}
      <PatternHeader variant="circles" />

      {/* Title – directly underneath the banner */}
      <div className="px-6 md:px-12 pt-4">
        <h1 className="text-4xl font-bold text-gray-900">Teaching &amp; Workshops</h1>
      </div>

      {/* Main content */}
      <div className="px-6 md:px-12 pt-6 pb-24 md:pb-12 min-h-screen">
        <div className="max-w-3xl space-y-10">
          <p className="text-gray-400 text-base">Courses I've taught and workshops I've run.</p>

          <section>
            <SectionHeader title="Teaching" />
            <div className="space-y-4">
              {teaching.map((entry) => (
                <TeachingCard key={entry.title} entry={entry} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="Workshops" />
            <div className="space-y-4">
              {workshops.map((entry) => (
                <WorkshopCard key={entry.title} entry={entry} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Teaching;
