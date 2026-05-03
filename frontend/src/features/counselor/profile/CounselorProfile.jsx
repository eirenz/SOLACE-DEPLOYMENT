import React, { useState, useEffect } from 'react';
import Button from '../../../components/common/Button';
import Avatar from '../../../components/common/Avatar';
import useAuthStore from '../../../store/useAuthStore';
import { fetchUserProfile, updateUserProfile, updateUserPassword } from '../../../api/userApi';
import { CircleUser, Lock, Camera, Eye, EyeOff, Check, AlertCircle, Loader2 } from 'lucide-react';

const CounselorProfile = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const updateUser = useAuthStore((state) => state.updateUser);
  const [activeTab, setActiveTab] = useState('account');
  const [isRemoving, setIsRemoving] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Account form state
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    employeeId: '',
    workPhone: '',
    license: '',
    specialization: '',
    officeLocation: '',
    experience: '',
  });

  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPasswords, setShowPasswords] = useState({ current: false, new: false, confirm: false });
  const [passwordSaving, setPasswordSaving] = useState(false);

  // Load profile on mount
  useEffect(() => {
    loadProfile();
  }, []);

  // Auto-dismiss toast after 4 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const loadProfile = async () => {
    setProfileLoading(true);
    try {
      const data = await fetchUserProfile();
      setForm({
        fullName: data.fullName || '',
        email: data.email || '',
        phoneNumber: data.phoneNumber || '',
        employeeId: data.counselorProfile?.employeeId || '',
        workPhone: data.counselorProfile?.workPhone || '',
        license: data.counselorProfile?.license || '',
        specialization: data.counselorProfile?.specialization || '',
        officeLocation: data.counselorProfile?.officeLocation || '',
        experience: data.counselorProfile?.experience || '',
      });
    } catch (err) {
      console.error('Failed to load profile:', err);
      setToast({ type: 'error', message: 'Failed to load profile data.' });
    } finally {
      setProfileLoading(false);
    }
  };

  const handleFormChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleRemoveProfilePicture = async () => {
    setIsRemoving(true);
    try {
      await updateUserProfile({ avatarUrl: null });
      updateUser({ avatarUrl: null });
      setToast({ type: 'success', message: 'Profile picture removed.' });
    } catch (error) {
      console.error('Failed to remove profile picture', error);
      setToast({ type: 'error', message: 'Failed to remove profile picture.' });
    } finally {
      setIsRemoving(false);
    }
  };

  const handleProfileUpdate = async () => {
    setSaving(true);
    try {
      // Split fullName into firstName/lastName for the backend
      const nameParts = form.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const payload = {
        firstName,
        lastName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        // Counselor-specific fields
        employeeId: form.employeeId,
        workPhone: form.workPhone,
        license: form.license,
        specialization: form.specialization,
        officeLocation: form.officeLocation,
        experience: form.experience,
      };

      const updatedData = await updateUserProfile(payload);
      
      // Update the auth store with the new name/email
      updateUser({ 
        fullName: updatedData.fullName, 
        email: updatedData.email,
        phoneNumber: updatedData.phoneNumber,
      });

      setToast({ type: 'success', message: 'Profile updated successfully!' });
    } catch (err) {
      console.error('Failed to update profile:', err);
      const errMsg = err.response?.data?.error || 'Failed to update profile.';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async () => {
    // Validation
    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      setToast({ type: 'error', message: 'Please fill in all password fields.' });
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      setToast({ type: 'error', message: 'New password must be at least 6 characters.' });
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setToast({ type: 'error', message: 'New passwords do not match.' });
      return;
    }

    setPasswordSaving(true);
    try {
      await updateUserPassword({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setToast({ type: 'success', message: 'Password changed successfully!' });
    } catch (err) {
      console.error('Failed to change password:', err);
      const errMsg = err.response?.data?.error || 'Failed to change password.';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setPasswordSaving(false);
    }
  };

  const inputStyle = { 
    width: '100%', padding: isMobile ? '0.85rem 1rem' : '1rem 1.25rem', borderRadius: '12px', border: '1.5px solid #E0E4E6', 
    fontSize: isMobile ? '0.9rem' : '0.95rem', color: '#1A1A2E', fontWeight: '600', outline: 'none', backgroundColor: '#FFFFFF',
    transition: 'all 0.3s ease'
  };

  const labelStyle = { display: 'block', fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: '800', color: '#8E9DA1', marginBottom: isMobile ? '0.5rem' : '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--primary)';
    e.target.style.boxShadow = '0 0 0 5px rgba(0, 188, 212, 0.08)';
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = '#E0E4E6';
    e.target.style.boxShadow = 'none';
  };

  const profileFields = [
    { label: 'Full Name', key: 'fullName' },
    { label: 'Email Address', key: 'email' },
    { label: 'Phone Number', key: 'phoneNumber' },
    { label: 'Employee ID', key: 'employeeId' },
    { label: 'Work Phone', key: 'workPhone' },
    { label: 'License', key: 'license' },
    { label: 'Specialization', key: 'specialization' },
    { label: 'Office Location', key: 'officeLocation' },
  ];

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      {/* Toast notification */}
      {toast && (
        <div style={{
          position: 'fixed', top: isMobile ? '1rem' : '100px', right: isMobile ? '1rem' : '2rem', left: isMobile ? '1rem' : 'auto', zIndex: 9999,
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          padding: isMobile ? '0.85rem 1.25rem' : '1rem 1.5rem', borderRadius: isMobile ? '14px' : '16px',
          backgroundColor: toast.type === 'success' ? '#E8F5E9' : '#FFEBEE',
          color: toast.type === 'success' ? '#2E7D32' : '#C62828',
          border: `1.5px solid ${toast.type === 'success' ? '#C8E6C9' : '#FFCDD2'}`,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          fontWeight: '700', fontSize: isMobile ? '0.85rem' : '0.95rem',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {toast.type === 'success' ? <Check size={isMobile ? 18 : 20} /> : <AlertCircle size={isMobile ? 18 : 20} />}
          {toast.message}
        </div>
      )}

      <header style={{ marginBottom: isMobile ? '1rem' : '2.5rem', display: 'flex', alignItems: 'center', gap: isMobile ? '0.85rem' : '1.25rem' }}>
        <div style={{ padding: '0.25rem' }}>
          <CircleUser size={isMobile ? 26 : 38} color="#1A1A2E" strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="heading-decorative" style={{ color: '#1A1A2E', fontSize: isMobile ? '1.4rem' : '2.4rem', fontWeight: '800', margin: '0' }}>Profile</h1>
          <p style={{ color: '#8E9DA1', margin: '0.15rem 0 0 0', fontWeight: '600', fontSize: isMobile ? '0.78rem' : '0.95rem' }}>Manage your personal information and security</p>
        </div>
      </header>

      <div className="card" style={{ padding: '0', borderRadius: isMobile ? '20px' : '32px', border: isMobile ? '1px solid #E8ECEE' : '1.5px solid #E0E4E6', boxShadow: isMobile ? '0 4px 20px rgba(0,0,0,0.04)' : '0 10px 40px rgba(0,0,0,0.03)', backgroundColor: '#FFFFFF', overflow: 'hidden', marginBottom: isMobile ? '6rem' : '0' }}>
        {/* Tab Headers */}
        <div style={{ display: 'flex', gap: isMobile ? '0' : '2rem', borderBottom: '1.5px solid #F0F4F5', padding: isMobile ? '0' : '0 3.5rem', backgroundColor: '#FFFFFF' }}>
          <button 
            onClick={() => setActiveTab('account')}
            style={{ 
              padding: isMobile ? '1rem 0' : '1.5rem 0.5rem', fontSize: isMobile ? '0.88rem' : '1rem', fontWeight: '800', border: 'none', background: 'none', cursor: 'pointer',
              color: activeTab === 'account' ? 'var(--primary)' : '#8E9DA1',
              borderBottom: activeTab === 'account' ? '3px solid var(--primary)' : '3px solid transparent',
              transition: 'all 0.3s ease',
              marginRight: isMobile ? '0' : '1rem',
              flex: isMobile ? 1 : 'unset',
              textAlign: 'center'
            }}
          >
            Account Settings
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            style={{ 
              padding: isMobile ? '1rem 0' : '1.5rem 0.5rem', fontSize: isMobile ? '0.88rem' : '1rem', fontWeight: '800', border: 'none', background: 'none', cursor: 'pointer',
              color: activeTab === 'security' ? 'var(--primary)' : '#8E9DA1',
              borderBottom: activeTab === 'security' ? '3px solid var(--primary)' : '3px solid transparent',
              transition: 'all 0.3s ease',
              flex: isMobile ? 1 : 'unset',
              textAlign: 'center'
            }}
          >
            Security
          </button>
        </div>

        <div style={{ padding: isMobile ? '1.25rem' : '2.5rem 3rem' }}>
          {activeTab === 'account' ? (
            profileLoading ? (
              <div style={{ textAlign: 'center', padding: isMobile ? '3rem 1rem' : '4rem', color: '#8E9DA1', fontWeight: '600' }}>
                <Loader2 size={32} style={{ animation: 'spin 1s linear infinite', marginBottom: '1rem' }} />
                <p>Loading profile...</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1.5rem' : '2.5rem' }}>
                 {/* Profile Picture Section */}
                  <div style={{ marginBottom: isMobile ? '0.5rem' : '1.5rem' }}>
                    <h4 style={{ margin: isMobile ? '0 0 1rem 0' : '0 0 1.75rem 0', color: '#1A1A2E', fontWeight: '800', fontSize: isMobile ? '0.85rem' : '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Profile Picture</h4>
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'center', gap: isMobile ? '1.25rem' : '3rem' }}>
                       <div style={{ position: 'relative' }}>
                          <Avatar size={isMobile ? 80 : 115} initials={(form.fullName || 'C').charAt(0)} />
                          <button style={{ 
                            position: 'absolute', bottom: isMobile ? '0px' : '2px', right: isMobile ? '0px' : '2px', backgroundColor: 'var(--primary)', 
                            borderRadius: '50%', padding: isMobile ? '0.5rem' : '0.65rem', border: isMobile ? '2.5px solid #FFFFFF' : '3px solid #FFFFFF', cursor: 'pointer', color: '#FFFFFF',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                          }}>
                             <Camera size={isMobile ? 14 : 20} strokeWidth={2} />
                          </button>
                       </div>
                       <div style={{ display: 'flex', gap: isMobile ? '0.6rem' : '1rem', flexDirection: 'row', width: isMobile ? '100%' : 'auto' }}>
                          <Button variant="primary" style={{ padding: isMobile ? '0.65rem 1rem' : '0.8rem 1.6rem', fontSize: isMobile ? '0.8rem' : '0.9rem', borderRadius: isMobile ? '10px' : '12px', fontWeight: '800', backgroundColor: '#00BCD4', border: 'none', boxShadow: '0 4px 15px rgba(0, 188, 212, 0.15)', flex: isMobile ? 1 : 'unset' }}>Upload Photo</Button>
                          <Button 
                            variant="secondary" 
                            onClick={handleRemoveProfilePicture}
                            disabled={isRemoving}
                            style={{ padding: isMobile ? '0.65rem 1rem' : '0.8rem 1.6rem', fontSize: isMobile ? '0.8rem' : '0.9rem', borderRadius: isMobile ? '10px' : '12px', color: '#8E9DA1', backgroundColor: '#F4F7F8', border: 'none', fontWeight: '800', cursor: isRemoving ? 'not-allowed' : 'pointer', flex: isMobile ? 1 : 'unset' }}
                          >
                            {isRemoving ? 'Removing...' : 'Remove'}
                          </Button>
                       </div>
                    </div>
                 </div>

                 <div style={{ height: '1px', backgroundColor: '#F0F4F5', margin: isMobile ? '0.25rem 0' : '0.25rem 0 2.25rem 0' }}></div>

                {/* Form Section */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '0.85rem' : '1.5rem 3rem' }}>
                  {profileFields.map((field) => (
                    <div key={field.key}>
                      <label style={labelStyle}>{field.label}</label>
                      <input 
                        type="text" 
                        value={form[field.key]}
                        onChange={(e) => handleFormChange(field.key, e.target.value)}
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                  ))}
                  <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }}>
                    <label style={labelStyle}>Experience</label>
                    <input 
                      type="text" 
                      value={form.experience}
                      onChange={(e) => handleFormChange('experience', e.target.value)}
                      style={{ ...inputStyle, padding: '1.1rem 1.4rem', borderRadius: '14px', fontSize: '1rem' }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div style={{ marginTop: isMobile ? '1rem' : '1.5rem' }}>
                   <Button 
                     variant="primary" 
                     onClick={handleProfileUpdate}
                     disabled={saving}
                     style={{ padding: isMobile ? '1rem 2rem' : '1.25rem 3.5rem', fontSize: isMobile ? '0.95rem' : '1.05rem', borderRadius: isMobile ? '14px' : '16px', fontWeight: '800', backgroundColor: '#1A1A2E', border: 'none', color: '#FFFFFF', boxShadow: '0 10px 25px rgba(26, 26, 46, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: isMobile ? '100%' : 'auto' }}
                   >
                     {saving && <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />}
                     {saving ? 'Saving...' : 'Update Profile'}
                   </Button>
                </div>
              </div>
            )
          ) : (
             <div style={{ maxWidth: isMobile ? '100%' : '650px' }}>
                <h4 style={{ margin: '0 0 0.75rem 0', color: '#1A1A2E', fontWeight: '800', fontSize: isMobile ? '0.95rem' : '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Update Your Password</h4>
                <p style={{ color: '#8E9DA1', fontSize: isMobile ? '0.82rem' : '0.9rem', marginBottom: isMobile ? '1.5rem' : '2.5rem', lineHeight: 1.6, fontWeight: '600' }}>Keep your account secure by setting a strong and unique password.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1.25rem' : '2rem' }}>
                   {[
                     { label: 'Current Password', placeholder: 'Enter your current password', key: 'currentPassword', showKey: 'current' },
                     { label: 'New Password', placeholder: 'Create a new password', key: 'newPassword', showKey: 'new' },
                     { label: 'Confirm New Password', placeholder: 'Re-enter new password', key: 'confirmPassword', showKey: 'confirm' }
                   ].map((field) => (
                     <div key={field.key}>
                        <label style={labelStyle}>{field.label}<span style={{ color: '#F44336', marginLeft: '0.2rem' }}>*</span></label>
                        <div style={{ position: 'relative' }}>
                          <input 
                            type={showPasswords[field.showKey] ? 'text' : 'password'}
                            placeholder={field.placeholder}
                            value={passwordForm[field.key]}
                            onChange={(e) => setPasswordForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                            style={inputStyle}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPasswords(prev => ({ ...prev, [field.showKey]: !prev[field.showKey] }))}
                            style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#8E9DA1' }}
                          >
                            {showPasswords[field.showKey] ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                    </div>
                  ))}
               </div>

                <div style={{ display: 'flex', gap: isMobile ? '0.75rem' : '1.5rem', marginTop: isMobile ? '1.5rem' : '3.5rem', flexDirection: isMobile ? 'column' : 'row' }}>
                   <Button 
                     variant="primary" 
                     onClick={handlePasswordChange}
                     disabled={passwordSaving}
                     style={{ padding: isMobile ? '1rem 2rem' : '1.25rem 3.5rem', fontSize: isMobile ? '0.95rem' : '1.05rem', borderRadius: isMobile ? '14px' : '16px', fontWeight: '800', backgroundColor: '#1A1A2E', border: 'none', color: '#FFFFFF', boxShadow: '0 10px 25px rgba(26, 26, 46, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: isMobile ? '100%' : 'auto' }}
                   >
                     {passwordSaving && <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />}
                     {passwordSaving ? 'Saving...' : 'Save Changes'}
                   </Button>
                   <Button 
                     variant="secondary" 
                     onClick={() => setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })}
                     style={{ padding: isMobile ? '1rem 2rem' : '1.25rem 3.5rem', fontSize: isMobile ? '0.95rem' : '1.05rem', borderRadius: isMobile ? '14px' : '16px', fontWeight: '800', border: 'none', color: '#8E9DA1', backgroundColor: '#F4F7F8', width: isMobile ? '100%' : 'auto' }}
                   >
                     Cancel
                   </Button>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounselorProfile;
