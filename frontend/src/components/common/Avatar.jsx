import React from 'react';

const Avatar = ({ src, alt = "Avatar", initials, size = 40, className = '' }) => {
  const style = { width: size, height: size, fontSize: size * 0.4 };
  
  return (
    <div className={`avatar ${className}`.trim()} style={style}>
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
      ) : (
        <span>{initials || '?'}</span>
      )}
    </div>
  );
};

export default Avatar;
