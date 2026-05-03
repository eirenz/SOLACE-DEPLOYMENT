import React from 'react';

const Button = ({ children, variant = 'primary', onClick, fullWidth, className = '', ...props }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const widthClass = fullWidth ? 'btn-full-width' : '';
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${widthClass} ${className}`.trim()} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
