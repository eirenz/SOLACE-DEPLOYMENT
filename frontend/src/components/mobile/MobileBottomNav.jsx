import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, BookOpen, Smile, Users, HeartHandshake,
  LayoutDashboard, MessageCircle, Headphones, Grid2X2,
  UserCheck, Calendar, Settings
} from 'lucide-react';

/**
 * Role-specific bottom navigation tabs.
 * These mirror the main navigation items from navigationConfig
 * but are curated for mobile bottom nav (max 5 items).
 */
const bottomNavConfig = {
  user: [
    { id: 'home', path: '/user/dashboard', icon: Home, label: 'Home' },
    { id: 'journal', path: '/user/journal', icon: BookOpen, label: 'Journal' },
    { id: 'mood', path: '/user/mood-tracker', icon: Smile, label: 'Mood' },
    { id: 'community', path: '/user/community', icon: Users, label: 'Forum' },
    { id: 'support', path: '/user/appointments', icon: HeartHandshake, label: 'Support' },
  ],
  counselor: [
    { id: 'home', path: '/counselor/dashboard', icon: Home, label: 'Home' },
    { id: 'chat', path: '/counselor/chat', icon: MessageCircle, label: 'Chat' },
    { id: 'listen', path: '/counselor/listen-only', icon: Headphones, label: 'Listen' },
    { id: 'appointments', path: '/counselor/appointments', icon: Calendar, label: 'Schedule' },
    { id: 'menu', path: '__drawer__', icon: Grid2X2, label: 'Menu' },
  ],
  admin: [
    { id: 'dashboard', path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'counselors', path: '/admin/counselors-list', icon: UserCheck, label: 'Counselors' },
    { id: 'schedule', path: '/admin/appointment', icon: Calendar, label: 'Schedule' },
    { id: 'menu', path: '__drawer__', icon: Grid2X2, label: 'Menu' },
  ],
};

const MobileBottomNav = ({ role = 'user', onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = bottomNavConfig[role] || bottomNavConfig.user;

  const isActive = (tab) => {
    if (tab.path === '__drawer__') return false;
    return location.pathname.startsWith(tab.path);
  };

  const handleTabClick = (tab) => {
    if (tab.path === '__drawer__') {
      onMenuClick?.();
      return;
    }
    navigate(tab.path);
  };

  return (
    <nav className="m-bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const active = isActive(tab);
        return (
          <button
            key={tab.id}
            className={`m-bottom-nav__item ${active ? 'm-bottom-nav__item--active' : ''}`}
            onClick={() => handleTabClick(tab)}
            aria-label={tab.label}
          >
            <div className="m-bottom-nav__icon-wrapper">
              <Icon size={24} strokeWidth={active ? 2.5 : 2} />
            </div>
            <span className="m-bottom-nav__label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;
