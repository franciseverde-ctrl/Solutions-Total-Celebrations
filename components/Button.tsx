import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'gold';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-burgundy text-white hover:bg-elegant-black border border-transparent",
    outline: "bg-transparent border border-burgundy text-burgundy hover:bg-burgundy hover:text-white",
    white: "bg-white text-burgundy hover:bg-gold hover:text-white border border-white hover:border-gold",
    gold: "bg-gold text-white hover:bg-white hover:text-gold border border-gold"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;