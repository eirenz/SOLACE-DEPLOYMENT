import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import apiClient from '../../api/apiClient';

const CreatePassword = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [success, setSuccess] = useState(false);

  const email = window.history.state?.usr?.email || '';
  const code = window.history.state?.usr?.code || '';
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (pass !== confirm) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await apiClient.post('/auth/reset-password', { email, code, newPassword: pass });
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update password. Please request a new code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px', position: 'relative' }}>
        <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
          <ArrowLeft size={24} color="var(--text-primary)" />
        </button>
        
        <h1 className="heading-decorative" style={{ color: 'var(--primary-dark)', marginBottom: '1rem', marginTop: '2.5rem', textAlign: 'center', fontSize: '1.5rem' }}>Create New Password</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
          Your new password must be different from previously used passwords.
        </p>

        {error && (
          <div style={{ backgroundColor: '#FFEBEE', color: '#D32F2F', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 'bold' }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleUpdate}>
          <Input 
            label="New Password" 
            type="password" 
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            disabled={isLoading}
          />
          <Input 
            label="Confirm Password" 
            type="password" 
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            disabled={isLoading}
          />
          <Button type="submit" variant="primary" fullWidth style={{ marginTop: '1rem' }} disabled={isLoading}>
            {isLoading ? 'Updating...' : 'Update Password'}
          </Button>
        </form>
      </div>

      <Modal isOpen={success} onClose={() => {}}>
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <CheckCircle size={64} color="var(--success)" style={{ marginBottom: '1rem' }} />
          <h2 className="heading-decorative" style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Password Updated!</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Your password has been successfully reset.</p>
          <Button variant="primary" fullWidth onClick={() => navigate('/login')}>LOGIN</Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePassword;
