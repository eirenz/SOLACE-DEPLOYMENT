import React, { useState, useEffect } from 'react';
import { Search, Filter, Trash2, Eye, UserPlus, Users, Info, AlertTriangle, X } from 'lucide-react';
import Avatar from '../../../components/common/Avatar';
import { fetchAllUsers, deleteUser } from '../../../api/adminApi';

// Filter Modal Component
const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const options = ['Newest Account', 'Oldest Account', 'Deleted', 'Active'];
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
            backgroundColor: option === 'Deleted' ? '#1A1A2E' : 'transparent'
          }}>
            {option === 'Deleted' && <div style={{ color: '#FFF', fontSize: '12px' }}>✓</div>}
          </div>
          <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1A1A2E' }}>{option}</span>
        </div>
      ))}
    </div>
  );
};

// Information Modal Component
const InfoModal = ({ isOpen, counselor, onClose }) => {
  if (!isOpen || !counselor) return null;
  const isMobileModal = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2000, backdropFilter: 'blur(4px)', padding: isMobileModal ? '1rem' : '0'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF', borderRadius: isMobileModal ? '20px' : '32px',
        width: isMobileModal ? '100%' : '90%', maxWidth: '600px',
        padding: isMobileModal ? '1.5rem' : '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', position: 'relative',
        maxHeight: isMobileModal ? '85vh' : 'auto', overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: isMobileModal ? '1rem' : '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700' }}>
            <div style={{ backgroundColor: '#000', borderRadius: '50%', color: '#FFF', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Info size={14} />
            </div>
            <span>Information</span>
          </div>
          <span style={{
            backgroundColor: '#00E676', color: '#FFF', padding: '0.4rem 1.25rem', borderRadius: '100px',
            fontSize: '0.85rem', fontWeight: '800'
          }}>Active</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: isMobileModal ? '1rem' : '1.5rem', marginBottom: isMobileModal ? '1.5rem' : '2.5rem' }}>
          <Avatar size={isMobileModal ? 60 : 100} initials={(counselor.fullName || 'C').charAt(0)} />
          <div>
            <h2 style={{ margin: 0, fontSize: isMobileModal ? '1.3rem' : '2rem', fontWeight: '800', color: '#1A1A2E' }}>{counselor.fullName}</h2>
            <p style={{ margin: 0, color: '#8E9DA1', fontWeight: '600', fontSize: isMobileModal ? '0.9rem' : '1.2rem' }}>School Counselor</p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1.5px solid #1A1A2E', opacity: 0.1, marginBottom: isMobileModal ? '1rem' : '2rem' }} />

        <div style={{ marginBottom: isMobileModal ? '1rem' : '2rem' }}>
          <h4 style={{ margin: '0 0 1rem 0', fontSize: isMobileModal ? '0.95rem' : '1.1rem', fontWeight: '800', color: '#1A1A2E' }}>Contact Information</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: isMobileModal ? '0.85rem' : '1rem' }}>
            <div><span style={{ color: '#000', fontWeight: '700' }}>Email: </span><span style={{ color: '#555', fontWeight: '500' }}>{counselor.email}</span></div>
            <div><span style={{ color: '#000', fontWeight: '700' }}>Work Phone: </span><span style={{ color: '#555', fontWeight: '500' }}>{counselor.counselorProfile?.workPhone || 'N/A'}</span></div>
            <div><span style={{ color: '#000', fontWeight: '700' }}>Office: </span><span style={{ color: '#555', fontWeight: '500' }}>{counselor.counselorProfile?.officeLocation || 'N/A'}</span></div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1.5px solid #1A1A2E', opacity: 0.1, marginBottom: isMobileModal ? '1rem' : '2rem' }} />

        <div>
          <h4 style={{ margin: '0 0 1rem 0', fontSize: isMobileModal ? '0.95rem' : '1.1rem', fontWeight: '800', color: '#1A1A2E' }}>Professional Information</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: isMobileModal ? '0.85rem' : '1rem' }}>
            <div><span style={{ color: '#000', fontWeight: '700' }}>Employee ID: </span><span style={{ color: '#555', fontWeight: '500' }}>{counselor.counselorProfile?.employeeId || 'N/A'}</span></div>
            <div><span style={{ color: '#000', fontWeight: '700' }}>Specialization: </span><span style={{ color: '#555', fontWeight: '500' }}>{counselor.counselorProfile?.specialization || 'N/A'}</span></div>
            <div><span style={{ color: '#000', fontWeight: '700' }}>Experience: </span><span style={{ color: '#555', fontWeight: '500' }}>{counselor.counselorProfile?.experience || 'N/A'}</span></div>
            <div><span style={{ color: '#000', fontWeight: '700' }}>License: </span><span style={{ color: '#555', fontWeight: '500' }}>{counselor.counselorProfile?.license || 'N/A'}</span></div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: isMobileModal ? '1.5rem' : '3rem' }}>
          <button 
            onClick={onClose}
            style={{
              backgroundColor: '#FFE0B2', color: '#EF6C00', border: '2.5px solid #EF6C00',
              padding: isMobileModal ? '0.6rem 2rem' : '0.8rem 3.5rem', borderRadius: '100px', fontWeight: '800', cursor: 'pointer',
              fontSize: isMobileModal ? '1rem' : '1.2rem'
            }}
          >Close</button>
        </div>
      </div>
    </div>
  );
};

