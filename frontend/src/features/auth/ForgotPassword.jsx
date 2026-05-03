import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { ArrowLeft } from 'lucide-react';
import apiClient from '../../api/apiClient';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');

    try {
      await apiClient.post('/auth/forgot-password', { email });
      navigate('/verify-code', { state: { email } });
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send verification code. Please try again.');
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
        
        <h1 className="heading-decorative" style={{ color: 'var(--primary-dark)', marginBottom: '1rem', marginTop: '2.5rem', textAlign: 'center', fontSize: '1.5rem' }}>Forgot Password</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
          Enter your email address to receive a verification code.
        </p>

        {error && (
          <div style={{ backgroundColor: '#FFEBEE', color: '#D32F2F', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 'bold' }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSend}>
          <Input 
            label="Email" 
            type="email" 
            placeholder="example@student.edu.ph"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <Button type="submit" variant="primary" fullWidth style={{ marginTop: '1rem' }} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Code'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
