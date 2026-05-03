import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import useAuthStore from '../../store/useAuthStore';
import apiClient from '../../api/apiClient';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const DARK_TEAL = '#064E3B';
const LIGHT_TEAL = '#A5F3FC';

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'dummy_google_id';
  const facebookAppId = import.meta.env.VITE_FACEBOOK_APP_ID || 'dummy_facebook_id';

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoading(true);
    setError('');
    try {
      const { data } = await apiClient.post('/auth/login', { email, password });
      const roleMap = { 'STUDENT': 'user', 'COUNSELOR': 'counselor', 'ADMIN': 'admin' };
      const frontendRole = roleMap[data.role] || 'user';
      login(data.user, frontendRole, data.token);
      if (frontendRole === 'counselor') navigate('/counselor/dashboard');
      else if (frontendRole === 'admin') navigate('/admin/dashboard');
      else navigate('/user/checkin');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to log in. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSuccess = async (provider, token) => {
    setIsLoading(true);
    setError('');
    try {
      const { data } = await apiClient.post(`/auth/${provider}`, provider === 'google' ? { token } : { accessToken: token });
      const roleMap = { 'STUDENT': 'user', 'COUNSELOR': 'counselor', 'ADMIN': 'admin' };
      const frontendRole = roleMap[data.role] || 'user';
      login(data.user, frontendRole, data.token);
      if (frontendRole === 'counselor') navigate('/counselor/dashboard');
      else if (frontendRole === 'admin') navigate('/admin/dashboard');
      else navigate('/user/checkin');
    } catch (err) {
      const data = err.response?.data;
      setError(data?.error || `${provider} login failed.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '2rem',
      backgroundColor: '#F9FAFB',
      backgroundImage: 'radial-gradient(circle at top right, #E0F2F1, transparent), radial-gradient(circle at bottom left, #E0F7FA, transparent)',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '440px', 
        backgroundColor: '#FFFFFF',
        borderRadius: '32px',
        padding: '3.5rem',
        boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          color: DARK_TEAL, 
          marginBottom: '0.75rem', 
          fontSize: '2.2rem', 
          fontWeight: '900',
          letterSpacing: '-0.03em'
        }}>Welcome to Solace</h1>
        <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: '2.5rem', fontWeight: '500' }}>
          Your journey to wellness starts here.
        </p>
        
        {error && (
          <div style={{ 
            backgroundColor: '#FEF2F2', 
            color: '#EF4444', 
            padding: '1rem', 
            borderRadius: '12px', 
            marginBottom: '1.5rem', 
            fontSize: '0.85rem', 
            fontWeight: '600',
            border: '1px solid #FEE2E2'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#374151', marginBottom: '0.5rem', marginLeft: '0.25rem' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem',
                borderRadius: '14px',
                border: '1.5px solid #F3F4F6',
                backgroundColor: '#F9FAFB',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = DARK_TEAL;
                e.target.style.backgroundColor = '#FFFFFF';
                e.target.style.boxShadow = '0 0 0 4px rgba(6, 78, 59, 0.05)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#F3F4F6';
                e.target.style.backgroundColor = '#F9FAFB';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '0.75rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#374151', marginBottom: '0.5rem', marginLeft: '0.25rem' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem',
                borderRadius: '14px',
                border: '1.5px solid #F3F4F6',
                backgroundColor: '#F9FAFB',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = DARK_TEAL;
                e.target.style.backgroundColor = '#FFFFFF';
                e.target.style.boxShadow = '0 0 0 4px rgba(6, 78, 59, 0.05)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#F3F4F6';
                e.target.style.backgroundColor = '#F9FAFB';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <div style={{ textAlign: 'right', marginBottom: '2rem' }}>
            <Link to="/forgot-password" style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: '600' }}>Forgot password?</Link>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '14px',
              border: 'none',
              backgroundColor: DARK_TEAL,
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(6, 78, 59, 0.15)'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'center', color: '#9CA3AF' }}>
          <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #F3F4F6' }} />
          <span style={{ padding: '0 1rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Or continue with</span>
          <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #F3F4F6' }} />
        </div>

        <GoogleOAuthProvider clientId={googleClientId}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <GoogleLogin
                onSuccess={(credentialResponse) => handleOAuthSuccess('google', credentialResponse.credential)}
                onError={() => setError('Google Login Failed')}
                text="signin_with"
                size="large"
                shape="pill"
                width="100%"
              />
            </div>
            
            <FacebookLogin
              appId={facebookAppId}
              autoLoad={false}
              fields="name,email,picture"
              callback={(response) => response.accessToken && handleOAuthSuccess('facebook', response.accessToken)}
              render={renderProps => (
                <button 
                  onClick={renderProps.onClick} 
                  disabled={isLoading}
                  style={{ 
                    flex: 1, height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '100px',
                    color: '#374151', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer'
                  }}
                >
                  Facebook
                </button>
              )}
            />
          </div>
        </GoogleOAuthProvider>

        <p style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: '500' }}>
          New to Solace? <Link to="/signup" style={{ color: DARK_TEAL, fontWeight: '800', textDecoration: 'none' }}>Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
