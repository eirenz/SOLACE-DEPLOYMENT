import React, { useState, useRef, useEffect } from 'react';
import Card from '../../../components/common/Card';
import { BookOpen, Users, BarChart2, Calendar, FileText, Activity, CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/useAuthStore';
import apiClient from '../../../api/apiClient';

const PRIMARY = '#2d6465';
const PRIMARY_FIXED = '#b5edec';

const MobileFeatureCard = ({ title, icon: Icon, onClick, bgColor, textColor }) => (
  <div onClick={onClick} className="bento-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer' }}>
    <div style={{ padding: '0.75rem', backgroundColor: bgColor, color: textColor, borderRadius: '0.75rem' }}>
      <Icon size={24} strokeWidth={2} />
    </div>
    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: 1.2, margin: 0, color: '#191c1c' }}>{title}</h3>
  </div>
);

const FeatureCard = ({ title, description, icon: Icon, buttonText, buttonVariant = 'light', onClick }) => (
  <Card style={{
    padding: '2rem',
    borderRadius: '24px',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    border: 'none',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    height: '100%'
  }}>
    <div style={{
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      backgroundColor: '#F3F4F6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem'
    }}>
      <Icon size={24} color={PRIMARY} strokeWidth={2} />
    </div>
    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', margin: 0 }}>{title}</h3>
    <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.5, flex: 1 }}>{description}</p>
    <button 
      onClick={onClick}
      style={{
        marginTop: '1.5rem',
        padding: '0.85rem',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: buttonVariant === 'dark' ? PRIMARY : PRIMARY_FIXED,
        color: buttonVariant === 'dark' ? '#FFFFFF' : PRIMARY,
        fontWeight: '700',
        fontSize: '0.95rem',
        cursor: 'pointer',
        transition: 'opacity 0.2s'
      }}
      onMouseEnter={(e) => e.target.style.opacity = '0.9'}
      onMouseLeave={(e) => e.target.style.opacity = '1'}
    >
      {buttonText}
    </button>
  </Card>
);

