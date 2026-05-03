import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MobileNavbar from '../mobile/MobileNavbar';
import MobileBottomNav from '../mobile/MobileBottomNav';
import MobileDrawer from '../mobile/MobileDrawer';
import '../../styles/mobile.css';

const MobileLayout = ({ role = 'user' }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Apply mobile body class for cleaner background transitions
  useEffect(() => {
    document.body.classList.add('is-mobile-view');
    return () => document.body.classList.remove('is-mobile-view');
  }, []);

  return (
    <div 
      className="mobile-shell" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}
    >
      <MobileNavbar onMenuClick={() => setIsDrawerOpen(true)} />
      
      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        role={role} 
      />
      
      <main className="m-content">
        <Outlet />
      </main>

      <MobileBottomNav 
        role={role} 
        onMenuClick={() => setIsDrawerOpen(true)} 
      />
    </div>
  );
};

export default MobileLayout;
