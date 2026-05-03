import React, { useState } from 'react';
import { 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  ArrowUpRight 
} from 'lucide-react';

const MOOD_COLORS = {
  'HAPPY': '#81E6D9', 
  'NEUTRAL': '#E2E8F0', 
  'STRESSED': '#FED7D7', 
  'SAD': '#FED7D7', 
  'ANGRY': '#FED7D7'
};

const COLOR_KEY = [
  { label: 'Joyful / Calm', color: '#81E6D9' },
  { label: 'Neutral / Balanced', color: '#E2E8F0' },
  { label: 'Pensive / Uncertain', color: '#F6E05E' },
  { label: 'Stressed / Anxious', color: '#FED7D7' },
];

const getMoodEmoji = (mood) => {
  const emojis = { 
    'HAPPY': '😊', 
    'NEUTRAL': '😐', 
    'STRESSED': '😫', 
    'SAD': '😢', 
    'ANGRY': '😤' 
  };
  return emojis[mood] || '😶';
};

const MoodCalendar = ({ moodHistory, user }) => {
  const now = new Date();
  const [calendarYear, setCalendarYear] = useState(now.getFullYear());
  const [calendarMonth, setCalendarMonth] = useState(now.getMonth() + 1);

  const calendarMonthName = new Date(calendarYear, calendarMonth - 1, 1).toLocaleDateString('en-US', { month: 'long' });
  const daysInCalendarMonth = new Date(calendarYear, calendarMonth, 0).getDate();
  const firstDayOfWeek = new Date(calendarYear, calendarMonth - 1, 1).getDay();

  const goPrevMonth = () => {
    if (calendarMonth === 1) { 
      setCalendarMonth(12); 
      setCalendarYear(y => y - 1); 
    } else {
      setCalendarMonth(m => m - 1);
    }
  };

  const goNextMonth = () => {
    if (calendarMonth === 12) { 
      setCalendarMonth(1); 
      setCalendarYear(y => y + 1); 
    } else {
      setCalendarMonth(m => m + 1);
    }
  };

  const renderCalendar = () => {
    const cells = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      cells.push(<div key={`empty-${i}`} style={{ aspectRatio: '1' }} />);
    }

    for (let day = 1; day <= daysInCalendarMonth; day++) {
      const mood = moodHistory?.[calendarYear]?.[calendarMonth]?.[day];
      const emoji = mood ? getMoodEmoji(mood) : null;
      const bgColor = mood ? (MOOD_COLORS[mood] || '#E2E8F0') : 'transparent';
      const isToday = day === now.getDate() && 
                      calendarMonth === now.getMonth() + 1 && 
                      calendarYear === now.getFullYear();

      cells.push(
        <div key={day} style={{ 
          aspectRatio: '1', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          borderRadius: '50%', // Full circle
          backgroundColor: bgColor,
          position: 'relative',
          border: isToday ? '2px solid #1A202C' : 'none',
          color: '#1A202C',
          transition: 'all 0.2s',
          cursor: mood ? 'pointer' : 'default'
        }}>
          <span style={{ 
            fontSize: '1rem', 
            fontWeight: '600',
          }}>
            {day}
          </span>
          {emoji && (
            <span style={{ 
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              fontSize: '0.8rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              zIndex: 1
            }}>
              {emoji}
            </span>
          )}
        </div>
      );
    }
    return cells;
  };

  return (
    <div style={{ 
      width: '400px', 
      backgroundColor: '#F7FAFC', 
      borderLeft: '1px solid #EDF2F7', 
      display: 'flex', 
      flexDirection: 'column', 
      padding: '2.5rem', 
      overflowY: 'auto' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1A202C', margin: 0 }}>Mood Calendar</h2>
        <MoreVertical size={20} color="#A0AEC0" cursor="pointer" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1A202C', margin: 0 }}>
          {calendarMonthName} {calendarYear}
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <ChevronLeft size={18} color="#A0AEC0" cursor="pointer" onClick={goPrevMonth} />
          <ChevronRight size={18} color="#A0AEC0" cursor="pointer" onClick={goNextMonth} />
        </div>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '1.2rem', textAlign: 'center' }}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <span key={i} style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#A0AEC0' }}>{day}</span>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem' }}>
          {renderCalendar()}
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.75rem', fontStyle: 'italic', color: '#A0AEC0', marginTop: '1.5rem' }}>
          Daily check-in encouraged
        </p>
      </div>

      <div style={{ marginBottom: 'auto' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#A0AEC0', marginBottom: '1.2rem', letterSpacing: '0.1em' }}>COLOR KEY</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {COLOR_KEY.map((key, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: key.color }} />
              <span style={{ fontSize: '0.9rem', color: '#4A5568', fontWeight: '500' }}>{key.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodCalendar;
