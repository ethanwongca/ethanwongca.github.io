import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../data/navItems';

const MobileNav: React.FC = () => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around z-50">
    {NAV_ITEMS.map(({ to, end, label }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        className={({ isActive }) =>
          `px-1.5 py-3 text-xs font-medium ${isActive ? 'text-blue-600' : 'text-gray-400'}`
        }
      >
        {label}
      </NavLink>
    ))}
  </nav>
);

export default MobileNav;
