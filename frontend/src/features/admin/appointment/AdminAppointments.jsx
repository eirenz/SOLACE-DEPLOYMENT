import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Search, Info, X, RefreshCw } from 'lucide-react';
import Avatar from '../../../components/common/Avatar';
import { fetchAllAppointments, fetchAppointmentStats } from '../../../api/adminApi';

const AppointmentInfoModal = ({ isOpen, appointment, onClose }) => {
  if (!isOpen || !appointment) return null;
  const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const isMobileModal = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, backdropFilter: 'blur(4px)', padding: isMobileModal ? '1rem' : '0' }}>
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: isMobileModal ? '20px' : '32px', width: isMobileModal ? '100%' : '90%', maxWidth: '580px', padding: isMobileModal ? '1.5rem' : '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', position: 'relative', maxHeight: isMobileModal ? '90vh' : 'auto', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: isMobileModal ? '1rem' : '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800', fontSize: isMobileModal ? '1.2rem' : '1.4rem', color: '#1A1A2E' }}>
            <div style={{ backgroundColor: '#000', borderRadius: '50%', color: '#FFF', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Info size={14} />
            </div>
            <span>Information</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF5350' }}>
            <X size={28} strokeWidth={3} />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: isMobileModal ? '1rem' : '1.5rem', marginBottom: isMobileModal ? '1rem' : '2rem' }}>
          <Avatar size={isMobileModal ? 64 : 100} initials={(appointment.alias || appointment.student?.fullName || 'S').charAt(0).toUpperCase()} />
          <div>
            <h2 style={{ margin: 0, fontSize: isMobileModal ? '1.6rem' : '2.4rem', fontWeight: '800', color: '#1A1A2E', wordBreak: 'break-word' }}>
              {appointment.alias || appointment.student?.fullName}
            </h2>
            <div style={{ backgroundColor: '#C5CAE9', color: '#1A1A2E', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: isMobileModal ? '0.8rem' : '1rem', fontWeight: '800', marginTop: '0.5rem', display: 'inline-block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {appointment.counselor?.fullName || 'Counselor'}
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '2px solid #1A1A2E', opacity: 0.1, marginBottom: isMobileModal ? '1.5rem' : '2rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: isMobileModal ? '1fr' : '1fr 1fr', gap: isMobileModal ? '1.5rem' : '2rem', marginBottom: isMobileModal ? '2rem' : '3rem' }}>
          <div style={{ backgroundColor: '#FFF', borderRadius: '24px', border: '1.5px solid #8E9DA1', padding: '1.5rem', minHeight: isMobileModal ? '120px' : '180px' }}>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '800', color: '#1A1A2E' }}>Notes:</h4>
            <p style={{ margin: '0 0 0 1rem', fontSize: '1.05rem', color: '#1A1A2E', fontWeight: '600', lineHeight: '1.5' }}>
              {appointment.notes || 'No notes provided.'}
            </p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 1.25rem 0', fontSize: '1.5rem', fontWeight: '800', color: '#1A1A2E' }}>Scheduled</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1A1A2E', fontWeight: '700' }}>
                <Calendar size={20} />
                <span style={{ fontSize: '1.1rem' }}>{formatDate(appointment.date)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1A1A2E', fontWeight: '700' }}>
                <Clock size={20} />
                <span style={{ fontSize: '1.1rem' }}>{appointment.timeSlot}</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ backgroundColor: '#9E9E9E', color: '#FFF', border: 'none', padding: '0.75rem 3rem', borderRadius: '8px', fontWeight: '800', cursor: 'pointer', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            BACK
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminAppointments = () => {
  const [activeTab, setActiveTab] = useState('Today');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [stats, setStats] = useState({ today: 0, upcoming: 0, completed: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const statusMap = {
        Today: undefined, // will be filtered client-side
        Upcoming: 'PENDING',
        Completed: 'COMPLETED',
        All: undefined,
      };
      const [data, statsData] = await Promise.all([
        fetchAllAppointments({ limit: 100 }),
        fetchAppointmentStats(),
      ]);
      setAppointments(data.appointments);
      setStats(statsData);
    } catch (err) {
      console.error('Failed to load admin appointments:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const now = new Date();
  const startOfToday = new Date(now); startOfToday.setHours(0, 0, 0, 0);
  const endOfToday = new Date(now); endOfToday.setHours(23, 59, 59, 999);

  const filteredAppointments = appointments.filter(apt => {
    const aptDate = new Date(apt.date);
    const matchesSearch = (apt.alias || apt.student?.fullName || '').toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    switch (activeTab) {
      case 'Today':
        return aptDate >= startOfToday && aptDate <= endOfToday;
      case 'Upcoming':
        return aptDate > endOfToday && (apt.status === 'PENDING' || apt.status === 'CONFIRMED');
      case 'Completed':
        return apt.status === 'COMPLETED';
      case 'All':
      default:
        return true;
    }
  });

  const statCards = [
    { label: 'Today', value: String(stats.today) },
    { label: 'Upcoming', value: String(stats.upcoming) },
    { label: 'Completed', value: String(stats.completed) },
    { label: 'All Appointments', value: String(stats.total) },
  ];

  const tabs = ['Today', 'Upcoming', 'Completed', 'All'];

  const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', paddingBottom: isMobile ? '5rem' : '0' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1rem', marginBottom: isMobile ? '1rem' : '2rem', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem' }}>
          <Calendar size={isMobile ? 22 : 32} color="#1A1A2E" />
          <h1 style={{ fontSize: isMobile ? '1.4rem' : '2.2rem', fontWeight: '800', color: '#1A1A2E', margin: 0 }}>Appointments</h1>
        </div>
        <button onClick={loadData} style={{ background: 'none', border: '1.5px solid #E0E4E6', cursor: 'pointer', color: '#8E9DA1', padding: isMobile ? '0.4rem 0.75rem' : '0.5rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: '700' }}>
          <RefreshCw size={isMobile ? 14 : 16} /> Refresh
        </button>
      </header>

      <hr style={{ border: 'none', borderTop: '1.5px solid #F0F4F5', marginBottom: '2.5rem' }} />

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '0.75rem' : '1.5rem', marginBottom: isMobile ? '1.5rem' : '3rem' }}>
        {statCards.map((stat, index) => (
          <div key={index} style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '1rem' : '2rem 1.5rem', borderRadius: isMobile ? '16px' : '24px', border: '1.5px solid #E0E4E6', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <p style={{ margin: '0 0 0.5rem 0', color: '#1A1A2E', fontWeight: '800', fontSize: isMobile ? '0.8rem' : '1rem' }}>{stat.label}</p>
            <h3 style={{ margin: 0, fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: '800', color: '#1A1A2E' }}>{loading ? '—' : stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Filter + Search */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? '1rem' : '0', marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
        <div style={{ display: 'flex', gap: isMobile ? '1rem' : '2rem' }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{ background: 'none', border: 'none', fontSize: isMobile ? '0.85rem' : '1rem', fontWeight: activeTab === tab ? '800' : '600', color: activeTab === tab ? '#1A1A2E' : '#8E9DA1', cursor: 'pointer', padding: '0.5rem 0', position: 'relative' }}>
              {tab}
              {activeTab === tab && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', backgroundColor: '#1A1A2E', borderRadius: '10px' }} />}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #E0E4E6', borderRadius: '100px', backgroundColor: '#FFF', padding: '0 1.25rem', width: isMobile ? '100%' : '320px', boxSizing: 'border-box' }}>
          <input type="text" placeholder="Search Appointments" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '0.6rem 0', border: 'none', flex: 1, fontSize: '0.9rem', outline: 'none' }} />
          <Search size={18} color="#8E9DA1" />
        </div>
      </div>

      {/* Appointment Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#8E9DA1', fontWeight: '600' }}>Loading appointments...</div>
      ) : filteredAppointments.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#8E9DA1', fontWeight: '600' }}>No appointments found</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1rem' : '2rem' }}>
          {filteredAppointments.map(apt => (
            <div key={apt.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', border: '1.5px solid #E0E4E6', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Avatar size={50} initials={(apt.alias || apt.student?.fullName || 'S').charAt(0)} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#1A1A2E' }}>
                      {apt.alias || apt.student?.fullName}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#1A1A2E', fontWeight: '600' }}>
                      {apt.notes || 'No specific concern noted'}
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ margin: '0 0 0.75rem 0', fontSize: '1rem', fontWeight: '800', color: '#1A1A2E' }}>Scheduled</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1A1A2E', fontWeight: '600' }}>
                      <Calendar size={16} />
                      <span style={{ fontSize: '0.95rem' }}>{formatDate(apt.date)}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1A1A2E', fontWeight: '600' }}>
                      <Clock size={16} />
                      <span style={{ fontSize: '0.95rem' }}>{apt.timeSlot}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => { setSelectedAppointment(apt); setIsModalOpen(true); }}
                style={{ width: '100%', backgroundColor: '#FFF', border: 'none', borderTop: '1.5px solid #F0F4F5', padding: '1rem', fontSize: '1rem', fontWeight: '700', color: '#8E9DA1', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => e.target.style.backgroundColor = '#F9FAFB'}
                onMouseLeave={e => e.target.style.backgroundColor = '#FFF'}>
                View
              </button>
            </div>
          ))}
        </div>
      )}

      <AppointmentInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} appointment={selectedAppointment} />
    </div>
  );
};

export default AdminAppointments;
