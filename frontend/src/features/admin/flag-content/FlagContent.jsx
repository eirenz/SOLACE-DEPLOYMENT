import React, { useEffect, useState } from 'react';
import { Users, Search, Filter, Trash2, Eye, AlertTriangle, X } from 'lucide-react';
import Avatar from '../../../components/common/Avatar';
import { fetchReportedPosts, updateUserStatus, updateReportStatus, resolveReportedPost } from '../../../api/adminApi';

// Filter Modal Component
const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const options = ['Newest Account', 'Oldest Account', 'Pending', 'Suspended'];
  return (
    <div style={{
      position: 'absolute', top: '100%', right: '0', marginTop: '10px',
      width: '200px', backgroundColor: '#FFFFFF', borderRadius: '16px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1.5px solid #E0E4E6',
      zIndex: 100, overflow: 'hidden'
    }}>
      {options.map((option, i) => (
        <div key={option} style={{
          padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem',
          borderBottom: i === options.length - 1 ? 'none' : '1px solid #F0F4F5',
          cursor: 'pointer'
        }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F9FAFB'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
          <div style={{
            width: '20px', height: '20px', borderRadius: '4px',
            border: '2px solid #00BCD4', display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: option === 'Pending' ? '#1A1A2E' : 'transparent'
          }}>
            {option === 'Pending' && <div style={{ color: '#FFF', fontSize: '12px' }}>✓</div>}
          </div>
          <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1A1A2E' }}>{option}</span>
        </div>
      ))}
    </div>
  );
};

// Violation Detail Modal Component
const ViolationModal = ({ isOpen, report, onClose }) => {
  if (!isOpen || !report) return null;
  const reporterName = report.reporter?.fullName || report.reporter?.alias || 'Reported User';
  const postTitle = report.post?.title || 'Flagged Content';
  const reportDate = report.createdAt ? new Date(report.createdAt).toLocaleDateString() : '-';

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2000, backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF', borderRadius: '32px', width: '90%', maxWidth: '450px',
        padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', position: 'relative'
      }}>
        <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.8rem', fontWeight: '800', color: '#1A1A2E' }}>Violation Detail</h2>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Avatar size={60} initials={reporterName.charAt(0)} />
          <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: '#1A1A2E' }}>{reporterName}</h3>
        </div>

        <div style={{ 
          backgroundColor: '#FFF', borderRadius: '24px', border: '1.5px solid #E0E4E6', 
          padding: '1.5rem', marginBottom: '2.5rem', minHeight: '180px'
        }}>
          <p style={{ margin: '0 0 0.75rem 0', fontSize: '1rem', fontWeight: '700', color: '#1A1A2E' }}>Date: {reportDate}</p>
          <p style={{ margin: '0 0 0.75rem 0', fontSize: '1rem', fontWeight: '700', color: '#1A1A2E' }}>Flagged Post</p>
          <p style={{ margin: '0 0 0.75rem 0', fontSize: '1rem', color: '#1A1A2E', fontWeight: '600' }}>{postTitle}</p>
          <p style={{ margin: '0 0 0 1rem', fontSize: '1rem', color: '#1A1A2E', fontWeight: '600' }}>{report.reason}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button 
            onClick={onClose}
            style={{
              backgroundColor: '#B0BEC5', color: '#FFF', border: 'none',
              padding: '0.6rem 1.5rem', borderRadius: '8px', fontWeight: '800', cursor: 'pointer',
              fontSize: '0.9rem', textTransform: 'uppercase'
            }}
          >CANCEL</button>
          <button 
            onClick={onClose}
            style={{
              backgroundColor: '#D32F2F', color: '#FFF', border: 'none',
              padding: '0.6rem 1.5rem', borderRadius: '8px', fontWeight: '800', cursor: 'pointer',
              fontSize: '0.9rem', textTransform: 'uppercase'
            }}
          >SUSPEND</button>
        </div>
      </div>
    </div>
  );
};

