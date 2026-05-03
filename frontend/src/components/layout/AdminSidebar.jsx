import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  User, 
  Flag, 
  BookOpen, 
  Users, 
  Calendar, 
  BarChart3,
  LogOut
} from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, path: '/admin/dashboard' },
    { id: 'user-management', label: 'User Management', icon: User, path: '/admin/user-management' },
    { id: 'flag-content', label: 'Flag Content', icon: Flag, path: '/admin/flag-content' },
    { id: 'counselors-list', label: 'Counselors List', icon: Users, path: '/admin/counselors-list' },
    { id: 'appointment', label: 'Appointment', icon: Calendar, path: '/admin/appointment' },
    { id: 'analysis-reports', label: 'Analysis Reports', icon: BarChart3, path: '/admin/analysis-reports' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div style={{
      width: '280px',
      height: 'calc(100vh - 80px)',
      backgroundColor: '#52979b',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1.25rem',
      position: 'fixed',
      left: 0,
      top: '80px',
      borderRight: '1.5px solid rgba(255, 255, 255, 0.1)',
      zIndex: 1000
    }}>
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.25rem',
              borderRadius: '16px',
              border: 'none',
              backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'left'
            }}
          >
            <item.icon size={22} />
            <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{item.label}</span>
          </button>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.25rem',
          borderRadius: '16px',
          border: 'none',
          backgroundColor: 'transparent',
          color: '#FFFFFF',
          cursor: 'pointer',
          marginTop: 'auto',
          transition: 'all 0.2s',
          width: '100%',
          textAlign: 'left'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        <LogOut size={22} />
        <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>Log out</span>
      </button>
    </div>
  );
};

export default AdminSidebar;
