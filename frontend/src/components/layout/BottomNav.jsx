import React from 'react';
import { Home, Book, Users, BarChart2, Calendar } from 'lucide-react';

const BottomNav = ({ activeTab = 'home', onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'journal', icon: Book, label: 'Journal' },
    { id: 'community', icon: Users, label: 'Safe Space' },
    { id: 'mood-tracker', icon: BarChart2, label: 'Mood Tracker' },
    { id: 'appointments', icon: Calendar, label: 'Appointment' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0, left: 0, right: 0,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      justifyContent: 'space-around',
      padding: window.innerWidth < 600 ? '0.5rem 0' : '0.75rem 0',
      zIndex: 100,
      borderTop: '1px solid #EEEEEE',
      boxShadow: '0 -4px 12px rgba(0,0,0,0.03)',
      height: window.innerWidth < 600 ? '60px' : '70px',
      alignItems: 'center'
    }}>
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button 
            key={tab.id}
            onClick={() => onTabChange && onTabChange(tab.id)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              color: isActive ? 'var(--primary)' : '#9E9E9E',
              gap: '0.25rem',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '0.25rem',
              cursor: 'pointer',
              flex: 1
            }}
          >
            <Icon size={window.innerWidth < 600 ? 20 : 24} strokeWidth={isActive ? 2.5 : 2} />
            <span style={{ fontSize: window.innerWidth < 600 ? '0.6rem' : '0.65rem', fontWeight: isActive ? 700 : 500, whiteSpace: 'nowrap' }}>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