const HomeDashboard = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [weeklyPercentages, setWeeklyPercentages] = useState([0, 0, 0, 0]);
  const [isLoading, setIsLoading] = useState(true);
  const [todayMood, setTodayMood] = useState(null);

  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).toUpperCase();
  const currentMonthNum = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    
    const fetchData = async () => {
      try {
        const [weeklyRes, todayRes] = await Promise.all([
          apiClient.get(`/checkins/weekly-analysis?month=${currentMonthNum}&year=${currentYear}`),
          apiClient.get('/checkins/today')
        ]);
        if (weeklyRes.data && weeklyRes.data.percentages) {
          setWeeklyPercentages(weeklyRes.data.percentages);
        }
        if (todayRes.data && todayRes.data.mood) {
          setTodayMood(todayRes.data.mood);
        }
      } catch (err) {
        console.error('Failed to fetch dashboard data', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => window.removeEventListener('resize', handleResize);
  }, [currentMonthNum, currentYear]);

  const moodEmojis = [
    { label: 'Happy', emoji: '😊', color: '#ECFDF5' },
    { label: 'Neutral', emoji: '😐', color: '#FEF3C7' },
    { label: 'Stressed', emoji: '😫', color: '#FFEDD5' },
    { label: 'Sad', emoji: '😢', color: '#FEE2E2' },
    { label: 'Angry', emoji: '😤', color: '#FEE2E2' }
  ];

  const chartData = [
    { label: 'WK 1', value: weeklyPercentages[0] || 0, avg: 65 },
    { label: 'WK 2', value: weeklyPercentages[1] || 0, avg: 70 },
    { label: 'WK 3', value: weeklyPercentages[2] || 0, avg: 60 },
    { label: 'WK 4', value: weeklyPercentages[3] || 0, avg: 75 }
  ];

  const yAxisEmojis = ['😊', '😐', '😫', '😢', '😤'];

  return (
    <div style={{ padding: isMobile ? '1.5rem 1.25rem 6rem' : '2rem 3rem', backgroundColor: '#F8FAF9', height: '100%', overflowY: 'auto', animation: 'fadeIn 0.5s ease-out' }}>
      
      {/* Header */}
      <div style={{ marginBottom: isMobile ? '1.5rem' : '3rem' }}>
        <h1 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: isMobile ? '700' : '900', color: '#191c1c', margin: 0, letterSpacing: '-0.02em', fontFamily: 'var(--m-font)' }}>
          Welcome Back, {user?.fullName?.split(' ')[0] || 'Bea'}
        </h1>
        {isMobile ? (
          <p style={{ fontSize: '1rem', color: '#404848', marginTop: '0.5rem', fontFamily: 'var(--m-font)' }}>Take a moment for your mind today.</p>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: PRIMARY }}>
            <Calendar size={18} strokeWidth={2.5} />
            <span style={{ fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em' }}>{dateString}</span>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1.5rem' : '2.5rem' }}>
        
        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '450px 1fr', gap: isMobile ? '1.5rem' : '2rem' }}>
          
          {/* Mood Card */}
          <div className={isMobile ? "bento-card" : ""} style={!isMobile ? { padding: '2.5rem', borderRadius: '32px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 30px rgba(0,0,0,0.02)' } : {}}>
            <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: isMobile ? '600' : '800', color: '#191c1c', marginBottom: isMobile ? '1.5rem' : '0.5rem' }}>How are you feeling?</h2>
            {!isMobile && <p style={{ color: '#6B7280', marginBottom: '2.5rem', fontSize: '1rem' }}>Take a moment to check in with yourself.</p>}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {moodEmojis.map((m, i) => {
                const isSelected = todayMood ? todayMood === m.label.toUpperCase() : false;
                return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <button 
                    style={{ 
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontSize: isMobile ? '1.875rem' : '2rem', 
                      filter: isSelected ? 'none' : 'grayscale(100%)',
                      transition: 'all 0.3s',
                      ...(isSelected && isMobile ? { padding: '0.25rem', borderRadius: '0.75rem', boxShadow: '0 0 0 2px #2d6465', outline: '4px solid #f8faf9' } : {})
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.filter = 'none'}
                    onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.filter = 'grayscale(100%)' }}
                    onClick={() => navigate('/user/checkin')}
                  >
                    {m.emoji}
                  </button>
                  <span style={{ fontSize: '0.75rem', fontWeight: isSelected ? '700' : '600', color: isSelected ? '#2d6465' : '#404848' }}>{m.label}</span>
                </div>
              )})}
            </div>
          </div>

          {/* Monthly Overview Card */}
          <div className={isMobile ? "bento-card" : ""} style={!isMobile ? { padding: '2.5rem', borderRadius: '32px', backgroundColor: '#FFFFFF', boxShadow: '0 4px 30px rgba(0,0,0,0.02)' } : {}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: isMobile ? '600' : '800', color: '#191c1c', margin: 0 }}>Monthly Overview</h2>
              {isMobile ? (
                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: PRIMARY }}>Avg: 8.4</span>
              ) : (
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: PRIMARY }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#9CA3AF' }}>MOOD</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E5E7EB' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#9CA3AF' }}>AVG</span>
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', height: isMobile ? '160px' : '220px', gap: '1rem', position: 'relative' }}>
              {!isMobile && (
                <div style={{ 
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', 
                  paddingBottom: '2.5rem', fontSize: '1.25rem', paddingRight: '0.5rem',
                  minWidth: '30px'
                }}>
                  {yAxisEmojis.map((e, idx) => (
                    <span key={idx} style={{ opacity: 0.8, cursor: 'default' }}>{e}</span>
                  ))}
                </div>
              )}

              <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '100%', gap: '1rem', position: 'relative' }}>
                {chartData.map((d, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flex: 1, position: 'relative', height: '100%', justifyContent: 'flex-end' }}>
                    {!isMobile && (
                      <div style={{ 
                        width: '100%', maxWidth: '60px', height: `${d.avg}%`, backgroundColor: '#F3F4F6',
                        borderRadius: '100px 100px 0 0', position: 'absolute', bottom: '2.5rem', opacity: 0.8
                      }} />
                    )}
                    <div style={{ 
                      width: '100%', maxWidth: '60px', height: `${d.value}%`, backgroundColor: isMobile ? '#99d0d0' : PRIMARY,
                      borderRadius: isMobile ? '0.5rem 0.5rem 0 0' : '100px 100px 0 0', zIndex: 1, marginBottom: isMobile ? '1.5rem' : '2.5rem',
                      transition: 'height 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }} />
                    <span style={{ position: 'absolute', bottom: 0, fontSize: '0.75rem', fontWeight: isMobile ? '600' : '800', color: isMobile ? '#707978' : '#9CA3AF', opacity: isMobile ? 0.8 : 1 }}>{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Grid */}
        {isMobile ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <MobileFeatureCard title="Write a journal" icon={FileText} bgColor="#f0fdfa" textColor="#0f766e" onClick={() => navigate('/user/journal')} />
            <MobileFeatureCard title="Find Support" icon={Activity} bgColor="#b5edec" textColor="#2d6465" onClick={() => navigate('/user/community')} />
            <MobileFeatureCard title="View Insights" icon={BarChart2} bgColor="#dde0df" textColor="#5f6363" onClick={() => navigate('/user/mood-tracker')} />
            <MobileFeatureCard title="Book a Session" icon={CheckSquare} bgColor="#d9e3f9" textColor="#121c2c" onClick={() => navigate('/user/appointments')} />
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <FeatureCard 
              title="Write a journal"
              description="Capture your thoughts and release what's on your mind today."
              icon={FileText}
              buttonText="Open Journal"
              onClick={() => navigate('/user/journal')}
            />
            <FeatureCard 
              title="Find Support"
              description="Connect with our community or access crisis resources instantly."
              icon={Activity}
              buttonText="Get Help"
              onClick={() => navigate('/user/community')}
            />
            <FeatureCard 
              title="View Insights"
              description="Explore patterns in your emotional data over the last quarter."
              icon={BarChart2}
              buttonText="Check Data"
              onClick={() => navigate('/user/mood-tracker')}
            />
            <FeatureCard 
              title="Book a Session"
              description="Schedule a 1-on-1 talk with your dedicated counselor."
              icon={CheckSquare}
              buttonText="Book Now"
              buttonVariant="dark"
              onClick={() => navigate('/user/appointments')}
            />
          </div>
        )}

        {/* Bottom Banner/Tip (Mobile Only) */}
        {isMobile && (
          <div style={{ backgroundColor: PRIMARY, color: '#ffffff', padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem', margin: 0, fontFamily: 'var(--m-font)' }}>Daily Quote</h4>
              <p style={{ fontSize: '0.875rem', fontStyle: 'italic', opacity: 0.9, margin: 0, fontFamily: 'var(--m-font)' }}>"Growth is a process, not an event."</p>
            </div>
            <span style={{ fontSize: '3rem', opacity: 0.5, lineHeight: 1 }}>❞</span>
          </div>
        )}

      </div>
    </div>
  );
};

export default HomeDashboard;
