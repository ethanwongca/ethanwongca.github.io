import React from 'react';

interface LogoBadgeProps {
  logo?: string;
  initials?: string;
  initialsColor?: string;
  alt?: string;
}

const LogoBadge: React.FC<LogoBadgeProps> = ({ logo, initials, initialsColor = 'bg-gray-100 text-gray-600', alt }) => {
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

export default LogoBadge;
