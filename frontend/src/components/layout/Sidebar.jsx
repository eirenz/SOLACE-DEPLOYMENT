import React from 'react';
import { Home, Book, Shield, BarChart2, Calendar, Plus } from 'lucide-react';

const Sidebar = ({ activeTab = 'home', onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'journal', icon: Book, label: 'Journal' },
    { id: 'community', icon: Shield, label: 'Safe Space' },
    { id: 'mood-tracker', icon: BarChart2, label: 'Mood Tracker' },
    { id: 'appointments', icon: Calendar, label: 'Appointments' }
  ];

  const DARK_TEAL = '#064E3B';

  return (
    <nav style={{
      width: '280px',
      height: '100vh',
      backgroundColor: '#FEFEFE',
      display: 'flex',
      flexDirection: 'column',
      padding: '2.5rem 1.5rem',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1000,
      borderRight: '1px solid #F3F4F6'
    }}>
      <div style={{ marginBottom: '3.5rem', padding: '0 0.5rem' }}>
        <h1 style={{ 
          fontSize: '1.4rem', 
          margin: 0, 
          fontWeight: '800', 
          color: DARK_TEAL,
          letterSpacing: '-0.01em'
        }}>Solace</h1>
        <p style={{
          fontSize: '0.65rem',
          margin: '0.2rem 0 0 0',
          fontWeight: '700',
          color: '#6B7280',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>Your Digital Sanctuary</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button 
              key={tab.id}
              onClick={() => onTabChange && onTabChange(tab.id)}
              style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.25rem',
                padding: '0.85rem 1.5rem',
                backgroundColor: isActive ? DARK_TEAL : 'transparent',
                color: isActive ? '#FFFFFF' : '#4B5563',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.95rem'
              }}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span style={{ whiteSpace: 'nowrap' }}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: 'auto' }}>
        <button style={{
          width: '100%',
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          padding: '1.1rem 1.75rem',
          backgroundColor: DARK_TEAL,
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: '700',
          fontSize: '1rem',
          boxShadow: '0 10px 25px rgba(6, 78, 59, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          <Plus size={22} strokeWidth={3} />
          <span>New Reflection</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
