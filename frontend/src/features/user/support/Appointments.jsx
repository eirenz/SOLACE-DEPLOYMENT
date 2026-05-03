import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../../../components/common/Card';
import Avatar from '../../../components/common/Avatar';
import Button from '../../../components/common/Button';
import { 
  MessageCircle, Calendar as CalendarIcon, 
  Clock, ChevronLeft, ChevronRight, CheckCircle2,
  Shield, Send, Users, ArrowRight, Lock, Smile, ShieldCheck, Leaf, Droplet, Flower2,
  MessageSquare, Loader
} from 'lucide-react';
import { fetchCounselors, fetchAvailableSlots, bookAppointment, submitVent, fetchMyVents } from '../../../api/appointmentsApi';
import { getOrCreateSession, fetchSessionMessages, fetchStudentSessions } from '../../../api/chatApi';
import { connectSocket, joinSession, joinUserRoom, onReceiveMessage, offReceiveMessage, sendMessage, onVentReaction, onAppointmentUpdated } from '../../../api/chatSocket';
import useAuthStore from '../../../store/useAuthStore';

const Appointments = () => {
  const { user, token } = useAuthStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState('options');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isPhone, setIsPhone] = useState(window.innerWidth < 600);
  const [hoveredOption, setHoveredOption] = useState(null);

  // Venting flow
  const [ventText, setVentText] = useState('');
  const [ventLoading, setVentLoading] = useState(false);
  const [ventHistory, setVentHistory] = useState([]);
  const [ventHistoryLoading, setVentHistoryLoading] = useState(false);

  // Student chat sessions
  const [studentSessions, setStudentSessions] = useState([]);
  const [studentSessionsLoading, setStudentSessionsLoading] = useState(false);

  // Chat flow
  const [counselors, setCounselors] = useState([]);
  const [counselorsLoading, setCounselorsLoading] = useState(false);
  const [activeCounselor, setActiveCounselor] = useState(null);
  const [activeSession, setActiveSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [sessionLoading, setSessionLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Booking flow
  const [selectedCounselorForBooking, setSelectedCounselorForBooking] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);

  // Calendar state
  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());

  useEffect(() => {
    const handleResize = () => { setIsMobile(window.innerWidth < 1024); setIsPhone(window.innerWidth < 600); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Socket.io setup for student
  useEffect(() => {
    if (!user?.id) return;
    const socket = connectSocket(token);
    joinUserRoom(user.id);
    onVentReaction((data) => {
      // Update the matching vent in local history with the new reaction
      setVentHistory((prev) =>
        prev.map((v) =>
          v.id === data.ventId
            ? { ...v, reactions: [...(v.reactions || []), data.reaction], status: 'REACTED' }
            : v
        )
      );
    });
    onAppointmentUpdated((data) => {
      console.log('Appointment updated:', data);
    });
    return () => { /* socket stays alive, cleaned up on unmount of app */ };
  }, [user?.id]);

  // Load vent history when entering venting view
  const loadVentHistory = async () => {
    setVentHistoryLoading(true);
    try {
      const vents = await fetchMyVents();
      setVentHistory(vents);
    } catch (err) {
      console.error('Failed to load vent history:', err);
    } finally {
      setVentHistoryLoading(false);
    }
  };

  // Load student chat sessions
  const loadStudentSessions = async () => {
    setStudentSessionsLoading(true);
    try {
      const sessions = await fetchStudentSessions();
      setStudentSessions(sessions);
    } catch (err) {
      console.error('Failed to load student sessions:', err);
    } finally {
      setStudentSessionsLoading(false);
    }
  };

  // Load counselors when entering chat or booking selection
  const loadCounselors = async () => {
    if (counselors.length > 0) return;
    setCounselorsLoading(true);
    try {
      const data = await fetchCounselors();
      setCounselors(data);
    } catch (err) {
      console.error('Failed to load counselors:', err);
    } finally {
      setCounselorsLoading(false);
    }
  };

  // Load available slots when date is selected in booking
  useEffect(() => {
    if (!selectedDate || !selectedCounselorForBooking) return;
    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
    setSlotsLoading(true);
    setSelectedSlot(null);
    fetchAvailableSlots(selectedCounselorForBooking.id, dateStr)
      .then(setAvailableSlots)
      .catch(() => setAvailableSlots([]))
      .finally(() => setSlotsLoading(false));
  }, [selectedDate, selectedCounselorForBooking, calMonth, calYear]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Cleanup message listener when leaving chat-active view
  useEffect(() => {
    if (view !== 'chat-active') {
      offReceiveMessage();
    }
  }, [view]);

  const handleStartVenting = () => { setView('venting'); loadVentHistory(); };

  const handleShareVent = async () => {
    if (!ventText.trim()) return;
    setVentLoading(true);
    try {
      await submitVent(ventText.trim());
      setView('venting-success');
      loadVentHistory(); // refresh history with the newly submitted vent
    } catch (err) {
      console.error('Failed to submit vent:', err);
    } finally {
      setVentLoading(false);
    }
  };

  const handleSelectCounselorForChat = async (counselor) => {
    setActiveCounselor(counselor);
    setSessionLoading(true);
    try {
      const session = await getOrCreateSession(counselor.id);
      setActiveSession(session);
      setMessages([]);

      // Load full message history from API
      const historyData = await fetchSessionMessages(session.id, 1, 100);
      const history = (historyData.messages || []).map(m => ({ ...m, isTemp: false }));
      setMessages(history);

      // Join socket room for real-time updates
      connectSocket(token);
      joinSession(session.id);
      offReceiveMessage();
      onReceiveMessage((msg) => {
        if (msg.sessionId === session.id) {
          setMessages(prev => {
            if (prev.some(m => m.id === msg.id)) return prev; // deduplicate
            return [...prev, msg];
          });
        }
      });
      setView('chat-active');
    } catch (err) {
      console.error('Failed to start chat session:', err);
    } finally {
      setSessionLoading(false);
    }
  };

  // Handle auto-start chat from notifications
  useEffect(() => {
    const action = searchParams.get('action');
    const counselorId = searchParams.get('counselorId');

    if (action === 'startChat' && counselorId) {
      // Clear the params from URL so it doesn't trigger again on refresh
      setSearchParams({});
      
      const initializeChatFromNotification = async () => {
        if (counselors.length === 0) {
          setCounselorsLoading(true);
          try {
            const data = await fetchCounselors();
            setCounselors(data);
            const matchedCounselor = data.find(c => c.id === counselorId);
            if (matchedCounselor) {
              handleSelectCounselorForChat(matchedCounselor);
            }
          } catch (err) {
            console.error('Failed to load counselors:', err);
          } finally {
            setCounselorsLoading(false);
          }
        } else {
          const matchedCounselor = counselors.find(c => c.id === counselorId);
          if (matchedCounselor) {
            handleSelectCounselorForChat(matchedCounselor);
          }
        }
      };
      
      initializeChatFromNotification();
    }
  }, [searchParams, counselors, setSearchParams]);

  const handleSendChatMessage = () => {
    if (!chatInput.trim() || !activeSession || !user?.id) return;
    const content = chatInput.trim();
    setChatInput('');
    sendMessage(activeSession.id, user.id, content);
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedSlot || !selectedCounselorForBooking) return;
    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
    setBookingLoading(true);
    try {
      const appointment = await bookAppointment({
        counselorId: selectedCounselorForBooking.id,
        date: dateStr,
        timeSlot: selectedSlot,
      });
      setBookingResult(appointment);
      setView('booking-confirmed');
    } catch (err) {
      console.error('Failed to book appointment:', err);
      alert(err.response?.data?.error || 'Failed to book appointment. This slot may already be taken.');
    } finally {
      setBookingLoading(false);
    }
  };

  // Calendar helpers
  const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const getDaysInMonth = (m, y) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (m, y) => { const d = new Date(y, m, 1).getDay(); return d === 0 ? 6 : d - 1; }; // MON=0

  const isPastDate = (date) => {
    const d = new Date(calYear, calMonth, date);
    d.setHours(0, 0, 0, 0);
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const formatTime = (dateStr) => new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // ─── Views ─────────────────────────────────────────────────────────────────

  const renderOptions = () => (
    <div style={{ padding: isPhone ? '2rem 1rem' : '4rem 3rem', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '100%' }}>
      <h1 style={{ fontSize: isPhone ? '2.5rem' : '3.5rem', fontWeight: '950', color: '#064E3B', marginBottom: '0.5rem', letterSpacing: '-0.02em', textAlign: 'center' }}>Support & Booking</h1>
      <p style={{ color: '#4B5563', marginBottom: isPhone ? '3rem' : '4rem', fontSize: isPhone ? '1.1rem' : '1.25rem', fontWeight: '500', textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        Need support? You're in the right place. Choose the path that feels right for you today.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
        {/* Listen-Only */}
        <Card onClick={handleStartVenting} onMouseEnter={() => setHoveredOption('venting')} onMouseLeave={() => setHoveredOption(null)}
          style={{ backgroundColor: '#F0FDFA', borderRadius: '32px', padding: '2.5rem', cursor: 'pointer', border: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: hoveredOption === 'venting' ? '0 20px 40px rgba(15,118,110,0.12)' : '0 4px 20px rgba(0,0,0,0.02)', transform: hoveredOption === 'venting' ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#A7F3D0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageSquare size={28} color="#064E3B" fill="#064E3B" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#064E3B', marginBottom: '1rem' }}>Listen-Only (Venting)</h3>
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>Sometimes you just need to be heard. Share your thoughts in a safe, non-judgmental space without the pressure of a two-way dialogue.</p>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <button style={{ backgroundColor: hoveredOption === 'venting' ? '#0D9488' : '#0F766E', color: '#FFFFFF', border: 'none', padding: '1rem 2rem', borderRadius: '100px', fontWeight: '700', fontSize: '1.05rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease', transform: hoveredOption === 'venting' ? 'translateX(5px)' : 'translateX(0)' }}>
              Start Venting <ArrowRight size={18} />
            </button>
          </div>
        </Card>

        {/* Talk to a Counselor */}
        <Card 
          onClick={() => { setView('chat-selection'); loadCounselors(); loadStudentSessions(); }} 
          onMouseEnter={() => setHoveredOption('chat')} 
          onMouseLeave={() => setHoveredOption(null)}
          className={isMobile ? 'm-primary-bg' : ''}
          style={{ 
            backgroundColor: '#064E3B', 
            background: '#064E3B', 
            borderRadius: '32px', 
            padding: isPhone ? '2rem' : '2.5rem', 
            cursor: 'pointer', 
            border: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem', 
            boxShadow: hoveredOption === 'chat' ? '0 25px 50px rgba(6,78,59,0.3)' : '0 10px 30px rgba(6,78,59,0.2)', 
            transform: hoveredOption === 'chat' ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)', 
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
            zIndex: hoveredOption === 'chat' ? 2 : 1,
            color: '#FFFFFF'
          }}
        >
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#A7F3D0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={28} color="#064E3B" fill="#064E3B" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1rem' }}>Talk to a Counselor (Chat)</h3>
            <p style={{ color: '#A7F3D0', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>Connect instantly with a professional counselor through secure text chat. High-quality support that moves at your pace.</p>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <button style={{ backgroundColor: '#FFFFFF', color: '#064E3B', border: 'none', padding: '1rem 2rem', borderRadius: '100px', fontWeight: '700', fontSize: '1.05rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease', transform: hoveredOption === 'chat' ? 'scale(1.05)' : 'scale(1)' }}>
              Chat Now <MessageSquare size={18} fill="#064E3B" />
            </button>
          </div>
        </Card>

        {/* Book an Appointment */}
        <Card onClick={() => { setView('booking-counselor-selection'); loadCounselors(); }} onMouseEnter={() => setHoveredOption('booking')} onMouseLeave={() => setHoveredOption(null)}
          style={{ backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '2.5rem', cursor: 'pointer', border: '1px solid #F3F4FB', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: hoveredOption === 'booking' ? '0 20px 40px rgba(0,0,0,0.06)' : '0 4px 20px rgba(0,0,0,0.02)', transform: hoveredOption === 'booking' ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#FEF9C3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CalendarIcon size={28} color="#854D0E" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#064E3B', marginBottom: '1rem' }}>Book an Appointment</h3>
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>Schedule a dedicated video or in-person session with your preferred counselor. Plan your journey with consistency.</p>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <button style={{ backgroundColor: hoveredOption === 'booking' ? '#A5F3FC' : '#E0F2F1', color: '#064E3B', border: 'none', padding: '1rem 2rem', borderRadius: '100px', fontWeight: '700', fontSize: '1.05rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }}>
              View Schedule <CalendarIcon size={18} />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderVenting = () => (
    <div style={{ minHeight: '100%', width: '100%', background: 'radial-gradient(circle at top right, #E0F2F1, #F8FAFB 50%)', padding: isPhone ? '2rem 1rem' : '4rem', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <button onClick={() => setView('options')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0D9488', fontWeight: '700', background: 'none', border: 'none', cursor: 'pointer', marginBottom: isPhone ? '1.5rem' : '2.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          <ChevronLeft size={18} /> Back to Support Options
        </button>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', marginBottom: isPhone ? '2rem' : '3.5rem', flexDirection: isMobile ? 'column' : 'row', gap: '2rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: isPhone ? '2.5rem' : '4rem', fontWeight: '950', color: '#064E3B', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Listen-Only</h2>
            <p style={{ color: '#4B5563', margin: 0, fontWeight: '500', fontSize: isPhone ? '1.1rem' : '1.25rem', lineHeight: 1.6 }}>Share freely. You'll only receive supportive reactions. Your voice matters, and we are here to listen.</p>
          </div>
          {!isMobile && (<div style={{ display: 'flex', alignItems: 'center', gap: '2rem', color: '#A7F3D0' }}><Leaf size={36} fill="currentColor" strokeWidth={0} /><Droplet size={36} fill="currentColor" strokeWidth={0} /><Flower2 size={36} fill="currentColor" strokeWidth={0} /></div>)}
        </div>
        <div style={{ display: 'flex', position: 'relative', width: '100%', height: '100%' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <Card style={{ width: '100%', padding: '0', borderRadius: '32px', border: 'none', boxShadow: '0 25px 50px rgba(0,0,0,0.06)', backgroundColor: '#FFFFFF', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: isPhone ? '400px' : '55vh', minHeight: '400px' }}>
              <textarea placeholder="I'm so happy right now..." value={ventText} onChange={(e) => setVentText(e.target.value)}
                style={{ flex: 1, border: 'none', width: '100%', padding: isPhone ? '2rem' : '3.5rem 4rem', fontSize: isPhone ? '1.4rem' : '1.8rem', outline: 'none', resize: 'none', backgroundColor: 'transparent', color: '#111827', fontWeight: '400', lineHeight: 1.6, fontFamily: "'Playfair Display', serif" }} />
              <div style={{ padding: '1.5rem 3rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderTop: '1px solid #F3F4F6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}><ShieldCheck size={18} color="#10B981" /> Private Session</div>
              </div>
            </Card>
            <div style={{ marginTop: '3rem', textAlign: 'center', width: '100%' }}>
              <button onClick={handleShareVent} disabled={!ventText.trim() || ventLoading}
                style={{ backgroundColor: '#0F766E', color: '#FFFFFF', padding: '1.2rem 3rem', borderRadius: '100px', border: 'none', fontWeight: '700', fontSize: '1.15rem', cursor: ventText.trim() && !ventLoading ? 'pointer' : 'default', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', boxShadow: ventText.trim() ? '0 10px 25px rgba(15,118,110,0.3)' : 'none', transition: 'all 0.2s', transform: ventText.trim() ? 'translateY(-2px)' : 'translateY(0)', opacity: ventText.trim() && !ventLoading ? 1 : 0.5 }}>
                {ventLoading ? <><Loader size={18} /> Sharing...</> : <>Share with counselor <Send size={18} fill="currentColor" /></>}
              </button>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '1.5rem', maxWidth: '500px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}>
                Your words are encrypted and seen only by your assigned guide. This is a judgment-free sanctuary for your thoughts.
              </p>
            </div>

            {/* My Past Vents Section */}
            {ventHistory.length > 0 && (
              <div style={{ marginTop: '4rem', width: '100%' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#064E3B', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MessageSquare size={22} color="#0D9488" /> My Past Vents
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {ventHistory.map((vent) => (
                    <div key={vent.id} style={{
                      backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '2rem',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #F3F4F6',
                      transition: 'box-shadow 0.2s',
                    }}>
                      <p style={{ color: '#111827', fontSize: '1.05rem', lineHeight: 1.6, margin: '0 0 1rem 0', fontWeight: '500' }}>
                        {vent.content.length > 200 ? vent.content.substring(0, 200) + '...' : vent.content}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: '600' }}>
                          {new Date(vent.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })} · {new Date(vent.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span style={{
                          fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em',
                          padding: '0.35rem 1rem', borderRadius: '100px',
                          backgroundColor: vent.status === 'REACTED' ? '#ECFDF5' : vent.status === 'READ' ? '#FEF9C3' : '#F3F4F6',
                          color: vent.status === 'REACTED' ? '#059669' : vent.status === 'READ' ? '#A16207' : '#6B7280',
                        }}>
                          {vent.status === 'REACTED' ? '✅ Reacted' : vent.status === 'READ' ? '👁️ Read' : '⏳ Waiting'}
                        </span>
                      </div>
                      {vent.reactions && vent.reactions.length > 0 && (
                        <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {vent.reactions.map((reaction, i) => (
                            <span key={i} style={{
                              backgroundColor: '#F0FDFA', color: '#0D9488', padding: '0.5rem 1rem',
                              borderRadius: '100px', fontSize: '0.9rem', fontWeight: '700',
                              border: '1px solid #A7F3D0',
                            }}>
                              {reaction}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {ventHistoryLoading && (
              <div style={{ marginTop: '3rem', textAlign: 'center', color: '#6B7280', fontWeight: '600' }}>
                <Loader size={20} style={{ animation: 'spin 1s linear infinite' }} /> Loading past vents...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderVentingSuccess = () => (
    <div style={{ padding: isPhone ? '3rem 1.5rem' : '6rem 3rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center', animation: 'fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
      <div style={{ width: isPhone ? '80px' : '120px', height: isPhone ? '80px' : '120px', backgroundColor: '#ECFDF5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto', border: isPhone ? '2px solid #10B981' : '3px solid #10B981' }}>
        <CheckCircle2 size={isPhone ? 40 : 64} color="#10B981" />
      </div>
      <h2 style={{ fontSize: isPhone ? '2.2rem' : '3rem', fontWeight: '950', color: '#064E3B', marginBottom: '1rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}>Your message has been shared</h2>
      <p style={{ color: '#4B5563', fontSize: isPhone ? '1.1rem' : '1.25rem', marginBottom: isPhone ? '2.5rem' : '4rem', fontWeight: '500', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 4rem auto' }}>A counselor is reading your message and will send a supportive reaction soon. You've taken a great step today.</p>
      <div style={{ backgroundColor: '#F0FDFA', padding: isPhone ? '1.2rem 2rem' : '1.8rem 3rem', borderRadius: isPhone ? '20px' : '32px', display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: isPhone ? '2.5rem' : '4rem', border: '2.5px solid #0D9488', boxShadow: '0 10px 25px rgba(13,148,136,0.1)' }}>
        <span style={{ fontSize: isPhone ? '1.6rem' : '2rem' }}>⭐</span>
        <span style={{ color: '#0D9488', fontWeight: '950', fontSize: isPhone ? '1.2rem' : '1.5rem', letterSpacing: '0.02em' }}>Proud of you</span>
      </div>
      <button onClick={() => { setView('options'); setVentText(''); }} style={{ width: '100%', padding: '1.2rem', borderRadius: '100px', border: 'none', backgroundColor: '#064E3B', color: '#FFFFFF', fontWeight: '800', fontSize: isPhone ? '1.1rem' : '1.2rem', cursor: 'pointer', boxShadow: '0 10px 25px rgba(6,78,59,0.15)', transition: 'all 0.3s ease' }}>
        Back to Support Options
      </button>
    </div>
  );

  const renderCounselorList = (onSelect, title, subtitle, loading) => (
    <div style={{ display: 'flex', flexDirection: 'column', animation: 'fadeIn 0.4s ease-out', padding: isPhone ? '2rem 1rem' : '4rem 3rem', maxWidth: '1200px', margin: '0 auto', width: '100%', minHeight: '100%', background: 'radial-gradient(circle at top right, #F0FDFA, #F8FAFB 60%)' }}>
      <button onClick={() => setView('options')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#064E3B', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '800', fontSize: '1rem', width: 'fit-content', marginBottom: '3rem' }}>
        <ChevronLeft size={20} /> Back to Support
      </button>
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: isPhone ? '2.5rem' : '4rem', fontWeight: '950', color: '#064E3B', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{title}</h2>
        <p style={{ color: '#4B5563', fontWeight: '400', fontSize: isPhone ? '1.1rem' : '1.25rem', fontFamily: "'Playfair Display', serif", maxWidth: '700px', lineHeight: 1.6, margin: 0 }}>{subtitle}</p>
      </div>

      {/* Recent Conversations (only for chat selection view) */}
      {view === 'chat-selection' && studentSessions.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#064E3B', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MessageCircle size={20} color="#0D9488" /> Recent Conversations
          </h3>
          <div style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {studentSessions.map((session) => {
              const lastMsg = session.messages?.[0];
              const timeAgo = lastMsg ? (() => {
                const diff = Math.floor((Date.now() - new Date(lastMsg.createdAt)) / 60000);
                if (diff < 1) return 'just now';
                if (diff < 60) return `${diff}m ago`;
                if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
                return `${Math.floor(diff / 1440)}d ago`;
              })() : '';
              return (
                <div key={session.id}
                  onClick={() => handleSelectCounselorForChat(session.counselor)}
                  style={{
                    minWidth: '260px', maxWidth: '300px', padding: '1.5rem', borderRadius: '24px',
                    backgroundColor: '#FFFFFF', border: '1.5px solid #E0F2F1', cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'all 0.3s ease',
                    display: 'flex', flexDirection: 'column', gap: '0.75rem',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0D9488'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(13,148,136,0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E0F2F1'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ position: 'relative' }}>
                      <img src={session.counselor?.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(session.counselor?.fullName || 'C')}&background=0D9488&color=fff&size=100`} alt="" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
                      {session.status === 'ACTIVE' && (
                        <div style={{ position: 'absolute', bottom: '0', right: '0', width: '12px', height: '12px', backgroundColor: '#10B981', border: '2px solid #FFFFFF', borderRadius: '50%' }} />
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: '800', color: '#111827', fontSize: '1rem' }}>{session.counselor?.fullName}</div>
                      <div style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: '600' }}>{timeAgo}</div>
                    </div>
                  </div>
                  {lastMsg && (
                    <p style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: '500', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {lastMsg.content}
                    </p>
                  )}
                  <div style={{ fontSize: '0.8rem', color: '#0D9488', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    Continue <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#4B5563', fontWeight: '600', fontSize: '1.2rem' }}>
          <Loader size={32} color="#0F766E" style={{ animation: 'spin 1s linear infinite', marginBottom: '1rem' }} /><br />
          Loading counselors...
        </div>
      ) : counselors.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#4B5563', fontWeight: '600', fontSize: '1.2rem' }}>No counselors available at the moment.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: isPhone ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          {counselors.map((counselor) => (
            <Card key={counselor.id} onClick={() => onSelect(counselor)}
              style={{ padding: '3.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer', borderRadius: '40px', border: 'none', backgroundColor: '#FFFFFF', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', position: 'relative' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(6,78,59,0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.03)'; }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#E5E7EB', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '4px solid #F9FAFB', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <img src={counselor.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(counselor.fullName)}&background=0D9488&color=fff&size=200`} alt={counselor.fullName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '0 0 0.4rem 0', color: '#111827' }}>{counselor.fullName}</h3>
              <p style={{ fontSize: '0.85rem', color: '#4B5563', fontWeight: '800', margin: '0 0 1.5rem 0', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {counselor.counselorProfile?.specialization || 'Student Counselor'}
              </p>
              {counselor.counselorProfile?.officeLocation && (
                <p style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: '600', margin: '0 0 2rem 0' }}>{counselor.counselorProfile.officeLocation}</p>
              )}
              <button onClick={(e) => { e.stopPropagation(); onSelect(counselor); }}
                style={{ width: '100%', borderRadius: '100px', fontWeight: '700', fontSize: '1.05rem', backgroundColor: '#064E3B', color: '#FFFFFF', padding: '1rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                Connect Now {sessionLoading && <Loader size={16} />}
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  const renderChatActive = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', animation: 'fadeIn 0.3s ease-out', minHeight: 0 }}>
      {/* Header — sticky */}
      <div style={{ padding: '1.5rem 3rem', display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', zIndex: 10, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
          <button onClick={() => { setView('chat-selection'); offReceiveMessage(); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#064E3B', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1rem', padding: 0 }}>
            <ChevronLeft size={20} strokeWidth={2.5} /> <span style={{ display: isMobile ? 'none' : 'inline' }}>Back to Selection</span>
          </button>
          <div style={{ width: '1px', height: '30px', backgroundColor: '#E5E7EB', margin: '0 1rem' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <img src={activeCounselor?.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(activeCounselor?.fullName || 'C')}&background=0D9488&color=fff&size=200`} alt="Avatar" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '2px', right: '2px', width: '14px', height: '14px', backgroundColor: '#10B981', border: '2.5px solid #FFFFFF', borderRadius: '50%' }} />
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.2rem 0', fontSize: '1.25rem', fontWeight: '900', color: '#064E3B' }}>{activeCounselor?.fullName}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#059669', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages — ONLY scrollable element */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isPhone ? '1.5rem 1rem' : '3rem', background: 'radial-gradient(circle at top right, #F0FDFA, #F8FAFB 60%)', display: 'flex', flexDirection: 'column', gap: '2rem', minHeight: 0 }}>
        <div style={{ alignSelf: 'center', backgroundColor: '#ECFDF5', color: '#047857', padding: '0.8rem 2rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Lock size={14} strokeWidth={2.5} /> Encryption Enabled • Stay safe &amp; anonymous
        </div>
        {messages.length === 0 && (
          <div style={{ textAlign: 'center', color: '#6B7280', fontWeight: '500', padding: '2rem', fontStyle: 'italic' }}>
            {activeCounselor?.fullName} is here to listen. Start the conversation...
          </div>
        )}
        {messages.map((msg, i) => {
          const isMe = msg.sender?.role === 'STUDENT' || msg.sender?.id === user?.id;
          return (
            <div key={msg.id || i} style={{ alignSelf: isMe ? 'flex-end' : 'flex-start', maxWidth: '75%', opacity: msg.isTemp ? 0.7 : 1 }}>
              <div style={{ backgroundColor: isMe ? '#064E3B' : '#FFFFFF', padding: '1.5rem 2rem', borderRadius: isMe ? '24px 24px 4px 24px' : '24px 24px 24px 4px', boxShadow: isMe ? '0 15px 35px rgba(6,78,59,0.15)' : '0 10px 30px rgba(0,0,0,0.03)', color: isMe ? '#FFFFFF' : '#111827', display: 'flex', flexDirection: 'column' }}>
                <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.6, fontWeight: '500' }}>{msg.content}</p>
                <span style={{ fontSize: '0.75rem', color: isMe ? '#A7F3D0' : '#9CA3AF', marginTop: '1rem', fontWeight: '700', textAlign: isMe ? 'right' : 'left' }}>{formatTime(msg.createdAt)}</span>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input — sticky at bottom */}
      <div style={{ padding: isPhone ? '1.5rem 1rem' : '2rem 3rem', backgroundColor: '#FFFFFF', boxShadow: '0 -10px 30px rgba(0,0,0,0.02)', zIndex: 10, flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', backgroundColor: '#F3F4F6', padding: '0.6rem 0.6rem 0.6rem 2rem', borderRadius: '100px', border: 'none' }}>
          <Smile size={24} color="#9CA3AF" style={{ cursor: 'pointer' }} />
          <input placeholder="Type your message..." value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendChatMessage(); } }}
            style={{ flex: 1, border: 'none', background: 'none', padding: '1rem 0', fontSize: '1.05rem', outline: 'none', fontWeight: '600', color: '#111827' }} />
          <button onClick={handleSendChatMessage} disabled={!chatInput.trim()}
            style={{ backgroundColor: chatInput.trim() ? '#0F766E' : '#E5E7EB', color: '#FFFFFF', width: '56px', height: '56px', border: 'none', borderRadius: '50%', cursor: chatInput.trim() ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: chatInput.trim() ? '0 8px 20px rgba(15,118,110,0.3)' : 'none', transition: 'all 0.2s', flexShrink: 0 }}>
            <Send size={24} fill="currentColor" strokeWidth={1.5} style={{ marginRight: '2px', marginTop: '2px' }} />
          </button>
        </div>
      </div>
    </div>
  );

  const renderBookingCalendar = () => {
    const daysInMonth = getDaysInMonth(calMonth, calYear);
    const firstDay = getFirstDayOfMonth(calMonth, calYear);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', animation: 'fadeIn 0.4s ease-out', padding: isPhone ? '2rem 1rem' : '4rem 3rem', maxWidth: '1200px', margin: '0 auto', width: '100%', minHeight: '100%', background: 'radial-gradient(circle at top right, #F0FDFA, #F8FAFB 60%)' }}>
        <button onClick={() => setView('booking-counselor-selection')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#064E3B', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '800', fontSize: '1rem', width: 'fit-content', marginBottom: '3rem' }}>
          <ChevronLeft size={20} /> Back
        </button>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: isPhone ? '2.5rem' : '4rem', fontWeight: '950', color: '#064E3B', marginBottom: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Schedule a Session</h2>
          <p style={{ color: '#4B5563', fontSize: '1.1rem', margin: 0 }}>with <strong>{selectedCounselorForBooking?.fullName}</strong></p>
        </div>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '2.5rem', alignItems: 'flex-start' }}>
          {/* Calendar */}
          <div style={{ flex: isMobile ? '1 1 auto' : '1.2', width: '100%' }}>
            <div style={{ backgroundColor: '#F3F4F6', borderRadius: '32px', padding: isPhone ? '2rem 1.5rem' : '3.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827', margin: 0 }}>{MONTH_NAMES[calMonth]} {calYear}</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => { if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1); } else setCalMonth(m => m - 1); setSelectedDate(null); }} style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                    <ChevronLeft size={20} color="#4B5563" />
                  </button>
                  <button onClick={() => { if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1); } else setCalMonth(m => m + 1); setSelectedDate(null); }} style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                    <ChevronRight size={20} color="#4B5563" />
                  </button>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                  <div key={day} style={{ fontSize: '0.75rem', fontWeight: '800', color: '#6B7280', letterSpacing: '0.15em' }}>{day}</div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
                {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const date = i + 1;
                  const isSelected = selectedDate === date;
                  const isPast = isPastDate(date);
                  return (
                    <button key={date} onClick={() => { if (!isPast) setSelectedDate(date); }} disabled={isPast}
                      style={{ aspectRatio: '1', borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: isSelected ? '700' : '500', backgroundColor: isSelected ? '#064E3B' : 'transparent', color: isSelected ? '#FFFFFF' : (isPast ? '#D1D5DB' : '#111827'), cursor: isPast ? 'default' : 'pointer', transition: 'all 0.2s', margin: 'auto', width: '48px', height: '48px' }}>
                      {date}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Slots + Selection */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
            <div style={{ backgroundColor: '#F3F4F6', borderRadius: '32px', padding: isPhone ? '2rem 1.5rem' : '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.15rem', fontWeight: '800', color: '#111827', margin: '0 0 1.5rem 0' }}>
                <Clock size={20} color="#064E3B" /> Available Slots
              </h4>
              {!selectedDate ? (
                <p style={{ color: '#6B7280', fontSize: '0.95rem', fontWeight: '500' }}>Please select a date first.</p>
              ) : slotsLoading ? (
                <p style={{ color: '#6B7280', fontSize: '0.95rem', fontWeight: '500' }}>Loading available slots...</p>
              ) : availableSlots.length === 0 ? (
                <p style={{ color: '#EF4444', fontSize: '0.95rem', fontWeight: '600' }}>No available slots for this date.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {availableSlots.map((timeStr) => {
                    const isSlotSelected = selectedSlot === timeStr;
                    return (
                      <button key={timeStr} onClick={() => setSelectedSlot(timeStr)}
                        style={{ width: '100%', padding: '1.2rem 1.5rem', borderRadius: '100px', border: 'none', backgroundColor: isSlotSelected ? '#064E3B' : '#FFFFFF', color: isSlotSelected ? '#FFFFFF' : '#111827', fontSize: '1rem', fontWeight: isSlotSelected ? '700' : '500', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                        {timeStr}
                        {isSlotSelected && (<div style={{ width: '22px', height: '22px', backgroundColor: '#FFFFFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle2 size={16} color="#064E3B" fill="#FFFFFF" /></div>)}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Selection Summary */}
            <div style={{ backgroundColor: '#064E3B', borderRadius: '32px', padding: isPhone ? '2rem 1.5rem' : '3rem 2.5rem', color: '#FFFFFF', boxShadow: '0 20px 40px rgba(6,78,59,0.15)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', color: '#A7F3D0', textTransform: 'uppercase' }}>Your Selection</div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CalendarIcon size={24} color="#FFFFFF" style={{ marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.25rem' }}>
                    {selectedDate ? `${MONTH_NAMES[calMonth]} ${selectedDate}, ${calYear}` : 'Select Date'}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#A7F3D0' }}>Video Consultation</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock size={24} color="#FFFFFF" style={{ marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.25rem' }}>{selectedSlot || 'Select Time'}</div>
                  <div style={{ fontSize: '0.9rem', color: '#A7F3D0' }}>60 Minutes Session</div>
                </div>
              </div>
              <button onClick={handleConfirmBooking} disabled={!selectedDate || !selectedSlot || bookingLoading}
                style={{ marginTop: '1.5rem', width: '100%', padding: '1.2rem', borderRadius: '100px', border: 'none', backgroundColor: '#0F766E', color: '#FFFFFF', fontSize: '1.1rem', fontWeight: '800', cursor: (selectedDate && selectedSlot && !bookingLoading) ? 'pointer' : 'default', opacity: (selectedDate && selectedSlot && !bookingLoading) ? 1 : 0.6, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', transition: 'background-color 0.2s' }}>
                {bookingLoading ? <><Loader size={18} /> Booking...</> : <>Confirm Booking <ArrowRight size={20} /></>}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderBookingConfirmed = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem', padding: '4rem 2rem', animation: 'fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#F0FDFA', color: '#064E3B', padding: '2.5rem', borderRadius: '50%', marginBottom: '1rem', boxShadow: '0 20px 40px rgba(6,78,59,0.1)' }}>
        <CheckCircle2 size={80} strokeWidth={2.5} />
      </div>
      <div>
        <h2 style={{ fontSize: '3rem', fontWeight: '950', color: '#064E3B', margin: '0 0 0.75rem 0', letterSpacing: '-0.02em' }}>Session Confirmed!</h2>
        <p style={{ fontSize: '1.25rem', color: '#4B5563', fontWeight: '500', maxWidth: '500px', lineHeight: 1.6 }}>Your counselor has been notified. You'll receive a reminder 15 minutes before we start.</p>
      </div>
      <Card style={{ padding: '3rem', borderRadius: '40px', border: '1.5px solid #E0F2F1', backgroundColor: '#FFFFFF', width: '100%', maxWidth: '700px', boxShadow: '0 20px 50px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2.5rem' }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.8rem', color: '#0D9488', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.6rem', letterSpacing: '0.1em' }}>Counselor</p>
            <p style={{ fontSize: '1.25rem', color: '#111827', fontWeight: '800' }}>{selectedCounselorForBooking?.fullName}</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.8rem', color: '#0D9488', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.6rem', letterSpacing: '0.1em' }}>Date & Time</p>
            <p style={{ fontSize: '1.25rem', color: '#111827', fontWeight: '800' }}>{MONTH_NAMES[calMonth]} {selectedDate} • {selectedSlot}</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.8rem', color: '#0D9488', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.6rem', letterSpacing: '0.1em' }}>Platform</p>
            <p style={{ fontSize: '1.25rem', color: '#111827', fontWeight: '800' }}>Solace Secure View</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.8rem', color: '#0D9488', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.6rem', letterSpacing: '0.1em' }}>Your Alias</p>
            <p style={{ fontSize: '1.25rem', color: '#111827', fontWeight: '800' }}>{user?.alias || 'Anonymous'}</p>
          </div>
        </div>
      </Card>
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', width: '100%', maxWidth: '500px' }}>
        <Button onClick={() => { setView('options'); setSelectedDate(null); setSelectedSlot(null); }} 
          style={{ flex: 1, padding: '1.2rem', borderRadius: '100px', fontWeight: '800', fontSize: '1.1rem', backgroundColor: '#064E3B', color: '#FFFFFF', border: 'none', cursor: 'pointer', boxShadow: '0 10px 25px rgba(6,78,59,0.2)' }}>
          Done
        </Button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (view) {
      case 'venting': return renderVenting();
      case 'venting-success': return renderVentingSuccess();
      case 'chat-selection': return renderCounselorList(
        handleSelectCounselorForChat,
        'Talk to a Counselor',
        'Connect with our team of compassionate experts. Your sanctuary for mental clarity starts here.',
        counselorsLoading
      );
      case 'chat-active': return renderChatActive();
      case 'booking-counselor-selection': return renderCounselorList(
        (c) => { setSelectedCounselorForBooking(c); setSelectedDate(null); setSelectedSlot(null); setView('booking-selection'); },
        'Schedule a Session',
        'Choose your preferred counselor and find a time that works for you.',
        counselorsLoading
      );
      case 'booking-selection': return renderBookingCalendar();
      case 'booking-confirmed': return renderBookingConfirmed();
      default: return renderOptions();
    }
  };

  return (
    <div style={{
      display: 'flex',
      flex: 1,
      flexDirection: isMobile ? 'column' : 'row',
      backgroundColor: '#F8FAFB',
      // For chat-active, we allow no outer scroll — the inner message area scrolls
      overflow: 'hidden',
      height: '100%',
      minHeight: 0,
    }}>
      <div style={{
        flex: 1,
        // Only non-chat views should scroll at the outer level
        overflowY: view === 'chat-active' ? 'hidden' : 'auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Appointments;
