import React from 'react';

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
  const baseClasses =
    'inline-flex min-h-12 min-w-0 items-center justify-center font-bold leading-none rounded-full truncate transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white active:scale-[0.98]';

  const variantClasses = {
    primary:
      'bg-[#0A66C2] text-white focus:ring-[#0A66C2] shadow-md shadow-[#0A66C2]/20 hover:bg-[#0959A9] hover:shadow-lg hover:shadow-[#0A66C2]/30 hover:-translate-y-[2px] active:translate-y-0',
    secondary:
      'bg-[#0B7BE6] text-white focus:ring-[#0B7BE6] shadow-md shadow-[#0B7BE6]/20 hover:bg-[#0A66C2] hover:shadow-lg hover:shadow-[#0B7BE6]/30 hover:-translate-y-[2px] active:translate-y-0',
    outline:
      'border-2 border-[#0A66C2] bg-transparent text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white focus:ring-[#0A66C2] hover:-translate-y-[2px] active:translate-y-0 shadow-sm',
    white:
      'bg-white text-[#0A66C2] focus:ring-white shadow-md shadow-black/5 hover:bg-slate-50 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-[2px] active:translate-y-0',
    'white-outline':
      'border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-[#0A66C2] hover:border-white focus:ring-white hover:-translate-y-[2px] active:translate-y-0 shadow-sm',
    link:
      'bg-transparent text-[#0A66C2] hover:text-[#0959A9] underline underline-offset-4 decoration-[#0A66C2] hover:decoration-[#0959A9] focus:ring-[#0A66C2] active:scale-100',
  };

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs sm:text-sm',
    md: 'px-7 py-3 text-sm sm:text-base',
    lg: 'min-h-[3.5rem] px-8 py-4 text-base sm:text-lg',
  };

  // Basic concatenation. If `className` contains colors, it might clash depending on tailwind order.
  // Best practice is to use the correct `variant` and only pass structural overrides via `className`.
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
