import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import useAuthStore from '../../store/useAuthStore';
import apiClient from '../../api/apiClient';
import { ShieldCheck } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const { data } = await apiClient.post('/auth/admin-login', { email, password });
      
      login(data.user, 'admin', data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Invalid admin credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backgroundColor: '#F0F4F5' }}>
      <div className="card" style={{ 
        width: '100%', 
        maxWidth: '420px', 
        textAlign: 'center',
        padding: '3rem',
        borderRadius: '32px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
        backgroundColor: '#FFFFFF',
        border: '2px solid #52979B'
      }}>
        <div style={{ 
          backgroundColor: '#52979B', 
          width: '70px', 
          height: '70px', 
          borderRadius: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 2rem auto',
          color: '#FFF'
        }}>
          <ShieldCheck size={40} />
        </div>
        
        <h1 className="heading-decorative" style={{ color: '#1A1A2E', marginBottom: '1rem', fontSize: '2rem', fontWeight: '800' }}>Admin Portal</h1>
        <p style={{ color: '#8E9DA1', fontSize: '1rem', fontWeight: '600', marginBottom: '2.5rem' }}>Secure access for Project SOLACE administrators</p>
        
        {error && (
          <div style={{ backgroundColor: '#FFEBEE', color: '#D32F2F', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: '700' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleAdminLogin} style={{ textAlign: 'left' }}>
          <Input 
            label="Admin Email" 
            type="email" 
            placeholder="admin@solace.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <div style={{ marginBottom: '2rem' }}>
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          
          <Button type="submit" variant="primary" fullWidth style={{ backgroundColor: '#52979B', padding: '1.25rem', fontSize: '1.1rem' }} disabled={isLoading}>
            {isLoading ? 'AUTHORIZING...' : 'AUTHORIZE ACCESS'}
          </Button>
        </form>

        <p style={{ marginTop: '2.5rem', fontSize: '0.85rem', color: '#8E9DA1', fontWeight: '600' }}>
          Restricted Access Area
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
