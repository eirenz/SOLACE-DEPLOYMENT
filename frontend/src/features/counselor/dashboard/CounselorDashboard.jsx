import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  MessageCircle, 
  Headphones, 
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Loader2
} from 'lucide-react';
import Button from '../../../components/common/Button';
import { fetchCounselorAppointments } from '../../../api/counselorApi';
import { fetchListenOnlyMessages } from '../../../api/counselorApi';
import { fetchCounselorSessions } from '../../../api/chatApi';
import useAuthStore from '../../../store/useAuthStore';

const StatCard = ({ title, count, icon: Icon, color, loading }) => (
  <div className="card" style={{ 
    padding: '1.5rem 2rem', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '1.5rem',
    borderRadius: '24px',
    border: '1.5px solid #E0E4E6',
    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
    backgroundColor: '#FFFFFF'
  }}>
    <div style={{ 
      width: '64px', 
      height: '64px', 
      minWidth: '64px',
      minHeight: '64px',
      flexShrink: 0,
      borderRadius: '20px', 
      backgroundColor: color, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: '#FFFFFF',
      boxShadow: `0 8px 20px ${color}33`
    }}>
      <Icon size={32} />
    </div>
    <div>
      <p style={{ margin: 0, fontSize: '2.2rem', fontWeight: '800', color: '#1A1A2E', lineHeight: 1 }}>
        {loading ? <Loader2 size={28} className="spin" style={{ animation: 'spin 1s linear infinite' }} /> : count}
      </p>
      <p style={{ margin: '0.4rem 0 0 0', color: '#8E9DA1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</p>
    </div>
  </div>
);

const SectionTable = ({ title, columns, data, onViewAll, loading, emptyMessage, isMobile }) => (
  <div className="card" style={{ padding: '0', borderRadius: '24px', overflow: 'hidden', border: '1.5px solid #E0E4E6', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', backgroundColor: '#FFFFFF' }}>
    <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1.5px solid #F0F4F5' }}>
      <h3 style={{ margin: 0, color: '#1A1A2E', fontSize: '1.1rem', fontWeight: '800' }}>{title}</h3>
      <button onClick={onViewAll} style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
    </div>
    {loading ? (
      <div style={{ textAlign: 'center', padding: '3rem', color: '#8E9DA1', fontWeight: '600' }}>Loading...</div>
    ) : data.length === 0 ? (
      <div style={{ textAlign: 'center', padding: '3rem', color: '#8E9DA1', fontWeight: '600' }}>{emptyMessage}</div>
    ) : isMobile ? (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {data.map((row, i) => (
          <div key={row.id || i} style={{ padding: '1.25rem 1.5rem', borderBottom: i === data.length - 1 ? 'none' : '1.5px solid #F0F4F5', display: 'flex', flexDirection: 'column', gap: '0.75rem', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FCFDFF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: '800', color: '#1A1A2E', fontSize: '1.05rem' }}>{row.name}</span>
              <span style={{ color: '#8E9DA1', fontSize: '0.8rem', fontWeight: '700' }}>{row.time}</span>
            </div>
            <p style={{ margin: 0, color: '#555555', fontSize: '0.95rem', fontWeight: '500', lineHeight: 1.4 }}>{row.detail}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
              <span style={{ 
                padding: '0.4rem 0.8rem', 
                borderRadius: '100px', 
                fontSize: '0.75rem', 
                fontWeight: '800',
                backgroundColor: row.statusColor?.bg || '#E0F7FA',
                color: row.statusColor?.text || '#00BCD4',
              }}>
                {row.status}
              </span>
              <Button size="small" variant={row.actionVariant || 'primary'} onClick={row.onAction} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderRadius: '12px', fontWeight: '700' }}>{row.actionLabel}</Button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#FCFDFF' }}>
              {columns.map(h => (
                <th key={h} style={{ padding: '1.25rem 2.5rem', fontSize: '0.85rem', color: '#8E9DA1', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={row.id || i} style={{ borderBottom: i === data.length - 1 ? 'none' : '1px solid #F0F4F5' }}>
                <td style={{ padding: '1.25rem 1.5rem', fontWeight: '800', color: '#1A1A2E' }}>{row.name}</td>
                <td style={{ padding: '1.25rem 1.5rem', color: '#555555', fontWeight: '500' }}>{row.detail}</td>
                <td style={{ padding: '1.25rem 1.5rem', color: '#555555', fontWeight: '500' }}>{row.time}</td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: '100px', 
                    fontSize: '0.75rem', 
                    fontWeight: '800',
                    backgroundColor: row.statusColor?.bg || '#E0F7FA',
                    color: row.statusColor?.text || '#00BCD4',
                    display: 'inline-block'
                  }}>
                    {row.status}
                  </span>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <Button size="small" variant={row.actionVariant || 'primary'} onClick={row.onAction} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderRadius: '12px', fontWeight: '700', whiteSpace: 'nowrap' }}>{row.actionLabel}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

const CounselorDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [appointmentStats, setAppointmentStats] = useState({ total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0 });
  const [chatSessions, setChatSessions] = useState([]);
  const [ventMessages, setVentMessages] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  // Calendar state
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [apptData, sessions, vents] = await Promise.all([
        fetchCounselorAppointments(),
        fetchCounselorSessions(),
        fetchListenOnlyMessages(),
      ]);

      setAppointmentStats(apptData.stats);
      setChatSessions(sessions || []);
      setVentMessages(vents || []);

      // Filter upcoming appointments (PENDING or CONFIRMED, date >= today)
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const upcoming = (apptData.appointments || [])
        .filter(a => (a.status === 'PENDING' || a.status === 'CONFIRMED') && new Date(a.date) >= now)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 4);
      setUpcomingAppointments(upcoming);
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { title: 'Appointments', count: appointmentStats.total, icon: Calendar, color: '#52979b' },
    { title: 'Advice Chat', count: chatSessions.length, icon: MessageCircle, color: '#4DD0E1' },
    { title: 'Listen-Only', count: ventMessages.length, icon: Headphones, color: '#F06292' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'UNREAD': return { bg: '#E0F7FA', text: '#00BCD4' };
      case 'READ': return { bg: '#FFF3E0', text: '#FF9800' };
      case 'REACTED': return { bg: '#E8F5E9', text: '#4CAF50' };
      default: return { bg: '#F5F5F5', text: '#888' };
    }
  };

  const timeAgo = (dateStr) => {
    if (!dateStr) return '';
    const diff = Math.floor((Date.now() - new Date(dateStr)) / 60000);
    if (diff < 1) return 'just now';
    if (diff < 60) return `${diff}m ago`;
    const hours = Math.floor(diff / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  // Map chat sessions to table rows
  const chatTableData = chatSessions.slice(0, 4).map(s => ({
    id: s.id,
    name: s.student?.alias || s.student?.fullName || 'Student',
    detail: s.messages?.[0]?.content?.substring(0, 40) || 'No messages yet',
    time: s.messages?.[0] ? timeAgo(s.messages[0].createdAt) : '',
    status: s.messages?.length > 0 ? 'Active' : 'New',
    statusColor: s.messages?.length > 0 ? { bg: '#F1F8E9', text: '#8BC34A' } : { bg: '#E0F7FA', text: '#00BCD4' },
    actionLabel: 'Open Chat',
    onAction: () => navigate('/counselor/chat'),
  }));

  // Map vent messages to table rows
  const ventTableData = ventMessages.slice(0, 4).map(v => ({
    id: v.id,
    name: v.student?.alias || v.student?.fullName || 'Anonymous',
    detail: v.content?.substring(0, 40) || '',
    time: timeAgo(v.createdAt),
    status: v.status,
    statusColor: getStatusColor(v.status),
    actionLabel: 'Open',
    actionVariant: 'secondary',
    onAction: () => navigate('/counselor/listen-only'),
  }));

  // Calendar helpers
  const calendarYear = calendarDate.getFullYear();
  const calendarMonth = calendarDate.getMonth();
  const today = new Date();
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const firstDayOfWeek = (new Date(calendarYear, calendarMonth, 1).getDay() + 6) % 7; // Mon=0
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const prevMonth = () => setCalendarDate(new Date(calendarYear, calendarMonth - 1, 1));
  const nextMonth = () => setCalendarDate(new Date(calendarYear, calendarMonth + 1, 1));

  const isToday = (day) => today.getFullYear() === calendarYear && today.getMonth() === calendarMonth && today.getDate() === day;

  return (
    <div style={{ width: '100%', height: '100%', overflowY: 'auto', paddingRight: isMobile ? '0' : '1rem', paddingBottom: isMobile ? '6rem' : '0' }}>
      <header style={{ marginBottom: isMobile ? '1rem' : '3rem', display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.25rem' }}>
        <LayoutGrid size={isMobile ? 24 : 38} color="var(--primary)" />
        <div>
          <h1 className="heading-decorative" style={{ color: '#1A1A2E', fontSize: isMobile ? '1.3rem' : '2.4rem', fontWeight: '800', margin: '0' }}>Dashboard</h1>
          <p style={{ color: '#8E9DA1', fontSize: isMobile ? '0.78rem' : '1.1rem', fontWeight: '600', margin: '0.1rem 0 0 0' }}>
            {user?.fullName ? `Welcome back, ${user.fullName.split(' ')[0]}` : 'Manage today\'s appointments'}
          </p>
        </div>
      </header>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1rem' : '2rem', marginBottom: isMobile ? '2rem' : '3.5rem' }}>
        {stats.map((s, i) => <StatCard key={i} {...s} loading={loading} />)}
      </div>

      {/* Main Layout: Tables + Calendar */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr', gap: isMobile ? '2rem' : '2rem', alignItems: 'start' }}>
        
        {/* Left Side: Tables */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <SectionTable
            title="Active Advice Chat"
            columns={['Student Name', 'Last Message', 'Time', 'Status', 'Action']}
            data={chatTableData}
            onViewAll={() => navigate('/counselor/chat')}
            loading={loading}
            emptyMessage="No active chat sessions"
            isMobile={isMobile}
          />
          <SectionTable
            title="Listen-Only"
            columns={['Student Name', 'Message', 'Received', 'Status', 'Action']}
            data={ventTableData}
            onViewAll={() => navigate('/counselor/listen-only')}
            loading={loading}
            emptyMessage="No vent messages"
            isMobile={isMobile}
          />
        </div>

        {/* Right Side: Calendar & Upcoming */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '2rem' : '2.5rem' }}>
          
          {/* Calendar Tile */}
          <div className="card" style={{ padding: isMobile ? '1.5rem' : '2.5rem', borderRadius: '32px', border: '1.5px solid #E0E4E6', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h4 style={{ margin: 0, fontWeight: '800', color: '#1A1A2E', fontSize: '1.1rem' }}>
                {monthNames[calendarMonth]} {calendarYear}
              </h4>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={prevMonth} style={{ background: '#F4F7F8', border: 'none', cursor: 'pointer', color: '#52979B', width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronLeft size={18} /></button>
                <button onClick={nextMonth} style={{ background: '#F4F7F8', border: 'none', cursor: 'pointer', color: '#52979B', width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={18} /></button>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
                <div key={d} style={{ fontSize: '0.8rem', fontWeight: '800', color: '#8E9DA1', marginBottom: '1rem' }}>{d}</div>
              ))}
              {/* Empty cells for days before the 1st */}
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {/* Actual days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const todayHighlight = isToday(day);
                return (
                  <div key={day} style={{ 
                    padding: '0.6rem 0', 
                    fontSize: '0.95rem', 
                    fontWeight: '800',
                    borderRadius: '14px',
                    backgroundColor: todayHighlight ? 'var(--primary)' : 'transparent',
                    color: todayHighlight ? '#FFFFFF' : '#1A1A2E',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}>
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="card" style={{ padding: isMobile ? '1.5rem' : '2.5rem', borderRadius: '32px', border: '1.5px solid #E0E4E6', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h4 style={{ margin: 0, fontWeight: '800', color: '#1A1A2E', fontSize: '1.1rem' }}>Upcoming Sessions</h4>
              <button onClick={() => navigate('/counselor/appointments')} style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {loading ? (
                <div style={{ textAlign: 'center', color: '#8E9DA1', fontWeight: '600', padding: '1rem' }}>Loading...</div>
              ) : upcomingAppointments.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#8E9DA1', fontWeight: '600', padding: '1rem' }}>No upcoming sessions</div>
              ) : (
                upcomingAppointments.map((appt) => (
                  <div key={appt.id} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', backgroundColor: '#FCFDFF', borderRadius: '20px', border: '1.5px solid #F0F4F5' }}>
                     <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#E0F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00BCD4' }}>
                       <Calendar size={22} />
                     </div>
                     <div>
                       <p style={{ margin: 0, fontWeight: '800', fontSize: '1.05rem', color: '#1A1A2E' }}>
                         {appt.alias || appt.student?.fullName || 'Student'}
                       </p>
                       <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: '#8E9DA1', fontWeight: '700' }}>
                         {appt.timeSlot} · {new Date(appt.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                       </p>
                     </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CounselorDashboard;
