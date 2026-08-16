// Single source of truth for the site's nav, shared by the desktop Sidebar
// and the mobile bottom bar so the two can't drift apart. Order matters:
// it's the display order in both, and Hobbies stays last (rightmost on
// mobile). `end` marks a route that should only match exactly — without it
// "/" would count as active on every page.
export interface NavItem {
  to: string;
  end: boolean;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/', end: true, label: 'Overview' },
  { to: '/experience', end: false, label: 'Experience' },
  { to: '/publications', end: false, label: 'Publications' },
  { to: '/teaching', end: false, label: 'Teaching' },
  { to: '/hobbies', end: false, label: 'Hobbies' },
];