// Delete Modal Component
const DeleteModal = ({ isOpen, counselor, onClose, onConfirm }) => {
  if (!isOpen || !counselor) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2000, backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF', borderRadius: '32px', width: '90%', maxWidth: '450px',
        padding: '3rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontWeight: '800', fontSize: '1.6rem' }}>
          <AlertTriangle size={28} color="#000" />
          <span>Delete Counselor</span>
        </div>
        <p style={{ color: '#1A1A2E', fontSize: '1.3rem', fontWeight: '600', marginBottom: '2.5rem' }}>Are you sure you want to remove?</p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <Avatar size={80} initials={(counselor.fullName || 'C').charAt(0)} />
          <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '800', color: '#1A1A2E' }}>{counselor.fullName}</h3>
        </div>

        <p style={{ color: '#1A1A2E', fontSize: '1.2rem', fontWeight: '600', marginBottom: '3rem' }}>This action cannot be undone.</p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <button 
            onClick={onClose}
            style={{
              flex: 1, backgroundColor: '#BDBDBD', color: '#FFF', border: 'none',
              padding: '1rem', borderRadius: '100px', fontWeight: '800', cursor: 'pointer', fontSize: '1.1rem'
            }}
          >Cancel</button>
          <button 
            onClick={() => onConfirm(counselor.id)}
            style={{
              flex: 1, backgroundColor: '#E57373', color: '#FFF', border: 'none',
              padding: '1rem', borderRadius: '100px', fontWeight: '800', cursor: 'pointer', fontSize: '1.1rem'
            }}
          >Delete</button>
        </div>
      </div>
    </div>
  );
};

