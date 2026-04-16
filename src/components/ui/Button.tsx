import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
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
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black transform hover:scale-[1.02] active:scale-[0.99]';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white focus:ring-[var(--color-secondary)] shadow-lg shadow-black/30 hover:shadow-black/50 hover:brightness-110 transform hover:scale-[1.02]',
    secondary:
      'bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white focus:ring-[var(--color-secondary)] shadow-lg shadow-black/30 hover:shadow-black/50 transform hover:scale-[1.02]',
    outline:
      'border border-[var(--color-border-strong)] bg-white/0 hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-secondary)] focus:ring-[var(--color-secondary)]',
    link:
      'bg-transparent text-[var(--color-primary)] hover:text-[var(--color-secondary)] underline underline-offset-4 decoration-[var(--color-primary)] hover:decoration-[var(--color-secondary)] focus:ring-[var(--color-secondary)]',
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