// Action Modal Component
const ActionModal = ({ isOpen, report, onClose, onConfirm }) => {
  if (!isOpen || !report) return null;
  const reporterName = report.reporter?.fullName || report.reporter?.alias || 'Reported User';

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2000, backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF', borderRadius: '32px', width: '90%', maxWidth: '420px',
        padding: '3rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontWeight: '800', fontSize: '1.4rem' }}>
          <AlertTriangle size={24} color="#000" />
          <span>Action Required</span>
        </div>
        <p style={{ color: '#1A1A2E', fontSize: '1.1rem', fontWeight: '600', marginBottom: '2.5rem', lineHeight: 1.5 }}>
          Are you sure you want to delete this post and issue a warning to the user? <br/><span style={{ fontSize: '0.9rem', color: '#8E9DA1' }}>(5 warnings will lead to an automatic suspension)</span>
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <Avatar size={80} initials={report.post?.author?.fullName?.charAt(0) || '?'} />
          <h3 style={{ margin: 0, fontSize: '1.6rem', fontWeight: '800', color: '#1A1A2E' }}>{report.post?.author?.fullName || report.post?.author?.alias || 'User'}</h3>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <button 
            onClick={onClose}
            style={{
              flex: 1, backgroundColor: '#4DB6AC', color: '#FFF', border: 'none',
              padding: '0.8rem', borderRadius: '100px', fontWeight: '800', cursor: 'pointer'
            }}
          >Cancel</button>
          <button 
            onClick={() => onConfirm(report)}
            style={{
              flex: 1, backgroundColor: '#E57373', color: '#FFF', border: 'none',
              padding: '0.8rem', borderRadius: '100px', fontWeight: '800', cursor: 'pointer'
            }}
          >Delete & Warn</button>
        </div>
      </div>
    </div>
  );
};


const FlagContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isViolationOpen, setIsViolationOpen] = useState(false);
  const [isSuspendOpen, setIsSuspendOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadReports = async () => {
    try {
      setLoading(true);
      const { reports: fetchedReports } = await fetchReportedPosts();
      setReports(fetchedReports || []);
    } catch (error) {
      console.error('Failed to load reported posts', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  const handleResolve = async (reportToResolve) => {
    try {
      await resolveReportedPost(reportToResolve.id);
      setIsSuspendOpen(false);
      loadReports();
    } catch (error) {
      console.error('Failed to resolve report:', error);
    }
  };

  const getStatusStyle = (status) => {
    switch ((status || '').toUpperCase()) {
      case 'PENDING': return { backgroundColor: '#E8F5E9', color: '#4CAF50', border: '1px solid #C8E6C9' };
      case 'REVIEWED': return { backgroundColor: '#E3F2FD', color: '#1976D2', border: '1px solid #BBDEFB' };
      case 'DISMISSED': return { backgroundColor: '#F3E5F5', color: '#8E24AA', border: '1px solid #E1BEE7' };
      case 'SUSPENDED': return { backgroundColor: '#FFF3E0', color: '#FF7043', border: '1px solid #FFE0B2' };
      default: return { backgroundColor: '#F4F7F8', color: '#1A1A2E', border: '1px solid #E0E4E6' };
    }
  };

  const openViolation = (report) => {
    setSelectedReport(report);
    setIsViolationOpen(true);
  };

  const openSuspend = (report) => {
    setSelectedReport(report);
    setIsSuspendOpen(true);
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', paddingBottom: isMobile ? '5rem' : '0' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.25rem', marginBottom: isMobile ? '1rem' : '2.5rem' }}>
        <div style={{ backgroundColor: '#1A1A2E', padding: isMobile ? '0.5rem' : '0.75rem', borderRadius: '12px', color: '#FFF' }}>
          <Users size={isMobile ? 20 : 28} />
        </div>
        <h1 style={{ fontSize: isMobile ? '1.4rem' : '2.4rem', fontWeight: '800', color: '#1A1A2E', margin: 0 }}>Flag Content</h1>
      </header>

      <hr style={{ border: 'none', borderTop: '1.5px solid #F0F4F5', marginBottom: isMobile ? '1rem' : '2rem' }} />

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? '0.75rem' : '0', marginBottom: isMobile ? '1rem' : '2rem' }}>
        <h2 style={{ fontSize: isMobile ? '1.1rem' : '1.8rem', fontWeight: '800', color: '#1A1A2E', margin: 0 }}>Review User Report</h2>
        
        <div style={{ position: 'relative' }}>
          <div style={{ 
            display: 'flex', alignItems: 'center', 
            border: '1.5px solid #E0E4E6', borderRadius: '12px', 
            backgroundColor: '#FFF', padding: '0 1rem', width: isMobile ? '100%' : '380px', boxSizing: 'border-box'
          }}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '0.75rem 0',
                border: 'none',
                flex: 1,
                fontSize: '0.95rem',
                outline: 'none',
              }}
            />
            <div style={{ display: 'flex', gap: '0.75rem', color: '#8E9DA1' }}>
              <Search size={22} style={{ cursor: 'pointer' }} />
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8E9DA1', padding: 0 }}
              >
                <Filter size={22} />
              </button>
            </div>
          </div>
          <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        </div>
      </div>

      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: isMobile ? '16px' : '24px',
        border: '1.5px solid #E0E4E6',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
      }}>
        {isMobile ? (
          /* Mobile card layout */
          <div>
            {loading ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>Loading...</div>
            ) : reports.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>No flagged content found.</div>
            ) : (
              reports
                .filter((report) => {
                  if (!searchQuery.trim()) return true;
                  const query = searchQuery.toLowerCase();
                  const reporter = report.reporter?.fullName || report.reporter?.alias || '';
                  const postTitle = report.post?.title || '';
                  const reason = report.reason || '';
                  return reporter.toLowerCase().includes(query) || postTitle.toLowerCase().includes(query) || reason.toLowerCase().includes(query);
                })
                .map((report, i) => {
                  const reporterName = report.reporter?.fullName || report.reporter?.alias || 'Unknown reporter';
                  const reportDate = report.createdAt ? new Date(report.createdAt).toLocaleDateString() : '-';
                  return (
                    <div key={report.id} style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #F0F4F5' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: '700', color: '#1A1A2E', fontSize: '0.9rem' }}>{report.post?.title || reporterName}</span>
                        <span style={{ color: '#8E9DA1', fontSize: '0.75rem', fontWeight: '600' }}>{reportDate}</span>
                      </div>
                      <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#555', fontWeight: '500' }}>{report.reason}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{
                          padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '700',
                          ...getStatusStyle(report.status)
                        }}>{report.status}</span>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <button onClick={() => openViolation(report)} style={{ background: 'none', border: '1.5px solid #E0E4E6', padding: '0.35rem', borderRadius: '8px', cursor: 'pointer', color: '#00BCD4', display: 'flex' }}><Eye size={16} /></button>
                          <button onClick={() => openSuspend(report)} style={{ background: 'none', border: '1.5px solid #E0E4E6', padding: '0.35rem', borderRadius: '8px', cursor: 'pointer', color: '#EF5350', display: 'flex' }}><Trash2 size={16} /></button>
                        </div>
                      </div>
                    </div>
                  );
                })
            )}
          </div>
        ) : (
          /* Desktop table */
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#F4F7F8', borderBottom: '1.5px solid #E0E4E6' }}>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>User</th>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Date</th>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Status</th>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Report</th>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>Loading reported content...</td></tr>
              ) : reports.length === 0 ? (
                <tr><td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>No flagged content found.</td></tr>
              ) : (
                reports
                  .filter((report) => {
                    if (!searchQuery.trim()) return true;
                    const query = searchQuery.toLowerCase();
                    const reporter = report.reporter?.fullName || report.reporter?.alias || '';
                    const postTitle = report.post?.title || '';
                    const reason = report.reason || '';
                    return reporter.toLowerCase().includes(query) || postTitle.toLowerCase().includes(query) || reason.toLowerCase().includes(query);
                  })
                  .map((report) => {
                    const reporterName = report.reporter?.fullName || report.reporter?.alias || 'Unknown reporter';
                    const reportDate = report.createdAt ? new Date(report.createdAt).toLocaleDateString() : '-';
                    return (
                      <tr key={report.id} style={{ borderBottom: '1px solid #F0F4F5' }}>
                        <td style={{ padding: '1rem 1.5rem', color: '#1A1A2E', fontWeight: '600' }}>{report.post?.title || reporterName}</td>
                        <td style={{ padding: '1rem 1.5rem', color: '#1A1A2E', fontWeight: '600' }}>{reportDate}</td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                          <span style={{ padding: '0.4rem 1.5rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '800', display: 'inline-block', textAlign: 'center', minWidth: '120px', ...getStatusStyle(report.status) }}>{report.status}</span>
                        </td>
                        <td style={{ padding: '1rem 1.5rem', color: '#1A1A2E', fontWeight: '600' }}>{report.reason}</td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                            <button onClick={() => openSuspend(report)} style={{ background: 'none', border: '2px solid #000', padding: '0.4rem', borderRadius: '8px', cursor: 'pointer', color: '#EF5350', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={20} /></button>
                            <button onClick={() => openViolation(report)} style={{ background: 'none', border: '2px solid #000', padding: '0.4rem', borderRadius: '8px', cursor: 'pointer', color: '#00BCD4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Eye size={20} /></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
              )}
            </tbody>
          </table>
        )}
      </div>

      <ViolationModal isOpen={isViolationOpen} report={selectedReport} onClose={() => setIsViolationOpen(false)} />
      <ActionModal isOpen={isSuspendOpen} report={selectedReport} onClose={() => setIsSuspendOpen(false)} onConfirm={handleResolve} />
    </div>
  );
};

export default FlagContent;
