import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../../api/apiClient';
import { Droplet, Wind, Edit2, Activity, EyeOff, Moon, CheckSquare } from 'lucide-react';
import useAuthStore from '../../../store/useAuthStore';

const DARK_TEAL = '#064E3B';
const LIGHT_TEAL = '#A5F3FC';

const MOODS = [
  { 
    id: 'happy', icon: '😊', label: 'Happy', 
    color: '#ECFDF5',
    quote: "Happiness looks good\non you.", 
    tasks: [{ text: "Write one positive thought", icon: Edit2 }, { text: "Take a deep happy breath", icon: Wind }] 
  },
  { 
    id: 'neutral', icon: '😐', label: 'Neutral', 
    color: '#FEF3C7',
    quote: "Not every day must be\nintense.", 
    tasks: [{ text: "Sit comfortably", icon: Activity }, { text: "Stretch your neck and back.", icon: Activity }] 
  },
  { 
    id: 'stressed', icon: '😫', label: 'Stressed', 
    color: '#FFEDD5',
    quote: "You don't have to solve\neverything today.", 
    tasks: [{ text: "Close your eyes for 30 seconds.", icon: EyeOff }, { text: "Take 3 slow breaths (in... out...)", icon: Wind }] 
  },
  { 
    id: 'sad', icon: '😢', label: 'Sad', 
    color: '#FEE2E2',
    quote: "It's okay to feel down.\nBe kind to yourself.", 
    tasks: [{ text: "Drink a glass of water", icon: Droplet }, { text: "Take 3 slow breaths (in... out...)", icon: Wind }] 
  },
  { 
    id: 'angry', icon: '😤', label: 'Angry', 
    color: '#FEE2E2',
    quote: "Calm minds make\nstrong choices.", 
    tasks: [{ text: "Pause and stay silent for a moment", icon: Moon }, { text: "Walk around briefly.", icon: Activity }] 
  }
];

