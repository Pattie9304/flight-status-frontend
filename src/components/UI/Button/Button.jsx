import './Button.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  // La clase base es 'button'
  // El modificador es 'button--primary', 'button--secondary', etc.
  const buttonClass = `button button--${variant} ${className}`;

  return (
    <button 
      type={type} 
      className={buttonClass} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;