const CounselorList = () => {
  const [counselors, setCounselors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadCounselors = async () => {
    try {
      const data = await fetchAllUsers({ role: 'COUNSELOR' });
      setCounselors(data.users);
    } catch (error) {
      console.error('Failed to load counselors:', error);
    }
  };

  useEffect(() => {
    loadCounselors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setIsDeleteOpen(false);
      loadCounselors(); // Refresh list
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active': return { backgroundColor: '#E8F5E9', color: '#2E7D32', border: '1px solid #A5D6A7' };
      case 'Inactive': return { backgroundColor: '#FFF3E0', color: '#EF6C00', border: '1px solid #FFE0B2' };
      default: return {};
    }
  };

  const openInfo = (counselor) => {
    setSelectedCounselor(counselor);
    setIsInfoOpen(true);
  };

  const openDelete = (counselor) => {
    setSelectedCounselor(counselor);
    setIsDeleteOpen(true);
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', paddingBottom: isMobile ? '5rem' : '0' }}>
      <header style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? '1rem' : '0', marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.25rem' }}>
          <div style={{ backgroundColor: '#1A1A2E', padding: isMobile ? '0.5rem' : '0.75rem', borderRadius: '12px', color: '#FFF' }}>
            <Users size={isMobile ? 20 : 28} />
          </div>
          <h1 style={{ fontSize: isMobile ? '1.4rem' : '2.4rem', fontWeight: '800', color: '#1A1A2E', margin: 0 }}>Counselors List</h1>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
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
      </header>

      {/* Stats Summary Card */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '1.5rem 2.5rem',
        borderRadius: '24px',
        border: '1.5px solid #E0E4E6',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2.5rem',
        marginBottom: '2.5rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
      }}>
        <div>
          <p style={{ margin: '0 0 0.25rem 0', color: '#1A1A2E', fontWeight: '700', fontSize: '0.95rem' }}>Total Therapist:</p>
          <h3 style={{ margin: 0, fontSize: '2.2rem', fontWeight: '800', color: '#1A1A2E' }}>{counselors.length}</h3>
        </div>
        <div style={{ backgroundColor: '#F4F7F8', padding: '0.75rem', borderRadius: '50%' }}>
           <Users size={32} color="#1A1A2E" />
        </div>
      </div>

      {/* Table / Card Layout */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: isMobile ? '16px' : '24px',
        border: '1.5px solid #E0E4E6',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        {isMobile ? (
          /* Mobile card layout */
          <div>
            {counselors.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#8E9DA1', fontWeight: '600' }}>No counselors found</div>
            ) : counselors.map((counselor, i) => (
              <div key={counselor.id} style={{ padding: '1rem 1.25rem', borderBottom: i === counselors.length - 1 ? 'none' : '1px solid #F0F4F5', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Avatar size={36} initials={(counselor.fullName || 'C').charAt(0)} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontWeight: '700', color: '#1A1A2E', fontSize: '0.9rem' }}>{counselor.fullName}</p>
                  <p style={{ margin: '0.15rem 0 0 0', color: '#8E9DA1', fontSize: '0.75rem', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{counselor.email}</p>
                </div>
                <span style={{
                  padding: '0.25rem 0.6rem', borderRadius: '100px', fontSize: '0.65rem', fontWeight: '700',
                  ...getStatusStyle(counselor.status === 'ACTIVE' ? 'Active' : 'Inactive')
                }}>{counselor.status}</span>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button onClick={() => openInfo(counselor)} style={{ background: 'none', border: '1.5px solid #E0E4E6', padding: '0.35rem', borderRadius: '8px', cursor: 'pointer', color: '#00BCD4', display: 'flex' }}><Eye size={16} /></button>
                  <button onClick={() => openDelete(counselor)} style={{ background: 'none', border: '1.5px solid #E0E4E6', padding: '0.35rem', borderRadius: '8px', cursor: 'pointer', color: '#EF5350', display: 'flex' }}><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop table */
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1.5px solid #E0E4E6' }}>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Counselor</th>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Email</th>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Status</th>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Rating</th>
                <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {counselors.map((counselor) => (
                <tr key={counselor.id} style={{ borderBottom: '1px solid #F0F4F5' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F9FAFB'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <td style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Avatar size={40} initials={(counselor.fullName || 'C').charAt(0)} />
                    <span style={{ fontWeight: '600', color: '#1A1A2E' }}>{counselor.fullName}</span>
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#555', fontWeight: '500' }}>{counselor.email}</td>
                  <td style={{ padding: '1.25rem 1.5rem' }}>
                    <span style={{
                      padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '700',
                      ...getStatusStyle(counselor.status === 'ACTIVE' ? 'Active' : 'Inactive')
                    }}>{counselor.status}</span>
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', color: '#555', fontWeight: '500' }}>4.8 / 5.0</td>
                  <td style={{ padding: '1.25rem 1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button onClick={() => openDelete(counselor)} style={{ background: 'none', border: '2px solid #000', padding: '0.5rem', borderRadius: '10px', cursor: 'pointer', color: '#EF5350', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={20} /></button>
                      <button onClick={() => openInfo(counselor)} style={{ background: 'none', border: '2px solid #000', padding: '0.5rem', borderRadius: '10px', cursor: 'pointer', color: '#00BCD4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Eye size={20} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <InfoModal isOpen={isInfoOpen} counselor={selectedCounselor} onClose={() => setIsInfoOpen(false)} />
      <DeleteModal isOpen={isDeleteOpen} counselor={selectedCounselor} onClose={() => setIsDeleteOpen(false)} onConfirm={handleDelete} />
    </div>
  );
};

export default CounselorList;
