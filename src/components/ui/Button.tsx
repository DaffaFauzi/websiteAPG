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
    'inline-flex min-h-12 min-w-0 items-center justify-center font-extrabold leading-none rounded-full truncate transition-[transform,background-color,border-color,box-shadow,color] duration-200 apg-ease focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white';

  const variantClasses = {
    primary:
      'bg-[#0A66C2] text-white focus:ring-[#0A66C2] shadow-[0_0.75rem_1.75rem_rgba(10,102,194,0.18)] hover:bg-[#0959A9] hover:shadow-[0_1rem_2.25rem_rgba(10,102,194,0.22)] hover:-translate-y-[1px] active:translate-y-0',
    secondary:
      'bg-[#0B7BE6] text-white focus:ring-[#0B7BE6] shadow-[0_0.75rem_1.75rem_rgba(11,123,230,0.16)] hover:bg-[#0A66C2] hover:shadow-[0_1rem_2.25rem_rgba(11,123,230,0.20)] hover:-translate-y-[1px] active:translate-y-0',
    outline:
      'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus:ring-[#0A66C2] hover:-translate-y-[1px] active:translate-y-0',
    link:
      'bg-transparent text-[#0A66C2] hover:text-[#0959A9] underline underline-offset-4 decoration-[#0A66C2] hover:decoration-[#0959A9] focus:ring-[#0A66C2]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs md:text-sm',
    md: 'px-6 py-2 text-sm md:text-base',
    lg: 'min-h-14 px-8 py-4 text-base md:text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
