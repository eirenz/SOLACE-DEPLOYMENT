import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search, Filter, Send, MoreVertical, Smile, Paperclip, MessageCircle, Mail
} from 'lucide-react';
import Avatar from '../../../components/common/Avatar';
import { fetchCounselorSessions, fetchSessionMessages } from '../../../api/chatApi';
import { connectSocket, joinCounselorRoom, joinSession, onReceiveMessage, offReceiveMessage, sendMessage, onNewChatSession } from '../../../api/chatSocket';
import useAuthStore from '../../../store/useAuthStore';

const FilterModal = ({ isOpen, onClose, filters, onToggle }) => {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'absolute', top: '45px', right: '0', width: '160px',
      backgroundColor: '#FFFFFF', borderRadius: '14px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      border: '1.5px solid #E0E4E6', zIndex: 100, overflow: 'hidden'
    }}>
      {['Recent', 'Read', 'Unread'].map((f, i) => (
        <label key={f} style={{
          display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem',
          cursor: 'pointer', borderBottom: i === 2 ? 'none' : '1px solid #F0F4F5'
        }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F9FAFB'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <input type="checkbox" checked={filters.includes(f)} onChange={() => onToggle(f)}
            style={{ width: '18px', height: '18px', accentColor: '#00BCD4', cursor: 'pointer' }} />
          <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1A1A2E' }}>{f}</span>
        </label>
      ))}
    </div>
  );
};

