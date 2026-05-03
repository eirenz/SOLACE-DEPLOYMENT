import React, { useState, useMemo, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import apiClient from '../../../api/apiClient';
import { 
  Heart, MessageCircle, Share2, Image as ImageIcon, Smile,
  Search, Shield, CheckCircle2, TrendingUp, User, MoreHorizontal,
  Clock, X, Send, AlertTriangle, EyeOff, Trash2
} from 'lucide-react';

const DARK_TEAL = '#064E3B';
const LIGHT_TEAL = '#A5F3FC';

const TAGS = ['Work', 'Friends', 'Stress', 'Sleep', 'Study', 'Personal'];
const EMOJIS = ['😊', '😔', '😢', '😤', '😴', '🤯', '🤔', '❤️'];

const SafeSpace = () => {
  const [activeTab, setActiveTab] = useState('Recent');
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Post Creation State
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostTags, setNewPostTags] = useState([]);
  const [newPostImage, setNewPostImage] = useState(null);
  const [newPostEmoji, setNewPostEmoji] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Feed Actions State
  const [hiddenPosts, setHiddenPosts] = useState(new Set());
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [openMenuId, setOpenMenuId] = useState(null);

  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportPostId, setReportPostId] = useState(null);
  const [reportReason, setReportReason] = useState('');

  // Delete Modal State
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  // Responsive State
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);

    const fetchPosts = async () => {
      try {
        const res = await apiClient.get('/community');
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();

    const socket = io(import.meta.env.VITE_API_URL || 'http://localhost:5000');
    
    socket.on('new_post', (post) => {
      setPosts((prev) => {
        if (!prev.find(p => p.id === post.id)) {
          return [post, ...prev];
        }
        return prev;
      });
    });

    socket.on('new_reply', (reply) => {
      setPosts((prev) => prev.map(p => {
        if (p.id === reply.postId) {
          return { ...p, replies: [...p.replies, reply] };
        }
        return p;
      }));
    });

    socket.on('post_likes_updated', ({ postId, likes }) => {
      setPosts((prev) => prev.map(p => p.id === postId ? { ...p, likes } : p));
    });

    socket.on('post_deleted', (postId) => {
      setPosts((prev) => prev.filter(p => p.id !== postId));
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      socket.disconnect();
    };
  }, []);

  const sortedAndFilteredPosts = useMemo(() => {
    let result = posts.filter(post => {
      if (hiddenPosts.has(post.id)) return false;
      if (activeTab === 'My Post' && !post.isMyPost) return false;
      const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.content?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === 'All' || post.tag?.toUpperCase() === selectedTag.toUpperCase();
      return matchesSearch && matchesTag;
    });

    if (activeTab === 'Popular') {
      result.sort((a, b) => b.likes - a.likes || new Date(b.createdAt) - new Date(a.createdAt));
    } else {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [posts, searchQuery, selectedTag, hiddenPosts, activeTab]);

  const toggleLike = async (id) => {
    // Optimistic update
    setPosts(posts.map(p => p.id === id ? { 
      ...p, 
      likes: p.likedByMe ? p.likes - 1 : p.likes + 1,
      likedByMe: !p.likedByMe 
    } : p));

    try {
      await apiClient.post(`/community/${id}/like`);
    } catch (error) {
      console.error('Failed to toggle like:', error);
      // Fallback update could go here
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreatePost = async () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) return;
    
    const postTag = newPostTags.length > 0 ? newPostTags[0] : 'PERSONAL';

    const postData = {
      title: newPostTitle.trim(),
      content: newPostContent.trim(),
      tag: postTag,
      imageUrl: newPostImage,
      emoji: newPostEmoji,
      isAnonymous
    };

    try {
      const res = await apiClient.post('/community', postData);
      const newSavedPost = res.data;
      
      setPosts(prev => {
        if (!prev.find(p => p.id === newSavedPost.id)) {
          return [newSavedPost, ...prev];
        }
        return prev.map(p => p.id === newSavedPost.id ? { ...p, isMyPost: true } : p);
      });
      
      setNewPostTitle('');
      setNewPostContent('');
      setNewPostTags([]);
      setNewPostImage(null);
      setNewPostEmoji(null);
      setIsAnonymous(true);
      setShowEmojiPicker(false);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const openReportModal = (postId) => {
    setReportPostId(postId);
    setReportModalOpen(true);
    setOpenMenuId(null);
  };

  const handleReportSubmit = async () => {
    if (!reportReason) return;
    try {
      await apiClient.post(`/community/${reportPostId}/report`, { reason: reportReason });
      setHiddenPosts(new Set(hiddenPosts).add(reportPostId));
      setReportModalOpen(false);
      setReportReason('');
      setReportPostId(null);
    } catch (error) {
      console.error('Failed to submit report', error);
    }
  };

  const handleHide = (postId) => {
    setHiddenPosts(new Set(hiddenPosts).add(postId));
    setOpenMenuId(null);
  };

  const openDeleteModal = (postId) => {
    setPostToDelete(postId);
    setDeleteModalOpen(true);
    setOpenMenuId(null);
  };

  const confirmDeletePost = async () => {
    if (!postToDelete) return;
    try {
      await apiClient.delete(`/community/${postToDelete}`);
      setPosts(prev => prev.filter(p => p.id !== postToDelete));
      setDeleteModalOpen(false);
      setPostToDelete(null);
    } catch (error) {
      console.error('Failed to delete post', error);
      alert('Failed to delete post');
    }
  };

  const submitReply = async (postId) => {
    if (!replyContent.trim()) return;
    try {
      await apiClient.post(`/community/${postId}/reply`, { content: replyContent });
      setReplyContent('');
    } catch (error) {
      console.error('Failed to reply', error);
    }
  };

  return (
    <div className={isMobile ? 'm-community-container' : ''} style={{ 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      height: isMobile ? 'auto' : 'calc(100vh - 82px)', // Fills the remaining viewport exactly
      backgroundColor: '#F9FAFB', 
      fontFamily: "'Inter', sans-serif",
      overflow: isMobile ? 'visible' : 'hidden' // Prevents the whole page from scrolling
    }}>
      
      {/* Left Sidebar */}
      <div style={{ 
        width: isMobile ? '100%' : '320px', 
        padding: isMobile ? '0' : '2.5rem',
        flexShrink: 0,
        height: isMobile ? 'auto' : '100%',
        overflowY: isMobile ? 'visible' : 'auto', 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ 
          display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '2rem'
        }}>
        {/* Explore Card */}
        <div style={{ backgroundColor: '#F3F4F6', borderRadius: '24px', padding: '1.5rem 1.25rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#111827', margin: '0 0 1rem 0.75rem' }}>Explore</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Recent', 'Popular', 'My Post'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', 
                  borderRadius: '16px', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem',
                  backgroundColor: activeTab === tab ? '#FFFFFF' : 'transparent',
                  color: activeTab === tab ? DARK_TEAL : '#4B5563',
                  boxShadow: activeTab === tab ? '0 2px 10px rgba(0,0,0,0.02)' : 'none'
                }}
              >
                {tab === 'Recent' && <Clock size={18} />}
                {tab === 'Popular' && <TrendingUp size={18} />}
                {tab === 'My Post' && <User size={18} />}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Rules Card */}
        <div className={isMobile ? 'm-primary-bg' : ''} style={{ backgroundColor: DARK_TEAL, background: DARK_TEAL, borderRadius: '24px', padding: isMobile ? '1.5rem' : '2rem 1.5rem', color: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <Shield size={24} color="#A5F3FC" />
            <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>Rules</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', lineHeight: 1.5, opacity: 0.9 }}>
            <p style={{ margin: 0 }}>• Be kind and supportive to everyone.</p>
            <p style={{ margin: 0 }}>• Anonymity is encouraged but optional.</p>
            <p style={{ margin: 0 }}>• No medical advice; share experiences only.</p>
            <p style={{ margin: 0 }}>• Report harmful or triggering content.</p>
          </div>
        </div>
      </div>
    </div>

      {/* Center Feed */}
      <div style={{ 
        flex: 1, 
        padding: isMobile ? '1.25rem' : '2.5rem 4rem 2.5rem 1rem', 
        maxWidth: isMobile ? '100%' : '900px', 
        height: '100%', 
        overflowY: isMobile ? 'visible' : 'auto', // Independent scroll for the feed
        scrollbarWidth: 'none' // Hidden for premium look
      }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#111827', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>Safe Space Forum</h1>
          <p style={{ color: '#6B7280', fontSize: '1.05rem', margin: 0, fontWeight: '500' }}>Share your thoughts openly or anonymously in our community sanctuary.</p>
        </div>

        {/* Filter Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1.5rem', scrollbarWidth: 'none' }}>
          {['All', ...TAGS].map(tag => (
            <button 
              key={`filter-${tag}`}
              onClick={() => setSelectedTag(tag)}
              style={{
                padding: '0.6rem 1.25rem', borderRadius: '100px', whiteSpace: 'nowrap',
                backgroundColor: selectedTag === tag ? DARK_TEAL : '#E5E7EB',
                color: selectedTag === tag ? '#FFFFFF' : '#4B5563',
                fontWeight: '700', fontSize: '0.9rem', border: 'none', cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Create Post Input */}
        <div style={{ 
          backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '1.5rem', 
          marginBottom: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          border: '1px solid #F3F4F6', position: 'relative'
        }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ 
            width: isMobile ? '40px' : '48px', height: isMobile ? '40px' : '48px', borderRadius: '50%', backgroundColor: '#E5E7EB',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
          }}>
              {newPostEmoji ? <span style={{ fontSize: '1.5rem' }}>{newPostEmoji}</span> : <User size={24} color="#9CA3AF" />}
            </div>
            
            <div style={{ flex: 1, position: 'relative' }}>
              <div style={{ 
                backgroundColor: '#F9FAFB', borderRadius: '20px', padding: '1rem', border: '1px solid #E5E7EB'
              }}>
                <input 
                  type="text"
                  placeholder="Post Title"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  style={{ 
                    width: '100%', border: 'none', outline: 'none', 
                    backgroundColor: 'transparent', paddingBottom: '0.75rem',
                    fontSize: '1.1rem', fontWeight: '700', fontFamily: "'Inter', sans-serif",
                    color: '#111827', borderBottom: '1px solid #E5E7EB', marginBottom: '0.75rem'
                  }}
                />
                <textarea 
                  placeholder="What's on your mind?"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  style={{ 
                    width: '100%', minHeight: '60px', border: 'none', outline: 'none', 
                    backgroundColor: 'transparent', padding: 0,
                    fontSize: '1rem', resize: 'none', fontFamily: "'Inter', sans-serif"
                  }}
                />
              </div>
              
              {newPostImage && (
                <div style={{ position: 'relative', marginTop: '1rem', display: 'inline-block' }}>
                  <img src={newPostImage} alt="Attachment" style={{ maxHeight: '150px', borderRadius: '12px' }} />
                  <button onClick={() => setNewPostImage(null)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', padding: '4px', cursor: 'pointer' }}>
                    <X size={14} />
                  </button>
                </div>
              )}

              {showEmojiPicker && (
                <div style={{ position: 'absolute', zIndex: 10, backgroundColor: '#FFF', padding: '0.5rem', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', top: '100%', marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  {EMOJIS.map(e => (
                    <button key={e} onClick={() => { setNewPostEmoji(e); setShowEmojiPicker(false); }} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>{e}</button>
                  ))}
                  <button onClick={() => setNewPostEmoji(null)} style={{ background: '#F3F4F6', border: 'none', fontSize: '0.8rem', borderRadius: '8px', cursor: 'pointer', padding: '0 0.5rem' }}>Clear</button>
                </div>
              )}

              {/* Tag selector for draft post */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                {TAGS.map(tag => (
                  <button 
                    key={`draft-${tag}`}
                    onClick={() => newPostTags.includes(tag) ? setNewPostTags(newPostTags.filter(t => t !== tag)) : setNewPostTags([tag])} // Single tag for now, or array
                    style={{
                      padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '700', border: 'none', cursor: 'pointer',
                      backgroundColor: newPostTags.includes(tag) ? LIGHT_TEAL : '#F3F4F6',
                      color: newPostTags.includes(tag) ? DARK_TEAL : '#6B7280'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', color: '#6B7280', alignItems: 'center' }}>
                  <ImageIcon size={20} style={{ cursor: 'pointer' }} onClick={() => fileInputRef.current?.click()} />
                  <input type="file" ref={fileInputRef} hidden accept="image/*" onChange={handleImageUpload} />
                  
                  <Smile size={20} style={{ cursor: 'pointer' }} onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
                  
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer', userSelect: 'none', fontWeight: '600' }}>
                    <input 
                      type="checkbox" 
                      checked={isAnonymous} 
                      onChange={(e) => setIsAnonymous(e.target.checked)} 
                      style={{ width: '16px', height: '16px', accentColor: DARK_TEAL }}
                    />
                    Post Anonymously
                  </label>
                </div>

                <button 
                  onClick={handleCreatePost}
                  disabled={!newPostTitle.trim() || !newPostContent.trim()}
                  style={{
                    backgroundColor: DARK_TEAL, color: '#FFFFFF', padding: '0.7rem 1.5rem',
                    borderRadius: '100px', fontWeight: '700', border: 'none', cursor: (newPostTitle.trim() && newPostContent.trim()) ? 'pointer' : 'default',
                    opacity: (newPostTitle.trim() && newPostContent.trim()) ? 1 : 0.5
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {sortedAndFilteredPosts.map(post => (
            <div key={post.id} style={{ 
              backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '2rem', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #F3F4F6',
              position: 'relative'
            }}>
              
              {/* Three Dots Menu */}
              <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
                <button onClick={() => setOpenMenuId(openMenuId === post.id ? null : post.id)} style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', padding: '0.5rem' }}>
                  <MoreHorizontal size={24} />
                </button>
                {openMenuId === post.id && (
                  <div style={{ position: 'absolute', right: 0, top: '2.5rem', backgroundColor: '#FFF', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '0.5rem', width: '160px', zIndex: 10 }}>
                    {post.isMyPost && (
                      <button onClick={() => openDeleteModal(post.id)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', padding: '0.75rem', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '0.9rem', color: '#EF4444', borderRadius: '8px' }}>
                        <Trash2 size={16} /> Delete Post
                      </button>
                    )}
                    <button onClick={() => handleHide(post.id)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', padding: '0.75rem', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '0.9rem', color: '#4B5563', borderRadius: '8px', marginTop: post.isMyPost ? '0.25rem' : '0' }}>
                      <EyeOff size={16} /> Hide Post
                    </button>
                    <button onClick={() => openReportModal(post.id)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', padding: '0.75rem', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '0.9rem', color: '#F59E0B', borderRadius: '8px', marginTop: '0.25rem' }}>
                      <AlertTriangle size={16} /> Report
                    </button>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '50%', backgroundColor: post.avatarColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: DARK_TEAL
                }}>
                  {post.emoji ? <span style={{ fontSize: '1.5rem' }}>{post.emoji}</span> : post.initials}
                </div>
                <div>
                  <h4 style={{ fontWeight: '800', margin: '0 0 0.2rem 0', color: '#111827', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {post.author} 
                    {!post.isAnonymous && <span style={{ fontSize: '0.7rem', backgroundColor: '#E0E7FF', color: '#4338CA', padding: '2px 6px', borderRadius: '100px' }}>VERIFIED</span>}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: '700', letterSpacing: '0.05em' }}>
                    {post.time} &bull; {post.tag}
                  </span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#111827', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#4B5563', margin: post.imageUrl ? '0 0 1.5rem 0' : '0 0 2rem 0', whiteSpace: 'pre-wrap' }}>{post.content}</p>
              
              {post.imageUrl && (
                <div style={{ marginBottom: '2rem' }}>
                  <img src={post.imageUrl} alt="Post attachment" style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '16px' }} />
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderTop: '1px solid #F3F4F6', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <button 
                    onClick={() => toggleLike(post.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: post.likedByMe ? DARK_TEAL : '#6B7280', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '700', fontSize: '0.95rem' }}
                  >
                    <Heart size={20} fill={post.likedByMe ? DARK_TEAL : 'none'} color={post.likedByMe ? DARK_TEAL : '#6B7280'} /> {post.likes} Support
                  </button>
                  <button 
                    onClick={() => setExpandedPostId(expandedPostId === post.id ? null : post.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: expandedPostId === post.id ? DARK_TEAL : '#6B7280', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '700', fontSize: '0.95rem' }}
                  >
                    <MessageCircle size={20} /> {post.replies?.length || 0} Reflections
                  </button>
                </div>
              </div>

              {/* Replies Section */}
              {expandedPostId === post.id && (
                <div style={{ marginTop: '1.5rem', backgroundColor: '#F9FAFB', borderRadius: '20px', padding: '1.5rem' }}>
                  <h5 style={{ margin: '0 0 1rem 0', color: '#374151', fontSize: '0.9rem' }}>Reflections ({post.replies?.length || 0})</h5>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                    {post.replies?.map(reply => (
                      <div key={reply.id} style={{ display: 'flex', gap: '0.75rem' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: reply.avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: '800', color: DARK_TEAL, flexShrink: 0 }}>
                          {reply.initials}
                        </div>
                        <div style={{ flex: 1, backgroundColor: '#FFFFFF', padding: '0.75rem 1rem', borderRadius: '0 16px 16px 16px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', border: '1px solid #F3F4F6' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#111827', display: 'block', marginBottom: '0.25rem' }}>{reply.author}</span>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.4 }}>{reply.content}</p>
                        </div>
                      </div>
                    ))}
                    {(!post.replies || post.replies.length === 0) && (
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#9CA3AF', textAlign: 'center', padding: '1rem 0' }}>Be the first to share a reflection.</p>
                    )}
                  </div>

                  {/* Reply Input */}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <User size={16} color="#9CA3AF" />
                    </div>
                    <div style={{ flex: 1, position: 'relative' }}>
                      <textarea 
                        placeholder="Add a reflection..."
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        style={{ width: '100%', minHeight: '40px', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '20px', padding: '0.75rem 3rem 0.75rem 1rem', fontSize: '0.9rem', resize: 'none', outline: 'none', fontFamily: "'Inter', sans-serif" }}
                      />
                      <button 
                        onClick={() => submitReply(post.id)}
                        disabled={!replyContent.trim()}
                        style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: replyContent.trim() ? DARK_TEAL : '#9CA3AF', cursor: replyContent.trim() ? 'pointer' : 'default', padding: '0.5rem' }}
                      >
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

      {/* Report Modal */}
      {reportModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(17, 24, 39, 0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '2rem', width: '100%', maxWidth: '450px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 0.5rem 0', color: '#111827', fontFamily: "'Inter', sans-serif" }}>Report Post</h2>
            <p style={{ color: '#4B5563', fontSize: '0.95rem', margin: '0 0 1.5rem 0', paddingBottom: '1rem', borderBottom: '1px solid #E5E7EB', fontFamily: "'Inter', sans-serif" }}>Help us keep the community safe. Select a reason:</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                'Harassment or bullying', 
                'Hate or discrimination', 
                'Violence or threats', 
                'Self-harm concern', 
                'Harmful advice / misinformation', 
                'Privacy issue (personal info shared)', 
                'Other'
              ].map(reason => (
                <label key={reason} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontSize: '1rem', color: '#111827', fontFamily: "'Inter', sans-serif" }}>
                  <input 
                    type="radio" 
                    name="reportReason" 
                    value={reason} 
                    checked={reportReason === reason} 
                    onChange={(e) => setReportReason(e.target.value)} 
                    style={{ width: '18px', height: '18px', accentColor: '#111827', cursor: 'pointer' }}
                  />
                  <span>{reason}</span>
                </label>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                onClick={() => setReportModalOpen(false)} 
                style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: '1px solid #D1D5DB', backgroundColor: '#FFFFFF', fontWeight: '700', color: '#6B7280', fontSize: '1rem', cursor: 'pointer', transition: 'background-color 0.2s' }}
              >
                Cancel
              </button>
              <button 
                onClick={handleReportSubmit} 
                disabled={!reportReason} 
                style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: 'none', backgroundColor: '#B91C1C', fontWeight: '700', color: '#FFFFFF', fontSize: '1rem', cursor: reportReason ? 'pointer' : 'default', opacity: reportReason ? 1 : 0.5, transition: 'opacity 0.2s' }}
              >
                Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(17, 24, 39, 0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '2rem', width: '100%', maxWidth: '400px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Trash2 size={30} color="#EF4444" />
              </div>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 0.5rem 0', color: '#111827', fontFamily: "'Inter', sans-serif" }}>Delete Post?</h2>
            <p style={{ color: '#4B5563', fontSize: '1rem', margin: '0 0 2rem 0', lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>
              Are you sure you want to delete this post? This action cannot be undone.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                onClick={() => { setDeleteModalOpen(false); setPostToDelete(null); }} 
                style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: '1px solid #D1D5DB', backgroundColor: '#FFFFFF', fontWeight: '700', color: '#4B5563', fontSize: '1rem', cursor: 'pointer', transition: 'background-color 0.2s' }}
              >
                Cancel
              </button>
              <button 
                onClick={confirmDeletePost} 
                style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: 'none', backgroundColor: '#EF4444', fontWeight: '700', color: '#FFFFFF', fontSize: '1rem', cursor: 'pointer', transition: 'background-color 0.2s' }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SafeSpace;
