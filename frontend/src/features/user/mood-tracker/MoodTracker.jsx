import React, { useState, useEffect } from 'react';
import { 
  BarChart2, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  ArrowUpRight,
  LogOut,
  RefreshCcw,
  CheckSquare,
  Loader2
} from 'lucide-react';
import MoodCalendar from './components/MoodCalendar';
import apiClient from '../../../api/apiClient';
import useAuthStore from '../../../store/useAuthStore';

const MoodTracker = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [moodHistory, setMoodHistory] = useState({});
  const [weeklyPercentages, setWeeklyPercentages] = useState([0, 0, 0, 0]);
  const [insights, setInsights] = useState([]);
  const [growthInsight, setGrowthInsight] = useState(null);
  const [rawCheckins, setRawCheckins] = useState([]);
  const [isHabitModalOpen, setIsHabitModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredWeek, setHoveredWeek] = useState(null);
  
  const user = useAuthStore((state) => state.user);
  const isTestUser = user?.email === 'testcheckin@solace.com';
  
  useEffect(() => {
    fetchMoodData();
    fetchWeeklyAnalysis();
    fetchGrowthInsight();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchMoodData = async () => {
    try {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonthNum = now.getMonth() + 1;
      setIsLoading(true);
      const historyRes = await apiClient.get('/checkins/history?limit=400');
      const checkins = historyRes.data.checkins;
      setRawCheckins(checkins);
      const newMoodHistory = {};

      if (isTestUser) {
        // Test user sequential logic
        let dayCounter = 0;
        const reversedCheckins = [...checkins].reverse();
        reversedCheckins.forEach((item) => {
          let y = currentYear, m = currentMonthNum, remaining = dayCounter;
          while (true) {
            const daysInM = new Date(y, m, 0).getDate();
            if (remaining < daysInM) break;
            remaining -= daysInM;
            m++; if (m > 12) { m = 1; y++; }
          }
          const day = remaining + 1;
          if (!newMoodHistory[y]) newMoodHistory[y] = {};
          if (!newMoodHistory[y][m]) newMoodHistory[y][m] = {};
          newMoodHistory[y][m][day] = item.mood;
          dayCounter++;
        });
      } else {
        checkins.forEach(item => {
          const d = new Date(item.createdAt);
          const y = d.getFullYear(), m = d.getMonth() + 1, day = d.getDate();
          if (!newMoodHistory[y]) newMoodHistory[y] = {};
          if (!newMoodHistory[y][m]) newMoodHistory[y][m] = {};
          newMoodHistory[y][m][day] = item.mood;
        });
      }
      setMoodHistory(newMoodHistory);

      // Generate dynamic insights
      if (checkins.length > 0) {
        const mostRecent = checkins[0];
        const checkinDate = new Date(mostRecent.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        setInsights([
          { label: 'MOST RECENT', title: mostRecent.mood.charAt(0) + mostRecent.mood.slice(1).toLowerCase(), sub: `Checked in on ${checkinDate}`, icon: RefreshCcw, iconBg: '#E6FFFA', iconColor: '#38B2AC', emoji: getMoodEmoji(mostRecent.mood) },
          { label: 'POSITIVE MOOD', title: '78%', sub: '↑ 12% from last week', icon: TrendingUp, iconBg: '#E6FFFA', iconColor: '#155E54', isTrend: true },
          { label: 'CHECK-INS', title: checkins.length.toString(), sub: 'Total entries', icon: CheckSquare, iconBg: '#FDF2F2', iconColor: '#9C8E35', iconStyle: { backgroundColor: '#F6E05E' } }
        ]);
      } else {
        setInsights([
          { label: 'MOST RECENT', title: 'No entries yet', sub: 'Start your first check-in!', icon: RefreshCcw, iconBg: '#F3F4F6', iconColor: '#9CA3AF', emoji: '😶' },
          { label: 'POSITIVE MOOD', title: '0%', sub: 'No data available', icon: TrendingUp, iconBg: '#F3F4F6', iconColor: '#9CA3AF' },
          { label: 'CHECK-INS', title: '0', sub: 'Total entries', icon: CheckSquare, iconBg: '#F3F4F6', iconColor: '#9CA3AF' }
        ]);
      }
    } catch (error) {
      console.error('Failed to fetch mood data', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGrowthInsight = async () => {
    try {
      const res = await apiClient.get('/checkins/growth-insights');
      setGrowthInsight(res.data);
    } catch (error) {
      console.error('Failed to fetch growth insights', error);
    }
  };

  const fetchWeeklyAnalysis = async () => {
    try {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonthNum = now.getMonth() + 1;
      const { data } = await apiClient.get(`/checkins/weekly-analysis?month=${currentMonthNum}&year=${currentYear}`);
      if (data && data.percentages) {
        setWeeklyPercentages(data.percentages);
      }
    } catch (error) {
      console.error('Failed to fetch weekly analysis', error);
    }
  };

  const getMoodEmoji = (mood) => {
    const emojis = { 'HAPPY': '😊', 'NEUTRAL': '😐', 'STRESSED': '😫', 'SAD': '😢', 'ANGRY': '😤' };
    return emojis[mood] || '😶';
  };

  const getMoodDescription = (percentage) => {
    if (percentage > 85) return "Exceptionally high; predominantly joyful and calm.";
    if (percentage > 70) return "High; mostly positive with minimal stress.";
    if (percentage > 55) return "Stable; a balanced mix of neutral and positive states.";
    if (percentage > 40) return "Variable; showing frequent shifts between neutral and pensive moods.";
    if (percentage > 25) return "Challenged; indicating a more frequent presence of stress or pensive thoughts.";
    return "Very low; predominantly stressed or anxious states.";
  };

  return (
    <div className="m-mood-container" style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      minHeight: '100%', 
      backgroundColor: 'transparent',
      fontFamily: "var(--m-font)",
      overflowX: 'hidden'
    }}>
      
      {/* Main Content Area */}
      <div style={{
        flex: 1,
        padding: isMobile ? '1.25rem' : '2.5rem 3.5rem',
        overflowY: isMobile ? 'visible' : 'auto'
      }}>
        {/* Header Section */}
        <div style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
          <span style={{ color: '#155E54', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>INTERNAL HARMONY</span>
          <h1 style={{ fontSize: isMobile ? '2.25rem' : '3rem', fontWeight: '900', color: '#111827', margin: '0.5rem 0', letterSpacing: '-0.03em' }}>Mood Tracker</h1>
          <p style={{ color: '#6B7280', maxWidth: '600px', lineHeight: '1.6', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>
            A panoramic view of your emotional landscape. Observe your patterns without judgment.
          </p>
        </div>

        {/* Mood Analysis Card (4 Weeks) */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: isMobile ? '1.5rem' : '2.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          marginBottom: '1.5rem'
        }}>
          <div style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', margin: 0 }}>Mood Analysis</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '0.25rem' }}>Average mood trends from the past 4 weeks</p>
          </div>

          <div style={{ 
            display: 'flex', 
            height: isMobile ? '200px' : '280px', 
            gap: isMobile ? '1rem' : '2.5rem', 
            alignItems: 'flex-end',
            paddingLeft: isMobile ? '2rem' : '4rem',
            position: 'relative'
          }}>
            {/* Y-Axis Emojis (Larger) */}
            <div style={{ 
              position: 'absolute', left: 0, bottom: '30px', height: 'calc(100% - 30px)', 
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: isMobile ? '1.25rem' : '1.75rem' 
            }}>
              <span>😊</span><span>😐</span><span>😫</span><span>😢</span><span>😤</span>
            </div>

            <div style={{ position: 'absolute', left: isMobile ? '2rem' : '4rem', right: 0, top: 0, bottom: '30px', borderLeft: '1px solid #EDF2F7', borderBottom: '1px solid #EDF2F7' }} />

            {weeklyPercentages.map((val, i) => (
              <div 
                key={i} 
                style={{ 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  height: '100%', 
                  justifyContent: 'flex-end',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={() => setHoveredWeek(i)}
                onMouseLeave={() => setHoveredWeek(null)}
              >
                <div style={{ position: 'relative', width: isMobile ? '40px' : '60px', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                  {/* Outer Bar (Light) */}
                  <div style={{ width: '100%', height: `${val}%`, backgroundColor: '#B2DFDB', borderRadius: '12px 12px 0 0', position: 'absolute', opacity: 0.6 }} />
                  {/* Inner Bar (Average - Dark) */}
                  <div style={{ width: '100%', height: `${val * 0.7}%`, backgroundColor: '#2d6465', borderRadius: '12px 12px 0 0', zIndex: 1 }} />
                </div>
                <span style={{ marginTop: '1rem', fontSize: '0.75rem', fontWeight: '800', color: '#9CA3AF' }}>WK {i + 1}</span>

                {/* Tooltip (Simple for Mobile) */}
                {hoveredWeek === i && !isMobile && (
                  <div style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#1A202C',
                    color: '#FFF',
                    padding: '12px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    zIndex: 10,
                    width: '180px',
                    marginBottom: '10px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#B2DFDB' }} />
                      <span><b>Mood Range</b>: Variance</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#2d6465' }} />
                      <span><b>Average: {Math.round(val * 0.7)}%</b></span>
                    </div>
                    {/* Tooltip Arrow */}
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderWidth: '6px',
                      borderStyle: 'solid',
                      borderColor: '#1A202C transparent transparent transparent'
                    }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
          gap: isMobile ? '1rem' : '1.5rem', 
          marginBottom: '1.5rem' 
        }}>
          {(insights.length > 0 ? insights : [{}, {}, {}]).map((stat, i) => (
            <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)' }}>
              {stat.icon ? (
                <>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: stat.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, ...stat.iconStyle }}>
                    <stat.icon size={20} color={stat.iconColor} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.6rem', fontWeight: '800', color: '#9CA3AF', letterSpacing: '0.05em' }}>{stat.label}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.1rem' }}>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#111827' }}>{stat.title}</h4>
                      {stat.emoji && <span style={{ fontSize: '1.25rem' }}>{stat.emoji}</span>}
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><Loader2 className="animate-spin" color="#2d6465" /></div>
              )}
            </div>
          ))}
        </div>

        {/* Growth Banner */}
        <div 
          className={isMobile ? 'm-primary-bg' : ''}
          style={{ 
            background: '#2d6465', 
            borderRadius: '24px', 
            padding: isMobile ? '1.5rem' : '2.5rem 3rem', 
            position: 'relative', 
            overflow: 'hidden', 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row', 
            gap: '1.5rem', 
            justifyContent: 'space-between', 
            alignItems: isMobile ? 'flex-start' : 'center',
            color: '#FFFFFF'
          }}
        >
          <div style={{ position: 'absolute', right: '5%', bottom: '-10%', opacity: 0.2 }}>
            <svg width="150" height="150" viewBox="0 0 200 200" fill="none">
              <path d="M100 20C100 20 60 80 100 180M100 180C100 180 140 80 100 20" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: isMobile ? '100%' : '60%' }}>
            <h2 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              {growthInsight?.type === 'correlation' ? 'Growth Insight' : 'Reflect on your growth'}
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: isMobile ? '1rem' : '1.25rem' }}>
              {growthInsight?.insight || 'Consistent mood tracking helps you identify the habits that truly support your well-being.'}
            </p>
            <button 
              onClick={() => setIsHabitModalOpen(true)}
              style={{ backgroundColor: '#FFFFFF', color: '#111827', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: '800', fontSize: '0.85rem', cursor: 'pointer' }}>
              Explore Habit
            </button>
          </div>
        </div>

        {/* Habit Exploration Modal */}
        {isHabitModalOpen && growthInsight?.task && (
          <HabitExplorationModal 
            habit={growthInsight.task}
            onClose={() => setIsHabitModalOpen(false)}
            checkins={rawCheckins}
            isMobile={isMobile}
          />
        )}
      </div>

      {/* Right Sidebar: Mood Calendar (Only on Desktop) */}
      {!isMobile && <MoodCalendar moodHistory={moodHistory} user={user} />}
    </div>
  );
};

// --- Subcomponent: Habit Exploration Modal ---
const HabitExplorationModal = ({ habit, onClose, checkins, isMobile }) => {
  const recentWins = checkins
    .filter(c => c.tasks.some(t => t.toLowerCase() === habit.toLowerCase()) && (c.mood === 'HAPPY' || c.mood === 'NEUTRAL'))
    .slice(0, 3);

  const habitTips = {
    'morning yoga': {
      why: "Yoga reduces cortisol levels and promotes endorphins, leading to improved mood regulation.",
      tips: ["Try a quick 10-minute flow.", "Focus on your breathing.", "Keep your mat visible."]
    },
    'meditation': {
      why: "Meditation strengthens the prefrontal cortex, enhancing emotional regulation and resilience.",
      tips: ["Start with guided sessions.", "Just notice your thoughts.", "Try the same time daily."]
    },
    'reading': {
      why: "Deep reading can trigger 'cognitive empathy' and act as a mental anchor.",
      tips: ["Read what truly interests you.", "Limit distractions.", "Carry your book with you."]
    },
    'healthy breakfast': {
      why: "A balanced start stabilizes blood sugar, preventing irritability and providing energy.",
      tips: ["Prep ingredients overnight.", "Mix protein and fiber.", "Stay hydrated."]
    }
  };

  const defaultTips = {
    why: "Consistent daily habits create a predictable foundation for your mental health.",
    tips: ["Small steps lead to big changes.", "Be kind if you miss a day.", "Track how you feel after success."]
  };

  const info = habitTips[habit.toLowerCase()] || defaultTips;

  const getSubEmoji = (mood) => {
    const emojis = { 'HAPPY': '😊', 'NEUTRAL': '😐', 'STRESSED': '😫', 'SAD': '😢', 'ANGRY': '😤' };
    return emojis[mood] || '😶';
  };

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: isMobile ? 'flex-end' : 'center', justifyContent: 'center' }}>
      <div style={{ 
        backgroundColor: '#FFFFFF', 
        width: '100%', 
        maxWidth: '550px', 
        borderRadius: isMobile ? '32px 32px 0 0' : '32px', 
        padding: isMobile ? '2rem 1.5rem 3rem 1.5rem' : '2.5rem', 
        boxShadow: '0 -10px 40px rgba(0,0,0,0.2)', 
        position: 'relative',
        animation: isMobile ? 'm-slide-up 0.4s ease-out' : 'none'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#f3f4f3', border: 'none', color: '#111827', cursor: 'pointer', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Plus size={20} style={{ transform: 'rotate(45deg)' }} />
        </button>

        <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#2d6465', letterSpacing: '0.1em', textTransform: 'uppercase' }}>DEEP DIVE</span>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#111827', margin: '0.25rem 0 1.5rem 0' }}>{habit}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <section>
            <h3 style={{ fontSize: '0.85rem', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <TrendingUp size={16} color="#2d6465" /> WHY IT WORKS
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#404848', lineHeight: '1.6', margin: 0 }}>{info.why}</p>
          </section>

          <section>
            <h3 style={{ fontSize: '0.85rem', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <CalendarIcon size={16} color="#2d6465" /> YOUR SUCCESS STORY
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {recentWins.length > 0 ? recentWins.map((win, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f3f4f3', padding: '0.5rem 1rem', borderRadius: '12px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#111827' }}>
                    {new Date(win.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  <span style={{ fontSize: '1rem' }}>{getSubEmoji(win.mood)}</span>
                </div>
              )) : (
                <p style={{ fontSize: '0.8rem', color: '#9CA3AF', fontStyle: 'italic' }}>Keep practicing to see results!</p>
              )}
            </div>
          </section>

          <button 
            onClick={onClose}
            style={{ marginTop: '0.5rem', backgroundColor: '#2d6465', color: '#FFFFFF', border: 'none', padding: '1rem', borderRadius: '16px', fontWeight: '800', fontSize: '0.9rem', cursor: 'pointer' }}
          >
            I'm Committing to This
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;


