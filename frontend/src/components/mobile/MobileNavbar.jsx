import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, MessageCircle, Calendar, Smile, X } from 'lucide-react';
import Avatar from '../common/Avatar';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';

const MobileNavbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const { user, token } = useAuthStore();
  const {
    notifications,
    unreadCount,
    isDropdownOpen,
    loadNotifications,
    initSocket,
    markAsRead,
    markAllAsRead,
    toggleDropdown,
    closeDropdown,
  } = useNotificationStore();

  const notifRef = useRef(null);

  useEffect(() => {
    if (user?.id) {
      loadNotifications();
      initSocket(user, token);
    }
  }, [user?.id]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const handleNotifClick = (n) => {
    markAsRead(n.id);
    closeDropdown();
    if (n.link) {
      navigate(n.link);
    }
  };

  const iconMap = { CHAT: MessageCircle, APPOINTMENT: Calendar, VENT: Smile };
  const colorMap = { CHAT: '#00BCD4', APPOINTMENT: '#2d6465', VENT: '#F59E0B' };

  return (
    <>
      <header className="m-header">
        {/* Left: Avatar + Brand */}
        <div className="m-header__brand" onClick={onMenuClick} style={{ cursor: 'pointer' }}>
          {user?.avatarUrl ? (
            <img 
              src={user.avatarUrl} 
              alt={displayName} 
              className="m-header__avatar" 
            />
          ) : (
            <div className="m-header__avatar-fallback">
              {displayName.charAt(0)}
            </div>
          )}
          <h2 className="m-header__title">Solace</h2>
        </div>

        {/* Right: Notification Bell */}
        <div className="m-header__actions" ref={notifRef}>
          <button 
            className="m-header__icon-btn"
            onClick={toggleDropdown}
            aria-label="Notifications"
          >
            <Bell size={22} />
            {unreadCount > 0 && (
              <span className="m-header__badge">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Full-width notification dropdown */}
      {isDropdownOpen && (
        <div className="m-notif-dropdown">
          <div className="m-notif-dropdown__header">
            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#191c1c' }}>
              Notifications
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {unreadCount > 0 && (
                <button
                  onClick={() => markAllAsRead()}
                  style={{ 
                    background: 'none', border: 'none', 
                    color: '#2d6465', cursor: 'pointer', 
                    fontSize: '0.8rem', fontWeight: 700 
                  }}
                >
                  Mark all read
                </button>
              )}
              <button
                onClick={closeDropdown}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#707978', padding: '0.25rem' }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="m-notif-dropdown__list">
            {notifications.length === 0 ? (
              <div style={{ 
                padding: '2.5rem 1rem', textAlign: 'center', 
                color: '#707978', fontWeight: 600, fontSize: '0.9rem' 
              }}>
                No notifications yet
              </div>
            ) : (
              notifications.map((n) => {
                const Icon = iconMap[n.type] || Bell;
                const iconColor = colorMap[n.type] || '#707978';
                return (
                  <div
                    key={n.id}
                    className={`m-notif-dropdown__item ${!n.isRead ? 'm-notif-dropdown__item--unread' : ''}`}
                    onClick={() => handleNotifClick(n)}
                  >
                    <div style={{
                      width: 34, height: 34, borderRadius: 10,
                      backgroundColor: `${iconColor}15`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={16} color={iconColor} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ 
                        fontWeight: n.isRead ? 600 : 800, fontSize: '0.85rem', 
                        color: '#191c1c', marginBottom: '0.1rem' 
                      }}>
                        {n.title}
                      </div>
                      <div style={{ 
                        fontSize: '0.78rem', color: '#707978', lineHeight: 1.4,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' 
                      }}>
                        {n.message}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#bfc8c8', marginTop: '0.15rem' }}>
                        {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    {!n.isRead && (
                      <div style={{ 
                        width: 8, height: 8, borderRadius: '50%', 
                        backgroundColor: '#2d6465', flexShrink: 0, marginTop: 4 
                      }} />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
