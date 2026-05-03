import React, { useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CounselorSidebar from './CounselorSidebar';
import Avatar from '../common/Avatar';
import { Bell, MessageCircle, Calendar, Smile } from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';

const CounselorPageWrapper = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const notifRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) closeDropdown();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (user?.id) {
      loadNotifications();
      initSocket(user, token);
    }
  }, [user?.id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#F4F7F8', fontFamily: 'var(--font-body)', overflow: 'hidden' }}>
      {/* Top Header */}
      <header style={{
        height: '80px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
        borderBottom: '1.5px solid #E0E4E6',
        flexShrink: 0,
        zIndex: 1050,
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
      }}>
        <h2 className="heading-decorative" style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: '#52979B' }}>Solace</h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {/* Notification Bell */}
          <div style={{ position: 'relative' }} ref={notifRef}>
            <button
              onClick={toggleDropdown}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A1A2E', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
            >
              <Bell size={26} />
              {unreadCount > 0 && (
                <div style={{
                  position: 'absolute', top: '2px', right: '2px',
                  minWidth: '18px', height: '18px',
                  backgroundColor: '#EF4444', borderRadius: '50%',
                  border: '2px solid #FFFFFF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6rem', color: '#fff', fontWeight: '800', padding: '0 2px'
                }}>
                  {unreadCount > 9 ? '9+' : unreadCount}
                </div>
              )}
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 10px)', right: '0',
                width: '360px', backgroundColor: '#FFFFFF', borderRadius: '20px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.12)', border: '1px solid #E0E4E6',
                zIndex: 1200, overflow: 'hidden'
              }}>
                <div style={{ padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F0F4F5' }}>
                  <span style={{ fontWeight: '800', fontSize: '1rem', color: '#1A1A2E' }}>Notifications</span>
                  {unreadCount > 0 && (
                    <button onClick={() => markAllAsRead()} style={{ background: 'none', border: 'none', color: '#52979B', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '700' }}>
                      Mark all as read
                    </button>
                  )}
                </div>
                <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
                  {notifications.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#8E9DA1', fontWeight: '600', fontSize: '0.9rem' }}>
                      No notifications yet
                    </div>
                  ) : (
                    notifications.map((n) => {
                      const iconMap = { CHAT: MessageCircle, APPOINTMENT: Calendar, VENT: Smile };
                      const colorMap = { CHAT: '#00BCD4', APPOINTMENT: '#52979B', VENT: '#F59E0B' };
                      const Icon = iconMap[n.type] || Bell;
                      const iconColor = colorMap[n.type] || '#6B7280';
                      return (
                        <div
                          key={n.id}
                          onClick={() => { markAsRead(n.id); closeDropdown(); if (n.link) navigate(n.link); }}
                          style={{
                            display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                            padding: '0.85rem 1.25rem', cursor: 'pointer',
                            backgroundColor: n.isRead ? 'transparent' : '#EFF9FA',
                            borderBottom: '1px solid #F0F4F5',
                            transition: 'background 0.15s'
                          }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F4F7F8'}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = n.isRead ? 'transparent' : '#EFF9FA'}
                        >
                          <div style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: `${iconColor}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon size={16} color={iconColor} />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: n.isRead ? '600' : '800', fontSize: '0.85rem', color: '#1A1A2E', marginBottom: '0.15rem' }}>{n.title}</div>
                            <div style={{ fontSize: '0.78rem', color: '#6B7280', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.message}</div>
                            <div style={{ fontSize: '0.7rem', color: '#8E9DA1', marginTop: '0.2rem' }}>
                              {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                          {!n.isRead && (
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#52979B', flexShrink: 0, marginTop: '4px' }} />
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontWeight: '800', color: '#1A1A2E', fontSize: '1.1rem' }}>{user?.fullName || 'Counselor'}</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#8E9DA1', fontWeight: '600' }}>Counselor</p>
            </div>
            <Avatar size={48} initials={(user?.fullName || 'C').charAt(0)} />
          </div>
        </div>
      </header>

      {/* Body: sidebar + scrollable main */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <CounselorSidebar />
        <main style={{
          flex: 1,
          marginLeft: '280px',
          padding: '3rem 3.5rem',
          overflowY: 'auto',
          height: '100%'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CounselorPageWrapper;
