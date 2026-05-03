import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Search,
  ChevronLeft,
  ChevronRight,
  Trash2,
  RefreshCw
} from 'lucide-react';
import Button from '../../../components/common/Button';
import Modal from '../../../components/common/Modal';
import { fetchCounselorAppointments, updateAppointmentStatus } from '../../../api/counselorApi';
import { connectSocket, joinCounselorRoom, onAppointmentUpdated } from '../../../api/chatSocket';
import useAuthStore from '../../../store/useAuthStore';

const StatCard = ({ title, count, icon: Icon, color, isMobile }) => (
    <div style={{ 
      backgroundColor: '#FFFFFF', padding: isMobile ? '1.25rem' : '1.5rem',
      borderRadius: '24px', display: 'flex', alignItems: 'center', gap: isMobile ? '1rem' : '1.25rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1.5px solid #E0E4E6',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'default'
    }}>
      <div style={{ 
        width: isMobile ? '48px' : '56px', height: isMobile ? '48px' : '56px', 
        minWidth: isMobile ? '48px' : '56px', minHeight: isMobile ? '48px' : '56px',
        flexShrink: 0,
        borderRadius: '18px', backgroundColor: color + '15', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        color, transition: 'all 0.3s ease' 
      }}>
        <Icon size={isMobile ? 24 : 32} />
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: '800', color: '#1A1A2E', lineHeight: 1 }}>{count}</span>
        </div>
        <p style={{ 
          margin: 0, color: '#8E9DA1', fontWeight: '800', 
          fontSize: isMobile ? '0.65rem' : '0.72rem', 
          textTransform: 'uppercase', letterSpacing: '0.05em',
          whiteSpace: 'nowrap'
        }}>
          {title}
        </p>
      </div>
    </div>
);

const ITEMS_PER_PAGE = 8;

