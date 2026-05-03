import React from 'react';

const Badge = ({ children, color = 'teal', className = '' }) => {
  return (
    <span className={`badge badge-${color} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Badge;
