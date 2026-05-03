import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import Avatar from '../common/Avatar';
import { Bell, MessageCircle, Calendar, Smile, X } from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';

const AdminPageWrapper = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const notifRef = useRef(null);
  const [supportMessage, setSupportMessage] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);
  const [appointmentMessage, setAppointmentMessage] = useState(null);
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

  const iconMap = { CHAT: MessageCircle, APPOINTMENT: Calendar, VENT: Smile };
  const colorMap = { CHAT: '#00BCD4', APPOINTMENT: '#52979B', VENT: '#F59E0B' };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F4F7F8', fontFamily: 'var(--font-body)' }}>
      {/* Top Header */}
      <header style={{
        height: '80px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
        borderBottom: '1.5px solid #E0E4E6',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
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
                width: '420px', backgroundColor: '#FFFFFF', borderRadius: '20px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.12)', border: '1px solid #E0E4E6',
                zIndex: 1200, overflow: 'hidden'
              }}>
                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F0F4F5' }}>
                  <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', color: '#1A1A2E' }}>Notifications</h4>
                  {unreadCount > 0 && (
                    <button onClick={() => markAllAsRead()} style={{ background: 'none', border: 'none', color: '#52979B', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>Mark all as read</button>
                  )}
                </div>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  {notifications.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#8E9DA1', fontWeight: '600', fontSize: '0.9rem' }}>
                      No notifications yet
                    </div>
                  ) : (
                    notifications.map(n => {
                      const Icon = iconMap[n.type] || Bell;
                      const iconColor = colorMap[n.type] || '#6B7280';
                      return (
                        <div
                          key={n.id}
                          onClick={() => {
                          markAsRead(n.id);
                          closeDropdown();
                          if (n.type === 'CHAT' && n.link && n.link === '/user/appointments') {
                            setSupportMessage(n);
                          } else if (n.type === 'WARNING') {
                            setWarningMessage(n);
                          } else if (n.type === 'APPOINTMENT') {
                            setAppointmentMessage(n);
                          } else if (n.link) {
                            navigate(n.link);
                          }
                        }}
                          style={{
                            display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                            padding: '1rem 1.5rem', cursor: 'pointer',
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
                            <div style={{ fontWeight: n.isRead ? '600' : '800', fontSize: '0.95rem', color: '#1A1A2E', marginBottom: '0.15rem' }}>{n.title}</div>
                            <div style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.message}</div>
                            <div style={{ fontSize: '0.75rem', color: '#8E9DA1', marginTop: '0.2rem' }}>
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
              <p style={{ margin: 0, fontWeight: '800', color: '#1A1A2E', fontSize: '1.1rem' }}>Welcome back, Admin.</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#8E9DA1', fontWeight: '600' }}>Administrator</p>
            </div>
            <Avatar size={48} initials="A" />
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1, marginTop: '80px' }}>
        <div style={{ width: '280px', flexShrink: 0 }}>
          <AdminSidebar />
        </div>
        <main style={{ 
          flex: 1, 
          padding: '3rem 3.5rem',
          overflowY: 'auto',
          backgroundColor: '#F4F7F8'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>

    {/* Support Message Modal */}
    {supportMessage && (
      <div onClick={() => setSupportMessage(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
        <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '32px', width: '100%', maxWidth: '440px', padding: '3rem 2.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', textAlign: 'center', position: 'relative' }}>
          <button onClick={() => setSupportMessage(null)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><X size={20} /></button>
          <div style={{ backgroundColor: '#81D4FA', width: '64px', height: '64px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <MessageCircle size={32} color="#FFF" />
          </div>
          <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.4rem', fontWeight: '800', color: '#111827' }}>{supportMessage.title}</h2>
          <p style={{ margin: '0 0 2rem 0', fontSize: '0.95rem', color: '#374151', fontWeight: '500', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{supportMessage.message}</p>
          <button onClick={() => setSupportMessage(null)} style={{ backgroundColor: '#52979B', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.9rem 2rem', fontWeight: '800', fontSize: '1rem', cursor: 'pointer' }}>Dismiss</button>
        </div>
      </div>
    )}

    {/* Warning Message Modal */}
    {warningMessage && (
      <div onClick={() => setWarningMessage(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
        <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '32px', width: '100%', maxWidth: '440px', padding: '3rem 2.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', textAlign: 'center', position: 'relative' }}>
          <button onClick={() => setWarningMessage(null)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><X size={20} /></button>
          <div style={{ backgroundColor: '#FFEBEE', width: '64px', height: '64px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <Bell size={32} color="#EF5350" />
          </div>
          <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.4rem', fontWeight: '800', color: '#111827' }}>{warningMessage.title}</h2>
          <p style={{ margin: '0 0 2rem 0', fontSize: '0.95rem', color: '#374151', fontWeight: '500', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{warningMessage.message}</p>
          <button onClick={() => setWarningMessage(null)} style={{ backgroundColor: '#EF5350', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.9rem 2rem', fontWeight: '800', fontSize: '1rem', cursor: 'pointer' }}>I Understand</button>
        </div>
      </div>
    )}

    {/* Appointment Message Modal */}
    {appointmentMessage && (
      <div onClick={() => setAppointmentMessage(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
        <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '32px', width: '100%', maxWidth: '440px', padding: '3rem 2.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.2)', textAlign: 'center', position: 'relative' }}>
          <button onClick={() => setAppointmentMessage(null)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><X size={20} /></button>
          <div style={{ backgroundColor: '#E0F2F1', width: '64px', height: '64px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <Calendar size={32} color="#064E3B" />
          </div>
          <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.4rem', fontWeight: '800', color: '#111827' }}>{appointmentMessage.title}</h2>
          <p style={{ margin: '0 0 2rem 0', fontSize: '0.95rem', color: '#374151', fontWeight: '500', lineHeight: 1.7, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{appointmentMessage.message}</p>
          <button onClick={() => { setAppointmentMessage(null); navigate(appointmentMessage.link || '/admin/appointments'); }} style={{ backgroundColor: '#064E3B', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.9rem 2rem', fontWeight: '800', fontSize: '1rem', cursor: 'pointer' }}>Go to Appointments</button>
        </div>
      </div>
    </>
  );
};

export default AdminPageWrapper;
