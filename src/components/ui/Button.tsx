import React from 'react';
import { apgSystem } from '@ds/apg-system';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'white' | 'white-outline';
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
  const baseClasses = `${apgSystem.button.base} min-w-0 truncate`;

  const variantClasses = {
    primary: apgSystem.button.primary,
    secondary: apgSystem.button.secondary,
    outline: apgSystem.button.outline,
    white: apgSystem.button.white,
    'white-outline': apgSystem.button.whiteOutline,
    link:
      'bg-transparent text-[#095aa9] hover:text-[#084c8e] underline underline-offset-4 decoration-[#095aa9] hover:decoration-[#084c8e] focus:ring-[#095aa9] active:scale-100',
  };

  const sizeClasses = {
    sm: apgSystem.button.size.sm,
    md: apgSystem.button.size.md,
    lg: apgSystem.button.size.lg,
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
