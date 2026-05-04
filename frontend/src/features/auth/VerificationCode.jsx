import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/common/Button';
import { ArrowLeft } from 'lucide-react';
import apiClient from '../../api/apiClient';

const VerificationCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (/[^0-9]/.test(val)) return;

    const newCode = [...code];
    newCode[index] = val;
    setCode(newCode);

    if (val !== '' && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const location = useLocation();
  const email = location.state?.email || '';
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    if (code.every(c => c !== '')) {
      const fullCode = code.join('');
      setIsLoading(true);
      setError('');

      try {
        await apiClient.post('/auth/verify-code', { email, code: fullCode });
        navigate('/create-password', { state: { email, code: fullCode } });
      } catch (err) {
        setError(err.response?.data?.error || 'Invalid verification code');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="auth-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px', position: 'relative' }}>
        <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
          <ArrowLeft size={24} color="var(--text-primary)" />
        </button>
        
        <h1 className="heading-decorative" style={{ color: 'var(--primary-dark)', marginBottom: '1rem', marginTop: '2.5rem', textAlign: 'center', fontSize: '1.5rem' }}>Verification Code</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.875rem' }}>
          We have sent a 6-digit code to your email.
        </p>

        {error && (
          <div style={{ backgroundColor: '#FFEBEE', color: '#D32F2F', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 'bold' }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleVerify}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            {code.map((c, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={c}
                onChange={(e) => handleChange(e, i)}
                ref={el => inputs.current[i] = el}
                disabled={isLoading}
                style={{
                  width: '40px', height: '50px', fontSize: '1.2rem', textAlign: 'center',
                  borderRadius: 'var(--radius-input)', border: '1px solid #E0E0E0', outline: 'none'
                }}
              />
            ))}
          </div>
          <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Verify'}
          </Button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Resend code in 00:30
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
