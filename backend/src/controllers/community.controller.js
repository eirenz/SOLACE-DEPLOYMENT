const prisma = require('../config/db');

const getColors = () => ['#A5F3FC', '#FDE047', '#E5E7EB', '#81E6D9', '#FED7D7', '#D6BCFA'];
const getInitials = (name) => name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'AM';
const getColorIndex = (name) => name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % getColors().length;

/**
 * Sanitize imageUrl to prevent XSS attacks.
 * Only allows: null/empty, https:// URLs, and safe base64 image data URIs.
 */
const sanitizeImageUrl = (url) => {
  if (!url || url.trim() === '') return null;
  const trimmed = url.trim();
  // Allow HTTPS URLs
  if (/^https:\/\//i.test(trimmed)) return trimmed;
  // Allow safe base64 image data URIs
  if (/^data:image\/(png|jpeg|jpg|gif|webp|svg\+xml);base64,/i.test(trimmed)) return trimmed;
  // Block everything else (javascript:, data:text/html, etc.)
  return null;
};

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await prisma.communityPost.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: { alias: true, fullName: true }
        },
        _count: {
          select: { likes: true }
        },
        likes: {
          where: { userId: req.user.id },
          select: { id: true }
        },
        replies: {
          orderBy: { createdAt: 'asc' },
          include: {
            author: { select: { alias: true, fullName: true } }
          }
        }
      }
    });
    
    const formattedPosts = posts.map(post => {
      const authorName = post.isAnonymous 
        ? 'Anonymous Member' 
        : (post.author?.alias || post.author?.fullName || 'Member');
      
      const initials = getInitials(authorName);
      const colors = getColors();
      const colorIndex = getColorIndex(authorName);
      
      let timeStr = 'JUST NOW';
      const diffHrs = Math.floor((new Date() - new Date(post.createdAt)) / (1000 * 60 * 60));
      if (diffHrs > 24) timeStr = `${Math.floor(diffHrs / 24)} DAYS AGO`;
      else if (diffHrs > 0) timeStr = `${diffHrs} HOURS AGO`;
      else {
        const diffMins = Math.floor((new Date() - new Date(post.createdAt)) / (1000 * 60));
        if (diffMins > 0) timeStr = `${diffMins} MINS AGO`;
      }
      
      const formattedReplies = post.replies.map(reply => {
        const rName = reply.author?.alias || 'Anonymous Member';
        return {
          id: reply.id,
          postId: reply.postId,
          author: rName,
          initials: getInitials(rName),
          avatarColor: colors[getColorIndex(rName)],
          content: reply.content,
          createdAt: reply.createdAt
        };
      });
      
      return {
        id: post.id,
        author: authorName,
        initials,
        avatarColor: colors[colorIndex],
        time: timeStr,
        createdAt: post.createdAt,
        tag: post.tags[0] || 'PERSONAL',
        title: post.title,
        content: post.content,
        imageUrl: post.imageUrl,
        emoji: post.emoji,
        isAnonymous: post.isAnonymous,
        likes: post._count.likes,
        replies: formattedReplies,
        likedByMe: post.likes && post.likes.length > 0,
        isMyPost: post.authorId === req.user.id
      };
    });

    res.json(formattedPosts);
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, content, tag, imageUrl, emoji, isAnonymous } = req.body;
    const authorId = req.user.id; 

    // isAnonymous can be passed as boolean, default true
    const anonFlag = isAnonymous !== undefined ? Boolean(isAnonymous) : true;

    // Sanitize imageUrl to prevent XSS (H2 fix)
    const safeImageUrl = sanitizeImageUrl(imageUrl);

    const newPost = await prisma.communityPost.create({
      data: {
        title,
        content,
        tags: [tag || 'PERSONAL'],
        imageUrl: safeImageUrl,
        emoji: emoji || null,
        isAnonymous: anonFlag,
        authorId
      },
      include: {
        author: { select: { alias: true, fullName: true } }
      }
    });

    const authorName = anonFlag 
      ? 'Anonymous Member' 
      : (newPost.author?.alias || newPost.author?.fullName || 'Member');
      
    const initials = getInitials(authorName);
    const colors = getColors();
    const colorIndex = getColorIndex(authorName);
    
    const formattedPost = {
      id: newPost.id,
      author: authorName,
      initials,
      avatarColor: colors[colorIndex],
      time: 'JUST NOW',
      createdAt: newPost.createdAt,
      tag: newPost.tags[0] || 'PERSONAL',
      title: newPost.title,
      content: newPost.content,
      imageUrl: newPost.imageUrl,
      emoji: newPost.emoji,
      isAnonymous: newPost.isAnonymous,
      likes: 0,
      replies: [],
      likedByMe: false
    };

    const io = req.app.get('io');
    if (io) io.emit('new_post', formattedPost);

    res.status(201).json({ ...formattedPost, isMyPost: true });
  } catch (error) {
    next(error);
  }
};

exports.createReply = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const authorId = req.user.id;

    const newReply = await prisma.postReply.create({
      data: {
        postId: id,
        content,
        authorId
      },
      include: {
        author: { select: { alias: true, fullName: true } }
      }
    });

    const rName = newReply.author?.alias || 'Anonymous Member';
    const formattedReply = {
      id: newReply.id,
      postId: newReply.postId,
      author: rName,
      initials: getInitials(rName),
      avatarColor: getColors()[getColorIndex(rName)],
      content: newReply.content,
      createdAt: newReply.createdAt
    };

    const io = req.app.get('io');
    if (io) io.emit('new_reply', formattedReply);

    res.status(201).json(formattedReply);
  } catch (error) {
    next(error);
  }
};

exports.reportPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const authorId = req.user.id;

    await prisma.postReport.create({
      data: {
        postId: id,
        reporterId: authorId,
        reason: req.body.reason || 'Reported by user from Safe Space'
      }
    });

    res.status(200).json({ message: 'Post reported successfully' });
  } catch (error) {
    next(error);
  }
};

exports.toggleLike = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const existingLike = await prisma.postLike.findFirst({
      where: { postId: id, userId }
    });

    if (existingLike) {
      await prisma.postLike.delete({ where: { id: existingLike.id } });
    } else {
      await prisma.postLike.create({
        data: { postId: id, userId }
      });
    }

    const likesCount = await prisma.postLike.count({ where: { postId: id } });

    const io = req.app.get('io');
    if (io) {
      io.emit('post_likes_updated', { postId: id, likes: likesCount });
    }

    res.json({ likes: likesCount, likedByMe: !existingLike });
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Check if the post exists and belongs to the user
    const post = await prisma.communityPost.findUnique({
      where: { id }
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.authorId !== userId && req.user.role !== 'ADMIN') {
      return res.status(403).json({ message: 'You are not authorized to delete this post' });
    }

    await prisma.communityPost.delete({
      where: { id }
    });

    const io = req.app.get('io');
    if (io) {
      io.emit('post_deleted', id);
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
};