const CounselorChat = () => {
  const { user, token } = useAuthStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sessions, setSessions] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState(['Unread']);
  const [loading, setLoading] = useState(true);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadSessions = async () => {
    try {
      const data = await fetchCounselorSessions();
      setSessions(data);
    } catch (err) {
      console.error('Failed to load chat sessions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSessions();
  }, []);

  // Auto-select session from notification link (?sessionId=xxx)
  useEffect(() => {
    const targetSessionId = searchParams.get('sessionId');
    if (!targetSessionId || loading || sessions.length === 0) return;
    const matchedSession = sessions.find(s => s.id === targetSessionId);
    if (matchedSession) {
      setActiveChat(matchedSession);
      setSearchParams({});  // Clear param so it doesn't retrigger
    }
  }, [searchParams, sessions, loading]);

  // Socket.io setup
  useEffect(() => {
    if (!user?.id) return;
    connectSocket(token);
    joinCounselorRoom(user.id);
    onNewChatSession(() => loadSessions());
    return () => {
      offReceiveMessage();
    };
  }, [user?.id]);

  // Join session room + load full history when active chat changes
  useEffect(() => {
    if (!activeChat) return;
    setMessages([]);
    setHistoryLoading(true);

    joinSession(activeChat.id);

    // Load full message history from API (no gaps)
    fetchSessionMessages(activeChat.id, 1, 100)
      .then((data) => {
        const msgs = (data.messages || []).map(m => ({ ...m, isTemp: false }));
        setMessages(msgs);
      })
      .catch(() => {
        // Fall back to snapshot if API fails
        const existingMessages = activeChat.messages || [];
        setMessages(existingMessages.map(m => ({ ...m, isTemp: false })));
      })
      .finally(() => setHistoryLoading(false));

    // Listen for new real-time messages — deduplicate by id
    offReceiveMessage();
    onReceiveMessage((msg) => {
      if (msg.sessionId === activeChat.id) {
        setMessages(prev => {
          if (prev.some(m => m.id === msg.id)) return prev; // deduplicate
          return [...prev, msg];
        });
      }
    });

    return () => {
      offReceiveMessage();
    };
  }, [activeChat?.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim() || !activeChat || !user?.id) return;
    const content = inputText.trim();
    setInputText('');
    sendMessage(activeChat.id, user.id, content);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleFilter = (f) => {
    setActiveFilters(prev => prev.includes(f) ? prev.filter(i => i !== f) : [...prev, f]);
  };

  const filteredSessions = sessions.filter(s => {
    const name = s.student?.fullName || s.student?.alias || '';
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const formatTime = (dateStr) => new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const timeAgo = (dateStr) => {
    const diff = Math.floor((Date.now() - new Date(dateStr)) / 60000);
    if (diff < 1) return 'just now';
    if (diff < 60) return `${diff}mins`;
    return `${Math.floor(diff / 60)}h ago`;
  };

  /* ── Layout: fill the remaining viewport without creating outer scroll ── */
  const mobileWrapperStyle = isMobile ? {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    zIndex: 10
  } : {
    flex: 1, minHeight: 0
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...mobileWrapperStyle }}>
      {/* Page header */}
      <header style={{ marginBottom: isMobile ? '0.75rem' : '2rem', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.25rem', marginBottom: isMobile ? '0.15rem' : '0.5rem' }}>
          <MessageCircle size={isMobile ? 24 : 38} color="var(--primary)" />
          <h1 className="heading-decorative" style={{ color: '#1A1A2E', fontSize: isMobile ? '1.3rem' : '2.4rem', fontWeight: '800', margin: 0, lineHeight: 1.2 }}>Advice Chat</h1>
        </div>
        <p style={{ color: '#8E9DA1', fontSize: isMobile ? '0.78rem' : '1.1rem', fontWeight: '600', marginLeft: isMobile ? '2.55rem' : '3.25rem' }}>Students requesting guidance and support</p>
      </header>

      {/* Chat box — fixed height, no outer scroll */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '380px 1fr',
        flex: 1,
        minHeight: 0,         /* allow flex child to shrink */
        backgroundColor: '#FFFFFF',
        borderRadius: isMobile ? '24px' : '32px',
        overflow: 'hidden',
        border: '1.5px solid #E0E4E6',
        boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
      }}>
        {/* ─── Session Sidebar ─── */}
        <div style={{ borderRight: isMobile ? 'none' : '1.5px solid #F0F4F5', borderBottom: isMobile && activeChat ? '1.5px solid #F0F4F5' : 'none', display: (!isMobile || !activeChat) ? 'flex' : 'none', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ padding: isMobile ? '1.5rem' : '2rem 1.75rem', borderBottom: '1.5px solid #F0F4F5', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <MessageCircle size={24} color="#1A1A2E" />
              <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: '#1A1A2E' }}>Chat</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#8E9DA1' }} />
                <input type="text" placeholder="Search..." value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.75rem', borderRadius: '16px', border: '1.5px solid #E0E4E6', fontSize: '0.95rem', backgroundColor: '#F9FAFB', outline: 'none' }} />
              </div>
              <div style={{ position: 'relative' }}>
                <button onClick={() => setIsFilterOpen(!isFilterOpen)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8E9DA1', padding: '0.5rem' }}>
                  <Filter size={22} />
                </button>
                <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} filters={activeFilters} onToggle={toggleFilter} />
              </div>
            </div>
          </div>

          {/* Session list — scrollable */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#8E9DA1', fontWeight: '600' }}>Loading chats...</div>
            ) : filteredSessions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#8E9DA1', fontWeight: '600' }}>No active chats</div>
            ) : (
              filteredSessions.map(chat => (
                <div key={chat.id} onClick={() => setActiveChat(chat)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem',
                    borderRadius: '24px', cursor: 'pointer',
                    backgroundColor: activeChat?.id === chat.id ? '#E0F7FA' : 'transparent',
                    marginBottom: '0.5rem', transition: 'all 0.2s'
                  }}>
                  <Avatar size={54} initials={(chat.student?.fullName || chat.student?.alias || 'S').charAt(0)} color={activeChat?.id === chat.id ? '#00BCD4' : '#E0E4E6'} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '800', color: '#1A1A2E' }}>
                        {chat.student?.alias || chat.student?.fullName || 'Student'}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: '#8E9DA1', fontWeight: '700', flexShrink: 0 }}>
                        {chat.messages?.[0] ? timeAgo(chat.messages[0].createdAt) : ''}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#555555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: '500' }}>
                      {chat.messages?.[0]?.content || 'No messages yet'}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ─── Main Chat View ─── */}
        <div style={{ display: (!isMobile || activeChat) ? 'flex' : 'none', flexDirection: 'column', backgroundColor: '#FFFFFF', minHeight: 0, height: isMobile ? '100%' : undefined }}>
          {activeChat ? (
            <>
              {/* Chat header — sticky */}
              <div style={{ padding: isMobile ? '1rem' : '1.25rem 2.5rem', borderBottom: '1.5px solid #F0F4F5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {isMobile && (
                    <button onClick={() => setActiveChat(null)} style={{ background: 'none', border: 'none', padding: '0.5rem', color: '#8E9DA1' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                  )}
                  <Avatar size={isMobile ? 40 : 48} initials={(activeChat.student?.fullName || 'S').charAt(0)} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '800', color: '#1A1A2E' }}>
                      {activeChat.student?.alias || activeChat.student?.fullName || 'Student'}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#4CAF50', fontWeight: '700' }}>● Active now</p>
                  </div>
                </div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8E9DA1' }}><MoreVertical size={22} /></button>
              </div>

              {/* Messages — this is the ONLY scrollable area */}
              <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '1.5rem' : '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: '#F9FAFB', minHeight: 0 }}>
                {historyLoading ? (
                  <div style={{ textAlign: 'center', color: '#8E9DA1', fontWeight: '600', padding: '2rem' }}>Loading messages...</div>
                ) : messages.length === 0 ? (
                  <div style={{ textAlign: 'center', color: '#8E9DA1', fontWeight: '600', padding: '2rem' }}>Start the conversation...</div>
                ) : (
                  messages.map((msg, i) => {
                    const isMe = msg.sender?.id === user?.id;
                    return (
                      <div key={msg.id || i} style={{ alignSelf: isMe ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
                        <div style={{
                          padding: '1rem 1.5rem',
                          backgroundColor: isMe ? '#00BCD4' : '#FFFFFF',
                          color: isMe ? '#FFFFFF' : '#1A1A2E',
                          borderRadius: isMe ? '24px 24px 0 24px' : '0 24px 24px 24px',
                          boxShadow: isMe ? '0 8px 25px rgba(0,188,212,0.2)' : '0 4px 15px rgba(0,0,0,0.04)',
                          border: isMe ? 'none' : '1.5px solid #F0F4F5',
                          opacity: msg.isTemp ? 0.7 : 1
                        }}>
                          <p style={{ margin: 0, lineHeight: 1.6, fontWeight: '500' }}>{msg.content}</p>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#8E9DA1', marginTop: '0.4rem', display: 'block', textAlign: isMe ? 'right' : 'left', fontWeight: '700' }}>
                          {formatTime(msg.createdAt)}
                        </span>
                      </div>
                    );
                  })
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input — sticky at bottom */}
              <div style={{ padding: isMobile ? '1rem' : '1.5rem 2.5rem', borderTop: '1.5px solid #F0F4F5', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1.25rem', backgroundColor: '#F4F7F8', padding: '0.6rem 1rem', borderRadius: '100px', border: '1.5px solid #E0E4E6' }}>
                  {!isMobile && <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8E9DA1' }}><Smile size={24} /></button>}
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8E9DA1' }}><Paperclip size={isMobile ? 20 : 22} /></button>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: '1rem', color: '#1A1A2E', padding: '0.5rem' }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputText.trim()}
                    style={{
                      width: '45px', height: '45px', borderRadius: '50%', backgroundColor: inputText.trim() ? '#00BCD4' : '#E0E4E6',
                      color: '#FFFFFF', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: inputText.trim() ? 'pointer' : 'default', boxShadow: inputText.trim() ? '0 4px 12px rgba(0,188,212,0.3)' : 'none',
                      transition: 'all 0.2s', flexShrink: 0
                    }}>
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#F4F7F8', width: '120px', height: '120px', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B0BEC5', marginBottom: '2.5rem' }}>
                <Mail size={60} />
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A2E', marginBottom: '1rem' }}>Start Support Session</h3>
              <p style={{ fontSize: '1.1rem', color: '#8E9DA1', maxWidth: '400px', lineHeight: 1.6, fontWeight: '600' }}>
                Start a conversation to listen, understand, and provide guidance.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounselorChat;
