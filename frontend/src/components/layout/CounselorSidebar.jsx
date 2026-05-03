import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  User, 
  MessageCircle, 
  Headphones, 
  Calendar, 
  LogOut,
  ChevronDown,
  ChevronUp,
  UserCircle
} from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';
import { getAvailability, toggleAvailability } from '../../api/counselorApi';

const CounselorSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [availLoading, setAvailLoading] = useState(false);

  useEffect(() => {
    getAvailability().then((data) => setIsAvailable(data.isAvailable)).catch(() => {});
  }, []);

  const handleToggleAvailability = async () => {
    const newVal = !isAvailable;
    setAvailLoading(true);
    try {
      await toggleAvailability(newVal);
      setIsAvailable(newVal);
    } catch (err) {
      console.error('Failed to toggle availability:', err);
    } finally {
      setAvailLoading(false);
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, path: '/counselor/dashboard' },
    { 
      id: 'booking', 
      label: 'Booking', 
      icon: UserCircle, 
      subItems: [
        { id: 'chat', label: 'Chat', icon: MessageCircle, path: '/counselor/chat' },
        { id: 'listen-only', label: 'Listen-only', icon: Headphones, path: '/counselor/listen-only' }
      ]
    },
    { id: 'appointment', label: 'Appointment', icon: Calendar, path: '/counselor/appointments' },
    { id: 'profile', label: 'Profile', icon: User, path: '/counselor/profile' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;
  const isParentActive = (item) => item.subItems?.some(sub => isActive(sub.path));

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
      {/* Availability Toggle */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 1.25rem', marginBottom: '0.5rem',
        backgroundColor: isAvailable ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.08)',
        borderRadius: '16px', transition: 'all 0.3s ease',
      }}>
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
            {isAvailable ? 'Available' : 'Unavailable'}
          </div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: '500' }}>
            {isAvailable ? 'Receiving vents & chats' : 'Not receiving new requests'}
          </div>
        </div>
        <button
          onClick={handleToggleAvailability}
          disabled={availLoading}
          style={{
            width: '48px', height: '26px', borderRadius: '13px', border: 'none', cursor: availLoading ? 'default' : 'pointer',
            backgroundColor: isAvailable ? '#10B981' : 'rgba(255,255,255,0.25)',
            position: 'relative', transition: 'background-color 0.3s ease', flexShrink: 0,
          }}
        >
          <div style={{
            width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FFFFFF',
            position: 'absolute', top: '3px',
            left: isAvailable ? '25px' : '3px',
            transition: 'left 0.3s ease',
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          }} />
        </button>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {navItems.map((item) => (
          <div key={item.id}>
            {item.subItems ? (
              <>
                <button
                  onClick={() => setIsBookingOpen(!isBookingOpen)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    borderRadius: '16px',
                    border: 'none',
                    backgroundColor: isParentActive(item) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <item.icon size={22} />
                    <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{item.label}</span>
                  </div>
                  {isBookingOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {isBookingOpen && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.4rem', paddingLeft: '1rem' }}>
                    {item.subItems.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => navigate(sub.path)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '0.8rem 1.25rem',
                          borderRadius: '12px',
                          border: 'none',
                          backgroundColor: isActive(sub.path) ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
                          color: '#FFFFFF',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          fontSize: '1rem'
                        }}
                      >
                        <sub.icon size={20} />
                        <span>{sub.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <button
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
                  transition: 'all 0.2s'
                }}
              >
                <item.icon size={22} />
                <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{item.label}</span>
              </button>
            )}
          </div>
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

export default CounselorSidebar;