const CheckIn = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [step, setStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchTodayCheckin = async () => {
      if (user?.email === 'testcheckin@solace.com') return;
      try {
        const { data } = await apiClient.get('/checkins/today');
        if (data) navigate('/user/dashboard', { replace: true });
      } catch (err) {
        console.error('Failed to fetch today checkin', err);
      }
    };
    fetchTodayCheckin();
  }, [navigate, user]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (e) => {
    if (e.target.scrollLeft > 10 && showScrollHint) setShowScrollHint(false);
  };

  const submitCheckin = async () => {
    if (!selectedMood) return;
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      await apiClient.post('/checkins', {
        mood: selectedMood.id.toUpperCase(),
        tasks: selectedMood.tasks.map(t => t.text)
      });
      setStep(3);
    } catch (error) {
       setErrorMsg(error.response?.data?.error || 'Failed to save check-in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const PageBackground = ({ children }) => (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9FAFB',
      backgroundImage: 'radial-gradient(circle at top right, #E0F2F1, transparent), radial-gradient(circle at bottom left, #E0F7FA, transparent)',
      fontFamily: "'Inter', sans-serif"
    }}>
      {children}
    </div>
  );

  const StepCard = ({ children, style = {} }) => (
    <div style={{ 
      width: '100%', 
      maxWidth: '540px', 
      backgroundColor: '#FFFFFF',
      borderRadius: '32px',
      padding: isMobile ? '2.5rem 1.25rem' : '3.5rem',
      boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
      textAlign: 'center',
      ...style
    }}>
      {children}
    </div>
  );

  const ActionButton = ({ onClick, disabled, children, dark = false }) => (
    <button 
      onClick={onClick} 
      disabled={disabled}
      style={{ 
        backgroundColor: dark ? DARK_TEAL : '#FFFFFF', 
        color: dark ? '#FFFFFF' : DARK_TEAL, 
        border: dark ? 'none' : `1.5px solid ${DARK_TEAL}`, 
        borderRadius: '16px', 
        padding: '1.1rem', 
        fontWeight: '700', fontSize: '1.1rem', cursor: disabled ? 'default' : 'pointer',
        width: '100%', maxWidth: '440px', marginTop: '2.5rem',
        opacity: disabled ? 0.6 : 1,
        transition: 'all 0.2s',
        boxShadow: dark ? '0 8px 20px rgba(6, 78, 59, 0.15)' : 'none'
      }}
      onMouseEnter={(e) => { if(!disabled) e.target.style.opacity = '0.9'; }}
      onMouseLeave={(e) => { if(!disabled) e.target.style.opacity = '1'; }}
    >
      {children}
    </button>
  );

  if (step === 1) {
    return (
      <PageBackground>
        <StepCard>
          <h1 style={{ color: DARK_TEAL, fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: '900', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            How are you<br />feeling today?
          </h1>
          <p style={{ color: '#6B7280', fontSize: '1rem', marginBottom: '3.5rem', fontWeight: '600' }}>Tap an emoji to check-in</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '0.4rem' : '1rem' }}>
            {MOODS.map(mood => (
              <div key={mood.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <div 
                  onClick={() => setSelectedMood(mood)}
                  style={{
                    width: isMobile ? '48px' : '64px', height: isMobile ? '48px' : '64px', borderRadius: '18px', backgroundColor: mood.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isMobile ? '1.5rem' : '2.25rem',
                    cursor: 'pointer', transition: 'all 0.2s',
                    border: selectedMood?.id === mood.id ? `3px solid ${DARK_TEAL}` : 'none',
                    transform: selectedMood?.id === mood.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  {mood.icon}
                </div>
                <span style={{ fontSize: isMobile ? '0.55rem' : '0.65rem', fontWeight: '800', color: selectedMood?.id === mood.id ? DARK_TEAL : '#9CA3AF' }}>{mood.label.toUpperCase()}</span>
              </div>
            ))}
          </div>
          
          <ActionButton onClick={() => setStep(2)} disabled={!selectedMood} dark>Next</ActionButton>
        </StepCard>
      </PageBackground>
    );
  }

  if (step === 2 && selectedMood) {
    return (
      <PageBackground>
        <StepCard style={{ padding: '3rem 2.5rem' }}>
          <h1 style={{ color: DARK_TEAL, fontSize: '2rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Reflection
          </h1>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{selectedMood.icon}</div>
          <p style={{ color: DARK_TEAL, fontSize: '1.25rem', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {selectedMood.label}
          </p>
          <p style={{ color: '#4B5563', fontSize: '1.3rem', fontWeight: '500', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line', fontStyle: 'italic' }}>
            "{selectedMood.quote}"
          </p>

          <div style={{ marginTop: '2.5rem', textAlign: 'left', width: '100%' }}>
            <p style={{ color: DARK_TEAL, fontSize: '0.9rem', fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase' }}>Daily Reset Tasks</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedMood.tasks.map((task, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: '#F9FAFB', borderRadius: '16px', padding: '1rem 1.25rem', 
                  display: 'flex', alignItems: 'center', gap: '1rem', border: '1.5px solid #F3F4F6'
                }}>
                  <div style={{ color: DARK_TEAL }}><task.icon size={20} strokeWidth={2.5} /></div>
                  <span style={{ color: '#374151', fontSize: '0.95rem', fontWeight: '600' }}>{task.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {errorMsg && (
            <div style={{ marginTop: '1.5rem', color: '#DC2626', backgroundColor: '#FEE2E2', padding: '1rem', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '600' }}>
              {errorMsg}
            </div>
          )}

          <ActionButton onClick={submitCheckin} disabled={isSubmitting} dark>
            {isSubmitting ? 'Saving...' : 'Finish Check-in'}
          </ActionButton>
        </StepCard>
      </PageBackground>
    );
  }

  return (
    <PageBackground>
      <StepCard style={{ padding: '4rem 3rem' }}>
        <div style={{ color: DARK_TEAL, marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#ECFDF5', padding: '1.5rem', borderRadius: '50%', color: '#10B981' }}>
            <CheckSquare size={48} strokeWidth={2.5} />
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.02em' }}>Check-in Saved</h2>
        </div>
        
        <p style={{ color: '#6B7280', fontSize: '1.1rem', marginBottom: '2.5rem', fontWeight: '500' }}>
          Well done, {user?.fullName?.split(' ')[0] || 'friend'}.<br />
          Your mood has been recorded for today.
        </p>

        <ActionButton onClick={() => navigate('/user/dashboard')} dark>Go to Dashboard</ActionButton>
      </StepCard>
    </PageBackground>
  );
};

export default CheckIn;
