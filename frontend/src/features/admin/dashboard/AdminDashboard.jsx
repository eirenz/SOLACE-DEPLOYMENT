import React, { useState, useEffect } from 'react';
import { 
  LayoutGrid, 
  Users, 
  Calendar, 
  MessageSquare, 
  ClipboardList, 
  ArrowUpRight,
  ChevronDown,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../../components/common/Avatar';
import { fetchDashboardStats } from '../../../api/adminApi';

const moodToEmoji = {
  HAPPY: '😄',
  NEUTRAL: '😐',
  STRESSED: '😫',
  SAD: '😢',
  ANGRY: '😡'
};

// ─── Professional Emotional Trend Chart ──────────────────────────────────────

const EmotionalTrendChart = ({ trend }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!trend || trend.length === 0) {
    return (
      <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8E9DA1', fontWeight: '600' }}>
        No check-in data available for the last 7 days
      </div>
    );
  }

  // Totals for summary cards
  const totals = trend.reduce((acc, d) => ({ n: acc.n + d.normal, m: acc.m + d.moderate, h: acc.h + d.high_priority }), { n: 0, m: 0, h: 0 });
  const totalAll = totals.n + totals.m + totals.h;
  const pct = (v) => totalAll === 0 ? 0 : Math.round((v / totalAll) * 100);

  const chartW = 520, chartH = 200, padL = 42, padR = 15, padT = 20, padB = 40;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;
  const maxVal = Math.max(3, ...trend.flatMap(d => [d.normal, d.moderate, d.high_priority]));

  // Nice Y-axis ticks
  const step = maxVal <= 5 ? 1 : maxVal <= 10 ? 2 : Math.ceil(maxVal / 5);
  const yTicks = [];
  for (let v = 0; v <= maxVal; v += step) yTicks.push(v);
  if (yTicks[yTicks.length - 1] < maxVal) yTicks.push(maxVal);

  const getX = (i) => padL + (i / (trend.length - 1 || 1)) * plotW;
  const getY = (val) => padT + plotH - (val / maxVal) * plotH;

  // Build smooth cubic bezier path
  const smoothPath = (key) => {
    const pts = trend.map((d, i) => ({ x: getX(i), y: getY(d[key]) }));
    if (pts.length < 2) return `M${pts[0].x},${pts[0].y}`;
    let path = `M${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const cp = (pts[i + 1].x - pts[i].x) * 0.35;
      path += ` C${pts[i].x + cp},${pts[i].y} ${pts[i + 1].x - cp},${pts[i + 1].y} ${pts[i + 1].x},${pts[i + 1].y}`;
    }
    return path;
  };

  // Build area path (close to bottom)
  const areaPath = (key) => {
    const line = smoothPath(key);
    const lastPt = trend.length - 1;
    return `${line} L${getX(lastPt)},${getY(0)} L${getX(0)},${getY(0)} Z`;
  };

  // Format date label
  const fmtDate = (dateStr) => {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const LINES = [
    { key: 'normal', color: '#4CAF50', label: 'Normal' },
    { key: 'moderate', color: '#FFA726', label: 'Moderate' },
    { key: 'high_priority', color: '#EF5350', label: 'High Priority' },
  ];

  return (
    <div>
      {/* Summary row */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
        {[
          { label: 'Normal', val: totals.n, pct: pct(totals.n), color: '#4CAF50', bg: '#E8F5E9' },
          { label: 'Moderate', val: totals.m, pct: pct(totals.m), color: '#FFA726', bg: '#FFF3E0' },
          { label: 'High Priority', val: totals.h, pct: pct(totals.h), color: '#EF5350', bg: '#FFEBEE' },
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
      <div style={{ position: 'relative' }} onMouseLeave={() => setHoveredIdx(null)}>
        <svg width="100%" viewBox={`0 0 ${chartW} ${chartH}`} style={{ overflow: 'visible', display: 'block' }}>
          <defs>
            {LINES.map(l => (
              <linearGradient key={l.key} id={`grad_${l.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={l.color} stopOpacity="0.2" />
                <stop offset="100%" stopColor={l.color} stopOpacity="0.01" />
              </linearGradient>
            ))}
          </defs>

          {/* Grid lines */}
          {yTicks.map(val => (
            <g key={val}>
              <line x1={padL} y1={getY(val)} x2={chartW - padR} y2={getY(val)} stroke={val === 0 ? '#E0E4E6' : '#F0F2F4'} strokeWidth="1" strokeDasharray={val === 0 ? 'none' : '3,3'} />
              <text x={padL - 8} y={getY(val) + 4} textAnchor="end" fill="#A0AEB5" fontSize="10" fontWeight="600" fontFamily="system-ui">{val}</text>
            </g>
          ))}

          {/* Area fills */}
          {LINES.map(l => (
            <path key={`area_${l.key}`} d={areaPath(l.key)} fill={`url(#grad_${l.key})`} />
          ))}

          {/* Smooth lines */}
          {LINES.map(l => (
            <path key={`line_${l.key}`} d={smoothPath(l.key)} fill="none" stroke={l.color} strokeWidth="2.5" strokeLinecap="round" />
          ))}

          {/* Hover vertical line */}
          {hoveredIdx !== null && (
            <line x1={getX(hoveredIdx)} y1={padT} x2={getX(hoveredIdx)} y2={getY(0)} stroke="#1A1A2E" strokeWidth="1" strokeDasharray="4,3" opacity="0.3" />
          )}

          {/* Data points */}
          {LINES.map(l => trend.map((d, i) => (
            <circle key={`${l.key}_${i}`} cx={getX(i)} cy={getY(d[l.key])} r={hoveredIdx === i ? 5 : 3} fill={hoveredIdx === i ? l.color : '#FFF'} stroke={l.color} strokeWidth="2" style={{ transition: 'r 0.15s, fill 0.15s' }} />
          )))}

          {/* Invisible hover zones */}
          {trend.map((d, i) => (
            <rect key={`hover_${i}`} x={getX(i) - (plotW / trend.length) / 2} y={padT} width={plotW / trend.length} height={plotH} fill="transparent" style={{ cursor: 'pointer' }} onMouseEnter={() => setHoveredIdx(i)} />
          ))}

          {/* X-axis labels */}
          {trend.map((d, i) => (
            <g key={`label_${i}`}>
              <text x={getX(i)} y={chartH - 15} textAnchor="middle" fill="#A0AEB5" fontSize="9" fontWeight="700" fontFamily="system-ui">{d.day}</text>
              <text x={getX(i)} y={chartH - 4} textAnchor="middle" fill="#C0C8CD" fontSize="8" fontWeight="600" fontFamily="system-ui">{fmtDate(d.date)}</text>
            </g>
          ))}
        </svg>

        {/* Rich tooltip */}
        {hoveredIdx !== null && (() => {
          const d = trend[hoveredIdx];
          const total = d.normal + d.moderate + d.high_priority;
          return (
            <div style={{
              position: 'absolute',
              left: `${(getX(hoveredIdx) / chartW) * 100}%`,
              top: '-8px',
              transform: hoveredIdx > trend.length / 2 ? 'translateX(-100%)' : 'translateX(0)',
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
      </div>
    </div>
  );
};

// ─── Main Dashboard ──────────────────────────────────────────────────────────

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    stats: { totalUsers: 0, totalAppointments: 0, totalReports: 0, totalCounselors: 0 },
    highPriority: [],
    reviewReports: [],
    scheduledAppointments: [],
    trend: []
  });
  const [loading, setLoading] = useState(true);
  const [showAllHighPriority, setShowAllHighPriority] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        const result = await fetchDashboardStats();
        setData(result);
      } catch (error) {
        console.error('Failed to load dashboard stats', error);
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, []);

  const stats = [
    { label: 'Total Users:', value: loading ? '...' : data.stats.totalUsers, icon: Users, color: '#1A1A2E' },
    { label: 'Appointment:', value: loading ? '...' : data.stats.totalAppointments, icon: Calendar, color: '#1A1A2E' },
    { label: 'Flag Contents:', value: loading ? '...' : data.stats.totalReports, icon: MessageSquare, color: '#1A1A2E' },
    { label: 'Counselor List:', value: loading ? '...' : data.stats.totalCounselors, icon: ClipboardList, color: '#1A1A2E' },
  ];

  const highPriority = data.highPriority || [];
  const displayedHighPriority = showAllHighPriority ? highPriority : highPriority.slice(0, 5);
  const reviewReports = data.reviewReports || [];
  const scheduledAppts = data.scheduledAppointments || [];
  const trend = data.trend || [];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out', paddingBottom: isMobile ? '5rem' : '0' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.25rem', marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
        <div style={{ backgroundColor: '#1A1A2E', padding: isMobile ? '0.5rem' : '0.75rem', borderRadius: '12px', color: '#FFF' }}>
          <LayoutGrid size={isMobile ? 20 : 28} />
        </div>
        <h1 style={{ fontSize: isMobile ? '1.4rem' : '2.4rem', fontWeight: '800', color: '#1A1A2E', margin: 0 }}>Dashboard</h1>
      </header>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '0.75rem' : '1.5rem', marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            backgroundColor: '#FFFFFF',
            padding: isMobile ? '1rem' : '1.5rem 2rem',
            borderRadius: isMobile ? '16px' : '24px',
            border: '1.5px solid #E0E4E6',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
            position: 'relative'
          }}>
            <div>
              <p style={{ margin: '0 0 0.25rem 0', color: '#1A1A2E', fontWeight: '700', fontSize: isMobile ? '0.7rem' : '0.9rem' }}>{stat.label}</p>
              <h3 style={{ margin: 0, fontSize: isMobile ? '1.5rem' : '2.2rem', fontWeight: '800', color: '#1A1A2E' }}>{stat.value}</h3>
            </div>
            <div style={{ backgroundColor: '#F4F7F8', padding: isMobile ? '0.5rem' : '0.8rem', borderRadius: '50%' }}>
              <stat.icon size={isMobile ? 18 : 28} color="#1A1A2E" />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.3fr 0.7fr', gap: isMobile ? '1.5rem' : '2rem' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Emotional Trend Chart Container */}
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '32px', 
            padding: '2rem', 
            border: '1.5px solid #E0E4E6',
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#1A1A2E' }}>Emotional Trend</h3>
              <div style={{ backgroundColor: '#F4F7F8', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '700', color: '#8E9DA1' }}>
                Last 7 days
              </div>
            </div>
            
            <EmotionalTrendChart trend={trend} />
          </div>

          {/* Review Report Table */}
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '32px', 
            padding: '2rem', 
            border: '1.5px solid #E0E4E6'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.2rem', fontWeight: '800', color: '#1A1A2E' }}>Review Report</h3>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#8E9DA1', fontWeight: '600' }}>Students with submitted reports awaiting review.</p>
              </div>
              <button 
                onClick={() => navigate('/admin/flag-content')}
                style={{ background: 'none', border: 'none', color: '#00BCD4', fontWeight: '800', fontSize: '0.85rem', cursor: 'pointer' }}
              >View All</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1.5px solid #F0F4F5' }}>
                  <th style={{ padding: '0.75rem 0', textAlign: 'left', fontSize: '0.85rem', color: '#1A1A2E', fontWeight: '800' }}>Student Name</th>
                  <th style={{ padding: '0.75rem 0', textAlign: 'left', fontSize: '0.85rem', color: '#1A1A2E', fontWeight: '800' }}>Remarks</th>
                  <th style={{ padding: '0.75rem 0', textAlign: 'left', fontSize: '0.85rem', color: '#1A1A2E', fontWeight: '800' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {reviewReports.length === 0 ? (
                  <tr><td colSpan="3" style={{ padding: '2rem 0', textAlign: 'center', color: '#8E9DA1', fontWeight: '600' }}>No pending reports</td></tr>
                ) : reviewReports.map((report, i) => (
                  <tr key={i} style={{ borderBottom: i === reviewReports.length - 1 ? 'none' : '1.5px solid #F9FAFB' }}>
                    <td style={{ padding: '1rem 0', fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>{report.name}</td>
                    <td style={{ padding: '1rem 0', fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>{report.remarks}</td>
                    <td style={{ padding: '1rem 0' }}>
                      <span style={{ 
                        backgroundColor: '#FFEBEE', 
                        color: '#FF7043',
                        padding: '0.3rem 1rem',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: '800',
                        border: '1px solid #FFCDD2'
                      }}>{report.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* High Priority List */}
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '32px', 
            padding: '2rem', 
            border: '1.5px solid #E0E4E6'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.2rem', fontWeight: '800', color: '#1A1A2E' }}>High-Priority List</h3>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#8E9DA1', fontWeight: '600' }}>High-Priority Students for Immediate Counseling.</p>
              </div>
              <button 
                onClick={() => navigate('/admin/analysis-reports')}
                style={{ background: 'none', border: 'none', color: '#00BCD4', fontWeight: '800', fontSize: '0.85rem', cursor: 'pointer' }}
              >View All</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1.5px solid #F0F4F5' }}>
                  <th style={{ padding: '0.75rem 0', textAlign: 'left', fontSize: '0.85rem', color: '#1A1A2E', fontWeight: '800' }}>Student Name</th>
                  <th style={{ padding: '0.75rem 0', textAlign: 'left', fontSize: '0.85rem', color: '#1A1A2E', fontWeight: '800' }}>Streak</th>
                  <th style={{ padding: '0.75rem 0', textAlign: 'left', fontSize: '0.85rem', color: '#1A1A2E', fontWeight: '800' }}>Latest Mood</th>
                </tr>
              </thead>
              <tbody>
                {highPriority.length === 0 ? (
                  <tr><td colSpan="3" style={{ padding: '2rem 0', textAlign: 'center', color: '#8E9DA1', fontWeight: '600' }}>✅ No high priority students</td></tr>
                ) : displayedHighPriority.map((item, i) => (
                  <tr key={i} style={{ borderBottom: i === displayedHighPriority.length - 1 ? 'none' : '1.5px solid #F9FAFB' }}>
                    <td style={{ padding: '1rem 0', fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>{item.fullName || item.alias || 'Student'}</td>
                    <td style={{ padding: '1rem 0', fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>{item.streak}</td>
                    <td style={{ padding: '1rem 0', fontSize: '1.5rem', textAlign: 'center' }}>{moodToEmoji[item.latestMood] || '😐'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {highPriority.length > 5 && !showAllHighPriority && (
              <button 
                onClick={() => setShowAllHighPriority(true)}
                style={{ 
                  width: '100%', marginTop: '1rem', padding: '0.6rem', 
                  backgroundColor: '#F4F7F8', border: 'none', borderRadius: '12px', 
                  color: '#1A1A2E', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer'
                }}
              >
                Show all {highPriority.length} students
              </button>
            )}
            {showAllHighPriority && highPriority.length > 5 && (
              <button 
                onClick={() => setShowAllHighPriority(false)}
                style={{ 
                  width: '100%', marginTop: '1rem', padding: '0.6rem', 
                  backgroundColor: '#F4F7F8', border: 'none', borderRadius: '12px', 
                  color: '#8E9DA1', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer'
                }}
              >
                Show less
              </button>
            )}
          </div>

          {/* Scheduled Appointments */}
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '32px', 
            padding: '2rem', 
            border: '1.5px solid #E0E4E6'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.2rem', fontWeight: '800', color: '#1A1A2E' }}>Scheduled Appointments</h3>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#8E9DA1', fontWeight: '600' }}>List of upcoming booked appointments.</p>
              </div>
              <button 
                onClick={() => navigate('/admin/appointment')}
                style={{ background: 'none', border: 'none', color: '#00BCD4', fontWeight: '800', fontSize: '0.85rem', cursor: 'pointer' }}
              >View All</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {scheduledAppts.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#8E9DA1', fontWeight: '600' }}>No upcoming appointments</div>
              ) : scheduledAppts.map((appt, i) => (
                <div key={i} style={{ borderRadius: '16px', border: '1px solid #F0F4F5', overflow: 'hidden' }}>
                   <div style={{ backgroundColor: '#8E9DA1', color: '#FFF', padding: '0.4rem 1rem', fontSize: '0.7rem', fontWeight: '800', display: 'flex', justifyContent: 'space-between' }}>
                     <span>{appt.date}</span>
                     <span>{appt.time}</span>
                   </div>
                   <div style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Avatar size={32} initials={appt.name.charAt(0)} />
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '800', color: '#1A1A2E' }}>{appt.name}</p>
                        <p style={{ margin: 0, fontSize: '0.75rem', color: '#8E9DA1', fontWeight: '600' }}>{appt.text}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
