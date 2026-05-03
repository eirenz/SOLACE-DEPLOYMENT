import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, error, className = '', id, ...props }, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`input-wrapper ${className}`.trim()}>
      {label && <label htmlFor={inputId} className="input-label">{label}</label>}
      <input 
        id={inputId}
        ref={ref}
        className={`input-field ${error ? 'input-error' : ''}`}
        {...props}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
