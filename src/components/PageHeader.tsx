import React from 'react';
import StreamGraph from './StreamGraph';

interface PageHeaderProps {
  className?: string;
}

// A full-bleed, Notion-style cover banner: spans the entire content width
// (no box, no border, no rounded corners) and fades into the page
// background at the bottom. Page titles go directly underneath it, not
// inside it — this component is just the banner.
const PageHeader: React.FC<PageHeaderProps> = ({ className }) => (
  <div className={`relative w-full h-[6.6rem] sm:h-[8.4rem] md:h-[10.8rem] overflow-hidden ${className ?? ''}`}>
    <StreamGraph className="absolute inset-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent" />
  </div>
);

export default PageHeader;
