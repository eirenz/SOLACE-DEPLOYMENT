import React, { useState, useMemo, useEffect } from 'react';
import { 
  Plus, Search, Edit2, Trash2, ChevronLeft, 
  Calendar, Clock, BookOpen, Loader2
} from 'lucide-react';
import Card from '../../../components/common/Card';
import apiClient from '../../../api/apiClient';

const DARK_TEAL = '#064E3B';
const LIGHT_TEAL = '#A5F3FC';

const MOOD_DATA = {
  SAD: { icon: '😢', color: '#FEE2E2', label: 'Sad' },
  HAPPY: { icon: '😊', icon_styled: '😌', color: '#ECFDF5', label: 'Happy' },
  NEUTRAL: { icon: '😐', color: '#FEF3C7', label: 'Neutral' },
  STRESSED: { icon: '😫', color: '#FFEDD5', label: 'Stressed' },
  ANGRY: { icon: '😤', color: '#FEE2E2', label: 'Angry' },
};

// Map backend mood IDs to specific icons/colors from mockup if needed
// The mockup shows 😌 (happy-ish), 🌿 (growth/calm?), 🌧️ (sad/overwhelmed)
const MOCKUP_MOODS = {
  STRESSED: { icon: '🌧️', color: '#FFCCCB' },
  HAPPY: { icon: '😌', color: '#B2DFDB' },
  NEUTRAL: { icon: '🌿', color: '#FFF9C4' },
};

