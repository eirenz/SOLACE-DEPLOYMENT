import React, { useState, useEffect } from 'react';
import { Search, Filter, Trash2, Eye, UserPlus, MoreVertical, Users, ClipboardList, Info, AlertTriangle } from 'lucide-react';
import apiClient from '../../../api/apiClient';
import { updateUserStatus } from '../../../api/adminApi';
import Avatar from '../../../components/common/Avatar';

// Filter Modal Component
const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const options = ['Newest Account', 'Oldest Account', 'Pending', 'Active', 'Suspended'];
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

// Info Modal Component
const InfoModal = ({ isOpen, user, onClose }) => {
  if (!isOpen || !user) return null;
  const displayName = user.fullName || user.alias || user.username || user.email || 'User';
  const displayStatus = user.status ? user.status.toUpperCase() : 'ACTIVE';

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2000, backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF', borderRadius: '32px', width: '90%', maxWidth: '500px',
        padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', position: 'relative'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700' }}>
            <div style={{ backgroundColor: '#000', borderRadius: '50%', color: '#FFF', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Info size={14} />
            </div>
            <span>Information</span>
          </div>
          <span style={{
            backgroundColor: displayStatus === 'ACTIVE' ? '#00E676' : displayStatus === 'SUSPENDED' ? '#FF8A80' : '#FFE0B2',
            color: '#FFF', padding: '0.4rem 1.25rem', borderRadius: '100px',
            fontSize: '0.85rem', fontWeight: '800'
          }}>{displayStatus}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <Avatar size={100} initials={(displayName?.charAt(0) || '').toUpperCase()} />
          <div>
            <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: '800', color: '#1A1A2E' }}>{displayName}</h2>
            <p style={{ margin: 0, color: '#8E9DA1', fontWeight: '600' }}>{user.username ? `@${user.username}` : user.email}</p>
          </div>
        </div>

        <div style={{ borderTop: '1.5px solid #F0F4F5', paddingTop: '2rem' }}>
          <h4 style={{ margin: '0 0 1.25rem 0', fontSize: '1.1rem', fontWeight: '800', color: '#1A1A2E' }}>Personal Information</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '1rem', fontSize: '1rem' }}>
            <span style={{ color: '#000', fontWeight: '700' }}>Full Name:</span>
            <span style={{ color: '#555', fontWeight: '500' }}>{user.fullName || '-'}</span>
            <span style={{ color: '#000', fontWeight: '700' }}>Username:</span>
            <span style={{ color: '#555', fontWeight: '500' }}>{user.username || '-'}</span>
            <span style={{ color: '#000', fontWeight: '700' }}>Email:</span>
            <span style={{ color: '#555', fontWeight: '500' }}>{user.email || '-'}</span>
            <span style={{ color: '#000', fontWeight: '700' }}>Phone Number:</span>
            <span style={{ color: '#555', fontWeight: '500' }}>{user.phoneNumber || '-'}</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
          <button 
            onClick={onClose}
            style={{
              backgroundColor: '#FFE0B2', color: '#EF6C00', border: '1.5px solid #EF6C00',
              padding: '0.8rem 3.5rem', borderRadius: '100px', fontWeight: '800', cursor: 'pointer',
              fontSize: '1.1rem'
            }}
          >Close</button>
        </div>
      </div>
    </div>
  );
};

