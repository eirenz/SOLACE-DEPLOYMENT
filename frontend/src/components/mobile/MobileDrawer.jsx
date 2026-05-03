import React from 'react';
import { X, LogOut, User, Settings, Flag, Users, BarChart2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Avatar from '../common/Avatar';
import useAuthStore from '../../store/useAuthStore';
import { navigationConfig } from '../../config/navigationConfig';

const MobileDrawer = ({ isOpen, onClose, role }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuthStore();

  // Get overflow items that aren't in the bottom nav
  // For user: profile is overflow
  // For counselor: profile is overflow
  // For admin: user-management, flag-content, analysis-reports are overflow
  const overflowItems = {
    user: [
      { id: 'profile', path: '/user/profile', icon: User, label: 'Profile' },
    ],
    counselor: [
      { id: 'profile', path: '/counselor/profile', icon: User, label: 'Profile' },
    ],
    admin: [
      { id: 'user-management', path: '/admin/user-management', icon: Users, label: 'User Management' },
      { id: 'flag-content', path: '/admin/flag-content', icon: Flag, label: 'Flagged Content' },
      { id: 'analysis-reports', path: '/admin/analysis-reports', icon: BarChart2, label: 'Analysis Reports' },
    ],
  };

  const menuItems = overflowItems[role] || overflowItems.user;

  const getDisplayName = () => {
    if (user?.fullName && user.fullName !== 'Student' && user.fullName.trim() !== '') {
      return user.fullName;
    }
    if (user?.email) {
      const namePart = user.email.split('@')[0];
      return namePart.split(/[.\-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    return 'User';
  };

  const displayName = getDisplayName();

  const handleLogout = () => {
    onClose();
    import('../../api/chatSocket').then(({ disconnectSocket }) => {
      disconnectSocket();
    }).catch(() => {});
    logout();
    navigate('/login');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="m-drawer-backdrop" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="m-drawer">
        {/* Header with user info */}
        <div className="m-drawer__header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="m-drawer__user">
              <Avatar 
                src={user?.avatarUrl} 
                initials={displayName.charAt(0)} 
                size={44} 
              />
              <div>
                <p className="m-drawer__user-name">{displayName}</p>
                <p className="m-drawer__user-role">{role}</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              style={{ 
                background: 'none', border: 'none', padding: '0.25rem', 
                cursor: 'pointer', color: '#707978' 
              }}
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="m-drawer__nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.includes(item.path);
            return (
              <button
                key={item.id}
                className={`m-drawer__nav-item ${isActive ? 'm-drawer__nav-item--active' : ''}`}
                onClick={() => {
                  navigate(item.path);
                  onClose();
                }}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer with Logout */}
        <div className="m-drawer__footer">
          <button className="m-drawer__logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