const JournalEntryCard = ({ entry, isSelected, onClick }) => {
  const mood = MOCKUP_MOODS[entry.mood] || MOOD_DATA[entry.mood] || MOOD_DATA.NEUTRAL;
  const dateObj = new Date(entry.createdAt);
  const month = dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = dateObj.getDate();
  const timeStr = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div 
      onClick={onClick}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        padding: '1.25rem',
        marginBottom: '0.75rem',
        cursor: 'pointer',
        boxShadow: isSelected ? '0 8px 20px rgba(45, 100, 101, 0.1)' : '0 4px 12px rgba(0,0,0,0.03)',
        transition: 'all 0.2s ease',
        position: 'relative',
        border: isSelected ? '2px solid #2d6465' : '2px solid transparent',
        fontFamily: 'var(--m-font)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#9CA3AF', letterSpacing: '0.05em' }}>
          {`${month} ${day}`}
        </span>
        <span style={{ fontSize: '1.25rem' }}>{mood.icon}</span>
      </div>
      
      <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#111827', margin: '0 0 0.25rem 0', lineHeight: 1.3 }}>
        {entry.title}
      </h3>
      
      <p style={{ 
        fontSize: '0.85rem', color: '#6B7280', margin: '0 0 0.75rem 0', lineHeight: 1.5,
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
      }}>
        {entry.content}
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#9CA3AF' }}>
        <Clock size={12} />
        <span style={{ fontSize: '0.7rem', fontWeight: '800' }}>{timeStr}</span>
      </div>
    </div>
  );
};

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [mobileView, setMobileView] = useState('list'); // 'list' or 'content'

  useEffect(() => {
    fetchJournals();
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchJournals = async () => {
    try {
      setIsLoading(true);
      const res = await apiClient.get('/journals');
      setEntries(res.data.journals);
    } catch (error) {
      console.error('Failed to fetch journals:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredEntries = useMemo(() => {
    return entries.filter(e => 
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [entries, searchQuery]);

  const selectedEntry = entries.find(e => e.id === selectedId);

  // Editor state
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editMood, setEditMood] = useState('NEUTRAL');

  const startNewEntry = () => {
    setEditTitle('');
    setEditContent('');
    setEditMood('NEUTRAL');
    setIsEditing(true);
    setSelectedId(null);
    if (isMobile) setMobileView('content');
  };

  const handleEdit = (entry) => {
    setEditTitle(entry.title);
    setEditContent(entry.content);
    setEditMood(entry.mood);
    setIsEditing(true);
    if (isMobile) setMobileView('content');
  };

  const handleSave = async () => {
    if (!editContent.trim()) return;
    const entryData = { title: editTitle || 'Untitled Entry', content: editContent, mood: editMood };
    try {
      if (selectedId) {
        const res = await apiClient.put(`/journals/${selectedId}`, entryData);
        setEntries(entries.map(e => e.id === selectedId ? res.data.journal : e));
      } else {
        const res = await apiClient.post('/journals', entryData);
        setEntries([res.data.journal, ...entries]);
        setSelectedId(res.data.journal.id);
      }
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save journal:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/journals/${id}`);
      setEntries(entries.filter(e => e.id !== id));
      if (selectedId === id) setSelectedId(null);
    } catch (error) {
      console.error('Failed to delete journal:', error);
    }
  };

  return (
    <div className="m-journal-container" style={{ 
      display: 'flex', 
      flex: 1, 
      backgroundColor: '#f8faf9', 
      overflow: 'hidden', 
      height: '100%', 
      fontFamily: "var(--m-font)" 
    }}>
      
      {/* Sidebar: Entries List */}
      <div style={{ 
        width: isMobile ? '100%' : '400px', 
        display: isMobile && mobileView !== 'list' ? 'none' : 'flex', 
        flexDirection: 'column',
        backgroundColor: '#f8faf9',
        borderRight: isMobile ? 'none' : '1px solid #edeeed',
        zIndex: 10,
        height: '100%'
      }}>
        <div style={{ padding: isMobile ? '1.5rem 1.25rem' : '2.5rem 2rem 1.5rem 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: '800', color: '#2d6465', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>PERSONAL REFLECTION</p>
              <h1 style={{ fontSize: isMobile ? '2rem' : '2.2rem', fontWeight: '900', color: '#111827', margin: 0 }}>My Journal</h1>
            </div>
            <button 
              onClick={startNewEntry}
              style={{ 
                backgroundColor: '#2d6465', color: '#FFFFFF', border: 'none', 
                borderRadius: '100px', padding: isMobile ? '0.6rem 1.25rem' : '0.8rem 1.75rem', 
                display: 'flex', alignItems: 'center', gap: '0.5rem', 
                fontWeight: '800', cursor: 'pointer', fontSize: isMobile ? '0.85rem' : '1rem',
                boxShadow: '0 4px 15px rgba(45, 100, 101, 0.2)'
              }}
            >
              <Plus size={isMobile ? 16 : 18} strokeWidth={3} /> New Entry
            </button>
          </div>
          
          <div style={{ position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} size={18} />
            <input 
              type="text" 
              placeholder="Search entries..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '100px',
                border: '1px solid #edeeed', backgroundColor: '#FFFFFF', outline: 'none',
                fontSize: '0.9rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
              }}
            />
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '0 1.25rem 2rem 1.25rem' : '0 2rem 2rem 2rem' }}>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#9CA3AF' }}>
              <Loader2 size={32} className="spinner" style={{ marginBottom: '1rem', color: '#2d6465' }} />
              <p style={{ fontSize: '0.9rem', fontWeight: '700' }}>Gathering thoughts...</p>
            </div>
          ) : filteredEntries.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#9CA3AF' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '700' }}>No entries found</p>
            </div>
          ) : (
            filteredEntries.map(entry => (
              <JournalEntryCard 
                key={entry.id}
                entry={entry}
                isSelected={selectedId === entry.id}
                onClick={() => { setSelectedId(entry.id); setIsEditing(false); if (isMobile) setMobileView('content'); }}
              />
            ))
          )}
        </div>
      </div>

      {/* Main Area: Detailed View / Editor */}
      <div style={{ 
        flex: 1, 
        backgroundColor: '#FFFFFF',
        display: isMobile && mobileView !== 'content' ? 'none' : 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        
        {/* Mobile Header for Content View */}
        {isMobile && (
          <div style={{ 
            padding: '1rem 1.25rem', borderBottom: '1px solid #edeeed', 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between' 
          }}>
            <button 
              onClick={() => { setMobileView('list'); setIsEditing(false); }}
              style={{ 
                backgroundColor: '#f3f4f3', border: 'none', borderRadius: '12px',
                width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={24} color="#111827" strokeWidth={2.5} />
            </button>
            {isEditing && (
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={() => setIsEditing(false)} style={{ fontSize: '0.9rem', fontWeight: '700', color: '#6B7280', background: 'none', border: 'none' }}>Cancel</button>
                <button onClick={handleSave} style={{ fontSize: '0.9rem', fontWeight: '800', color: '#2d6465', background: 'none', border: 'none' }}>Save</button>
              </div>
            )}
          </div>
        )}

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: isMobile ? '1.5rem' : '3rem', overflowY: 'auto' }}>
          
          {!selectedId && !isEditing ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
               <div style={{ 
                width: '100px', height: '100px', backgroundColor: '#f3f4f3', 
                borderRadius: '50%', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', marginBottom: '2rem'
              }}>
                <BookOpen size={40} color="#2d6465" />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#111827', marginBottom: '0.75rem' }}>Write your story</h2>
              <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '300px', lineHeight: 1.6, marginBottom: '2rem' }}>
                Every word you write is a step towards understanding yourself better.
              </p>
              <button 
                onClick={startNewEntry}
                style={{ 
                  padding: '0.75rem 2rem', borderRadius: '100px',
                  backgroundColor: '#2d6465', color: '#FFFFFF', border: 'none',
                  fontSize: '1rem', fontWeight: '800', cursor: 'pointer'
                }}
              >
                Add Entry
              </button>
            </div>
          ) : isEditing ? (
            <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: '800', color: '#9CA3AF', marginBottom: '0.5rem' }}>
                  {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()}
                </p>
                <input 
                  type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Title of your reflection..."
                  style={{ width: '100%', fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: '900', border: 'none', outline: 'none', color: '#111827', padding: 0 }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.65rem', fontWeight: '800', color: '#2d6465', marginBottom: '1rem', letterSpacing: '0.05em' }}>HOW ARE YOU FEELING?</p>
                <div style={{ display: 'flex', gap: isMobile ? '0.75rem' : '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                  {Object.entries(MOOD_DATA).map(([id, data]) => (
                    <button key={id} onClick={() => setEditMood(id)} style={{ 
                      flexShrink: 0,
                      width: isMobile ? '56px' : '64px', height: isMobile ? '56px' : '64px', 
                      borderRadius: '16px',
                      backgroundColor: editMood === id ? data.color : '#f3f4f3', 
                      border: `2px solid ${editMood === id ? '#2d6465' : 'transparent'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                      cursor: 'pointer', transition: 'all 0.2s'
                    }}>
                      {data.icon}
                    </button>
                  ))}
                </div>
              </div>

              <textarea 
                value={editContent} onChange={(e) => setEditContent(e.target.value)}
                placeholder="What's on your mind? This is a safe space..."
                style={{ 
                  width: '100%', border: 'none', outline: 'none', 
                  fontSize: '1.1rem', lineHeight: 1.8, color: '#404848', 
                  resize: 'none', minHeight: '300px' 
                }}
              />
              
              {!isMobile && (
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                  <button onClick={() => setIsEditing(false)} style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', border: '1px solid #edeeed', backgroundColor: '#FFFFFF', fontWeight: '800', cursor: 'pointer' }}>Cancel</button>
                  <button onClick={handleSave} style={{ padding: '0.75rem 2rem', borderRadius: '12px', border: 'none', backgroundColor: '#2d6465', color: '#FFFFFF', fontWeight: '800', cursor: 'pointer' }}>Save Entry</button>
                </div>
              )}
            </div>
          ) : selectedEntry && (
            <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#9CA3AF' }}>
                  <Calendar size={16} /> <span style={{ fontWeight: '800', fontSize: '0.8rem' }}>{new Date(selectedEntry.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => handleEdit(selectedEntry)} style={{ padding: '0.6rem', borderRadius: '10px', border: '1px solid #edeeed', backgroundColor: '#FFFFFF', cursor: 'pointer', color: '#2d6465' }}><Edit2 size={18} /></button>
                  <button onClick={() => handleDelete(selectedEntry.id)} style={{ padding: '0.6rem', borderRadius: '10px', border: '1px solid #ffdad6', backgroundColor: '#ffdad6', cursor: 'pointer', color: '#ba1a1a' }}><Trash2 size={18} /></button>
                </div>
              </div>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '100px', backgroundColor: MOOD_DATA[selectedEntry.mood]?.color || '#f3f4f3', border: '1px solid #edeeed', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.25rem' }}>{MOOD_DATA[selectedEntry.mood]?.icon}</span>
                <span style={{ fontWeight: '800', color: '#2d6465', fontSize: '0.8rem' }}>{selectedEntry.mood}</span>
              </div>

              <h1 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: '900', color: '#111827', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>{selectedEntry.title}</h1>
              <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#404848', whiteSpace: 'pre-wrap' }}>{selectedEntry.content}</div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Journal;
