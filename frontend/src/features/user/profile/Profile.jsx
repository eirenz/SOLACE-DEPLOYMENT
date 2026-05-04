import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../../components/common/Avatar';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { 
  User, Shield, Bell, HelpCircle, LogOut, 
  ChevronRight, Camera, Trash2, Settings,
  Lock, Globe, Mail
} from 'lucide-react';

import useAuthStore from '../../../store/useAuthStore';
import { updateUserProfile, updateUserPassword } from '../../../api/userApi';

const Profile = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const [activeView, setActiveView] = useState('account');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isPhone, setIsPhone] = useState(window.innerWidth < 600);
  
  const [profileForm, setProfileForm] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    alias: user?.alias || '',
  });
  
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileMessage, setProfileMessage] = useState({ type: '', text: '' });
  
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState({ type: '', text: '' });

  // Update form if user data changes (e.g. on load)
  useEffect(() => {
    if (user) {
      setProfileForm({
        fullName: user.fullName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        alias: user.alias || '',
      });
    }
  }, [user]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsPhone(window.innerWidth < 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleProfileChange = (e) => {
    const { id, value } = e.target;
    // We can map id to state property if id matches, otherwise we use the name
    // But since inputId in Input.jsx might be generated differently, let's use name or rely on specific onChange
  };
  
  // Custom onChange for the inputs
  const handleProfileFieldChange = (field, value) => {
    setProfileForm(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = async () => {
    try {
      setIsSavingProfile(true);
      setProfileMessage({ type: '', text: '' });
      const updatedUser = await updateUserProfile(profileForm);
      // Update global store
      useAuthStore.getState().updateUser(updatedUser.user || profileForm);
      setProfileMessage({ type: 'success', text: 'Profile updated successfully.' });
    } catch (error) {
      setProfileMessage({ type: 'error', text: error.response?.data?.error || 'Failed to update profile.' });
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleSavePassword = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordMessage({ type: 'error', text: 'New passwords do not match.' });
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      setPasswordMessage({ type: 'error', text: 'Password must be at least 6 characters.' });
      return;
    }
    try {
      setIsSavingPassword(true);
      setPasswordMessage({ type: '', text: '' });
      await updateUserPassword({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      });
      setPasswordMessage({ type: 'success', text: 'Password updated successfully.' });
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      setPasswordMessage({ type: 'error', text: error.response?.data?.error || 'Failed to update password.' });
    } finally {
      setIsSavingPassword(false);
    }
  };

  const navItems = [
    { id: 'account', label: 'My Account', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'account':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: isPhone ? '1.5rem' : '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: isPhone ? '1.5rem' : '1.75rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '0.5rem' }}>Account Settings</h2>
              <p style={{ color: '#666666', fontWeight: '500', fontSize: isPhone ? '0.9rem' : '1rem' }}>Manage your profile information.</p>
            </div>

            <section style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: isPhone ? '1.25rem' : '2rem', 
              padding: isPhone ? '1.25rem' : '2rem', 
              backgroundColor: '#F8FAFB', 
              borderRadius: '24px',
              border: '1px solid #E0E0E0',
              flexDirection: isPhone ? 'column' : 'row',
              textAlign: isPhone ? 'center' : 'left'
            }}>
              <div style={{ position: 'relative' }}>
                <Avatar initials={(user?.fullName?.charAt(0) || user?.alias?.charAt(0) || 'U').toUpperCase()} size={isPhone ? 70 : 90} bgColor="#E0F7FA" />
                <button style={{ 
                  position: 'absolute', bottom: '-2px', right: '-2px', 
                  backgroundColor: '#00BCD4', color: '#FFFFFF', 
                  border: '2px solid #FFFFFF', borderRadius: '50%', 
                  padding: '0.4rem', cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <Camera size={14} />
                </button>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Button variant="outline" size="small" style={{ borderRadius: '10px', fontSize: isPhone ? '0.8rem' : '0.9rem' }}>Upload Photo</Button>
                <Button variant="ghost" size="small" style={{ color: '#F44336', borderRadius: '10px', fontSize: isPhone ? '0.8rem' : '0.9rem' }}>Remove</Button>
              </div>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem' }}>
              <Input label="Full Name" value={profileForm.fullName} onChange={(e) => handleProfileFieldChange('fullName', e.target.value)} />
              <Input label="Email Address" type="email" value={profileForm.email} onChange={(e) => handleProfileFieldChange('email', e.target.value)} />
              <Input label="Phone Number" type="tel" value={profileForm.phoneNumber} onChange={(e) => handleProfileFieldChange('phoneNumber', e.target.value)} />
              <Input label="Alias/Username" value={profileForm.alias} onChange={(e) => handleProfileFieldChange('alias', e.target.value)} />
            </div>

            {profileMessage.text && (
              <div style={{ 
                padding: '0.75rem 1rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600',
                backgroundColor: profileMessage.type === 'error' ? '#FFEBEE' : '#E8F5E9',
                color: profileMessage.type === 'error' ? '#C62828' : '#2E7D32'
              }}>
                {profileMessage.text}
              </div>
            )}

            <div style={{ borderTop: '1px solid #EEEEEE', paddingTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={handleSaveProfile} disabled={isSavingProfile} variant="primary" style={{ padding: '0.8rem 2.5rem', borderRadius: '14px', fontWeight: '700' }}>
                {isSavingProfile ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>
        );
      case 'security':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '700px' }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '0.5rem' }}>Security & Privacy</h2>
              <p style={{ color: '#666666', fontWeight: '500' }}>Protect your account with a strong password and security settings.</p>
            </div>

            <Card style={{ padding: '2rem', borderRadius: '24px', border: '1px solid #E0E0E0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem' }}>Change Password</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Input label="Current Password" type="password" placeholder="••••••••" value={passwordForm.currentPassword} onChange={(e) => handlePasswordChange('currentPassword', e.target.value)} />
                <Input label="New Password" type="password" placeholder="Enter new password" value={passwordForm.newPassword} onChange={(e) => handlePasswordChange('newPassword', e.target.value)} />
                <Input label="Confirm New Password" type="password" placeholder="Confirm new password" value={passwordForm.confirmPassword} onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)} />
                
                {passwordMessage.text && (
                  <div style={{ 
                    padding: '0.75rem 1rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600',
                    backgroundColor: passwordMessage.type === 'error' ? '#FFEBEE' : '#E8F5E9',
                    color: passwordMessage.type === 'error' ? '#C62828' : '#2E7D32'
                  }}>
                    {passwordMessage.text}
                  </div>
                )}
                
                <Button onClick={handleSavePassword} disabled={isSavingPassword} variant="primary" style={{ marginTop: '0.5rem', borderRadius: '12px' }}>
                  {isSavingPassword ? 'Updating...' : 'Update Password'}
                </Button>
              </div>
            </Card>
          </div>
        );
      case 'notifications':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: isPhone ? '1.5rem' : '2.5rem' }}>
             <div>
              <h2 style={{ fontSize: isPhone ? '1.5rem' : '1.75rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '0.5rem' }}>Notifications</h2>
              <p style={{ color: '#666666', fontWeight: '500', fontSize: isPhone ? '0.9rem' : '1rem' }}>Control your alerts.</p>
            </div>
            <Card style={{ padding: '0.5rem', borderRadius: '24px', border: '1px solid #E0E0E0', overflow: 'hidden' }}>
              {[
                { label: 'Email Notifications', desc: 'Daily check-in reminders.', icon: Mail },
                { label: 'Push Notifications', desc: 'Instant mobile alerts.', icon: Globe },
                { label: 'Security Alerts', desc: 'Login notifications.', icon: Shield }
              ].map((item, idx, arr) => (
                <div key={item.label} style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  padding: isPhone ? '1.25rem 1rem' : '1.5rem', borderBottom: idx === arr.length - 1 ? 'none' : '1px solid #EEEEEE'
                }}>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <item.icon size={18} color="#00BCD4" />
                    <div>
                      <p style={{ fontWeight: '700', margin: 0, fontSize: isPhone ? '0.9rem' : '1rem' }}>{item.label}</p>
                      <p style={{ fontSize: '0.75rem', color: '#666666', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                  <div style={{ 
                    width: '36px', height: '20px', backgroundColor: '#00BCD4', 
                    borderRadius: '20px', position: 'relative', cursor: 'pointer' 
                  }}>
                    <div style={{ 
                      width: '14px', height: '14px', backgroundColor: '#FFF', 
                      borderRadius: '50%', position: 'absolute', right: '3px', top: '3px',
                      boxShadow: 'var(--shadow-sm)'
                    }} />
                  </div>
                </div>
              ))}
            </Card>
          </div>
        )
      default:
        return null;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row', 
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      animation: 'fadeIn 0.4s ease-out'
    }}>
      {/* Settings Navigation Sidebar */}
      <aside style={{ 
        width: isMobile ? '100%' : '340px', 
        backgroundColor: '#F8FAFB', 
        borderRight: isMobile ? 'none' : '1px solid #E0E0E0',
        padding: isPhone ? '1.5rem 1rem' : '3rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: isPhone ? '1.5rem' : '3rem',
        position: isMobile ? 'static' : 'sticky',
        top: 0,
        height: isMobile ? 'auto' : '100vh',
        zIndex: 10
      }}>
        <div>
          <h1 className="heading-decorative" style={{ fontSize: isPhone ? '1.4rem' : '1.75rem', fontWeight: '900', color: '#1A1A2E', marginBottom: isPhone ? '1rem' : '2.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Settings size={isPhone ? 22 : 28} color="#00BCD4" strokeWidth={2.5} /> Settings
          </h1>
          <nav style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'row' : 'column', 
            gap: '0.6rem',
            overflowX: isMobile ? 'auto' : 'visible',
            paddingBottom: isMobile ? '0.5rem' : 0
          }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: isPhone ? '0.6rem' : '1.2rem',
                  padding: isPhone ? '0.7rem 1rem' : '1.1rem 1.5rem', borderRadius: '18px',
                  backgroundColor: activeView === item.id ? '#FFFFFF' : 'transparent',
                  color: activeView === item.id ? '#00BCD4' : '#666666',
                  fontWeight: activeView === item.id ? '850' : '600',
                  fontSize: isPhone ? '0.9rem' : '1.05rem', cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: activeView === item.id ? '0 8px 15px rgba(0,0,0,0.03)' : 'none',
                  border: activeView === item.id ? '1px solid #E0E0E0' : '1px solid transparent',
                  position: 'relative',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {activeView === item.id && (
                  <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '4px', backgroundColor: '#00BCD4', borderRadius: '0 4px 4px 0' }} />
                )}
                <item.icon size={22} style={{ opacity: activeView === item.id ? 1 : 0.6 }} strokeWidth={activeView === item.id ? 2.5 : 2} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <button 
            onClick={handleLogout}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '1rem', 
              width: '100%', padding: '1.1rem 1.5rem', backgroundColor: '#FFF5F5', color: '#F44336', 
              border: '1.5px solid #FFEBEE', borderRadius: '18px', fontWeight: '850', fontSize: '1.05rem',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FFE5E5'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFF5F5'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <LogOut size={22} strokeWidth={2.5} />
            Log Out Account
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ 
        flex: 1, 
        padding: isPhone ? '1.5rem 1rem 6rem 1rem' : (isMobile ? '3rem 1.5rem' : '5rem 8rem'),
        maxWidth: '1300px',
        backgroundColor: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '900px', width: '100%' }}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Profile;
