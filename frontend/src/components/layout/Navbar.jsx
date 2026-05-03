import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../common/Avatar';
import { Search, Bell, Settings, ChevronDown, User, LogOut, Edit2, X, MessageCircle, Calendar, Smile } from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import apiClient from '../../api/apiClient';

const Navbar = ({ userName = 'Bea', avatarSrc }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [supportMessage, setSupportMessage] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);
  const [appointmentMessage, setAppointmentMessage] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Account Settings');
  const [editForm, setEditForm] = useState({ 
    firstName: '', 
    lastName: '', 
    username: '', 
    phoneNumber: '', 
    email: '',
    avatarUrl: ''
  });
  const [securityForm, setSecurityForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [isSaving, setIsSaving] = useState(false);
  
  const menuRef = useRef(null);
  const notifRef = useRef(null);
  const fileInputRef = useRef(null);
  const { user, login, token, role, logout } = useAuthStore();
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
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Load notifications and start socket on mount
  useEffect(() => {
    if (user?.id) {
      loadNotifications();
      initSocket(user, token);
    }
  }, [user?.id]);

  useEffect(() => {
    if (isEditModalOpen && user) {
      setEditForm({ 
        firstName: user.firstName || '', 
        lastName: user.lastName || '', 
        username: user.username || '', 
        phoneNumber: user.phoneNumber || '', 
        email: user.email || '',
        avatarUrl: user.avatarUrl || ''
      });
    }
  }, [isEditModalOpen, user]);

  const handleLogout = () => {
    setIsMenuOpen(false);
    import('../../api/chatSocket').then(({ disconnectSocket }) => {
      disconnectSocket();
    });
    logout();
    navigate('/login');
  };

  const getDisplayName = () => {
    if (user?.fullName && user.fullName !== 'Student' && user.fullName.trim() !== '') {
      return user.fullName;
    }
    if (user?.email) {
      const namePart = user.email.split('@')[0];
      return namePart.split(/[\.\-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    return userName;
  };

  const displayName = getDisplayName();

  const handleSaveProfile = async () => {
    try {
      setIsSaving(true);
      const res = await apiClient.put('/users/profile', editForm);
      // Update store user
      login(res.data, role, token);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(error.response?.data?.error || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (!securityForm.currentPassword || !securityForm.newPassword) {
      alert('Please fill in all required fields');
      return;
    }
    if (securityForm.newPassword !== securityForm.confirmNewPassword) {
      alert('New passwords do not match');
      return;
    }

    try {
      setIsSaving(true);
      await apiClient.put('/users/profile/password', {
        currentPassword: securityForm.currentPassword,
        newPassword: securityForm.newPassword
      });
      alert('Password updated successfully');
      setIsEditModalOpen(false);
      setSecurityForm({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    } catch (error) {
      console.error('Error updating password:', error);
      alert(error.response?.data?.error || 'Failed to update password');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAvatarSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditForm(prev => ({ ...prev, avatarUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const [isRemovingAvatar, setIsRemovingAvatar] = useState(false);

  const handleRemoveProfilePicture = async () => {
    try {
      setIsRemovingAvatar(true);
      const res = await apiClient.put('/users/profile', { avatarUrl: null });
      login(res.data, role, token);
      setEditForm(prev => ({ ...prev, avatarUrl: null }));
    } catch (error) {
      console.error('Error removing profile picture:', error);
      alert('Failed to remove profile picture');
    } finally {
      setIsRemovingAvatar(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '0.875rem 1.25rem', borderRadius: '12px',
    border: '1px solid #D1D5DB', fontSize: '1rem', color: '#111827',
    outline: 'none', transition: 'border-color 0.2s'
  };

  return (
    <header style={{
      backgroundColor: '#F9FAFB',
      padding: '1rem 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid #E5E7EB'
    }}>
      {/* Search Bar */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem',
        backgroundColor: '#F3F4F6',
        padding: '0.6rem 1.25rem',
        borderRadius: '100px',
        width: '320px',
        border: '1px solid #E5E7EB'
      }}>
        <Search size={18} color="#9CA3AF" />
        <input 
          type="text" 
          placeholder="Search insights..."
          style={{
            border: 'none',
            background: 'none',
            outline: 'none',
            fontSize: '0.9rem',
            color: '#374151',
            width: '100%',
            fontWeight: '500'
          }}
        />
      </div>

      {/* Right Side Icons & Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {/* Notification Bell */}
        <div ref={notifRef} style={{ position: 'relative' }}>
          <div
            onClick={toggleDropdown}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <Bell size={22} color="#4B5563" />
            {unreadCount > 0 && (
              <div style={{
                position: 'absolute', top: '-4px', right: '-4px',
                minWidth: '18px', height: '18px',
                backgroundColor: '#EF4444', borderRadius: '50%',
                border: '2px solid #F9FAFB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', color: '#fff', fontWeight: '800', padding: '0 3px'
              }}>
                {unreadCount > 9 ? '9+' : unreadCount}
              </div>
            )}
          </div>

          {/* Notification Dropdown */}
          {isDropdownOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 14px)', right: '-10px',
              width: '340px', backgroundColor: '#FFFFFF', borderRadius: '20px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.12)', border: '1px solid #F3F4F6',
              zIndex: 200, overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{ padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F3F4F6' }}>
                <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#111827' }}>Notifications</span>
                {unreadCount > 0 && (
                  <button
                    onClick={() => markAllAsRead()}
                    style={{ background: 'none', border: 'none', color: '#064E3B', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '700' }}
                  >
                    Mark all as read
                  </button>
                )}
              </div>

              {/* List */}
              <div style={{ maxHeight: '360px', overflowY: 'auto' }}>
                {notifications.length === 0 ? (
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#9CA3AF', fontWeight: '600', fontSize: '0.9rem' }}>
                    No notifications yet
                  </div>
                ) : (
                  notifications.map((n) => {
                    const iconMap = { CHAT: MessageCircle, APPOINTMENT: Calendar, VENT: Smile };
                    const colorMap = { CHAT: '#00BCD4', APPOINTMENT: '#064E3B', VENT: '#F59E0B' };
                    const Icon = iconMap[n.type] || Bell;
                    const iconColor = colorMap[n.type] || '#6B7280';
                    return (
                      <div
                        key={n.id}
                        onClick={() => { 
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
                        }}
                        style={{
                          display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                          padding: '0.85rem 1.25rem', cursor: 'pointer',
                          backgroundColor: n.isRead ? 'transparent' : '#F0FBF8',
                          borderBottom: '1px solid #F9FAFB',
                          transition: 'background 0.15s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = n.isRead ? 'transparent' : '#F0FBF8'}
                      >
                        <div style={{
                          width: '34px', height: '34px', borderRadius: '10px',
                          backgroundColor: `${iconColor}15`, display: 'flex',
                          alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                          <Icon size={16} color={iconColor} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: n.isRead ? '600' : '800', fontSize: '0.85rem', color: '#111827', marginBottom: '0.15rem' }}>
                            {n.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#6B7280', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {n.message}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: '#9CA3AF', marginTop: '0.2rem' }}>
                            {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                        {!n.isRead && (
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#064E3B', flexShrink: 0, marginTop: '4px' }} />
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
        
        <Settings size={22} color="#4B5563" style={{ cursor: 'pointer' }} />
        
        <div style={{ width: '1px', height: '24px', backgroundColor: '#E5E7EB', margin: '0 0.5rem' }} />

        <div 
          style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} 
          ref={menuRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span style={{ fontWeight: '700', color: '#374151', fontSize: '0.95rem' }}>{displayName}</span>
          <Avatar src={user?.avatarUrl || avatarSrc} initials={displayName.charAt(0)} size={36} />
          
          {isMenuOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 15px)',
              right: 0,
              width: '180px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              padding: '0.5rem',
              border: '1px solid #F3F4F6',
              zIndex: 100
            }}>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); setIsEditModalOpen(true); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  width: '100%', padding: '0.75rem 1rem', borderRadius: '12px',
                  border: 'none', backgroundColor: 'transparent', color: '#374151',
                  fontSize: '0.9rem', fontWeight: '700', cursor: 'pointer',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <Edit2 size={18} />
                Edit Profile
              </button>
              
              <button 
                onClick={handleLogout}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  width: '100%', padding: '0.75rem 1rem', borderRadius: '12px',
                  border: 'none', backgroundColor: 'transparent', color: '#EF4444',
                  fontSize: '0.9rem', fontWeight: '700', cursor: 'pointer',
                  textAlign: 'left', marginTop: '0.25rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FEF2F2'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF', borderRadius: '32px', 
            width: '100%', maxWidth: '500px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden', position: 'relative'
          }}>
            {/* Modal Header & Tabs */}
            <div style={{ padding: '2rem 2rem 0 2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  {['Account Settings', 'Security'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        padding: '0.4rem 1rem', borderRadius: '8px', border: activeTab === tab ? '1.5px solid #064E3B' : 'none',
                        backgroundColor: 'transparent', color: activeTab === tab ? '#064E3B' : '#9CA3AF',
                        fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s'
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setIsEditModalOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}
                >
                  <X size={24} />
                </button>
              </div>
              <div style={{ height: '1px', backgroundColor: '#F3F4F6', width: '100%' }} />
            </div>

            <div style={{ padding: '2rem', maxHeight: '80vh', overflowY: 'auto' }}>
              {activeTab === 'Account Settings' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* Profile Picture Section */}
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#000', marginBottom: '1.25rem' }}>Your Profile Picture</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <Avatar 
                        src={editForm.avatarUrl || user?.avatarUrl} 
                        initials={displayName.charAt(0)} 
                        size={100} 
                      />
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          style={{ display: 'none' }} 
                          accept="image/*"
                          onChange={handleAvatarSelect}
                        />
                        <button
                          onClick={() => fileInputRef.current.click()}
                          style={{ 
                            padding: '0.5rem 1rem', borderRadius: '8px', backgroundColor: '#064E3B', 
                            color: '#FFFFFF', border: 'none', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer' 
                          }}
                        >
                          Upload New Photo
                        </button>
                        <button
                          onClick={handleRemoveProfilePicture}
                          disabled={isRemovingAvatar}
                          style={{ 
                            padding: '0.5rem 1rem', borderRadius: '8px', backgroundColor: '#A1A1AA', 
                            color: '#FFFFFF', border: 'none', fontWeight: '700', fontSize: '0.85rem', 
                            cursor: isRemovingAvatar ? 'not-allowed' : 'pointer',
                            opacity: isRemovingAvatar ? 0.7 : 1,
                            transition: 'all 0.2s',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                          }}
                          onMouseEnter={(e) => { if (!isRemovingAvatar) { e.target.style.backgroundColor = '#71717A'; e.target.style.transform = 'translateY(-1px)'; } }}
                          onMouseLeave={(e) => { if (!isRemovingAvatar) { e.target.style.backgroundColor = '#A1A1AA'; e.target.style.transform = 'translateY(0)'; } }}
                          onMouseDown={(e) => { if (!isRemovingAvatar) e.target.style.transform = 'translateY(1px)'; }}
                          onMouseUp={(e) => { if (!isRemovingAvatar) e.target.style.transform = 'translateY(-1px)'; }}
                        >
                          {isRemovingAvatar ? 'Removing...' : 'Remove Profile Picture'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{ height: '1px', backgroundColor: '#F3F4F6', width: '100%' }} />

                  {/* Form Fields */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#000' }}>Last name</label>
                      <input 
                        type="text" 
                        value={editForm.lastName}
                        onChange={(e) => setEditForm({...editForm, lastName: e.target.value})}
                        placeholder="Park"
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#000' }}>First name</label>
                      <input 
                        type="text" 
                        value={editForm.firstName}
                        onChange={(e) => setEditForm({...editForm, firstName: e.target.value})}
                        placeholder="Jenny"
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#000' }}>Username</label>
                      <input 
                        type="text" 
                        value={editForm.username}
                        onChange={(e) => setEditForm({...editForm, username: e.target.value})}
                        placeholder="@jenjen_park"
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#000' }}>Contact Number</label>
                      <input 
                        type="text" 
                        value={editForm.phoneNumber}
                        onChange={(e) => setEditForm({...editForm, phoneNumber: e.target.value})}
                        placeholder="0987 567 4637"
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#000' }}>Email Address</label>
                      <input 
                        type="email" 
                        value={editForm.email}
                        onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                        placeholder="jenpark@gmail.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                    <button
                      onClick={handleSaveProfile}
                      disabled={isSaving}
                      style={{
                        padding: '0.75rem 2rem', backgroundColor: '#064E3B', color: '#FFFFFF',
                        border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '700',
                        cursor: isSaving ? 'not-allowed' : 'pointer', opacity: isSaving ? 0.7 : 1
                      }}
                    >
                      {isSaving ? 'Updating...' : 'Update Profile'}
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#000', marginBottom: '0.25rem' }}>Update Your Password</h3>
                    <p style={{ fontSize: '0.85rem', color: '#9CA3AF', margin: 0 }}>Keep your account secure by setting a strong and unique password.</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#000' }}>Current Password <span style={{ color: '#EF4444' }}>*</span></label>
                      <input 
                        type="password" 
                        value={securityForm.currentPassword}
                        onChange={(e) => setSecurityForm({...securityForm, currentPassword: e.target.value})}
                        placeholder="Enter your current Password"
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#000' }}>New Password <span style={{ color: '#EF4444' }}>*</span></label>
                      <input 
                        type="password" 
                        value={securityForm.newPassword}
                        onChange={(e) => setSecurityForm({...securityForm, newPassword: e.target.value})}
                        placeholder="Create a new Password"
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#000' }}>Confirm New Password <span style={{ color: '#EF4444' }}>*</span></label>
                      <input 
                        type="password" 
                        value={securityForm.confirmNewPassword}
                        onChange={(e) => setSecurityForm({...securityForm, confirmNewPassword: e.target.value})}
                        placeholder="Re-enter new Password"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                    <button
                      onClick={() => setIsEditModalOpen(false)}
                      style={{
                        padding: '0.75rem 2rem', backgroundColor: '#A1A1AA', color: '#FFFFFF',
                        border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdatePassword}
                      disabled={isSaving}
                      style={{
                        padding: '0.75rem 2rem', backgroundColor: '#064E3B', color: '#FFFFFF',
                        border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '700',
                        cursor: isSaving ? 'not-allowed' : 'pointer', opacity: isSaving ? 0.7 : 1
                      }}
                    >
                      {isSaving ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button onClick={() => { setSupportMessage(null); navigate('/user/appointments'); }} style={{ backgroundColor: '#FF8A65', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.9rem', fontWeight: '800', fontSize: '1rem', cursor: 'pointer' }}>💬 Talk to a counselor</button>
              <button onClick={() => { setSupportMessage(null); navigate('/user/appointments'); }} style={{ backgroundColor: '#FCE4EC', color: '#F06292', border: 'none', borderRadius: '12px', padding: '0.9rem', fontWeight: '800', fontSize: '1rem', cursor: 'pointer' }}>💡 Listen-only</button>
              <button onClick={() => setSupportMessage(null)} style={{ border: '2px solid #E5E7EB', backgroundColor: 'transparent', borderRadius: '12px', padding: '0.9rem', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', color: '#374151' }}>I'm not in the mood</button>
            </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button onClick={() => setWarningMessage(null)} style={{ backgroundColor: '#EF5350', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.9rem', fontWeight: '800', fontSize: '1rem', cursor: 'pointer' }}>I Understand</button>
            </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {appointmentMessage.link && appointmentMessage.link.includes('action=startChat') ? (
                <button onClick={() => { setAppointmentMessage(null); navigate(appointmentMessage.link); }} style={{ backgroundColor: '#064E3B', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.9rem', fontWeight: '800', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>Start Chat Now <MessageCircle size={18} /></button>
              ) : (
                <button onClick={() => { setAppointmentMessage(null); navigate(appointmentMessage.link || '/user/appointments'); }} style={{ backgroundColor: '#064E3B', color: '#FFF', border: 'none', borderRadius: '12px', padding: '0.9rem', fontWeight: '800', fontSize: '1rem', cursor: 'pointer' }}>Go to Appointments</button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
