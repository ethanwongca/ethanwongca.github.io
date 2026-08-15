import React from 'react';

interface MaybeLinkProps {
  href?: string;
  /** Hex color used on hover, via the --brand-color CSS variable (see .brand-hover in index.css). */
  brandColor?: string;
  className?: string;
  children: React.ReactNode;
}

// Renders an external link when href is present, otherwise just the children —
// lets a title/logo/etc. be conditionally clickable without branching at each call site.
const MaybeLink: React.FC<MaybeLinkProps> = ({ href, brandColor, className, children }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      style={brandColor ? ({ '--brand-color': brandColor } as React.CSSProperties) : undefined}
    >
      {children}
    </a>
  ) : (
    <>{children}</>
  );

export default MaybeLink;
