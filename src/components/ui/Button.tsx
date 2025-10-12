import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white focus:ring-[var(--color-secondary)] shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white focus:ring-[var(--color-secondary)] shadow-lg hover:shadow-xl transform hover:scale-105',
    outline: 'border-2 border-gray-300 hover:border-[var(--color-secondary)] text-gray-700 hover:text-[var(--color-primary)] focus:ring-[var(--color-secondary)]',
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm',
    md: 'px-4 py-2.5 text-sm md:px-6 md:py-3 md:text-base',
    lg: 'px-6 py-3 text-base md:px-8 md:py-4 md:text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
