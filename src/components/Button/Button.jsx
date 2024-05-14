import css from './Button.module.css'; 

const Button = ({ text, onClick, className, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      className={`${css['button']} ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
