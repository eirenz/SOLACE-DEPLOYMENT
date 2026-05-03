import React, { useState, useEffect } from 'react';
import MobileLayout from './MobileLayout';

const LayoutWrapper = ({ DesktopLayout, role }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return <MobileLayout role={role} />;
  }

  return <DesktopLayout />;
};

export default LayoutWrapper;
