import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Search, 
  Filter,
  MoreVertical,
  Ear,
  ChevronUp,
  ChevronDown,
  RefreshCw
} from 'lucide-react';
import Avatar from '../../../components/common/Avatar';
import { fetchListenOnlyMessages, reactToVent } from '../../../api/counselorApi';
import useAuthStore from '../../../store/useAuthStore';
import { connectSocket, joinCounselorRoom, onNewVent, disconnectSocket } from '../../../api/chatSocket';

const reactionButtons = [
  { label: "We're here for you", icon: '❤️' },
  { label: "Proud of you", icon: '⭐' },
  { label: "You showed courage", icon: '🦋' },
  { label: "You are heard", icon: '👋' },
  { label: "Take a break", icon: '🍃' },
  { label: "Rest if you need to", icon: '🛌' },
  { label: "Your feelings matter", icon: '☀️' },
  { label: "It's okay to pause", icon: '🌙' },
  { label: "Healing takes time", icon: '🌱' },
  { label: "We're with you", icon: '🫂' },
  { label: "You are shining", icon: '✨' },
  { label: "Keep growing", icon: '🌳' },
];

const CounselorListenOnly = () => {
  const { user, token } = useAuthStore();
  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);
  const [isReactionsExpanded, setIsReactionsExpanded] = useState(true);
  const [reactionsHeight, setReactionsHeight] = useState(450);
  const [isResizing, setIsResizing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [sendingReaction, setSendingReaction] = useState(false);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const dragInfo = useRef({ startY: 0, startHeight: 0 });
  const containerRef = useRef(null);
  const panelRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadVents = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const vents = await fetchListenOnlyMessages();
      setSessions(vents);
      if (vents.length > 0 && !activeSession) {
        setActiveSession(vents[0]);
      }
    } catch (err) {
      console.error('Failed to load vent messages:', err);
      setError('Failed to load messages. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [activeSession]);

  useEffect(() => {
    loadVents();
  }, [loadVents]);

  // Socket.io: join counselor room and listen for new vents
  useEffect(() => {
    if (!user?.id) return;
    const socket = connectSocket(token);
    joinCounselorRoom(user.id);
    onNewVent((data) => {
      // Refresh the list when a new vent arrives
      loadVents();
    });
    return () => {
      disconnectSocket();
    };
  }, [user?.id, loadVents]);

  // Keep panel exactly at 50% height of the container
  useEffect(() => {
    const updateDefaultHeight = () => {
      if (containerRef.current) {
        const h = containerRef.current.offsetHeight;
        if (h > 0) setReactionsHeight(h * 0.5);
      }
    };
    const timer = setTimeout(updateDefaultHeight, 100);
    window.addEventListener('resize', updateDefaultHeight);
    return () => { clearTimeout(timer); window.removeEventListener('resize', updateDefaultHeight); };
  }, []);

  const startResizing = useCallback((e) => {
    e.preventDefault();
    setIsResizing(true);
    const minH = containerRef.current ? containerRef.current.offsetHeight * 0.5 : 200;
    const actualHeight = panelRef.current ? panelRef.current.offsetHeight : (isReactionsExpanded ? reactionsHeight : minH);
    dragInfo.current = { startY: e.clientY, startHeight: actualHeight };
  }, [reactionsHeight, isReactionsExpanded]);

  const stopResizing = useCallback(() => setIsResizing(false), []);

  const resize = useCallback((e) => {
    if (isResizing && containerRef.current) {
      const deltaY = dragInfo.current.startY - e.clientY;
      // Strictly prevent downward dragging by ignoring negative deltaY
      const allowedDeltaY = Math.max(0, deltaY);
      let newHeight = dragInfo.current.startHeight + allowedDeltaY;
      const containerH = containerRef.current.offsetHeight;
      
      const maxHeight = Math.max(200, containerH - 100); 
      newHeight = Math.min(newHeight, maxHeight);
      
      setReactionsHeight(newHeight);
      
      if (newHeight > 120 && !isReactionsExpanded) {
        setIsReactionsExpanded(true);
      }
    }
  }, [isResizing, isReactionsExpanded]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    } else {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  const handleReact = async (btn) => {
    if (!activeSession || sendingReaction) return;
    const reactionText = `${btn.icon} ${btn.label}`;
    setSendingReaction(true);
    try {
      await reactToVent(activeSession.id, reactionText);
      // Update session locally to reflect new reaction
      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSession.id
            ? { ...s, reactions: [...(s.reactions || []), reactionText], status: 'REACTED' }
            : s
        )
      );
      setActiveSession((prev) => ({
        ...prev,
        reactions: [...(prev.reactions || []), reactionText],
        status: 'REACTED',
      }));
    } catch (err) {
      console.error('Failed to send reaction:', err);
    } finally {
      setSendingReaction(false);
    }
  };

  const filteredSessions = sessions.filter((s) => {
    const name = s.student?.fullName || s.student?.alias || '';
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const timeAgo = (dateStr) => {
    const diff = Math.floor((Date.now() - new Date(dateStr)) / 60000);
    if (diff < 1) return 'just now';
    if (diff < 60) return `${diff}mins`;
    const hours = Math.floor(diff / 60);
    return `${hours}h ago`;
  };

  const mobileWrapperStyle = isMobile ? {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    zIndex: 10
  } : {
    flex: 1, minHeight: 0
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...mobileWrapperStyle }}>
      <header style={{ marginBottom: isMobile ? '0.75rem' : '2.5rem', display: 'flex', alignItems: 'flex-start', gap: isMobile ? '0.75rem' : '1.25rem', flexShrink: 0 }}>
        <div style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '0.55rem' : '0.75rem', borderRadius: isMobile ? '14px' : '18px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1.5px solid #F0F4F5', flexShrink: 0, marginTop: '2px' }}>
          <Ear size={isMobile ? 24 : 38} color="#1A1A2E" strokeWidth={2} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 className="heading-decorative" style={{ color: '#1A1A2E', fontSize: isMobile ? '1.3rem' : '2.4rem', fontWeight: '800', margin: 0, lineHeight: 1.2 }}>Listen-only</h1>
          <p style={{ color: '#8E9DA1', fontSize: isMobile ? '0.78rem' : '1.05rem', fontWeight: '600', margin: isMobile ? '0.2rem 0 0 0' : '0.2rem 0 0 0', lineHeight: 1.4 }}>
            Students who have sent you their thoughts anonymously.{!isMobile && ' Provide emotional support through reactions only.'}
          </p>
        </div>
        <button
          onClick={loadVents}
          style={{ background: 'none', border: '1.5px solid #E0E4E6', cursor: 'pointer', color: '#8E9DA1', padding: isMobile ? '0.4rem 0.65rem' : '0.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: isMobile ? '0.75rem' : '0.85rem', flexShrink: 0, marginTop: '2px' }}
        >
          <RefreshCw size={isMobile ? 13 : 16} /> Refresh
        </button>
      </header>

      <div
        ref={containerRef}
        style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '380px 1fr', gridTemplateRows: '1fr',
          flex: 1, backgroundColor: '#FFFFFF', minHeight: 0,
          borderRadius: isMobile ? '24px' : '32px', overflow: 'hidden',
          border: '1.5px solid #E0E4E6', boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
        }}
      >
        {/* Sidebar */}
        <div style={{ borderRight: isMobile ? 'none' : '1.5px solid #F0F4F5', borderBottom: isMobile && activeSession ? '1.5px solid #F0F4F5' : 'none', display: (!isMobile || !activeSession) ? 'flex' : 'none', flexDirection: 'column' }}>
          <div style={{ padding: isMobile ? '1.5rem' : '2rem 1.75rem', borderBottom: '1.5px solid #F0F4F5' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', fontWeight: '800', color: '#1A1A2E', fontSize: isMobile ? '1.3rem' : '1.6rem' }}>Listen-Only Messages</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#8E9DA1' }} />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3.25rem', borderRadius: '100px', border: '1.5px solid #E0E4E6', backgroundColor: '#FFFFFF', outline: 'none', fontSize: '0.95rem', fontWeight: '500' }}
                />
              </div>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8E9DA1' }}>
                <Filter size={24} />
              </button>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#8E9DA1', fontWeight: '600' }}>Loading messages...</div>
            ) : error ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#FF5252', fontWeight: '600' }}>{error}</div>
            ) : filteredSessions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#8E9DA1', fontWeight: '600' }}>No messages yet</div>
            ) : (
              filteredSessions.map((session) => (
                <div
                  key={session.id}
                  onClick={() => setActiveSession(session)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem',
                    borderRadius: '24px', cursor: 'pointer',
                    backgroundColor: activeSession?.id === session.id ? '#E0F7FA' : 'transparent',
                    transition: 'all 0.2s ease', marginBottom: '0.5rem'
                  }}
                >
                  <Avatar size={54} initials={(session.student?.fullName || session.student?.alias || 'S').charAt(0)} color={activeSession?.id === session.id ? '#00BCD4' : '#E0E4E6'} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: '800', color: '#1A1A2E', fontSize: '1.05rem' }}>
                        {session.student?.alias || session.student?.fullName || 'Anonymous'}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#8E9DA1', fontWeight: '700' }}>{timeAgo(session.createdAt)}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#8E9DA1', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: '500' }}>
                      {session.content}
                    </p>
                  </div>
                  {session.status === 'UNREAD' && (
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#00BCD4', flexShrink: 0 }} />
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, display: (!isMobile || activeSession) ? 'flex' : 'none', flexDirection: 'column', backgroundColor: '#FFFFFF', position: 'relative', overflow: 'hidden', borderRadius: isMobile ? '0' : '0 0 32px 0', minHeight: isMobile ? 0 : undefined, height: isMobile ? '100%' : undefined }}>
          {activeSession ? (
            <>
              <header style={{ padding: isMobile ? '1rem' : '1.25rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1.5px solid #F0F4F5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {isMobile && (
                    <button onClick={() => setActiveSession(null)} style={{ background: 'none', border: 'none', padding: '0.5rem', color: '#8E9DA1' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                  )}
                  <Avatar size={isMobile ? 40 : 48} initials={(activeSession.student?.fullName || activeSession.student?.alias || 'S').charAt(0)} />
                  <h4 style={{ margin: 0, fontWeight: '800', color: '#1A1A2E', fontSize: isMobile ? '1rem' : '1.15rem' }}>
                    {activeSession.student?.alias || activeSession.student?.fullName || 'Anonymous'}
                  </h4>
                </div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8E9DA1' }}>
                  <MoreVertical size={22} />
                </button>
              </header>

              {/* Message Display */}
              <div style={{ flex: 1, padding: isMobile ? '1.5rem' : '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', overflowY: 'auto', backgroundColor: '#FCFDFF', minHeight: 0 }}>
                {/* Student's vent message */}
                <div style={{ alignSelf: 'flex-start', maxWidth: isMobile ? '90%' : '75%' }}>
                  <div style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '12px', border: '1.5px solid #F0F4F5' }}>
                    <p style={{ margin: 0, color: '#1A1A2E', lineHeight: 1.6, fontWeight: '500' }}>{activeSession.content}</p>
                    <span style={{ fontSize: '0.7rem', color: '#B0BEC5', marginTop: '0.75rem', display: 'block' }}>{formatTime(activeSession.createdAt)}</span>
                  </div>
                </div>

                {/* Reactions sent */}
                {(activeSession.reactions || []).map((reaction, i) => (
                  <div key={i} style={{ alignSelf: 'flex-end', maxWidth: '75%' }}>
                    <div style={{ backgroundColor: '#4DD0E1', padding: '1.25rem 1.75rem', borderRadius: '12px', color: '#FFFFFF', boxShadow: '0 8px 25px rgba(0,188,212,0.2)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <p style={{ margin: 0, fontWeight: '700' }}>{reaction}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reactions Panel */}
              <div 
                ref={panelRef}
                style={{
                backgroundColor: '#FFFFFF', borderTop: '3px solid #00BCD4',
                height: isReactionsExpanded ? `${reactionsHeight}px` : 'auto',
                flexShrink: 0,
                display: 'flex', flexDirection: 'column', position: 'relative',
                transition: isResizing ? 'none' : 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                userSelect: isResizing ? 'none' : 'auto',
                boxShadow: '0 -10px 40px rgba(0,0,0,0.05)', zIndex: 10,
                borderRadius: isMobile ? '0' : '0 0 32px 0',
                overflow: 'hidden'
              }}>
                {isResizing && <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, cursor: 'ns-resize' }} />}
                <div onMouseDown={startResizing} style={{ position: 'absolute', top: '-16px', left: 0, right: 0, height: '32px', cursor: 'ns-resize', zIndex: 11, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '5px', backgroundColor: '#D1D9DB', borderRadius: '10px' }} />
                </div>
                <div 
                  ref={headerRef}
                  onClick={() => {
                  setIsReactionsExpanded(!isReactionsExpanded);
                  if (!isReactionsExpanded && reactionsHeight < 200) {
                    setReactionsHeight(containerRef.current ? containerRef.current.offsetHeight * 0.5 : 450);
                  }
                }} style={{ padding: isMobile ? '1rem' : '1.25rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#FCFDFF', borderBottom: '1.5px solid #F0F4F5' }}>
                  <h4 style={{ margin: 0, color: '#1A1A2E', fontWeight: '800', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                    Send Reaction <span style={{ color: '#8E9DA1', fontWeight: '600', fontSize: isMobile ? '0.75rem' : '0.85rem' }}>{isMobile ? '(Select 1)' : '(Select only 1 reaction)'}</span>
                  </h4>
                  {isReactionsExpanded ? <ChevronDown size={22} color="#8E9DA1" /> : <ChevronUp size={22} color="#8E9DA1" />}
                </div>
                  {(isReactionsExpanded || !isMobile) && (
                    <div style={{ flex: 1, overflowY: isReactionsExpanded ? 'auto' : 'hidden', minHeight: 0 }}>
                      <div style={{ padding: isMobile ? '1rem' : '1.5rem 2rem', paddingBottom: '1rem', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)', gap: '1rem' }}>
                        {reactionButtons.slice(0, isReactionsExpanded ? reactionButtons.length : 6).map((btn, i) => (
                        <button
                          key={i}
                          onClick={() => handleReact(btn)}
                          disabled={sendingReaction}
                          style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            gap: '0.5rem', padding: '0.75rem', borderRadius: '20px',
                            border: `1.5px solid ${sendingReaction ? '#E0E4E6' : '#F0F4F5'}`,
                            backgroundColor: '#FFFFFF', cursor: sendingReaction ? 'default' : 'pointer',
                            transition: 'all 0.2s ease', minHeight: '90px', opacity: sendingReaction ? 0.6 : 1
                          }}
                          onMouseEnter={(e) => { if (!sendingReaction) { e.currentTarget.style.borderColor = '#00BCD4'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,188,212,0.1)'; } }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#F0F4F5'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                          <span style={{ fontSize: '2rem' }}>{btn.icon}</span>
                          <span style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A2E', textAlign: 'center' }}>{btn.label}</span>
                        </button>
                      ))}
                    </div>
                    {/* Spacer div to guarantee bottom padding works across all browsers */}
                    <div style={{ height: isMobile ? '2rem' : '4rem', width: '100%', flexShrink: 0 }}></div>
                  </div>
                  )}
              </div>
            </>
          ) : (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', textAlign: 'center' }}>
              <Ear size={60} color="#B0BEC5" />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1A1A2E', margin: '1.5rem 0 0.5rem' }}>No message selected</h3>
              <p style={{ color: '#8E9DA1', fontWeight: '600' }}>Select a student message from the sidebar to view and react.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounselorListenOnly;
