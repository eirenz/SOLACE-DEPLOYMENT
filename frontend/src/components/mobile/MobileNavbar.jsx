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
  const [supportMessage, setSupportMessage] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);
  const [appointmentMessage, setAppointmentMessage] = useState(null);

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
    
    // Support messages from admin: show full message modal
    if (n.type === 'CHAT' && n.link && n.link === '/user/appointments') {
      setSupportMessage(n);
    } else if (n.type === 'WARNING') {
      setWarningMessage(n);
    } else if (n.type === 'APPOINTMENT') {
      setAppointmentMessage(n);
    } else if (n.link) {
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

      {/* Support Message Modal */}
      {supportMessage && (
        <div onClick={() => setSupportMessage(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', padding: '1rem' }}>
          <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', width: '100%', maxWidth: '440px', padding: '2rem 1.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', textAlign: 'center', position: 'relative' }}>
            <button onClick={() => setSupportMessage(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><X size={20} /></button>
            <div style={{ backgroundColor: '#81D4FA', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <MessageCircle size={28} color="#FFF" />
            </div>
            <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.2rem', fontWeight: '800', color: '#111827' }}>{supportMessage.title}</h2>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', color: '#374151', fontWeight: '500', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{supportMessage.message}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <button onClick={() => { setSupportMessage(null); navigate('/user/appointments'); }} style={{ backgroundColor: '#FF8A65', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.85rem', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer' }}>💬 Talk to a counselor</button>
              <button onClick={() => { setSupportMessage(null); navigate('/user/appointments'); }} style={{ backgroundColor: '#FCE4EC', color: '#F06292', border: 'none', borderRadius: '12px', padding: '0.85rem', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer' }}>💡 Listen-only</button>
              <button onClick={() => setSupportMessage(null)} style={{ border: '2px solid #E5E7EB', backgroundColor: 'transparent', borderRadius: '12px', padding: '0.85rem', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer', color: '#374151' }}>I'm not in the mood</button>
            </div>
          </div>
        </div>
      )}

      {/* Warning Message Modal */}
      {warningMessage && (
        <div onClick={() => setWarningMessage(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', padding: '1rem' }}>
          <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', width: '100%', maxWidth: '440px', padding: '2rem 1.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', textAlign: 'center', position: 'relative' }}>
            <button onClick={() => setWarningMessage(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><X size={20} /></button>
            <div style={{ backgroundColor: '#FFEBEE', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <Bell size={28} color="#EF5350" />
            </div>
            <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.2rem', fontWeight: '800', color: '#111827' }}>{warningMessage.title}</h2>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', color: '#374151', fontWeight: '500', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{warningMessage.message}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <button onClick={() => setWarningMessage(null)} style={{ backgroundColor: '#EF5350', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.85rem', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer' }}>I Understand</button>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Message Modal */}
      {appointmentMessage && (
        <div onClick={() => setAppointmentMessage(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', padding: '1rem' }}>
          <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', width: '100%', maxWidth: '440px', padding: '2rem 1.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', textAlign: 'center', position: 'relative' }}>
            <button onClick={() => setAppointmentMessage(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><X size={20} /></button>
            <div style={{ backgroundColor: '#E0F2F1', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <Calendar size={28} color="#064E3B" />
            </div>
            <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.2rem', fontWeight: '800', color: '#111827' }}>{appointmentMessage.title}</h2>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', color: '#374151', fontWeight: '500', lineHeight: 1.7, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{appointmentMessage.message}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {appointmentMessage.link && appointmentMessage.link.includes('action=startChat') ? (
                <button onClick={() => { setAppointmentMessage(null); navigate(appointmentMessage.link); }} style={{ backgroundColor: '#064E3B', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.85rem', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>Start Chat Now <MessageCircle size={18} /></button>
              ) : (
                <button onClick={() => { setAppointmentMessage(null); navigate(appointmentMessage.link || '/user/appointments'); }} style={{ backgroundColor: '#064E3B', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.85rem', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer' }}>Go to Appointments</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
