import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PageWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Map route paths to tab IDs
  const getActiveTab = () => {
    if (location.pathname.includes('/journal')) return 'journal';
    if (location.pathname.includes('/community')) return 'community';
    if (location.pathname.includes('/mood-tracker')) return 'mood-tracker';
    if (location.pathname.includes('/appointments')) return 'appointments';
    return 'home';
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    switch(id) {
      case 'home': navigate('/user/dashboard'); break;
      case 'journal': navigate('/user/journal'); break;
      case 'community': navigate('/user/community'); break;
      case 'mood-tracker': navigate('/user/mood-tracker'); break;
      case 'appointments': navigate('/user/appointments'); break;
      default: break;
    }
  };

  const SIDEBAR_WIDTH = '280px';

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      backgroundColor: '#F9FAFB',
      fontFamily: "'Inter', sans-serif",
      overflow: 'hidden'
    }}>
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div style={{ 
        flex: 1, 
        marginLeft: SIDEBAR_WIDTH,
        display: 'flex', 
        flexDirection: 'column',
        minWidth: 0
      }}>
        {!location.pathname.includes('/mood-tracker') && <Navbar userName="Bea" />}
        <main style={{ 
          flex: 1,
          display: 'flex', 
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