const CounselorAppointments = () => {
  const { user, token } = useAuthStore();
  const [appointments, setAppointments] = useState([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState('');

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const data = await fetchCounselorAppointments();
      setAppointments(data.appointments);
      setStats(data.stats);
    } catch (err) {
      console.error('Failed to load appointments:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  // Socket.io: join counselor room for real-time appointment notifications
  useEffect(() => {
    if (!user?.id) return;
    connectSocket(token);
    joinCounselorRoom(user.id);
    onAppointmentUpdated(() => loadAppointments());
  }, [user?.id]);

  const handleConfirmClick = (app) => { setSelectedAppointment(app); setActionMessage(''); setIsConfirmModalOpen(true); };
  const handleDeleteClick = (app) => { setSelectedAppointment(app); setActionMessage(''); setIsDeleteModalOpen(true); };

  const handleConfirm = async () => {
    if (!selectedAppointment) return;
    setActionLoading(true);
    try {
      await updateAppointmentStatus(selectedAppointment.id, 'CONFIRMED', actionMessage);
      setIsConfirmModalOpen(false);
      loadAppointments();
    } catch (err) {
      console.error('Failed to confirm appointment:', err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedAppointment) return;
    setActionLoading(true);
    try {
      await updateAppointmentStatus(selectedAppointment.id, 'CANCELLED', actionMessage);
      setIsDeleteModalOpen(false);
      loadAppointments();
    } catch (err) {
      console.error('Failed to cancel appointment:', err);
    } finally {
      setActionLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'CONFIRMED': return { bg: '#E0F7FA', text: '#00BCD4' };
      case 'PENDING': return { bg: '#FFF3E0', text: '#FF9800' };
      case 'COMPLETED': return { bg: '#E8F5E9', text: '#4CAF50' };
      case 'CANCELLED': return { bg: '#FFEBEE', text: '#F44336' };
      default: return { bg: '#F5F5F5', text: '#888' };
    }
  };

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

  const filteredAppointments = appointments.filter(app =>
    (app.student?.fullName || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAppointments.length / ITEMS_PER_PAGE);
  const paginatedAppointments = filteredAppointments.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const statCards = [
    { title: 'Appointments', count: stats.total, icon: Calendar, color: '#52979B' },
    { title: 'Pending', count: stats.pending, icon: Clock, color: '#FF9800' },
    { title: 'Confirmed', count: stats.confirmed, icon: CheckCircle2, color: '#00BCD4' },
    { title: 'Completed', count: stats.completed, icon: CheckCircle2, color: '#4CAF50' },
    { title: 'Cancelled', count: stats.cancelled, icon: XCircle, color: '#F44336' },
  ];

  return (
    <div style={{ margin: '0 auto', height: '100%', overflowY: 'auto', paddingRight: isMobile ? '0' : '1rem', paddingBottom: isMobile ? '6rem' : '0' }}>
      <header style={{ marginBottom: isMobile ? '1rem' : '3rem', display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.25rem' }}>
        <Calendar size={isMobile ? 24 : 38} color="var(--primary)" />
        <div>
          <h1 className="heading-decorative" style={{ color: '#1A1A2E', fontSize: isMobile ? '1.3rem' : '2.4rem', fontWeight: '800', margin: '0' }}>Appointments</h1>
          <p style={{ color: '#8E9DA1', fontSize: isMobile ? '0.78rem' : '1.1rem', fontWeight: '600', margin: '0.1rem 0 0 0' }}>Manage and track all student appointments</p>
        </div>
      </header>

      {/* Stats */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: isMobile ? '0.75rem' : '1.5rem', 
        marginBottom: isMobile ? '2rem' : '3.5rem' 
      }}>
        {statCards.map((s, i) => (
          <div key={i} style={{ 
            flex: isMobile ? '1 1 calc(50% - 0.5rem)' : '1 1 240px',
            minWidth: isMobile ? '140px' : '240px'
          }}>
            <StatCard {...s} isMobile={isMobile} />
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card" style={{ padding: '0', borderRadius: '24px', overflow: 'hidden', border: '1.5px solid #E0E4E6', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', backgroundColor: '#FFFFFF' }}>
        <div style={{ padding: isMobile ? '1.5rem' : '2rem 2.5rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? '1rem' : '0', borderBottom: '1.5px solid #F0F4F5' }}>
          <h3 style={{ margin: 0, color: '#1A1A2E', fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: '800' }}>All Appointments</h3>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#8E9DA1' }} />
            <input
              type="text" placeholder="Search student..."
              value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              style={{ padding: '0.85rem 1rem 0.85rem 3.25rem', borderRadius: '16px', border: '1.5px solid #E0E4E6', fontSize: '0.95rem', width: isMobile ? '100%' : '300px', backgroundColor: '#F9FAFB', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#8E9DA1', fontWeight: '600' }}>Loading appointments...</div>
        ) : paginatedAppointments.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#8E9DA1', fontWeight: '600' }}>No appointments found</div>
        ) : isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {paginatedAppointments.map((app, i) => {
              const colors = getStatusColor(app.status);
              return (
                <div key={app.id} style={{ padding: '1.25rem 1.5rem', borderBottom: i === paginatedAppointments.length - 1 ? 'none' : '1.5px solid #F0F4F5', display: 'flex', flexDirection: 'column', gap: '0.75rem', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FCFDFF' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: '800', color: '#1A1A2E', fontSize: '1.05rem' }}>{app.alias || app.student?.fullName}</span>
                    <span style={{ color: '#8E9DA1', fontSize: '0.8rem', fontWeight: '700' }}>{formatDate(app.date)}</span>
                  </div>
                  <p style={{ margin: 0, color: '#555555', fontSize: '0.95rem', fontWeight: '500' }}>
                    {app.timeSlot} · {app.mode === 'LISTEN_ONLY' ? 'Listen Only' : 'Advice/Recovery'}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
                    <span style={{ padding: '0.4rem 0.8rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '800', backgroundColor: colors.bg, color: colors.text }}>
                      {app.status}
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {app.status === 'PENDING' ? (
                        <>
                          <Button size="small" variant="primary" onClick={() => handleConfirmClick(app)} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderRadius: '12px', fontWeight: '800', backgroundColor: '#00BCD4', border: 'none' }}>
                            Confirm
                          </Button>
                          <Button size="small" variant="danger" onClick={() => handleDeleteClick(app)} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderRadius: '12px', fontWeight: '800', backgroundColor: '#FF5252', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Trash2 size={14} /> Cancel
                          </Button>
                        </>
                      ) : (
                        <span style={{ fontSize: '0.85rem', color: '#B0BEC5', fontWeight: '800', fontStyle: 'italic' }}>No Actions</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#FCFDFF' }}>
                  {['Student Name', 'Date', 'Time Slot', 'Mode', 'Status', 'Action'].map(h => (
                    <th key={h} style={{ padding: '1.5rem 2.5rem', fontSize: '0.85rem', color: '#8E9DA1', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedAppointments.map((app, i) => {
                  const colors = getStatusColor(app.status);
                  return (
                    <tr key={app.id}
                      style={{ borderBottom: i === paginatedAppointments.length - 1 ? 'none' : '1.5px solid #F0F4F5', transition: 'background-color 0.2s ease', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F9FBFC' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F0F7F8'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = i % 2 === 0 ? '#FFFFFF' : '#F9FBFC'; }}
                    >
                      <td style={{ padding: '1.25rem 1.5rem', fontWeight: '800', color: '#1A1A2E' }}>
                        {app.alias || app.student?.fullName}
                      </td>
                      <td style={{ padding: '1.25rem 1.5rem', color: '#555555', fontWeight: '700', whiteSpace: 'nowrap' }}>{formatDate(app.date)}</td>
                      <td style={{ padding: '1.25rem 1.5rem', color: '#555555', fontWeight: '700', whiteSpace: 'nowrap' }}>{app.timeSlot}</td>
                      <td style={{ padding: '1.25rem 1.5rem', color: '#555555', fontWeight: '700', whiteSpace: 'nowrap' }}>
                        {app.mode === 'LISTEN_ONLY' ? 'Listen Only' : 'Advice/Recovery'}
                      </td>
                      <td style={{ padding: '1.25rem 1.5rem' }}>
                        <span style={{ padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '900', backgroundColor: colors.bg, color: colors.text, display: 'inline-block', whiteSpace: 'nowrap' }}>
                          {app.status}
                        </span>
                      </td>
                      <td style={{ padding: '1.25rem 1.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          {app.status === 'PENDING' ? (
                            <>
                              <Button size="small" variant="primary" onClick={() => handleConfirmClick(app)}
                                style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem', borderRadius: '12px', fontWeight: '800', backgroundColor: '#00BCD4', border: 'none' }}>
                                Confirm
                              </Button>
                              <Button size="small" variant="danger" onClick={() => handleDeleteClick(app)}
                                style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem', borderRadius: '12px', fontWeight: '800', backgroundColor: '#FF5252', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Trash2 size={16} /> Cancel
                              </Button>
                            </>
                          ) : (
                            <span style={{ fontSize: '0.9rem', color: '#B0BEC5', fontWeight: '800', fontStyle: 'italic' }}>No Actions</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ padding: '2rem 2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid #F0F4F5' }}>
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
              style={{ background: '#F4F7F8', border: 'none', cursor: currentPage === 1 ? 'default' : 'pointer', color: '#52979B', width: '36px', height: '36px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: currentPage === 1 ? 0.4 : 1 }}>
              <ChevronLeft size={20} />
            </button>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button key={p} onClick={() => setCurrentPage(p)}
                  style={{ width: '36px', height: '36px', borderRadius: '12px', border: 'none', backgroundColor: currentPage === p ? 'var(--primary)' : '#F4F7F8', color: currentPage === p ? '#FFFFFF' : '#555', fontWeight: '800', fontSize: '1rem', cursor: 'pointer', boxShadow: currentPage === p ? '0 4px 12px rgba(0,188,212,0.3)' : 'none' }}>
                  {p}
                </button>
              ))}
            </div>
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
              style={{ background: '#F4F7F8', border: 'none', cursor: currentPage === totalPages ? 'default' : 'pointer', color: '#52979B', width: '36px', height: '36px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: currentPage === totalPages ? 0.4 : 1 }}>
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Confirm Modal */}
      <Modal isOpen={isConfirmModalOpen} onClose={() => setIsConfirmModalOpen(false)} title="Confirm Appointment">
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <p style={{ color: '#555555', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: '500' }}>
            Are you sure you want to confirm the appointment for <span style={{ color: 'var(--primary-dark)', fontWeight: '800' }}>{selectedAppointment?.alias || selectedAppointment?.student?.fullName}</span>?
          </p>
          <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: '#555' }}>Message to Student (Optional)</label>
            <textarea 
              value={actionMessage}
              onChange={(e) => setActionMessage(e.target.value)}
              placeholder="e.g. Looking forward to our session! Please make sure you have a quiet environment."
              style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1.5px solid #E0E4E6', minHeight: '100px', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Button fullWidth variant="secondary" onClick={() => setIsConfirmModalOpen(false)}
              style={{ borderRadius: '16px', padding: '1.25rem', fontWeight: '800', fontSize: '1.1rem', color: '#555555', backgroundColor: '#F4F7F8', border: 'none' }}>
              Cancel
            </Button>
            <Button fullWidth variant="primary" onClick={handleConfirm} disabled={actionLoading}
              style={{ borderRadius: '16px', padding: '1.25rem', fontWeight: '800', fontSize: '1.1rem', backgroundColor: '#4CAF50', border: 'none', boxShadow: '0 8px 20px rgba(76,175,80,0.3)' }}>
              {actionLoading ? 'Confirming...' : 'Confirm'}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Cancel Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Cancel Appointment">
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '100px', backgroundColor: '#FFEBEE', color: '#FF5252', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
            <Trash2 size={40} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#1A1A2E', marginBottom: '1rem' }}>Cancel This Appointment?</h3>
          <p style={{ color: '#555555', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: '500' }}>
            Are you sure you want to cancel the appointment for <span style={{ color: '#FF5252', fontWeight: '800' }}>{selectedAppointment?.alias || selectedAppointment?.student?.fullName}</span>?<br />The student will be notified.
          </p>
          <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: '#555' }}>Reason / Message to Student (Optional)</label>
            <textarea 
              value={actionMessage}
              onChange={(e) => setActionMessage(e.target.value)}
              placeholder="e.g. I have an emergency that came up. Please rebook for next week."
              style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1.5px solid #E0E4E6', minHeight: '100px', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Button fullWidth variant="secondary" onClick={() => setIsDeleteModalOpen(false)}
              style={{ borderRadius: '16px', padding: '1.25rem', fontWeight: '800', fontSize: '1.1rem', color: '#555555', backgroundColor: '#F4F7F8', border: 'none' }}>
              Go Back
            </Button>
            <Button fullWidth variant="danger" onClick={handleDelete} disabled={actionLoading}
              style={{ borderRadius: '16px', padding: '1.25rem', fontWeight: '800', fontSize: '1.1rem', backgroundColor: '#FF5252', border: 'none', boxShadow: '0 8px 20px rgba(255,82,82,0.3)' }}>
              {actionLoading ? 'Cancelling...' : 'Cancel Appointment'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CounselorAppointments;
