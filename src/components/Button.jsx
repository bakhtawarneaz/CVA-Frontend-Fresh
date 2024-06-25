import React from 'react';

const Button = ({ text, onClick, type = 'button', disabled = false, className = '', ...props }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`primary-btn ${className}`}
        {...props}
      >
        {text}
      </button>
    );
  };
  
  export default Button;