// Suspend Modal Component
const SuspendModal = ({ isOpen, user, onClose, onConfirm }) => {
  if (!isOpen || !user) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2000, backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF', borderRadius: '32px', width: '90%', maxWidth: '400px',
        padding: '3rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontWeight: '800', fontSize: '1.4rem' }}>
          <AlertTriangle size={24} color="#000" />
          <span>Suspend User</span>
        </div>
        <p style={{ color: '#1A1A2E', fontSize: '1.25rem', fontWeight: '600', marginBottom: '2.5rem' }}>Are you sure you want to suspend?</p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <Avatar size={80} initials={((user.fullName || user.alias || user.username || user.email)?.charAt(0) || '').toUpperCase()} />
          <h3 style={{ margin: 0, fontSize: '1.6rem', fontWeight: '800', color: '#1A1A2E' }}>{user.fullName || user.alias || user.username || user.email || 'Unknown User'}</h3>
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
            onClick={() => onConfirm(user)}
            style={{
              flex: 1, backgroundColor: '#E57373', color: '#FFF', border: 'none',
              padding: '0.8rem', borderRadius: '100px', fontWeight: '800', cursor: 'pointer'
            }}
          >Suspend</button>
        </div>
      </div>
    </div>
  );
};

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSuspendOpen, setIsSuspendOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const { data } = await apiClient.get('/admin/users');
      setUsers(data.users || []);
    } catch (err) {
      console.error('User management fetch error:', err);
      setError(err?.response?.data?.error || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSuspend = async (userToSuspend) => {
    try {
      // Toggle between ACTIVE and SUSPENDED
      const newStatus = userToSuspend.status === 'SUSPENDED' ? 'ACTIVE' : 'SUSPENDED';
      await updateUserStatus(userToSuspend.id, newStatus);
      setIsSuspendOpen(false);
      fetchUsers();
    } catch (error) {
      console.error('Failed to update user status:', error);
    }
  };

  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();

    const matchesRole = roleFilter === 'ALL' || user.role === roleFilter;
    const matchesSearch =
      user.fullName?.toLowerCase().includes(query) ||
      user.email?.toLowerCase().includes(query) ||
      user.username?.toLowerCase().includes(query) ||
      user.alias?.toLowerCase().includes(query);

    return matchesRole && matchesSearch;
  });

  const activeCount = users.filter((user) => user.status === 'ACTIVE').length;
  const suspendedCount = users.filter((user) => user.status === 'SUSPENDED').length;
  const counselorCount = users.filter((user) => user.role === 'COUNSELOR').length;

  const stats = [
    { label: 'Total Users:', value: loading ? '...' : users.length.toString(), icon: Users, color: '#1A1A2E' },
    { label: 'Active:', value: loading ? '...' : activeCount.toString(), icon: ClipboardList, color: '#1A1A2E' },
    { label: 'Suspended:', value: loading ? '...' : suspendedCount.toString(), icon: MoreVertical, color: '#1A1A2E' },
    { label: 'Counselors:', value: loading ? '...' : counselorCount.toString(), icon: UserPlus, color: '#1A1A2E' },
  ];

  const getStatusStyle = (status) => {
    const normalized = (status || '').toUpperCase();
    switch (normalized) {
      case 'ACTIVE': return { backgroundColor: '#E8F5E9', color: '#2E7D32', border: '1px solid #A5D6A7' };
      case 'SUSPENDED': return { backgroundColor: '#FFEBEE', color: '#C62828', border: '1px solid #FFCDD2' };
      case 'INACTIVE': return { backgroundColor: '#FFF3E0', color: '#EF6C00', border: '1px solid #FFE0B2' };
      default: return { backgroundColor: '#F4F7F8', color: '#455A64', border: '1px solid #CFD8DC' };
    }
  };

  const openInfo = (user) => {
    setSelectedUser(user);
    setIsInfoOpen(true);
  };

  const openSuspend = (user) => {
    setSelectedUser(user);
    setIsSuspendOpen(true);
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ backgroundColor: '#1A1A2E', padding: '0.75rem', borderRadius: '12px', color: '#FFF' }}>
            <Users size={28} />
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#1A1A2E', margin: 0 }}>User Management</h1>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#8E9DA1' }} />
            <div style={{ 
              display: 'flex', alignItems: 'center', 
              border: '1.5px solid #E0E4E6', borderRadius: '12px', 
              backgroundColor: '#FFF', paddingRight: '0.5rem'
            }}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  border: 'none',
                  width: '300px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  borderRadius: '12px',
                }}
              />
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8E9DA1', display: 'flex', alignItems: 'center' }}
              >
                <Filter size={22} />
              </button>
            </div>
            <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '24px',
            border: '1.5px solid #E0E4E6',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
          }}>
            <div>
              <p style={{ margin: '0 0 0.5rem 0', color: '#1A1A2E', fontWeight: '700', fontSize: '0.9rem' }}>{stat.label}</p>
              <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: '800', color: '#1A1A2E' }}>{stat.value}</h3>
            </div>
            <div style={{ backgroundColor: '#F4F7F8', padding: '0.75rem', borderRadius: '50%' }}>
               <stat.icon size={28} color="#1A1A2E" />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <div style={{ fontWeight: '700', color: '#1A1A2E' }}>
          Showing {filteredUsers.length} user{filteredUsers.length === 1 ? '' : 's'}{roleFilter !== 'ALL' ? ` · ${roleFilter.charAt(0) + roleFilter.slice(1).toLowerCase()}s` : ''}
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {['ALL', 'STUDENT', 'COUNSELOR', 'ADMIN'].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setRoleFilter(role)}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '999px',
                border: roleFilter === role ? '2px solid #1A1A2E' : '1px solid #E0E4E6',
                backgroundColor: roleFilter === role ? '#1A1A2E' : '#F8FAFB',
                color: roleFilter === role ? '#FFFFFF' : '#1A1A2E',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              {role === 'ALL' ? 'All' : role.charAt(0) + role.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1.5px solid #E0E4E6',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1.5px solid #E0E4E6' }}>
              <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>User</th>
              <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Date Created</th>
              <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Status</th>
              <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Report</th>
              <th style={{ padding: '1.25rem 1.5rem', color: '#1A1A2E', fontWeight: '800' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#8E9DA1' }}>
                  Loading users...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#EF5350' }}>
                  {error}
                </td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#8E9DA1' }}>
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => {
                const displayName = user.fullName || user.alias || user.username || user.email;
                return (
                  <tr key={user.id} style={{ borderBottom: '1px solid #F0F4F5' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F9FAFB'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <td style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <Avatar size={40} initials={(displayName?.charAt(0) || '').toUpperCase()} />
                      <span style={{ fontWeight: '600', color: '#1A1A2E' }}>{displayName}</span>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem', color: '#555', fontWeight: '500' }}>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '-'}</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>
                      <span style={{
                        padding: '0.4rem 1rem',
                        borderRadius: '100px',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        ...getStatusStyle(user.status || 'Active')
                      }}>
                        {user.status || 'ACTIVE'}
                      </span>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem', color: '#555', fontWeight: '500' }}>0</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button 
                          onClick={() => openSuspend(user)}
                          style={{ 
                            background: 'none', border: '2px solid #000', 
                            padding: '0.5rem', borderRadius: '10px', 
                            cursor: 'pointer', color: '#EF5350',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                          }}
                        >
                          <Trash2 size={20} />
                        </button>
                        <button 
                          onClick={() => openInfo(user)}
                          style={{ 
                            background: 'none', border: '2px solid #000', 
                            padding: '0.5rem', borderRadius: '10px', 
                            cursor: 'pointer', color: '#00BCD4',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                          }}
                        >
                          <Eye size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <InfoModal isOpen={isInfoOpen} user={selectedUser} onClose={() => setIsInfoOpen(false)} />
      <SuspendModal isOpen={isSuspendOpen} user={selectedUser} onClose={() => setIsSuspendOpen(false)} onConfirm={handleSuspend} />
    </div>
  );
};

export default UserManagement;
