import React, { useState, useEffect } from 'react';
import { BarChart3, AlertCircle, Calendar, ChevronDown, MessageSquare, X, User, RefreshCw } from 'lucide-react';
import Avatar from '../../../components/common/Avatar';
import { fetchMoodMonitoring, fetchUserMoodHistory, sendSupportMessage } from '../../../api/adminApi';

// ─── Helpers ───────────────────────────────────────────────────────────────────

const MOOD_EMOJI = {
  HAPPY: '😊',
  NEUTRAL: '😐',
  STRESSED: '😫',
  SAD: '😢',
  ANGRY: '😤',
};

const MOOD_COLORS = {
  HAPPY: '#A5D6A7',
  NEUTRAL: '#FFF9C4',
  STRESSED: '#FFCCBC',
  SAD: '#FFCCBC',
  ANGRY: '#FFCCBC',
};

const formatDate = (dateStr) => {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return `${String(d.getMonth() + 1).padStart(2, '0')} - ${String(d.getDate()).padStart(2, '0')} - ${String(d.getFullYear()).slice(2)}`;
};

// ─── Send Support Message Modal ────────────────────────────────────────────────

const MessageModal = ({ isOpen, user, onClose }) => {
  const [sending, setSending] = useState(false);
  const [title, setTitle] = useState('We Care About You');
  const [message, setMessage] = useState("We've noticed you've been feeling stressed frequently this week. You're not alone, and we're here to help. Your well-being matters to us.\n\nTaking care of your mental health is a sign of strength. Consider talking to a professional counselor who can provide personalized support.");
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!user?.id || !title.trim() || !message.trim()) return;
    setSending(true);
    try {
      await sendSupportMessage(user.id, title, message);
      setSent(true);
      setTimeout(() => { setSent(false); onClose(); }, 1500);
    } catch (e) {
      console.error('Failed to send message:', e);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, backdropFilter: 'blur(4px)' }}>
      <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', width: '95%', maxWidth: '1000px', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: '#64A19D', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#FFF' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '700' }}>Send Support Message to {user?.fullName}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer' }}><X size={24} /></button>
        </div>
        <div style={{ padding: '2rem', flex: 1, overflowY: 'auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem' }}>
          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <section>
              <h4 style={{ margin: '0 0 1rem 0', color: '#1A1A2E', fontWeight: '800' }}>Select Recipients</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ border: '1.5px solid #64A19D', borderRadius: '12px', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#F0FAF9' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #64A19D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#64A19D' }} />
                  </div>
                  <span style={{ flex: 1, fontSize: '0.9rem', fontWeight: '700', color: '#1A1A2E' }}>Individual User</span>
                  <span style={{ backgroundColor: '#C5CAE9', padding: '0.2rem 0.75rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '800' }}>{user?.fullName || user?.alias}</span>
                </div>
                <div style={{ border: '1.5px solid #E0E4E6', borderRadius: '12px', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.5 }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #8E9DA1' }} />
                  <span style={{ flex: 1, fontSize: '0.9rem', fontWeight: '700', color: '#1A1A2E' }}>All High Priority Users</span>
                </div>
              </div>
            </section>
            <section>
              <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: '800' }}>Notification Title</h4>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter notification title..." style={{ width: '100%', border: '1.5px solid #E0E4E6', borderRadius: '12px', padding: '0.75rem 1rem', color: '#1A1A2E', fontWeight: '600', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }} />
            </section>
            <section>
              <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: '800' }}>Message Content</h4>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={6} placeholder="Enter your support message..." style={{ width: '100%', border: '1.5px solid #E0E4E6', borderRadius: '12px', padding: '1rem', color: '#1A1A2E', fontSize: '0.95rem', fontWeight: '600', lineHeight: 1.6, outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }} />
            </section>
          </div>
          {/* Live Preview */}
          <div>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem', fontWeight: '800', textAlign: 'center' }}>Preview (User View)</h4>
            <div style={{ backgroundColor: '#F9FAFB', borderRadius: '24px', padding: '2rem', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#81D4FA', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0 1.5rem 0', flexShrink: 0 }}>
                <MessageSquare size={32} color="#FFF" />
              </div>
              <h3 style={{ margin: '0 0 1rem 0', fontWeight: '800', textAlign: 'center' }}>{title || 'Notification Title'}</h3>
              <p style={{ margin: '0 0 2rem 0', fontSize: '0.85rem', color: '#1A1A2E', fontWeight: '600', lineHeight: 1.6, textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                {message || 'Your message will appear here...'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
                <button style={{ backgroundColor: '#FF8A65', color: '#FFF', border: 'none', borderRadius: '10px', padding: '0.8rem', fontWeight: '800' }}>💬 Talk to a counselor</button>
                <button style={{ backgroundColor: '#FCE4EC', color: '#F06292', border: 'none', borderRadius: '10px', padding: '0.8rem', fontWeight: '800' }}>💡 Listen-only</button>
                <button style={{ border: '2px solid #E0E4E6', backgroundColor: 'transparent', borderRadius: '10px', padding: '0.8rem', fontWeight: '700' }}>I'm not in the mood</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '1.5rem 3rem', display: 'flex', justifyContent: 'flex-end', borderTop: '1.5px solid #F0F4F5' }}>
          {sent ? (
            <div style={{ color: '#4CAF50', fontWeight: '800', fontSize: '1.1rem', padding: '0.8rem 2rem' }}>✅ Message sent successfully!</div>
          ) : (
            <button onClick={handleSend} disabled={sending || !title.trim() || !message.trim()} style={{ backgroundColor: (sending || !title.trim() || !message.trim()) ? '#8E9DA1' : '#1A1A2E', color: '#FFF', border: 'none', padding: '0.8rem 4rem', borderRadius: '12px', fontWeight: '800', cursor: (sending || !title.trim() || !message.trim()) ? 'not-allowed' : 'pointer', fontSize: '1.1rem' }}>
              {sending ? 'Sending...' : 'Send Now'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


// ─── Mood History Modal ─────────────────────────────────────────────────────

const MoodHistoryModal = ({ isOpen, user, onClose }) => {
  const [moodData, setMoodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth() + 1);

  useEffect(() => {
    if (!isOpen || !user?.id) return;
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchUserMoodHistory(user.id, viewYear, viewMonth);
        setMoodData(data);
      } catch (e) {
        console.error('Failed to load mood history:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [isOpen, user?.id, viewYear, viewMonth]);

  if (!isOpen) return null;

  const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysInMonth = new Date(viewYear, viewMonth, 0).getDate();
  const firstDayOffset = new Date(viewYear, viewMonth - 1, 1).getDay(); // 0=Sun, 1=Mon, etc.
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const moodByDay = moodData?.moodByDay || {};

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, backdropFilter: 'blur(4px)' }}>
      <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', width: '90%', maxWidth: '700px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
        <div style={{ backgroundColor: '#FF7070', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#FFF' }}>
          <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800' }}>Mood History</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer' }}><X size={20} /></button>
        </div>
        <div style={{ padding: '2.5rem' }}>
          <h3 style={{ margin: '0 0 2rem 0', fontSize: '1.6rem', fontWeight: '800', color: '#1A1A2E' }}>{user?.fullName}</h3>
          <div style={{ backgroundColor: '#FFF', borderRadius: '32px', border: '1.5px solid #E0E4E6', padding: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
              <select value={viewMonth} onChange={e => setViewMonth(Number(e.target.value))} style={{ fontWeight: '800', fontSize: '1.1rem', border: 'none', outline: 'none', cursor: 'pointer', backgroundColor: 'transparent' }}>
                {MONTH_NAMES.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
              </select>
              <select value={viewYear} onChange={e => setViewYear(Number(e.target.value))} style={{ fontWeight: '800', fontSize: '1.1rem', border: 'none', outline: 'none', cursor: 'pointer', backgroundColor: 'transparent' }}>
                {[2024, 2025, 2026].map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#8E9DA1' }}>Loading...</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} style={{ textAlign: 'center', color: '#8E9DA1', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{day}</div>
                ))}
                {/* Empty cells for first-of-month offset so days align to correct weekday */}
                {Array.from({ length: firstDayOffset }).map((_, i) => (
                  <div key={`empty-${i}`} style={{ aspectRatio: '1/1' }} />
                ))}
                {days.map(day => (
                  <div key={day} style={{
                    aspectRatio: '1/1', borderRadius: '10px', border: '1.5px solid #E0E4E6',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.3rem',
                    backgroundColor: moodByDay[day] ? MOOD_COLORS[moodByDay[day]] : '#F9FAFB',
                  }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#8E9DA1', alignSelf: 'flex-start' }}>{day}</span>
                    {moodByDay[day] && <span style={{ fontSize: '1.1rem' }}>{MOOD_EMOJI[moodByDay[day]]}</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── User Table ────────────────────────────────────────────────────────────────

const UserTable = ({ title, bg, users, onAction }) => {
  const isMobileTable = window.innerWidth < 768;
  return (
  <div style={{ marginTop: '2rem' }}>
    <h3 style={{ fontSize: isMobileTable ? '1.2rem' : '1.6rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '1.5rem' }}>{title}</h3>
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: isMobileTable ? '16px' : '24px', border: '1.5px solid #E0E4E6', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
      {users.length === 0 ? (
        <div style={{ padding: '3rem', textAlign: 'center', color: '#8E9DA1', fontWeight: '600' }}>No users in this category</div>
      ) : isMobileTable ? (
        <div>
          {users.map((user, i) => (
            <div key={user.id || i} style={{ padding: '1rem 1.25rem', borderBottom: i === users.length - 1 ? 'none' : '1px solid #F0F4F5', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{user.latestMood ? MOOD_EMOJI[user.latestMood] : '😶'}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontWeight: '700', color: '#1A1A2E', fontSize: '0.9rem' }}>{user.fullName}</p>
                <p style={{ margin: '0.15rem 0 0 0', color: '#8E9DA1', fontSize: '0.7rem', fontWeight: '500' }}>
                  {user.streak > 0 ? `${user.streak}d streak` : 'No streak'} · {formatDate(user.lastCheckIn)}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => onAction('calendar', user)} style={{ background: 'none', border: '1.5px solid #E0E4E6', padding: '0.35rem', borderRadius: '8px', cursor: 'pointer', color: '#EF5350', display: 'flex' }}><Calendar size={16} /></button>
                <button onClick={() => onAction('message', user)} style={{ background: 'none', border: '1.5px solid #E0E4E6', padding: '0.35rem', borderRadius: '8px', cursor: 'pointer', color: '#00BCD4', display: 'flex' }}><MessageSquare size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: bg }}>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '800', textAlign: 'center' }}>Name</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '800', textAlign: 'center' }}>Latest Mood</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '800', textAlign: 'center' }}>Streak</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '800', textAlign: 'center' }}>Last Check-in</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '800', textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.id || i} style={{ borderBottom: '1px solid #F0F4F5' }}>
                <td style={{ padding: '1rem 1.5rem', color: '#555', fontWeight: '600', textAlign: 'center' }}>{user.fullName}</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '1.5rem', textAlign: 'center' }}>{user.latestMood ? MOOD_EMOJI[user.latestMood] : '—'}</td>
                <td style={{ padding: '1rem 1.5rem', color: '#555', fontWeight: '600', textAlign: 'center' }}>{user.streak > 0 ? `${user.streak} Day${user.streak > 1 ? 's' : ''}` : '—'}</td>
                <td style={{ padding: '1rem 1.5rem', color: '#555', fontWeight: '600', textAlign: 'center' }}>{formatDate(user.lastCheckIn)}</td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                    <Calendar size={18} color="#EF5350" style={{ cursor: 'pointer' }} onClick={() => onAction('calendar', user)} />
                    <MessageSquare size={18} color="#00BCD4" style={{ cursor: 'pointer' }} onClick={() => onAction('message', user)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

const AnalysisReports = () => {
  const [viewMode, setViewMode] = useState('dashboard');
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [monitoringData, setMonitoringData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMoodMonitoring();
      setMonitoringData(data);
    } catch (e) {
      console.error('Failed to load mood monitoring:', e);
      setError('Failed to load monitoring data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleAction = (type, user) => {
    setSelectedUser(user);
    setModalType(type);
  };

  const summary = monitoringData?.summary || { normal: 0, moderate: 0, high_priority: 0 };
  const users = monitoringData?.users || { normal: [], moderate: [], high_priority: [] };
  const trend = monitoringData?.trend || [];
  const alert = monitoringData?.highPriorityAlert;

  const priorityStats = [
    { id: 'normal', label: 'Normal Users', value: summary.normal, emoji: '😊', bg: '#A5D6A7', color: '#66BB6A', sub: 'Based on last 7 days trend' },
    { id: 'moderate', label: 'Moderate Users', value: summary.moderate, emoji: '😐', color: '#FFD54F', bg: '#FFF59D', sub: 'Based on last 7 days trend' },
    { id: 'high_priority', label: 'High Priority Users', value: summary.high_priority, emoji: '😫', color: '#FF7043', bg: '#FFAB91', sub: 'Based on last 7 days trend' },
  ];

  // Professional chart config
  const chartW = 600, chartH = 220, padL = 50, padR = 20, padT = 20, padB = 40;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const maxVal = Math.max(3, ...trend.flatMap(d => [d.normal, d.moderate, d.high_priority]));
  const stepSize = maxVal <= 5 ? 1 : maxVal <= 10 ? 2 : Math.ceil(maxVal / 5);
  const yTicks = [];
  for (let v = 0; v <= maxVal; v += stepSize) yTicks.push(v);
  if (yTicks[yTicks.length - 1] < maxVal) yTicks.push(maxVal);
  const getChartX = (i) => padL + (i / (trend.length - 1 || 1)) * plotW;
  const getChartY = (val) => padT + plotH - (val / maxVal) * plotH;
  const [hoveredTrendPt, setHoveredTrendPt] = useState(null);
  const LINES = [{ key: 'normal', color: '#4CAF50', label: 'Normal' }, { key: 'moderate', color: '#FFA726', label: 'Moderate' }, { key: 'high_priority', color: '#EF5350', label: 'High Priority' }];
  const smoothPath = (key) => { const pts = trend.map((d, i) => ({ x: getChartX(i), y: getChartY(d[key]) })); if (pts.length < 2) return `M${pts[0].x},${pts[0].y}`; let path = `M${pts[0].x},${pts[0].y}`; for (let i = 0; i < pts.length - 1; i++) { const cp = (pts[i + 1].x - pts[i].x) * 0.35; path += ` C${pts[i].x + cp},${pts[i].y} ${pts[i + 1].x - cp},${pts[i + 1].y} ${pts[i + 1].x},${pts[i + 1].y}`; } return path; };
  const areaPath = (key) => { const line = smoothPath(key); return `${line} L${getChartX(trend.length - 1)},${getChartY(0)} L${getChartX(0)},${getChartY(0)} Z`; };
  const fmtDate = (dateStr) => { const d = new Date(dateStr + 'T00:00:00'); return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); };
  const totals = trend.reduce((acc, d) => ({ n: acc.n + d.normal, m: acc.m + d.moderate, h: acc.h + d.high_priority }), { n: 0, m: 0, h: 0 });
  const totalAll = totals.n + totals.m + totals.h;
  const pctFn = (v) => totalAll === 0 ? 0 : Math.round((v / totalAll) * 100);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', paddingBottom: isMobile ? '5rem' : '0' }}>
      <header style={{ marginBottom: isMobile ? '1.5rem' : '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.25rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
          <div style={{ backgroundColor: '#1A1A2E', padding: isMobile ? '0.4rem' : '0.6rem', borderRadius: '12px', color: '#FFF' }}>
            <BarChart3 size={isMobile ? 20 : 28} />
          </div>
          <h1 style={{ fontSize: isMobile ? '1.3rem' : '2.4rem', fontWeight: '800', color: '#1A1A2E', margin: 0 }}>User Monitoring</h1>
          {!isMobile && <span style={{ color: '#8E9DA1', fontSize: '1.1rem', fontWeight: '600', marginLeft: '0.5rem' }}>Analysis / Reports</span>}
          <button
            onClick={load}
            disabled={loading}
            style={{ marginLeft: 'auto', background: 'none', border: '1.5px solid #E0E4E6', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#8E9DA1' }}
          >
            <RefreshCw size={18} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
          </button>
        </div>
        <p style={{ color: '#8E9DA1', fontSize: isMobile ? '0.8rem' : '1.1rem', fontWeight: '600', margin: 0 }}>Track user mood trends based on their daily check-ins</p>
      </header>

      {loading && (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#8E9DA1', fontSize: '1.2rem', fontWeight: '700' }}>
          Loading monitoring data...
        </div>
      )}

      {error && (
        <div style={{ backgroundColor: '#FFEBEE', borderRadius: '12px', padding: '1.5rem', color: '#C62828', fontWeight: '700', marginBottom: '2rem' }}>
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Status Cards */}
          <div style={{
            display: isMobile ? 'flex' : 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: isMobile ? '0.75rem' : '2.5rem',
            marginBottom: isMobile ? '2rem' : '4rem',
            ...(isMobile ? { overflowX: 'auto', paddingBottom: '0.5rem', WebkitOverflowScrolling: 'touch' } : {})
          }}>
            {priorityStats.map((stat) => (
              <div key={stat.id} style={{
                backgroundColor: stat.bg, borderRadius: isMobile ? '20px' : '32px',
                padding: isMobile ? '1.25rem' : '2.5rem', textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? '0.5rem' : '1.25rem',
                border: viewMode === stat.id ? `3px solid ${stat.color}` : '3px solid transparent',
                transition: 'border 0.2s',
                ...(isMobile ? { minWidth: '160px', flexShrink: 0 } : {})
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.5rem', marginBottom: isMobile ? '0' : '0.5rem' }}>
                  <span style={{ fontSize: isMobile ? '2rem' : '3.5rem' }}>{stat.emoji}</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                      <h3 style={{ margin: 0, fontSize: isMobile ? '2rem' : '3.5rem', fontWeight: '800', color: '#1A1A2E' }}>{stat.value}</h3>
                      <p style={{ margin: 0, fontWeight: '700', fontSize: isMobile ? '0.75rem' : '1.1rem', color: '#1A1A2E', opacity: 0.6 }}>Users</p>
                    </div>
                  </div>
                </div>
                <p style={{ margin: 0, fontWeight: '800', color: '#1A1A2E', fontSize: isMobile ? '0.85rem' : '1.35rem' }}>{stat.label}</p>
                <p style={{ margin: 0, fontSize: isMobile ? '0.65rem' : '0.95rem', color: '#1A1A2E', fontWeight: '700', opacity: 0.7 }}>{stat.sub}</p>
                <button onClick={() => setViewMode(stat.id)} style={{
                  marginTop: '0.25rem', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '100px',
                  padding: isMobile ? '0.4rem 1.5rem' : '0.6rem 2.5rem', fontSize: isMobile ? '0.8rem' : '1rem', fontWeight: '800', color: '#8E9DA1', cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}>View list</button>
              </div>
            ))}
          </div>

          {viewMode === 'dashboard' ? (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.8fr 1.2fr', gap: isMobile ? '1.5rem' : '3rem' }}>
              {/* Emotional Trend Chart */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '40px', border: '1.5px solid #E0E4E6', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.6rem', fontWeight: '800', color: '#1A1A2E' }}>Emotional Trend</h3>
                  <div style={{ backgroundColor: '#F4F7F8', padding: '0.3rem 1rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: '700', color: '#8E9DA1' }}>Last 7 days</div>
                </div>
                
                {/* Summary stats */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  {[
                    { label: 'Normal', val: totals.n, pct: pctFn(totals.n), color: '#4CAF50', bg: '#E8F5E9' },
                    { label: 'Moderate', val: totals.m, pct: pctFn(totals.m), color: '#FFA726', bg: '#FFF3E0' },
                    { label: 'High Priority', val: totals.h, pct: pctFn(totals.h), color: '#EF5350', bg: '#FFEBEE' },
                  ].map(s => (
                    <div key={s.label} style={{ flex: 1, backgroundColor: s.bg, borderRadius: '12px', padding: '0.6rem 0.75rem', border: `1px solid ${s.color}20` }}>
                      <div style={{ fontSize: '0.65rem', color: s.color, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.15rem' }}>{s.label}</div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                        <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1A1A2E' }}>{s.val}</span>
                        <span style={{ fontSize: '0.7rem', fontWeight: '700', color: s.color }}>{s.pct}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div style={{ position: 'relative', width: '100%' }} onMouseLeave={() => setHoveredTrendPt(null)}>
                  {trend.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#8E9DA1', fontWeight: '600' }}>No check-in data in the last 7 days</div>
                  ) : (
                    <>
                      <svg width="100%" viewBox={`0 0 ${chartW} ${chartH}`} style={{ overflow: 'visible', display: 'block' }}>
                        <defs>
                          {LINES.map(l => (
                            <linearGradient key={l.key} id={`ar_grad_${l.key}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={l.color} stopOpacity="0.2" />
                              <stop offset="100%" stopColor={l.color} stopOpacity="0.01" />
                            </linearGradient>
                          ))}
                        </defs>

                        {/* Grid lines */}
                        {yTicks.map(val => (
                          <g key={val}>
                            <line x1={padL} y1={getChartY(val)} x2={chartW - padR} y2={getChartY(val)} stroke={val === 0 ? '#E0E4E6' : '#F0F2F4'} strokeWidth="1" strokeDasharray={val === 0 ? 'none' : '3,3'} />
                            <text x={padL - 8} y={getChartY(val) + 4} textAnchor="end" fill="#A0AEB5" fontSize="10" fontWeight="600">{val}</text>
                          </g>
                        ))}

                        {/* Area fills */}
                        {LINES.map(l => (
                          <path key={`area_${l.key}`} d={areaPath(l.key)} fill={`url(#ar_grad_${l.key})`} />
                        ))}

                        {/* Smooth lines */}
                        {LINES.map(l => (
                          <path key={`line_${l.key}`} d={smoothPath(l.key)} fill="none" stroke={l.color} strokeWidth="2.5" strokeLinecap="round" />
                        ))}

                        {/* Hover vertical line */}
                        {hoveredTrendPt !== null && (
                          <line x1={getChartX(hoveredTrendPt)} y1={padT} x2={getChartX(hoveredTrendPt)} y2={getChartY(0)} stroke="#1A1A2E" strokeWidth="1" strokeDasharray="4,3" opacity="0.3" />
                        )}

                        {/* Data points */}
                        {LINES.map(l => trend.map((d, i) => (
                          <circle key={`${l.key}_${i}`} cx={getChartX(i)} cy={getChartY(d[l.key])} r={hoveredTrendPt === i ? 5 : 3} fill={hoveredTrendPt === i ? l.color : '#FFF'} stroke={l.color} strokeWidth="2" style={{ transition: 'r 0.15s, fill 0.15s' }} />
                        )))}

                        {/* Invisible hover zones */}
                        {trend.map((d, i) => (
                          <rect key={`hover_${i}`} x={getChartX(i) - (plotW / trend.length) / 2} y={padT} width={plotW / trend.length} height={plotH} fill="transparent" style={{ cursor: 'pointer' }} onMouseEnter={() => setHoveredTrendPt(i)} />
                        ))}

                        {/* X-axis labels */}
                        {trend.map((d, i) => (
                          <g key={`label_${i}`}>
                            <text x={getChartX(i)} y={chartH - 15} textAnchor="middle" fill="#A0AEB5" fontSize="10" fontWeight="700">{d.day}</text>
                            <text x={getChartX(i)} y={chartH - 3} textAnchor="middle" fill="#C0C8CD" fontSize="8" fontWeight="600">{fmtDate(d.date)}</text>
                          </g>
                        ))}
                      </svg>

                      {/* Rich tooltip */}
                      {hoveredTrendPt !== null && (() => {
                        const d = trend[hoveredTrendPt];
                        const total = d.normal + d.moderate + d.high_priority;
                        return (
                          <div style={{
                            position: 'absolute',
                            left: `${(getChartX(hoveredTrendPt) / chartW) * 100}%`,
                            top: '-8px',
                            transform: hoveredTrendPt > trend.length / 2 ? 'translateX(-100%)' : 'translateX(0)',
                            backgroundColor: '#FFF',
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            pointerEvents: 'none',
                            zIndex: 10,
                            whiteSpace: 'nowrap',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)',
                            border: '1px solid #F0F2F4',
                            minWidth: '140px'
                          }}>
                            <div style={{ fontWeight: '800', color: '#1A1A2E', fontSize: '0.8rem', marginBottom: '0.5rem', borderBottom: '1px solid #F0F2F4', paddingBottom: '0.35rem' }}>
                              {fmtDate(d.date)} ({d.day})
                            </div>
                            {LINES.map(l => (
                              <div key={l.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.15rem 0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: l.color }} />
                                  <span style={{ color: '#555' }}>{l.label}</span>
                                </div>
                                <span style={{ fontWeight: '800', color: '#1A1A2E' }}>{d[l.key]}</span>
                              </div>
                            ))}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.35rem', paddingTop: '0.35rem', borderTop: '1px solid #F0F2F4', fontWeight: '800', color: '#1A1A2E', fontSize: '0.78rem' }}>
                              <span>Total</span>
                              <span>{total} check-ins</span>
                            </div>
                          </div>
                        );
                      })()}
                    </>
                  )}
                </div>
              </div>

              {/* High Priority Alert Box */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '40px', border: '1.5px solid #E0E4E6', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', height: 'fit-content' }}>
                <div style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem' }}>
                  <AlertCircle size={24} color="#D32F2F" />
                  <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '900', color: '#D32F2F' }}>High Priority Alert</h4>
                </div>
                <div style={{ padding: '0 3rem 3rem 3rem', textAlign: 'center' }}>
                  {alert ? (
                    <>
                      <Avatar size={90} name={alert.fullName} avatarUrl={alert.avatarUrl} style={{ margin: '0 auto 1.5rem auto' }} />
                      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem', fontWeight: '800', color: '#1A1A2E' }}>{alert.fullName}</h3>
                      {alert.alias && <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#8E9DA1', fontWeight: '600' }}>({alert.alias})</p>}
                      <div style={{ backgroundColor: '#F9F3D1', padding: '1.5rem', borderRadius: '24px', margin: '1rem 0', textAlign: 'left' }}>
                        <p style={{ margin: '0 0 0.5rem 0', fontWeight: '900', color: '#1A1A2E' }}>Flag for high priority</p>
                        <p style={{ margin: 0, color: '#1A1A2E', fontSize: '0.9rem', fontWeight: '600', lineHeight: 1.5, opacity: 0.8 }}>
                          Reason:<br />{alert.consecutiveNegativeDays} consecutive negative mood entries in last 7 days.
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <button onClick={() => handleAction('message', alert)} style={{ backgroundColor: '#FF8A80', color: '#FFF', border: 'none', borderRadius: '12px', padding: '1rem', fontWeight: '800', cursor: 'pointer' }}>
                          Send a support message
                        </button>
                        <button style={{ backgroundColor: '#D32F2F', color: '#FFF', borderRadius: '8px', border: 'none', padding: '0.4rem 1.25rem', fontWeight: '800', cursor: 'pointer', margin: '0 auto', width: 'fit-content' }} onClick={() => setViewMode('high_priority')}>
                          View all
                        </button>
                      </div>
                    </>
                  ) : (
                    <div style={{ padding: '2rem', color: '#8E9DA1', fontWeight: '600' }}>
                      ✅ No high priority users at this time.
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <UserTable
              title={viewMode === 'normal' ? 'Normal Users' : viewMode === 'moderate' ? 'Moderate Users' : 'High Priority Users'}
              bg={viewMode === 'normal' ? '#C8E6C9' : viewMode === 'moderate' ? '#FFF9C4' : '#FFAB91'}
              users={users[viewMode] || []}
              onAction={handleAction}
            />
          )}

          {viewMode !== 'dashboard' && (
            <button
              onClick={() => setViewMode('dashboard')}
              style={{ marginTop: '2rem', background: 'none', border: 'none', color: '#8E9DA1', fontWeight: '800', fontSize: '1rem', cursor: 'pointer' }}
            >
              ← Back to Dashboard
            </button>
          )}
        </>
      )}

      <MessageModal isOpen={modalType === 'message'} user={selectedUser} onClose={() => setModalType(null)} />
      <MoodHistoryModal isOpen={modalType === 'calendar'} user={selectedUser} onClose={() => setModalType(null)} />
    </div>
  );
};

export default AnalysisReports;
