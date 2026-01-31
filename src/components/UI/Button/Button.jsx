import React from 'react';
import './Button.css';

// El prop onClick debe entrar aquí...
const Button = ({ children, onClick, variant = 'primary', className = '', icon, isLoading }) => {
  return (
    <button 
      className={`btn btn--${variant} ${isLoading ? 'btn--loading' : ''} ${className}`} 
      onClick={onClick} // ...y DEBE asignarse aquí
      disabled={isLoading}
    >
      {icon && <span className={`btn__icon ${isLoading ? 'btn__icon--spin' : ''}`}>{icon}</span>}
      <span className="btn__text">{children}</span>
    </button>
  );
};

export default Button;